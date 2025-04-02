'use client';

import Image from 'next/image';
import { FC } from 'react';
import { SplideSlide } from 'react-splide-ts';

import { Button, Text } from '@/common/ui';

import classes from './styles.module.sass';

type TProductCard = {
  title: string;
  images: { image: string }[];
  link: { title: string; url: string };
};

export const ProductCardBig: FC<{ data: TProductCard }> = ({ data }) => {
  const { title, link } = data;

  const card = (
    <div className={classes.card}>
      <figure className={classes.image}>
        <Image src={data.images[0].image} alt={title} fill />
      </figure>
      <div className={classes.content}>
        <Text tag="h5">{title}</Text>
        <Button title={link.title} variant={'prime'} />
      </div>
    </div>
  );

  return <SplideSlide>{card}</SplideSlide>;
};
