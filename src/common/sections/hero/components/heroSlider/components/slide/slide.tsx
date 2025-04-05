import Image from 'next/image';
import { FC } from 'react';
import { SplideSlide } from 'react-splide-ts';

import { Button, Text } from '@/common/ui';

import classes from './styles.module.sass';

type TSlide = {
  image: string;
  title: string;
  subtitle: string;
};

export const Slide: FC<TSlide> = ({ image, subtitle, title }) => {
  return (
    <SplideSlide className={classes.wrapper}>
      <div className={classes.slide}>
        <div className={classes.content}>
          <Text tag="h2" className={classes.title}>
            {title}
          </Text>
          <Text tag="p" className={classes.subtitle}>
            {subtitle}
          </Text>
          <div className={classes.controls}>
            <Button title="Discover more" />
          </div>
        </div>
        <figure className={classes.image}>
          <Image src={image} alt="" fill />
        </figure>
      </div>
    </SplideSlide>
  );
};
