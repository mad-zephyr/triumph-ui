/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { SplideSlide } from 'react-splide-ts';

import ArrowRight from '@/assets/icons/arrow_thin_right.svg';
import { Text } from '@/common/ui';
import { Slider } from '@/common/ui/slider/slider';
import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';

export type TProductDetailsSection = {
  title: string;
  subtitile: string;
  description: any;
  images: TUploadFile[];
};

export const ProductDetailsSection: FC<TProductDetailsSection> = ({
  title,
  subtitile,
  description,
  images,
}) => {
  const t = useTranslations('technical');
  const navigation = useMemo(() => {
    return (
      <div className={clsx('splide__arrows', classes.controls)}>
        <button className={clsx('splide__arrow--prev', classes.nav)}>
          <ArrowRight />
        </button>
        <button className={clsx('splide__arrow--next', classes.nav)}>
          <ArrowRight />
        </button>
      </div>
    );
  }, []);

  return (
    <section className={classes.main}>
      <div className={classes.intro}>
        <Text tag="h4">{title}</Text>
        <Text tag="p">{t('priceFrom', { price: subtitile })}</Text>
      </div>
      <div className={classes.slider}>
        <Slider
          pagination={false}
          options={{
            type: 'loop',
            autoplay: true,
            pagination: false,
            perPage: 1,
          }}
          navigation={navigation}
        >
          {images.map((item, i) => (
            <SplideSlide key={i}>
              <div className={classes.image}>
                <Image
                  src={item.url}
                  alt={item.alternativeText || title}
                  fill
                />
              </div>
            </SplideSlide>
          ))}
        </Slider>
      </div>

      <article className={classes.article}>
        <BlocksRenderer content={description} />
      </article>
    </section>
  );
};
