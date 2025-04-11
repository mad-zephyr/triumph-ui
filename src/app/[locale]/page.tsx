import moto1 from '@/assets/images/moto-1.webp';
import moto3 from '@/assets/images/moto-2.webp';
import { BigPromoSection, NewsListSection, SliderSection } from '@/common';
import { ProductCardBig } from '@/common/components';
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

  const { data } = await getClient().query<{ pages: GPage[] }>({
    query: GetPage,
    variables: { locale },
    fetchPolicy: 'no-cache',
  });

  const { sections } = getPageModel(data.pages[0]);

  const products = [
    {
      title: '1 TIGER 1200 RALLY PRO',
      images: [{ image: moto1.src }],
      link: { title: 'MORE', url: '/' },
    },
    {
      title: '2 DAYTONA 660 MY2024',
      images: [{ image: moto3.src }],
      link: { title: 'MORE', url: '/' },
    },
    {
      title: '3 TIGER 1200 RALLY PRO',
      images: [{ image: moto1.src }],
      link: { title: 'MORE', url: '/' },
    },
    {
      title: '4 TIGER 1200 RALLY PRO',
      images: [{ image: moto3.src }],
      link: { title: 'MORE', url: '/' },
    },
    {
      title: '5 TIGER 1200 RALLY PRO',
      images: [{ image: moto1.src }],
      link: { title: 'MORE', url: '/' },
    },
  ];

  return (
    <main>
      {sections}
      <SliderSection
        options={{ type: 'loop', autoplay: true, perPage: 2, pagination: true }}
      >
        {products.map((card, i) => (
          <ProductCardBig key={i} data={card} />
        ))}
      </SliderSection>
      <BigPromoSection />
      <NewsListSection />
    </main>
  );
}
