import { FC, HTMLAttributes, PropsWithChildren, Ref } from "react";

type TTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

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

export const Text: FC<PropsWithChildren<TText>> = ({
  tag,
  children,
  ref,
  ...props
}) => {
  switch (tag) {
    case "h1": {
      return (
        <h1 ref={ref as Ref<TagMap["h1"]>} {...props}>
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h1 ref={ref as Ref<TagMap["h2"]>} {...props}>
          {children}
        </h1>
      );
    }
    case "h3": {
      return (
        <h1 ref={ref as Ref<TagMap["h3"]>} {...props}>
          {children}
        </h1>
      );
    }
    case "h4": {
      return (
        <h1 ref={ref as Ref<TagMap["h4"]>} {...props}>
          {children}
        </h1>
      );
    }
    case "h5": {
      return (
        <h1 ref={ref as Ref<TagMap["h5"]>} {...props}>
          {children}
        </h1>
      );
    }
    case "h6": {
      return (
        <h1 ref={ref as Ref<TagMap["h6"]>} {...props}>
          {children}
        </h1>
      );
    }
    case "span": {
      return (
        <span ref={ref} {...props}>
          {children}
        </span>
      );
    }

    default: {
      return (
        <p ref={ref as Ref<TagMap["p"]>} {...props}>
          {children}
        </p>
      );
    }
  }
};
