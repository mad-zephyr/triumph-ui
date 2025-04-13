import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
type TContentBlocksSection = {
  content: BlocksContent;
} & HTMLAttributes<HTMLElement>;

import classes from './styles.module.sass';

export const ContentBlocksSection: FC<TContentBlocksSection> = ({
  content,
  className,
  ...props
}) => {
  return (
    <section className={clsx(classes.main, className)} {...props}>
      {content && <BlocksRenderer content={content} />}
    </section>
  );
};
