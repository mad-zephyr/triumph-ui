import { Metadata } from 'next';

import { fetchRawMetadata } from '@/libs/apollo/fetchRawMetadata';
// import { getClient } from '@/libs/apollo/apolloClient';
import { getPagesData } from '@/libs/apollo/getData';
import { GetPage, GetPageSeo } from '@/libs/graphql';
import { generateSeo, getPageModel } from '@/models';
import { GPage } from '@/types/types';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: THomePage): Promise<Metadata> {
  const { locale } = await params;
  const response = await fetchRawMetadata<{ data: { pages: [GPage] } }>({
    query: GetPageSeo,
    variables: { locale, url: 'main' },
  });

  if (response?.data?.pages) {
    const [page] = response.data.pages;
    return await generateSeo(page?.seo);
  }

  return await generateSeo();
}

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  const {
    pages: [page],
  } = await getPagesData<{ pages: GPage[] }>({
    query: GetPage,
    variables: { locale, url: 'main' },
  });

  const { sections } = getPageModel(page);

  return <main>{sections}</main>;
}
