import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';

import { Text } from '@/common/ui';
import { Link } from '@/i18n/navigation';
import { TUploadFile } from '@/models/uiUploadfile';
import { Maybe } from '@/types/types';

import classes from './styles.module.sass';

export type TCardPreview = HTMLAttributes<HTMLAnchorElement> & {
  title: string;
  descr?: Maybe<string>;
  image?: TUploadFile;
  url: string;
};

export const CardPreview: FC<TCardPreview> = ({
  title,
  descr,
  image,
  url,
  ...props
}) => {
  return (
    <Link href={url} className={classes.card} {...props}>
      <figure className={classes.cover}>
        {image && (
          <Image
            src={image.url}
            alt={image.alternativeText || title}
            fill
            placeholder={image.placeholder}
          />
        )}
      </figure>
      <Text tag="h5" className={classes.title}>
        {title}
      </Text>
      <Text tag="p" className={classes.descr}>
        {descr}
      </Text>
    </Link>
  );
};
