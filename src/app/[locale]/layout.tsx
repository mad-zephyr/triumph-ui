import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { mainFont } from '@/assets/fonts/fonts';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import OGimage from '@/assets/images/og-image.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Triumph Motocycle Moldova',
    description:
      'Join Triumph Motocycle Club for a premium fitness experience.',
    openGraph: {
      title: 'Triumph Moldova',
      images: [
        { url: OGimage.src, height: OGimage.height, width: OGimage.width },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Triumph Motocycle Club',
      description:
        'Join Triumph Motocycle Club for a premium fitness experience.',
      images: OGimage.src,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={mainFont.variable}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
