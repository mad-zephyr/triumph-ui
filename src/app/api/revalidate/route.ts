import { revalidateTag } from 'next/cache';

import {
  Motorcycle,
  NewsPage,
  NewsPost,
  Page,
} from '@/libs/graphql/gql/graphql';
import { RevalidateTags } from '@/types/entity';

type Base = { event: string; uid: string; createdAt: string };

type RevalidateRequest =
  | ({
      model: 'motorcycle';
      entry: Motorcycle;
    } & Base)
  | ({
      model: 'news-post';
      entry: NewsPost;
    } & Base)
  | ({
      model: 'news-page';
      entry: NewsPage;
    } & Base)
  | ({
      model: 'bike-types-page';
      entry: NewsPage;
    } & Base)
  | ({
      model: 'page';
      entry: Page;
    } & Base)
  | ({
      model: 'header';
      entry: NewsPage;
    } & Base);

const getRevalidateTag = (req: RevalidateRequest) => {
  switch (req.model) {
    case 'news-post': {
      return req.entry.url;
    }
    case 'motorcycle': {
      return req.entry.sku;
    }
    case 'page': {
      return req.entry.url;
    }
    case 'news-page': {
      return RevalidateTags.NewsPage;
    }
    case 'bike-types-page': {
      return RevalidateTags.BikeTypesPage;
    }
    case 'header': {
      return RevalidateTags.Header;
    }
    default: {
      return 'tag';
    }
  }
};

export async function POST(request: Request) {
  const requestData = (await request.json()) satisfies RevalidateRequest;

  const revTag = getRevalidateTag(requestData) as string;

  revalidateTag(revTag);

  return Response.json({ revalidated: true, now: Date.now() });

  // try {
  //   const text = await request.text();

  //   const signature = crypto
  //     .createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET || '')
  //     .update(text)
  //     .digest('hex');

  //   const trusted = Buffer.from(`sha256=${signature}`, 'ascii');
  //   const untrusted = Buffer.from(
  //     request.headers.get('x-hub-signature-256') || '',
  //     'ascii'
  //   );

  //   if (!crypto.timingSafeEqual(trusted, untrusted)) {
  //     console.log('[Next.js] Invalid signature.', {
  //       trusted: trusted.toString('hex'),
  //       untrusted: untrusted.toString('hex'),
  //     });
  //     return new Response('Invalid signature.', {
  //       status: 400,
  //     });
  //   }

  //   const payload = JSON.parse(text);
  //   const issueNumber = payload.issue?.number;

  //   console.log('[Next.js] Revalidating /');
  //   revalidatePath('/');

  //   if (issueNumber) {
  //     console.log(`[Next.js] Revalidating /${issueNumber}`);
  //     revalidatePath(`/${issueNumber}`);
  //   }
  // } catch (error: any) {
  //   return new Response(`Webhook error: ${error?.message}`, {
  //     status: 400,
  //   });
  // }

  // return new Response('Success!', {
  //   status: 200,
  // });
}
