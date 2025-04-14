import { Metadata } from 'next';

import { fetchRawMetadata } from '@/libs/apollo/fetchRawMetadata';
import { getPagesData } from '@/libs/apollo/getData';
import { getNewsPage, getNewsPostSeo } from '@/libs/graphql';
import { generateSeo, getPageModel } from '@/models';
import { GNewsPost } from '@/types/types';

type THomePage = {
  params: Promise<{
    locale: string;
    newsPostUrl: string;
  }>;
};

export async function generateMetadata({
  params,
}: THomePage): Promise<Metadata> {
  const { locale, newsPostUrl } = await params;
  const response = await fetchRawMetadata<{ newsPosts: GNewsPost[] }>({
    query: getNewsPostSeo,
    variables: { locale, url: newsPostUrl },
  });

  if (response?.newsPosts) {
    const [page] = response.newsPosts;
    return await generateSeo(page?.seo);
  }

  return await generateSeo();
}

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
