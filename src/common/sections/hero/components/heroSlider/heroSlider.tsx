'use client';

import 'react-splide-ts/css';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { FC, useEffect, useRef, useState } from 'react';
import { Splide, SplideTrack } from 'react-splide-ts';

import ArrorLeft from '@/assets/icons/arrow-left.svg';
import ArrorRight from '@/assets/icons/arrow-left.svg';
import imageOne from '@/assets/images/hero.webp';
import imageTwo from '@/assets/images/my26-enduro-fam-01-v2-1920x1080.avif';
import imageThree from '@/assets/images/scrambler-400-x-my24-family-multi-content-block-2-1920x1080.avif';

import { Slide } from './components';
import classes from './styles.module.sass';

export const HeroSlider: FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState<number>();

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  const handleMoved = () => {
    setSlideIndex((prev) => (prev || 0) + 1);
  };

  useGSAP(() => {
    gsap.set(progressRef.current, { y: '-50%', height: 0 });

    gsap.to(progressRef.current, {
      height: '100dvh',
      duration: 5,
      ease: 'power1.inOut',
    });
  }, [progressRef, slideIndex]);

  return (
    <div className={classes.section}>
      <Splide
        className={classes.slider}
        hasTrack={false}
        onMoved={handleMoved}
        options={{
          type: 'loop',
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          pagination: false,
        }}
      >
        <SplideTrack>
          <Slide image={imageOne.src} />
          <Slide image={imageTwo.src} />
          <Slide image={imageThree.src} />
        </SplideTrack>

        <div className={clsx('splide__arrows', classes.controls)}>
          <button
            className={clsx(
              'splide__arrow--next',
              classes.right,
              classes.controlBase
            )}
          >
            <span>
              <ArrorRight />
            </span>
          </button>
          <div className={classes.progress} ref={progressRef} />
          <button
            className={clsx(
              ' splide__arrow--prev',
              classes.left,
              classes.controlBase
            )}
          >
            <span>
              <ArrorLeft />
            </span>
          </button>
        </div>
      </Splide>
    </div>
  );
};
