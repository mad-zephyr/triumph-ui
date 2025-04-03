import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { mainFont } from '@/assets/fonts/fonts';
import { routing } from '@/i18n/routing';
import { SmoothScrolling } from '@/libs/lenis/smoothScrolling';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
      <body style={{ overscrollBehaviorY: 'contain' }}>
        {/* <SmoothScrolling> */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
