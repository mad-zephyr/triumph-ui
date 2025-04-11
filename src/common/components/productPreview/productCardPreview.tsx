import Image from 'next/image';
import { FC } from 'react';

import { Text } from '@/common/ui';
import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';

export type TProductCardPreview = {
  title: string;
  subtitle: string;
  image?: TUploadFile;
};

export const ProductCardPreview: FC<TProductCardPreview> = ({
  title,
  image,
  subtitle,
}) => {
  return (
    <div className={classes.card}>
      <figure className={classes.cover}>
        {image && <Image src={image.url} alt={title} fill />}
      </figure>
      <div className={classes.content}>
        <Text tag={'h5'}>{title}</Text>
        <Text tag={'p'}>{subtitle}</Text>
      </div>
    </div>
  );
};
