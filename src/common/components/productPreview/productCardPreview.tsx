import Image from 'next/image';
import { FC } from 'react';

import { Text } from '@/common/ui';

import classes from './styles.module.sass';
type TProductCardPreview = {
  title: string;
  image: string;
  subtitle: string;
};

export const ProductCardPreview: FC<TProductCardPreview> = ({
  title,
  image,
  subtitle,
}) => {
  return (
    <div className={classes.card}>
      <figure className={classes.cover}>
        <Image src={image} alt={title} fill />
      </figure>
      <div className={classes.content}>
        <Text tag={'h5'}>{title}</Text>
        <Text tag={'p'}>{subtitle}</Text>
      </div>
    </div>
  );
};
