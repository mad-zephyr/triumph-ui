import { FC, PropsWithChildren } from 'react';

import { Text } from '@/common/ui';
import { Slider, TSlider } from '@/common/ui/slider/slider';

import { SectionWrapper } from '../components';

type TSliderSection = {
  options?: TSlider['options'];
};

export const SliderSection: FC<PropsWithChildren<TSliderSection>> = ({
  children,
  options,
}) => {
  return (
    <SectionWrapper
      title={
        <Text tag="h3" align={'center'}>
          PROMOȚII
        </Text>
      }
    >
      <Slider pagination={true} options={options}>
        {children}
      </Slider>
    </SectionWrapper>
  );
};
