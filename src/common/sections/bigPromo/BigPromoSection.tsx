import Image from 'next/image';
import { FC } from 'react';

import image from '@/assets/images/moto-scrambler.webp';
import { Button, Text } from '@/common/ui';

import classes from './styles.module.sass';

const data = {
  title: 'Scrambler 1200 X Icon',
  subtitle:
    'Heritage logo to make a once-only revival on seven distinctive models',
  image: image.src,

  link: {
    title: 'Vezi detalii',
    url: '/',
  },
};

export const BigPromoSection: FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Text tag="h2">{data.title}</Text>
          <Text tag="p">{data.subtitle}</Text>

          <Button variant="prime" title={data.link.title} />
        </div>
      </div>
      <figure className={classes.cover}>
        <Image src={data.image} alt={'fd'} fill />
      </figure>
    </section>
  );
};
