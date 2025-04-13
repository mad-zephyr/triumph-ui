'use client';

import 'react-splide-ts/css';

import clsx from 'clsx';
import { FC, useRef, useState } from 'react';
import { Splide, SplideTrack } from 'react-splide-ts';
import { useMediaQuery } from 'usehooks-ts';

import ArrorLeft from '@/assets/icons/arrow-left.svg';
import ArrorRight from '@/assets/icons/arrow-left.svg';

import { Slide } from './components';
import { TSlide } from './components/slide/slide';
import classes from './styles.module.sass';

const DURATION = 6;

export type THeroSlider = {
  slides: TSlide[];
};

export const HeroSlider: FC<THeroSlider> = ({ slides }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 40rem)');

  const splideInstanceRef = useRef<Splide | null>(null);

  const [navIndexes, setNavIndxes] = useState({
    prev: slides.length - 1,
    next: 1,
  });

  const runProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = `${DURATION - 0.2}s all ease-in-out`;
      if (isMobile) {
        progressRef.current.style.width = '100%';
      } else {
        progressRef.current.style.height = '100%';
      }
    }
  };

  // const handleRun = contextSafe(() => {
  //   const progresBarSettings: [gsap.TweenVars, gsap.TweenVars] = isMobile
  //     ? [
  //         { y: '0%', x: '50%', width: '0dvw', height: '0.375rem' },
  //         {
  //           width: '100dvw',
  //           duration: DURATION,
  //           ease: 'power1.inOut',
  //         },
  //       ]
  //     : [
  //         { y: '-50%', height: 0 },
  //         {
  //           height: '100%',
  //           duration: DURATION,
  //           ease: 'power1.inOut',
  //         },
  //       ];

  //   timeLine
  //     ?.addLabel('progress')
  //     .fromTo(progressRef.current, ...progresBarSettings);
  // });

  const handlePause = () => {
    splideInstanceRef.current?.splide?.Components.Autoplay?.pause();
  };

  const handlePlay = () => {
    splideInstanceRef.current?.splide?.Components.Autoplay?.play();
  };

  const getPrevAndNext = (active: number) => {
    if (active === 0) {
      setNavIndxes({ prev: slides.length - 1, next: 1 });
    } else if (active === slides.length - 1) {
      setNavIndxes({ prev: active - 1, next: 0 });
    } else {
      setNavIndxes({ prev: active - 1, next: active + 1 });
    }
  };

  return (
    <div className={classes.section}>
      <Splide
        ref={splideInstanceRef}
        className={classes.slider}
        hasTrack={false}
        onMoved={() => {
          runProgressBar();
        }}
        onResized={runProgressBar}
        onMove={(splide) => {
          getPrevAndNext(splide.index);

          if (progressRef.current) {
            progressRef.current.style.transition = '0s all ease-in-out';
            if (isMobile) {
              progressRef.current.style.width = '0%';
            } else {
              progressRef.current.style.height = '0%';
            }
          }
        }}
        onReady={(splide) => {
          splide.Components.Autoplay.play();
          runProgressBar();
        }}
        options={{
          type: 'loop',
          autoplay: 'pause',
          interval: DURATION * 1000,
          pauseOnHover: false, // must be false
          pauseOnFocus: false, // must be false
          pagination: false,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        <SplideTrack>
          {slides.map((slide, i) => (
            <Slide key={i} {...slide} />
          ))}
        </SplideTrack>

        <div
          className={clsx('splide__arrows', classes.controls)}
          onMouseEnter={handlePause}
          onMouseLeave={handlePlay}
        >
          <button
            className={clsx(
              'splide__arrow--next',
              classes.right,
              classes.controlBase
            )}
          >
            <div className={classes.navText}>
              <span>{slides[navIndexes.next]?.navTitle}</span>
            </div>
            <ArrorRight />
          </button>

          <div className={classes['carousel-progress']}>
            <div
              className={classes['carousel-progress-bar']}
              ref={progressRef}
            />
          </div>

          <button
            className={clsx(
              ' splide__arrow--prev',
              classes.left,
              classes.controlBase
            )}
          >
            <div className={classes.navText}>
              <span>{slides[navIndexes.prev]?.navTitle}</span>
            </div>
            <ArrorLeft />
          </button>
        </div>
      </Splide>
    </div>
  );
};
