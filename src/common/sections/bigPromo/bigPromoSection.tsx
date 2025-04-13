import Image from 'next/image';
import { FC } from 'react';

import { Button, Text } from '@/common/ui';
import { TButton } from '@/common/ui/button/button';
import { TUploadFile } from '@/models/uiUploadfile';
import { Maybe } from '@/types/types';

import classes from './styles.module.sass';

export type TBigPromoSection = {
  title?: Maybe<string>;
  subtitle?: Maybe<string>;
  buttons?: TButton[];
  cover?: TUploadFile;
};

export const BigPromoSection: FC<TBigPromoSection> = ({
  title,
  subtitle,
  buttons,
  cover,
}) => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Text tag="h2">{title}</Text>
          <Text tag="p">{subtitle}</Text>

          {buttons?.map((btn, i) => (
            <Button
              key={i}
              variant={btn.variant}
              title={btn.title}
              url={btn.url}
            />
          ))}
        </div>
      </div>
      <figure className={classes.cover}>
        {!!cover && (
          <Image
            src={cover.url}
            alt={cover?.alternativeText || title || ''}
            fill
          />
        )}
      </figure>
    </section>
  );
};
