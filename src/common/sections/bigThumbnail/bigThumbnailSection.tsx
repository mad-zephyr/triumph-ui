import Image from 'next/image';
import { FC } from 'react';

import { Button, Text } from '@/common/ui';
import { TButton } from '@/common/ui/button/button';
import { TUploadFile } from '@/models/uiUploadfile';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

export type TBigThumbnailCard = {
  title?: string;
  image?: TUploadFile;
  button: TButton;
};

type TBigThumbnailSection = {
  title: string;
  cards: TBigThumbnailCard[];
};

export const BigThumbnailSection: FC<TBigThumbnailSection> = ({
  title,
  cards,
}) => {
  return (
    <SectionWrapper
      title={
        <>
          {title && (
            <Text tag={'h3'} className={classes.title}>
              {title}
            </Text>
          )}
        </>
      }
    >
      <div className={classes.wrapper}>
        {cards.map((card, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.content}>
              <Text tag={'h4'}>{card.title}</Text>
              {card.button && (
                <Button
                  variant={card.button.variant}
                  title={card.button.title}
                />
              )}
            </div>
            <figure className={classes.cover}>
              {card.image && (
                <Image
                  src={card.image.url}
                  fill
                  alt={card.image.alternativeText || ''}
                />
              )}
            </figure>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
