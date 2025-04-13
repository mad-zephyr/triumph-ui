import { TitleSection } from '@/common';
import { getPagesData } from '@/libs/apollo/getData';
import { GetPreloadedNewsPostsQuery } from '@/libs/graphql';
import { NewsPostEntityResponseCollection } from '@/libs/graphql/gql/graphql';
import { getNewsPreviewCards } from '@/models';
import { uiUploadfile } from '@/models/uiUploadfile';
import { GNewsPage, GNewsPost } from '@/types/types';

import { NewsListWrapper } from './_components/newsListWrapper';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  const data = await getPagesData<{
    newsPage: GNewsPage;
    newsPosts: GNewsPost[];
    newsPosts_connection: NewsPostEntityResponseCollection;
  }>({
    query: GetPreloadedNewsPostsQuery,
    variables: { locale, start: 0, limit: 6 },
  });

  const { newsPosts, newsPosts_connection, newsPage } = data;

  const titleSection = getNewsPageTitleSection(newsPage);

  const preloadedNewsCards = getNewsPreviewCards(newsPosts);

  return (
    <main>
      {titleSection}
      <NewsListWrapper
        preloadPagination={newsPosts_connection.pageInfo}
        preloadedPosts={preloadedNewsCards}
      />
    </main>
  );
}

function getNewsPageTitleSection(page: GNewsPage) {
  if (
    page.__typename === 'NewsPage' &&
    page.banner?.__typename === 'ComponentComponentPromoBaner' &&
    page.banner.active
  ) {
    const { banner } = page;
    return (
      <TitleSection
        data={{
          title: banner.title,
          description: banner.description,
          image: uiUploadfile(banner.cover),
        }}
      />
    );
  }
}
