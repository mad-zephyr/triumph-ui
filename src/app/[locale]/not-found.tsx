'use client';

import { useTranslations } from 'next-intl';

import { Button, Text } from '@/common';

export default function NotFound() {
  const t = useTranslations('technical');

  return (
    <>
      <section
        style={{
          padding: '1rem',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Text tag="h1" align="center" style={{ fontSize: 'xxx-large' }}>
          {t('404decription')}
        </Text>
        <Button style={{ margin: '2rem auto' }} title={t('goMain')} url={'/'} />
      </section>
    </>
  );
}
