import { notFound } from 'next/navigation';

import { BigPromoSection, NewsListSection } from '@/common';
import { getClient } from '@/libs/apollo/apolloClient';
import { GetPage } from '@/libs/graphql/page.query';
import { getPageModel } from '@/models';
import { GPage } from '@/types/types';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  let data: Record<'pages', GPage[]> = {
    pages: [],
  };

  try {
    const response = await getClient().query<{ pages: GPage[] }>({
      query: GetPage,
      variables: { locale },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    });

    data = response.data;
  } catch (e: unknown) {
    if (typeof e === 'undefined') {
    }

    notFound();
  }

  const { sections } = getPageModel(data.pages[0]);

  return (
    <main>
      {sections}
      <BigPromoSection />
      <NewsListSection />
    </main>
  );
}
