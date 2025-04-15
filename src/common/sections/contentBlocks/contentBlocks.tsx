import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
type TContentBlocksSection = {
  content: BlocksContent;
  theme: 'dark' | 'light';
} & HTMLAttributes<HTMLElement>;

import classes from './styles.module.sass';

export const ContentBlocksSection: FC<TContentBlocksSection> = ({
  content,
  theme,
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(classes.main, className, {
        [classes.dark]: theme === 'dark',
      })}
      {...props}
    >
      {content && <BlocksRenderer content={content} />}
    </section>
  );
};
