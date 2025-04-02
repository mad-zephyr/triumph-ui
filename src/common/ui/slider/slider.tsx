'use client';

import 'react-splide-ts/css';

import cn from 'clsx';
import { FC, ReactNode, useRef } from 'react';
import { Options, Splide, SplideTrack } from 'react-splide-ts';

import classes from './styles.module.sass';
type TSlider = {
  options?: Options;
};

type WithChildren<T> = T & {
  children: ReactNode | ReactNode[];
};

const baseOptions: Options = {
  type: 'loop',
  autoplay: false,
  interval: 5000,
  pauseOnHover: false, // must be false
  pauseOnFocus: false, // must be false
  pagination: true,
  perPage: 2,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
};

export const Slider: FC<WithChildren<TSlider>> = ({
  children,
  options = baseOptions,
}) => {
  const splideRef = useRef<Splide>(null);

  return (
    <Splide
      ref={splideRef}
      hasTrack={false}
      options={
        {
          ...options,
          pagination: classes['splide__pagination--custom'],
        } as unknown as Options
      }
      className={classes.slider}
    >
      <SplideTrack className={classes.track}>{children}</SplideTrack>

      <ul
        className={cn(
          'splide__pagination splide__pagination--custom',
          classes['splide__pagination--custom']
        )}
      />
    </Splide>
  );
};
