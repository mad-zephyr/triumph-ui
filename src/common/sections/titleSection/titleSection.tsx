/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { FC } from 'react';

import { Text } from '@/common/ui';
import { TTag } from '@/common/ui/text/text';
import { TUploadFile } from '@/models/uiUploadfile';
import { Maybe } from '@/types/types';

import classes from './styles.module.sass';

export type TTitleSection = {
  title?: Maybe<string>;
  titleHtmlTag: TTag;
  description: any;
  image?: TUploadFile;
};

export const TitleSection: FC<{ data: TTitleSection }> = ({ data }) => {
  const { title, description, image, titleHtmlTag } = data;
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <Text tag={titleHtmlTag} className={classes.title}>
          {title}
        </Text>
        {description && <BlocksRenderer content={description} />}
      </div>
      <figure className={classes.cover}>
        {image && (
          <Image
            src={image?.url}
            alt={image.alternativeText || title || ''}
            fill
          />
        )}
      </figure>
    </section>
  );
};
