import moto1 from '@/assets/images/moto-1.webp';
import moto3 from '@/assets/images/moto-2.webp';
import {
  BigPromoSection,
  BigThumbnailSection,
  CategoryAccordion,
  HeroSection,
  NewsListSection,
  QuickNavigation,
  SliderSection,
  TitleSection,
} from '@/common';
import { ProductCardBig } from '@/common/components';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  console.log(locale);

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
      <HeroSection />
      <QuickNavigation />
      <CategoryAccordion />
      <BigThumbnailSection />
      <SliderSection
        options={{ type: 'loop', autoplay: true, perPage: 2, pagination: true }}
      >
        {products.map((card, i) => (
          <ProductCardBig key={i} data={card} />
        ))}
      </SliderSection>
      <BigPromoSection />
      <NewsListSection />
      <TitleSection />
    </main>
  );
}
