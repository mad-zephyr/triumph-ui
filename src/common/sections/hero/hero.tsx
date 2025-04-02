import { FC } from 'react';

import { HeroSlider } from './components';
import classes from './styles.module.sass';

export const HeroSection: FC = () => {
  return (
    <section className={classes.hero}>
      <HeroSlider />
    </section>
  );
};
