import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { mainFont } from '@/assets/fonts/fonts';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#a1021a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'only light',
  viewportFit: 'cover',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Triumph Motocycle Moldova',
    description: 'Join Triumph Motocycle Club for a premium moto experience.',
    openGraph: {
      title: 'Triumph Moldova',
      images: [
        {
          url: 'https://triumph.nx.md/og-image.jpg',
          height: 600,
          width: 1200,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Triumph Motocycle Club',
      description: 'Join Triumph Motocycle Club for a premium moto experience.',
      images: 'https://triumph.nx.md/og-image.jpg',
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
