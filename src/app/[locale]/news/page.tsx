import { Metadata } from 'next';

import { TitleSection } from '@/common';
import { fetchRawMetadata } from '@/libs/apollo/fetchRawMetadata';
import { getPagesData } from '@/libs/apollo/getData';
import { getNewsPageSeo, GetPreloadedNewsPostsQuery } from '@/libs/graphql';
import { NewsPostEntityResponseCollection } from '@/libs/graphql/gql/graphql';
import {
  generateSeo,
  getNewsPreviewCards,
  getTTagFromTitleTagEnum,
} from '@/models';
import { uiUploadfile } from '@/models/uiUploadfile';
import { GNewsPage, GNewsPost } from '@/types/types';

import { NewsListWrapper } from './_components/newsListWrapper';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: THomePage): Promise<Metadata> {
  const { locale } = await params;
  const response = await fetchRawMetadata<{ data: { newsPage: GNewsPage } }>({
    query: getNewsPageSeo,
    variables: { locale },
  });

  if (response?.data?.newsPage) {
    const page = response.data.newsPage;
    return await generateSeo(page?.seo);
  }

  return await generateSeo();
}

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
          titleHtmlTag: getTTagFromTitleTagEnum(),
        }}
      />
    );
  }
}
