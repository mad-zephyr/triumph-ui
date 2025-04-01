'use client';

import 'react-splide-ts/css';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { FC, useRef, useState } from 'react';
import { Splide, SplideTrack } from 'react-splide-ts';

import ArrorLeft from '@/assets/icons/arrow-left.svg';
import ArrorRight from '@/assets/icons/arrow-left.svg';
import imageOne from '@/assets/images/hero.webp';
import imageTwo from '@/assets/images/my26-enduro-fam-01-v2-1920x1080.avif';
import imageThree from '@/assets/images/scrambler-400-x-my24-family-multi-content-block-2-1920x1080.avif';

import { Slide } from './components';
import classes from './styles.module.sass';

const DURATION = 8;

const sliderData = [
  {
    image: imageOne.src,
    title: 'LATEST OFFERS',
    navTitle: 'LATEST OFFERS',
    subtitle:
      'Take advantage of incredible Triumph Cash or Low Rate Financing offers during The Rev Up & Ride Sales Event',
  },
  {
    image: imageTwo.src,
    title: '2 NEW ENDURO RANGE',
    navTitle: 'hello 2',
    subtitle: 'The tougher the ride, the better it gets.',
  },
  {
    image: imageThree.src,
    title: '3 THE NEW SPEED TRIPLE 1200 RS',
    navTitle: 'NEW SPEED TWIN 1200 & ALL-NEW SPEED TWIN 1200 RS',
    subtitle:
      'Experience the pinnacle of triple-powered performance with the New Speed Triple 1200 RS. The original naked sportbike icon, evolved.',
  },
  {
    image: imageThree.src,
    title: '4 THE NEW SPEED TRIPLE 1200 RS',
    navTitle: 'hello 4',
    subtitle:
      'Experience the pinnacle of triple-powered performance with the New Speed Triple 1200 RS. The original naked sportbike icon, evolved.',
  },
  {
    image: imageThree.src,
    title: '5 THE NEW SPEED TRIPLE 1200 RS',
    navTitle: 'hello 5',
    subtitle:
      'Experience the pinnacle of triple-powered performance with the New Speed Triple 1200 RS. The original naked sportbike icon, evolved.',
  },
];

export const HeroSlider: FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  const [navIndexes, setNavIndxes] = useState({
    prev: sliderData.length - 1,
    next: 1,
  });

  const { contextSafe } = useGSAP({ dependencies: [progressRef] });
  const handleRun = contextSafe(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      progressRef.current,
      { y: '-50%', height: 0 },
      {
        height: '100dvh',
        duration: DURATION,
        ease: 'power1.inOut',
      }
    );
  });

  const getPrevAndNext = (active: number) => {
    if (active === 0) {
      setNavIndxes({ prev: sliderData.length - 1, next: 1 });
    } else if (active === sliderData.length - 1) {
      setNavIndxes({ prev: active - 1, next: 0 });
    } else {
      setNavIndxes({ prev: active - 1, next: active + 1 });
    }
  };

  return (
    <div className={classes.section}>
      <Splide
        className={classes.slider}
        hasTrack={false}
        onMove={(splide) => {
          getPrevAndNext(splide.index);
          handleRun();
        }}
        onReady={handleRun}
        options={{
          type: 'loop',
          autoplay: true,
          interval: DURATION * 1000,
          pauseOnHover: false,
          pagination: false,
        }}
      >
        <SplideTrack>
          {sliderData.map((slide, i) => (
            <Slide
              key={i}
              image={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          ))}
        </SplideTrack>

        <div className={clsx('splide__arrows', classes.controls)}>
          <button
            className={clsx(
              'splide__arrow--next',
              classes.right,
              classes.controlBase
            )}
          >
            <div className={classes.navText}>
              <span>{sliderData[navIndexes.next]?.navTitle}</span>
            </div>
            <ArrorRight />
          </button>
          <div className={classes.progress} ref={progressRef} />
          <button
            className={clsx(
              ' splide__arrow--prev',
              classes.left,
              classes.controlBase
            )}
          >
            <div className={classes.navText}>
              <span>{sliderData[navIndexes.prev]?.navTitle}</span>
            </div>
            <ArrorLeft />
          </button>
        </div>
      </Splide>
    </div>
  );
};
