import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';

import { Text } from '@/common/ui';

import classes from './styles.module.sass';

type TCardPreview = HTMLAttributes<HTMLDivElement> & {
  title: string;
  descr: string;
  img: { src: string; alt: string };
};

export const CardPreview: FC<TCardPreview> = ({
  title,
  descr,
  img,
  ...props
}) => {
  return (
    <div className={classes.card} {...props}>
      <figure className={classes.cover}>
        <Image src={img.src} alt={img.alt} fill />
      </figure>
      <Text tag="h5" className={classes.title}>
        {title}
      </Text>
      <Text tag="p" className={classes.descr}>
        {descr}
      </Text>
    </div>
  );
};
