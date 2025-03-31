import Image from 'next/image';
import { FC } from 'react';
import { SplideSlide } from 'react-splide-ts';

import { Text } from '@/common/ui';

import classes from './styles.module.sass';

const data = {
  title: 'NOUL SPEED TRIPLE 1200 RS',
  descriptor:
    ' Experimentați apogeul performanței triplu-propulsate cu noul Speed Triple 1200 RS. Simbolul originar al sportivelor naked, evoluat.',
};

type TSlide = {
  image: string;
};

export const Slide: FC<TSlide> = ({ image }) => {
  return (
    <SplideSlide style={{ width: 'calc(100% - 5.625rem)' }}>
      <div className={classes.slide}>
        <div className={classes.content}>
          <Text tag="h2" className={classes.title}>
            {data.title}
          </Text>
          <Text tag="p" className={classes.subtitle}>
            {data.descriptor}
          </Text>
        </div>
        <figure className={classes.image}>
          <Image src={image} alt="" fill />
        </figure>
      </div>
    </SplideSlide>
  );
};
