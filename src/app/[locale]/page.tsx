import { Metadata } from 'next';

import { fetchRawMetadata } from '@/libs/apollo/fetchRawMetadata';
import { getPagesData } from '@/libs/apollo/getData';
import { GetPage, GetPageSeo } from '@/libs/graphql';
import { generateSeo, getPageModel } from '@/models';
import { GPage } from '@/types/types';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

// export const dynamic = 'force-static';

export async function generateMetadata({
  params,
}: THomePage): Promise<Metadata> {
  const { locale } = await params;
  const response = await fetchRawMetadata<{ pages: [GPage] }>({
    query: GetPageSeo,
    variables: { locale, url: 'main' },
  });

  if (response?.pages) {
    const [page] = response.pages;
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
    tags: 'main',
  });

  const { sections } = getPageModel(page);

  return <main>{sections}</main>;
}
