'use client';

import { useTranslations } from 'next-intl';

import { BigPromoSection, Button, Text } from '@/common';

export default function NotFound() {
  const t = useTranslations('technical');

  return (
    <>
      <section style={{ padding: '1rem' }}>
        <Text tag="h1" align="center">
          {t('404decription')}
        </Text>
        <Button style={{ margin: '2rem auto' }} title={t('goMain')} url={'/'} />
      </section>
      <BigPromoSection />
    </>
  );
}
