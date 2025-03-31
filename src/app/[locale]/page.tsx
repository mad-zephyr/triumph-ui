import { Link } from '@/i18n/navigation';
import { HeroSection } from '@/common';

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  return (
    <main>
      <HeroSection />
    </main>
  );
}
