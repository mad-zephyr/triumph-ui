import { BigPromoSection, NewsListSection } from '@/common';
import { getPagesData } from '@/libs/apollo/getData';
import { GetPage } from '@/libs/graphql';
import { getPageModel } from '@/models';
import { GPage } from '@/types/types';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  const {
    pages: [page],
  } = await getPagesData<{ pages: GPage[] }>({
    query: GetPage,
    variables: { locale, url: 'main' },
  });

  const { sections } = getPageModel(page);

  return (
    <main>
      {sections}
      <BigPromoSection />
      <NewsListSection />
    </main>
  );
}
