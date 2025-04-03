import Image from 'next/image';
import { FC } from 'react';

import image from '@/assets/images/bikes-my25-tiger-sport-800-07-1160x653.avif';
import { Text } from '@/common/ui';

import classes from './styles.module.sass';

const data = {
  title: 'Motociclete Adventure',
  sudtitle:
    'Începe o nouă aventură cu motociclete construite pentru a merge la distanță! Triumph Tiger este gamă de motociclete de ultimă generație care-ți permite să experimentezi fiecare moment! Oricât de lungă ar fi călătoria, noua noastră rasă de Tigri este gata să meargă peste tot cu tine, într-o aventură!',
};

export const TitleSection: FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <Text tag="h1">{data.title}</Text>
        <Text tag="p">{data.sudtitle}</Text>
      </div>
      <figure className={classes.cover}>
        <Image src={image} alt={'sdf'} fill />
      </figure>
    </section>
  );
};
