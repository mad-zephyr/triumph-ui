import Image from 'next/image';
import { FC } from 'react';

import { Button, Text } from '@/common/ui';
import { TButton } from '@/common/ui/button/button';
import { TUploadFile } from '@/models/uiUploadfile';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

export type TTCategoryAccordionCard = {
  title?: string;
  image?: TUploadFile;
  button: TButton;
};

type TCategoryAccordion = {
  title?: string;
  cards: TTCategoryAccordionCard[];
};

export const CategoryAccordion: FC<TCategoryAccordion> = ({ title, cards }) => {
  return (
    <SectionWrapper
      title={
        <Text tag="h3" className={classes.title}>
          {title}
        </Text>
      }
    >
      <div className={classes.wrapper}>
        {cards.reverse().map((item, i) => (
          <div key={i} className={classes.item}>
            <div className={classes.content}>
              <Text tag={'h4'}>{item.title}</Text>
              {item.button && (
                <Button
                  variant={item.button.variant}
                  title={item.button.title}
                />
              )}
            </div>
            <figure className={classes.cover}>
              {item.image && (
                <Image
                  src={item.image.url}
                  fill
                  alt={item.image.alternativeText || ''}
                />
              )}
            </figure>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
