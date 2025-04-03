import { FC, PropsWithChildren } from 'react';
import { Options } from 'react-splide-ts';

import { Text } from '@/common/ui';
import { Slider } from '@/common/ui/slider/slider';

import { SectionWrapper } from '../components';

type TSliderSection = {
  options?: Options;
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
      <Slider options={options}>{children}</Slider>
    </SectionWrapper>
  );
};
