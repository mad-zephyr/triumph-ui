import { HeroSlider } from './components';
import classes from './styles.module.sass';

export const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <HeroSlider />
    </section>
  );
};
