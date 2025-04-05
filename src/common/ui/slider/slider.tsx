'use client';

import 'react-splide-ts/css';

import cn from 'clsx';
import { FC, ReactElement, ReactNode, useMemo, useRef } from 'react';
import { Options, Splide, SplideTrack } from 'react-splide-ts';
import { useMediaQuery } from 'usehooks-ts';

import classes from './styles.module.sass';

type WithChildren<T> = T & {
  children: ReactNode | ReactNode[];
};

export type TSlider = {
  options?: Options & { type?: 'loop' | 'slide' | 'fade' };
  navigation?: ReactElement;
  pagination?: boolean;
};

const baseOptions: Options = {
  type: 'loop',
  autoplay: false,
  interval: 5000,
  pauseOnHover: false, // must be false
  pauseOnFocus: false, // must be false
  pagination: true,
  perPage: 1,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
};

export const Slider: FC<WithChildren<TSlider>> = ({
  children,
  options = baseOptions,
  navigation = null,
  pagination,
}) => {
  const splideRef = useRef<Splide>(null);

  const isMobile = useMediaQuery('(max-width: 40rem)');

  const updetedOptions = useMemo(() => {
    return {
      ...options,
      perPage: isMobile ? 1 : options.perPage || 1,
    };
  }, [options, isMobile]);

  return (
    <Splide
      ref={splideRef}
      className={cn(classes.slider, { [classes.hide_arrows]: !navigation })}
      hasTrack={false}
      options={
        {
          ...updetedOptions,
          pagination: pagination ? classes['splide__pagination--custom'] : '',
        } as unknown as Options
      }
    >
      <SplideTrack className={classes.track}>{children}</SplideTrack>
      {navigation ? (
        navigation
      ) : (
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">{'<'}</button>
          <button className="splide__arrow splide__arrow--next">{'>'}</button>
        </div>
      )}
      {/* <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">{'<'}</button>
        <button className="splide__arrow splide__arrow--next">{'>'}</button>
      </div> */}
      {pagination && (
        <ul
          className={cn(
            'splide__pagination splide__pagination--custom',
            classes['splide__pagination--custom']
          )}
        />
      )}
    </Splide>
  );
};
