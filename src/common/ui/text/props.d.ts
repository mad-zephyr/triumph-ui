enum EnumTextTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
}

export type TagToElementMap = {
  [EnumTextTag.H1]: HTMLHeadingElement;
  [EnumTextTag.H2]: HTMLHeadingElement;
  [EnumTextTag.H3]: HTMLHeadingElement;
  [EnumTextTag.H4]: HTMLHeadingElement;
  [EnumTextTag.H5]: HTMLHeadingElement;
  [EnumTextTag.H6]: HTMLHeadingElement;
  [EnumTextTag.P]: HTMLParagraphElement;
  [EnumTextTag.SPAN]: HTMLSpanElement;
};

export type TText<Tag extends keyof TagToElementMap = keyof TagToElementMap> = {
  type: typeof EnumTextTag;
} & HTMLAttributes<TagToElementMap[Tag]>;
