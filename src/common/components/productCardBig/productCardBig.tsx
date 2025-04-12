'use client';

import Image from 'next/image';
import { FC } from 'react';
import { SplideSlide } from 'react-splide-ts';

import { Button, Text } from '@/common/ui';
import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';

type TProductCard = {
  title: string;
  image?: TUploadFile;
  cta: {
    title: string;
    url: string;
  };
};

export const ProductCardBig: FC<{ data: TProductCard }> = ({ data }) => {
  const { cta, title } = data;

  const card = (
    <div className={classes.card}>
      <figure className={classes.image}>
        {data.image && <Image src={data.image.url} alt={title} fill />}
      </figure>
      <div className={classes.content}>
        {title && <Text tag="h5">{title}</Text>}
        {cta && <Button title={cta.title} variant={'prime'} url={cta.url} />}
      </div>
    </div>
  );

  return <SplideSlide>{card}</SplideSlide>;
};
