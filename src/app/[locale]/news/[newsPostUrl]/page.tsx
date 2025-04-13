import { getPagesData } from '@/libs/apollo/getData';
import { getNewsPage } from '@/libs/graphql';
import { getPageModel } from '@/models';
import { GNewsPost } from '@/types/types';

type THomePage = {
  params: Promise<{
    locale: string;
    newsPostUrl: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale, newsPostUrl } = await params;

  const {
    newsPosts: [newsPost],
  } = await getPagesData<{ newsPosts: GNewsPost[] }>({
    query: getNewsPage,
    variables: { locale, url: newsPostUrl },
  });

  const { sections } = getPageModel(newsPost);

  return <main>{sections}</main>;
}
