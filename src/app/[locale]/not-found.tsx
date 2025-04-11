'use client';

import { useTranslations } from 'next-intl';

import { BigPromoSection, Button, Text } from '@/common';
import { SectionWrapper } from '@/common/sections/components';

export default function NotFound() {
  const t = useTranslations('technical');

  return (
    <SectionWrapper
      title={
        <>
          <Text tag="h1" align="center">
            {t('404decription')}
          </Text>
          <Button
            style={{ margin: '2rem auto' }}
            title={t('goMain')}
            url={'/'}
          />
        </>
      }
    >
      <BigPromoSection />
    </SectionWrapper>
  );
}
