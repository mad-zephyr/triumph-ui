import Image from 'next/image';
import { FC } from 'react';

import imageShowroom from '@/assets/images/showroom-service.webp';
import imageService from '@/assets/images/showroom-service-2.webp';
import { Button, Text } from '@/common/ui';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

const data = {
  title: 'LOCAȚII & Service TRIUMPH',

  card: [
    {
      title: 'SERVICE',
      image: imageService.src,
      url: {
        title: 'VIZITEAZĂ',
        url: '/',
      },
    },
    {
      title: 'SHOW ROOM',
      image: imageShowroom.src,
      url: {
        title: 'VIZITEAZĂ',
        url: '/',
      },
    },
    {
      title: 'SERVICE',
      image: imageService.src,
      url: {
        title: 'VIZITEAZĂ',
        url: '/',
      },
    },
  ],
};

export const BigThumbnailSection: FC = () => {
  return (
    <SectionWrapper title={<Text tag={'h3'}>{data.title}</Text>}>
      <div className={classes.wrapper}>
        {data.card.map((card, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.content}>
              <Text tag={'h4'}>{card.title}</Text>
              <Button variant="prime" title={card.url.title} />
            </div>
            <figure className={classes.cover}>
              <Image src={card.image} fill alt={card.title} />
            </figure>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
