'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { FC } from 'react';

import moto1 from '@/assets/images/prod/moto-side-1.webp';
import moto2 from '@/assets/images/prod/moto-side-2.webp';
import moto3 from '@/assets/images/prod/moto-side-3.webp';
import moto4 from '@/assets/images/prod/moto-side-4.webp';
import moto5 from '@/assets/images/prod/moto-side-5.webp';

const images = [moto1, moto2, moto3, moto4, moto5];

import clsx from 'clsx';
import Image from 'next/image';
import { SplideSlide } from 'react-splide-ts';

import ArrowRight from '@/assets/icons/arrow_thin_right.svg';
import { Text } from '@/common/ui';
import { Slider } from '@/common/ui/slider/slider';

import mockContent from './mockText';
import classes from './styles.module.sass';

const data = {
  title: 'TIGER SPORT 660 MY2024',
  subtitle: 'PROMOȚIE 8.790 EURO',
};

export const ProductDetailsSection: FC = () => {
  const navigation = (
    <div className={clsx('splide__arrows', classes.controls)}>
      <button className={clsx('splide__arrow--prev', classes.nav)}>
        <ArrowRight />
      </button>
      <button className={clsx('splide__arrow--next', classes.nav)}>
        <ArrowRight />
      </button>
    </div>
  );
  return (
    <section className={classes.main}>
      <div className={classes.intro}>
        <Text tag="h4">{data.title}</Text>
        <Text tag="p">{data.subtitle}</Text>
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
                <Image src={item} alt={''} fill />
              </div>
            </SplideSlide>
          ))}
        </Slider>
      </div>

      <article className={classes.article}>
        <BlocksRenderer content={mockContent} />
      </article>
    </section>
  );
};
