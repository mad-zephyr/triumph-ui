'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Text } from '@/common/ui';
import { Link } from '@/i18n/navigation';
import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';

export type TProductCardPreview = {
  title: string;
  subtitle: string;
  href: string;
  image?: TUploadFile;
};

export const ProductCardPreview: FC<TProductCardPreview> = ({
  title,
  subtitle,
  href,
  image,
}) => {
  const t = useTranslations('technical');
  return (
    <Link href={href.toLowerCase()} className={classes.card}>
      <div className={classes.card}>
        <figure className={classes.cover}>
          {image && (
            <Image
              placeholder={image.placeholder}
              src={image.url}
              alt={title}
              fill
            />
          )}
        </figure>
        <div className={classes.content}>
          <Text tag={'h5'}>{title}</Text>
          <Text tag={'p'}>{t('priceFrom', { price: subtitle })}</Text>
        </div>
      </div>
    </Link>
  );
};
