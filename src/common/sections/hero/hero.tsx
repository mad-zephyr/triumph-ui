import { FC } from 'react';

import { HeroSlider } from './components';
import { TSlide } from './components/heroSlider/components/slide/slide';
import classes from './styles.module.sass';

type THeroSection = {
  slides: TSlide[];
};

export const HeroSection: FC<THeroSection> = ({ slides }) => {
  return (
    <section className={classes.hero}>
      <HeroSlider slides={slides} />
    </section>
  );
};
