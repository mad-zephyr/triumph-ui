import Image from 'next/image';
import { FC } from 'react';
import { SplideSlide } from 'react-splide-ts';

import { Button, Text } from '@/common/ui';
import { TButton } from '@/common/ui/button/button';
import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';

export type TSlide = {
  title?: string;
  subtitle?: string;
  buttons: TButton[];
  image?: TUploadFile;
};

export const Slide: FC<TSlide> = ({ image, subtitle, title, buttons }) => {
  return (
    <SplideSlide className={classes.wrapper}>
      <div className={classes.slide}>
        <div className={classes.content}>
          <Text tag="h2" className={classes.title}>
            {title}
          </Text>
          <Text tag="p" className={classes.subtitle}>
            {subtitle}
          </Text>
          <div className={classes.controls}>
            {buttons.map((btn, i) => (
              <Button key={i} title={btn.title} variant={btn.variant} />
            ))}
          </div>
        </div>
        <figure className={classes.image}>
          <Image
            src={image?.url || ''}
            alt={image?.alternativeText || ''}
            fill
            placeholder={image?.placeholder}
          />
        </figure>
      </div>
    </SplideSlide>
  );
};
