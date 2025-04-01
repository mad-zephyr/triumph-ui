import { CategoryAccordion, HeroSection, QuickNavigation } from '@/common';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  console.log(locale);

  return (
    <main>
      <HeroSection />
      <QuickNavigation />
      <CategoryAccordion />
    </main>
  );
}
