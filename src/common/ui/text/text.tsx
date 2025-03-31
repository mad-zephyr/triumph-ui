import { FC, HTMLAttributes, PropsWithChildren, Ref } from 'react';

type TTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TagMap = {
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  p: HTMLParagraphElement;
  span: HTMLSpanElement;
};

export type TText = {
  tag: TTag;
  ref?: Ref<TagMap[TTag]> | null;
} & HTMLAttributes<TagMap[TTag]>;

import classes from './styles.module.sass';

export const Text: FC<PropsWithChildren<TText>> = ({
  tag,
  children,
  ref,
  ...props
}) => {
  switch (tag) {
    case 'h1': {
      return (
        <h1 ref={ref as Ref<TagMap['h1']>} {...props} className={classes[tag]}>
          {children}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2 ref={ref as Ref<TagMap['h2']>} {...props} className={classes[tag]}>
          {children}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3 ref={ref as Ref<TagMap['h3']>} {...props} className={classes[tag]}>
          {children}
        </h3>
      );
    }
    case 'h4': {
      return (
        <h4 ref={ref as Ref<TagMap['h4']>} {...props} className={classes[tag]}>
          {children}
        </h4>
      );
    }
    case 'h5': {
      return (
        <h5 ref={ref as Ref<TagMap['h5']>} {...props} className={classes[tag]}>
          {children}
        </h5>
      );
    }
    case 'h6': {
      return (
        <h5 ref={ref as Ref<TagMap['h6']>} {...props} className={classes[tag]}>
          {children}
        </h5>
      );
    }
    case 'span': {
      return (
        <span ref={ref} {...props} className={classes[tag]}>
          {children}
        </span>
      );
    }

    default: {
      return (
        <p ref={ref as Ref<TagMap['p']>} {...props} className={classes[tag]}>
          {children}
        </p>
      );
    }
  }
};
