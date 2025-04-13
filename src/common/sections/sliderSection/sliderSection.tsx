import { FC, PropsWithChildren } from 'react';

import { Text } from '@/common/ui';
import { Slider, TSlider } from '@/common/ui/slider/slider';
import { Maybe } from '@/types/types';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

type TSliderSection = {
  title?: Maybe<string>;
  options?: TSlider['options'];
};

export const SliderSection: FC<PropsWithChildren<TSliderSection>> = ({
  children,
  options,
  title,
}) => {
  return (
    <SectionWrapper
      title={
        <Text tag="h3" className={classes.title}>
          {title}
        </Text>
      }
    >
      <Slider pagination={true} options={options}>
        {children}
      </Slider>
    </SectionWrapper>
  );
};
