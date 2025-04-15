/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BikesTypeSectionsDynamicZoneInput: { input: any; output: any };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  FooterBottomDynamicZoneInput: { input: any; output: any };
  HeaderLinksDynamicZoneInput: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
  NewsPostSectionsDynamicZoneInput: { input: any; output: any };
  PageSectionsDynamicZoneInput: { input: any; output: any };
};

export type GBikeColor = {
  __typename?: 'BikeColor';
  color: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GBikeColor>>;
  localizations_connection?: Maybe<GBikeColorRelationResponseCollection>;
  motorcycle?: Maybe<GMotorcycle>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GBikeColorGLocalizationsArgs = {
  filters?: InputMaybe<GBikeColorFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikeColorGLocalizations_connectionArgs = {
  filters?: InputMaybe<GBikeColorFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikeColorEntityResponseCollection = {
  __typename?: 'BikeColorEntityResponseCollection';
  nodes: Array<GBikeColor>;
  pageInfo: GPagination;
};

export type GBikeColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GBikeColorFiltersInput>>>;
  color?: InputMaybe<GStringFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  locale?: InputMaybe<GStringFilterInput>;
  localizations?: InputMaybe<GBikeColorFiltersInput>;
  motorcycle?: InputMaybe<GMotorcycleFiltersInput>;
  not?: InputMaybe<GBikeColorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GBikeColorFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
};

export type GBikeColorInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  motorcycle?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GBikeColorRelationResponseCollection = {
  __typename?: 'BikeColorRelationResponseCollection';
  nodes: Array<GBikeColor>;
};

export type GBikeTypesPage = {
  __typename?: 'BikeTypesPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayed_bike_types: Array<Maybe<GBikesType>>;
  displayed_bike_types_connection?: Maybe<GBikesTypeRelationResponseCollection>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GBikeTypesPage>>;
  localizations_connection?: Maybe<GBikeTypesPageRelationResponseCollection>;
  navigator_title: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<GComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type GBikeTypesPageGDisplayed_bike_typesArgs = {
  filters?: InputMaybe<GBikesTypeFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikeTypesPageGDisplayed_bike_types_connectionArgs = {
  filters?: InputMaybe<GBikesTypeFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikeTypesPageInput = {
  displayed_bike_types?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  navigator_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<GComponentSharedSeoInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type GBikeTypesPageRelationResponseCollection = {
  __typename?: 'BikeTypesPageRelationResponseCollection';
  nodes: Array<GBikeTypesPage>;
};

export type GBikesType = {
  __typename?: 'BikesType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GBikesType>>;
  localizations_connection?: Maybe<GBikesTypeRelationResponseCollection>;
  motorcycles: Array<Maybe<GMotorcycle>>;
  motorcycles_connection?: Maybe<GMotorcycleRelationResponseCollection>;
  promoBanner?: Maybe<GComponentComponentPromoBaner>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<GBikesTypeSectionsDynamicZone>>>;
  seo: GComponentSharedSeo;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GBikesTypeGLocalizationsArgs = {
  filters?: InputMaybe<GBikesTypeFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikesTypeGLocalizations_connectionArgs = {
  filters?: InputMaybe<GBikesTypeFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikesTypeGMotorcyclesArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikesTypeGMotorcycles_connectionArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GBikesTypeEntityResponseCollection = {
  __typename?: 'BikesTypeEntityResponseCollection';
  nodes: Array<GBikesType>;
  pageInfo: GPagination;
};

export type GBikesTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GBikesTypeFiltersInput>>>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  locale?: InputMaybe<GStringFilterInput>;
  localizations?: InputMaybe<GBikesTypeFiltersInput>;
  motorcycles?: InputMaybe<GMotorcycleFiltersInput>;
  not?: InputMaybe<GBikesTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GBikesTypeFiltersInput>>>;
  promoBanner?: InputMaybe<GComponentComponentPromoBanerFiltersInput>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  seo?: InputMaybe<GComponentSharedSeoFiltersInput>;
  title?: InputMaybe<GStringFilterInput>;
  type?: InputMaybe<GStringFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
};

export type GBikesTypeInput = {
  motorcycles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  promoBanner?: InputMaybe<GComponentComponentPromoBanerInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['BikesTypeSectionsDynamicZoneInput']['input']>
  >;
  seo?: InputMaybe<GComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GBikesTypeRelationResponseCollection = {
  __typename?: 'BikesTypeRelationResponseCollection';
  nodes: Array<GBikesType>;
};

export type GBikesTypeSectionsDynamicZone =
  | GComponentSectionTextRedactor
  | GError;

export type GBooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<GBooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GComponentComponentAccordionCard = {
  __typename?: 'ComponentComponentAccordionCard';
  button?: Maybe<GComponentUiButton>;
  cover: GUploadFile;
  id: Scalars['ID']['output'];
  show: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentComponentAccordionCardFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<GComponentComponentAccordionCardFiltersInput>>
  >;
  button?: InputMaybe<GComponentUiButtonFiltersInput>;
  not?: InputMaybe<GComponentComponentAccordionCardFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<GComponentComponentAccordionCardFiltersInput>>
  >;
  show?: InputMaybe<GBooleanFilterInput>;
  title?: InputMaybe<GStringFilterInput>;
};

export type GComponentComponentAttribute = {
  __typename?: 'ComponentComponentAttribute';
  attribute?: Maybe<Array<Maybe<GComponentComponentDetail>>>;
  id: Scalars['ID']['output'];
};

export type GComponentComponentAttributeGAttributeArgs = {
  filters?: InputMaybe<GComponentComponentDetailFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentComponentAttributeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentComponentAttributeFiltersInput>>>;
  attribute?: InputMaybe<GComponentComponentDetailFiltersInput>;
  not?: InputMaybe<GComponentComponentAttributeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentComponentAttributeFiltersInput>>>;
};

export type GComponentComponentAttributeInput = {
  attribute?: InputMaybe<Array<InputMaybe<GComponentComponentDetailInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GComponentComponentContacts = {
  __typename?: 'ComponentComponentContacts';
  contact_text?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentComponentContactsInput = {
  contact_text?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GComponentComponentDetail = {
  __typename?: 'ComponentComponentDetail';
  group_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  item?: Maybe<Array<Maybe<GComponentComponentDetailItem>>>;
};

export type GComponentComponentDetailGItemArgs = {
  filters?: InputMaybe<GComponentComponentDetailItemFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentComponentDetailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentComponentDetailFiltersInput>>>;
  group_name?: InputMaybe<GStringFilterInput>;
  item?: InputMaybe<GComponentComponentDetailItemFiltersInput>;
  not?: InputMaybe<GComponentComponentDetailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentComponentDetailFiltersInput>>>;
};

export type GComponentComponentDetailInput = {
  group_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Array<InputMaybe<GComponentComponentDetailItemInput>>>;
};

export type GComponentComponentDetailItem = {
  __typename?: 'ComponentComponentDetailItem';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type GComponentComponentDetailItemFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<GComponentComponentDetailItemFiltersInput>>
  >;
  key?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GComponentComponentDetailItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentComponentDetailItemFiltersInput>>>;
  value?: InputMaybe<GStringFilterInput>;
};

export type GComponentComponentDetailItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type GComponentComponentFooterColumn = {
  __typename?: 'ComponentComponentFooterColumn';
  id: Scalars['ID']['output'];
  link?: Maybe<Array<Maybe<GComponentUiLink>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentComponentFooterColumnGLinkArgs = {
  filters?: InputMaybe<GComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentComponentFooterColumnInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Array<InputMaybe<GComponentUiLinkInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GComponentComponentHeroSlide = {
  __typename?: 'ComponentComponentHeroSlide';
  button?: Maybe<Array<Maybe<GComponentUiButton>>>;
  cover: GUploadFile;
  id: Scalars['ID']['output'];
  navText: Scalars['String']['output'];
  show: Scalars['Boolean']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type GComponentComponentHeroSlideGButtonArgs = {
  filters?: InputMaybe<GComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentComponentHeroSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentComponentHeroSlideFiltersInput>>>;
  button?: InputMaybe<GComponentUiButtonFiltersInput>;
  navText?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GComponentComponentHeroSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentComponentHeroSlideFiltersInput>>>;
  show?: InputMaybe<GBooleanFilterInput>;
  subtitle?: InputMaybe<GStringFilterInput>;
  title?: InputMaybe<GStringFilterInput>;
};

export type GComponentComponentPromoBaner = {
  __typename?: 'ComponentComponentPromoBaner';
  active: Scalars['Boolean']['output'];
  cover?: Maybe<GUploadFile>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentComponentPromoBanerFiltersInput = {
  active?: InputMaybe<GBooleanFilterInput>;
  and?: InputMaybe<
    Array<InputMaybe<GComponentComponentPromoBanerFiltersInput>>
  >;
  description?: InputMaybe<GJSONFilterInput>;
  not?: InputMaybe<GComponentComponentPromoBanerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentComponentPromoBanerFiltersInput>>>;
  title?: InputMaybe<GStringFilterInput>;
};

export type GComponentComponentPromoBanerInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GComponentMotorcycleMotorcycle = {
  __typename?: 'ComponentMotorcycleMotorcycle';
  active: Scalars['Boolean']['output'];
  basePrice: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Array<Maybe<GUploadFile>>;
  image_connection?: Maybe<GUploadFileRelationResponseCollection>;
  title: Scalars['String']['output'];
};

export type GComponentMotorcycleMotorcycleGImageArgs = {
  filters?: InputMaybe<GUploadFileFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentMotorcycleMotorcycleGImage_connectionArgs = {
  filters?: InputMaybe<GUploadFileFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionAccordionSection = {
  __typename?: 'ComponentSectionAccordionSection';
  Cards?: Maybe<Array<Maybe<GComponentComponentAccordionCard>>>;
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentSectionAccordionSectionGCardsArgs = {
  filters?: InputMaybe<GComponentComponentAccordionCardFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionBigPromoSection = {
  __typename?: 'ComponentSectionBigPromoSection';
  buttons?: Maybe<Array<Maybe<GComponentUiButton>>>;
  cover?: Maybe<GUploadFile>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentSectionBigPromoSectionGButtonsArgs = {
  filters?: InputMaybe<GComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionBigThumbnailSection = {
  __typename?: 'ComponentSectionBigThumbnailSection';
  active: Scalars['Boolean']['output'];
  cards: Array<Maybe<GComponentComponentAccordionCard>>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentSectionBigThumbnailSectionGCardsArgs = {
  filters?: InputMaybe<GComponentComponentAccordionCardFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionHeroSlider = {
  __typename?: 'ComponentSectionHeroSlider';
  Slide: Array<Maybe<GComponentComponentHeroSlide>>;
  id: Scalars['ID']['output'];
};

export type GComponentSectionHeroSliderGSlideArgs = {
  filters?: InputMaybe<GComponentComponentHeroSlideFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionNewsSection = {
  __typename?: 'ComponentSectionNewsSection';
  button?: Maybe<GComponentUiButton>;
  id: Scalars['ID']['output'];
  latestNewsCount?: Maybe<Scalars['Int']['output']>;
  show: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentSectionPromoSliderSection = {
  __typename?: 'ComponentSectionPromoSliderSection';
  active: Scalars['Boolean']['output'];
  cta_title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  motocycles: Array<Maybe<GMotorcycle>>;
  motocycles_connection?: Maybe<GMotorcycleRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GComponentSectionPromoSliderSectionGMotocyclesArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionPromoSliderSectionGMotocycles_connectionArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionQuickNavigation = {
  __typename?: 'ComponentSectionQuickNavigation';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  links: Array<Maybe<GComponentUiLinkWithIcon>>;
};

export type GComponentSectionQuickNavigationGLinksArgs = {
  filters?: InputMaybe<GComponentUiLinkWithIconFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GComponentSectionTextRedactor = {
  __typename?: 'ComponentSectionTextRedactor';
  blocks?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  show: Scalars['Boolean']['output'];
  theme: GENUM_COMPONENTSECTIONTEXTREDACTOR_THEME;
};

export type GComponentSectionTitleSection = {
  __typename?: 'ComponentSectionTitleSection';
  cover?: Maybe<GUploadFile>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  title_html_tag: GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG;
};

export type GComponentSharedOpenGraph = {
  __typename?: 'ComponentSharedOpenGraph';
  id: Scalars['ID']['output'];
  ogDescription: Scalars['String']['output'];
  ogImage?: Maybe<GUploadFile>;
  ogTitle: Scalars['String']['output'];
  ogType?: Maybe<Scalars['String']['output']>;
  ogUrl?: Maybe<Scalars['String']['output']>;
};

export type GComponentSharedOpenGraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentSharedOpenGraphFiltersInput>>>;
  not?: InputMaybe<GComponentSharedOpenGraphFiltersInput>;
  ogDescription?: InputMaybe<GStringFilterInput>;
  ogTitle?: InputMaybe<GStringFilterInput>;
  ogType?: InputMaybe<GStringFilterInput>;
  ogUrl?: InputMaybe<GStringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentSharedOpenGraphFiltersInput>>>;
};

export type GComponentSharedOpenGraphInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['ID']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  ogType?: InputMaybe<Scalars['String']['input']>;
  ogUrl?: InputMaybe<Scalars['String']['input']>;
};

export type GComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<GUploadFile>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  openGraph?: Maybe<GComponentSharedOpenGraph>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};

export type GComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<GStringFilterInput>;
  keywords?: InputMaybe<GStringFilterInput>;
  metaDescription?: InputMaybe<GStringFilterInput>;
  metaRobots?: InputMaybe<GStringFilterInput>;
  metaTitle?: InputMaybe<GStringFilterInput>;
  metaViewport?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GComponentSharedSeoFiltersInput>;
  openGraph?: InputMaybe<GComponentSharedOpenGraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<GJSONFilterInput>;
};

export type GComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  openGraph?: InputMaybe<GComponentSharedOpenGraphInput>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type GComponentUiButton = {
  __typename?: 'ComponentUiButton';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  variant?: Maybe<GENUM_COMPONENTUIBUTTON_VARIANT>;
};

export type GComponentUiButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentUiButtonFiltersInput>>>;
  not?: InputMaybe<GComponentUiButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentUiButtonFiltersInput>>>;
  title?: InputMaybe<GStringFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
  variant?: InputMaybe<GStringFilterInput>;
};

export type GComponentUiLink = {
  __typename?: 'ComponentUiLink';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GComponentUiLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GComponentUiLinkFiltersInput>>>;
  not?: InputMaybe<GComponentUiLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentUiLinkFiltersInput>>>;
  title?: InputMaybe<GStringFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
};

export type GComponentUiLinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type GComponentUiLinkWithIcon = {
  __typename?: 'ComponentUiLinkWithIcon';
  active: Scalars['Boolean']['output'];
  icon?: Maybe<GUploadFile>;
  id: Scalars['ID']['output'];
  show: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GComponentUiLinkWithIconFiltersInput = {
  active?: InputMaybe<GBooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GComponentUiLinkWithIconFiltersInput>>>;
  not?: InputMaybe<GComponentUiLinkWithIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GComponentUiLinkWithIconFiltersInput>>>;
  show?: InputMaybe<GBooleanFilterInput>;
  title?: InputMaybe<GStringFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
};

export type GDateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<GDateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type GDateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<GDateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GDeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum GENUM_COMPONENTSECTIONTEXTREDACTOR_THEME {
  Dark = 'dark',
  Light = 'light',
}

export enum GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

export enum GENUM_COMPONENTUIBUTTON_VARIANT {
  Outline = 'outline',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum GENUM_MOTORCYCLE_AVAILABILITY_STATUS {
  InStock = 'in_stock',
  OnRequest = 'on_request',
}

export enum GENUM_MOTORCYCLE_CATEGORY {
  Custom = 'custom',
  Stock = 'stock',
}

export type GError = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type GFileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GFloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<GFloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GFooter = {
  __typename?: 'Footer';
  bottom?: Maybe<Array<Maybe<GFooterBottomDynamicZone>>>;
  column1?: Maybe<GComponentComponentFooterColumn>;
  column2?: Maybe<GComponentComponentFooterColumn>;
  column3?: Maybe<GComponentComponentFooterColumn>;
  contacts?: Maybe<GComponentComponentContacts>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GFooter>>;
  localizations_connection?: Maybe<GFooterRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  show: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GFooterBottomDynamicZone = GComponentUiLink | GError;

export type GFooterInput = {
  bottom?: InputMaybe<Array<Scalars['FooterBottomDynamicZoneInput']['input']>>;
  column1?: InputMaybe<GComponentComponentFooterColumnInput>;
  column2?: InputMaybe<GComponentComponentFooterColumnInput>;
  column3?: InputMaybe<GComponentComponentFooterColumnInput>;
  contacts?: InputMaybe<GComponentComponentContactsInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  show?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GFooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  nodes: Array<GFooter>;
};

export type GGenericMorph =
  | GBikeColor
  | GBikeTypesPage
  | GBikesType
  | GComponentComponentAccordionCard
  | GComponentComponentAttribute
  | GComponentComponentContacts
  | GComponentComponentDetail
  | GComponentComponentDetailItem
  | GComponentComponentFooterColumn
  | GComponentComponentHeroSlide
  | GComponentComponentPromoBaner
  | GComponentMotorcycleMotorcycle
  | GComponentSectionAccordionSection
  | GComponentSectionBigPromoSection
  | GComponentSectionBigThumbnailSection
  | GComponentSectionHeroSlider
  | GComponentSectionNewsSection
  | GComponentSectionPromoSliderSection
  | GComponentSectionQuickNavigation
  | GComponentSectionTextRedactor
  | GComponentSectionTitleSection
  | GComponentSharedOpenGraph
  | GComponentSharedSeo
  | GComponentUiButton
  | GComponentUiLink
  | GComponentUiLinkWithIcon
  | GFooter
  | GHeader
  | GI18NLocale
  | GMotorcycle
  | GNewsPage
  | GNewsPost
  | GPage
  | GReviewWorkflowsWorkflow
  | GReviewWorkflowsWorkflowStage
  | GUploadFile
  | GUsersPermissionsPermission
  | GUsersPermissionsRole
  | GUsersPermissionsUser;

export type GHeader = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<GHeaderLinksDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GHeader>>;
  localizations_connection?: Maybe<GHeaderRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GHeaderInput = {
  links?: InputMaybe<Array<Scalars['HeaderLinksDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GHeaderLinksDynamicZone = GComponentUiLink | GError;

export type GHeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  nodes: Array<GHeader>;
};

export type GI18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GI18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<GI18NLocale>;
  pageInfo: GPagination;
};

export type GI18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GI18NLocaleFiltersInput>>>;
  code?: InputMaybe<GStringFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GI18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GI18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
};

export type GIDFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<GIDFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type GIntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<GIntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type GJSONFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<GJSONFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type GMotorcycle = {
  __typename?: 'Motorcycle';
  availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
  available_colors: Array<Maybe<GBikeColor>>;
  available_colors_connection?: Maybe<GBikeColorRelationResponseCollection>;
  banner?: Maybe<GComponentComponentPromoBaner>;
  base_price: Scalars['Int']['output'];
  bikes_type?: Maybe<GBikesType>;
  category: GENUM_MOTORCYCLE_CATEGORY;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  details?: Maybe<GComponentComponentAttribute>;
  documentId: Scalars['ID']['output'];
  gallery: Array<Maybe<GUploadFile>>;
  gallery_connection?: Maybe<GUploadFileRelationResponseCollection>;
  listing_image?: Maybe<GUploadFile>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GMotorcycle>>;
  localizations_connection?: Maybe<GMotorcycleRelationResponseCollection>;
  main_image: GUploadFile;
  model_name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<GComponentSharedSeo>;
  sku: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year: Scalars['Date']['output'];
};

export type GMotorcycleGAvailable_colorsArgs = {
  filters?: InputMaybe<GBikeColorFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GMotorcycleGAvailable_colors_connectionArgs = {
  filters?: InputMaybe<GBikeColorFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GMotorcycleGGalleryArgs = {
  filters?: InputMaybe<GUploadFileFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GMotorcycleGGallery_connectionArgs = {
  filters?: InputMaybe<GUploadFileFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GMotorcycleGLocalizationsArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GMotorcycleGLocalizations_connectionArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GMotorcycleEntityResponseCollection = {
  __typename?: 'MotorcycleEntityResponseCollection';
  nodes: Array<GMotorcycle>;
  pageInfo: GPagination;
};

export type GMotorcycleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GMotorcycleFiltersInput>>>;
  availability_status?: InputMaybe<GStringFilterInput>;
  available_colors?: InputMaybe<GBikeColorFiltersInput>;
  banner?: InputMaybe<GComponentComponentPromoBanerFiltersInput>;
  base_price?: InputMaybe<GIntFilterInput>;
  bikes_type?: InputMaybe<GBikesTypeFiltersInput>;
  category?: InputMaybe<GStringFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  description?: InputMaybe<GJSONFilterInput>;
  details?: InputMaybe<GComponentComponentAttributeFiltersInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  locale?: InputMaybe<GStringFilterInput>;
  localizations?: InputMaybe<GMotorcycleFiltersInput>;
  model_name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GMotorcycleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GMotorcycleFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  seo?: InputMaybe<GComponentSharedSeoFiltersInput>;
  sku?: InputMaybe<GStringFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  year?: InputMaybe<GDateFilterInput>;
};

export type GMotorcycleInput = {
  availability_status?: InputMaybe<GENUM_MOTORCYCLE_AVAILABILITY_STATUS>;
  available_colors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  banner?: InputMaybe<GComponentComponentPromoBanerInput>;
  base_price?: InputMaybe<Scalars['Int']['input']>;
  bikes_type?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<GENUM_MOTORCYCLE_CATEGORY>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  details?: InputMaybe<GComponentComponentAttributeInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listing_image?: InputMaybe<Scalars['ID']['input']>;
  main_image?: InputMaybe<Scalars['ID']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<GComponentSharedSeoInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Date']['input']>;
};

export type GMotorcycleRelationResponseCollection = {
  __typename?: 'MotorcycleRelationResponseCollection';
  nodes: Array<GMotorcycle>;
};

export type GMutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<GUsersPermissionsLoginPayload>;
  createBikeColor?: Maybe<GBikeColor>;
  createBikesType?: Maybe<GBikesType>;
  createMotorcycle?: Maybe<GMotorcycle>;
  createNewsPost?: Maybe<GNewsPost>;
  createPage?: Maybe<GPage>;
  createReviewWorkflowsWorkflow?: Maybe<GReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<GReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<GUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: GUsersPermissionsUserEntityResponse;
  deleteBikeColor?: Maybe<GDeleteMutationResponse>;
  deleteBikeTypesPage?: Maybe<GDeleteMutationResponse>;
  deleteBikesType?: Maybe<GDeleteMutationResponse>;
  deleteFooter?: Maybe<GDeleteMutationResponse>;
  deleteHeader?: Maybe<GDeleteMutationResponse>;
  deleteMotorcycle?: Maybe<GDeleteMutationResponse>;
  deleteNewsPage?: Maybe<GDeleteMutationResponse>;
  deleteNewsPost?: Maybe<GDeleteMutationResponse>;
  deletePage?: Maybe<GDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<GDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<GDeleteMutationResponse>;
  deleteUploadFile?: Maybe<GUploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<GUsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: GUsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<GUsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<GUsersPermissionsPasswordPayload>;
  login: GUsersPermissionsLoginPayload;
  /** Register a user */
  register: GUsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<GUsersPermissionsLoginPayload>;
  updateBikeColor?: Maybe<GBikeColor>;
  updateBikeTypesPage?: Maybe<GBikeTypesPage>;
  updateBikesType?: Maybe<GBikesType>;
  updateFooter?: Maybe<GFooter>;
  updateHeader?: Maybe<GHeader>;
  updateMotorcycle?: Maybe<GMotorcycle>;
  updateNewsPage?: Maybe<GNewsPage>;
  updateNewsPost?: Maybe<GNewsPost>;
  updatePage?: Maybe<GPage>;
  updateReviewWorkflowsWorkflow?: Maybe<GReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<GReviewWorkflowsWorkflowStage>;
  updateUploadFile: GUploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<GUsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: GUsersPermissionsUserEntityResponse;
};

export type GMutationGChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type GMutationGCreateBikeColorArgs = {
  data: GBikeColorInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreateBikesTypeArgs = {
  data: GBikesTypeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreateMotorcycleArgs = {
  data: GMotorcycleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreateNewsPostArgs = {
  data: GNewsPostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreatePageArgs = {
  data: GPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreateReviewWorkflowsWorkflowArgs = {
  data: GReviewWorkflowsWorkflowInput;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreateReviewWorkflowsWorkflowStageArgs = {
  data: GReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGCreateUsersPermissionsRoleArgs = {
  data: GUsersPermissionsRoleInput;
};

export type GMutationGCreateUsersPermissionsUserArgs = {
  data: GUsersPermissionsUserInput;
};

export type GMutationGDeleteBikeColorArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteBikeTypesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteBikesTypeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteMotorcycleArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteNewsPostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeletePageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};

export type GMutationGDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};

export type GMutationGDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type GMutationGDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type GMutationGDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type GMutationGEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type GMutationGForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type GMutationGLoginArgs = {
  input: GUsersPermissionsLoginInput;
};

export type GMutationGRegisterArgs = {
  input: GUsersPermissionsRegisterInput;
};

export type GMutationGResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type GMutationGUpdateBikeColorArgs = {
  data: GBikeColorInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateBikeTypesPageArgs = {
  data: GBikeTypesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateBikesTypeArgs = {
  data: GBikesTypeInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateFooterArgs = {
  data: GFooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateHeaderArgs = {
  data: GHeaderInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateMotorcycleArgs = {
  data: GMotorcycleInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateNewsPageArgs = {
  data: GNewsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateNewsPostArgs = {
  data: GNewsPostInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdatePageArgs = {
  data: GPageInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateReviewWorkflowsWorkflowArgs = {
  data: GReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateReviewWorkflowsWorkflowStageArgs = {
  data: GReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GMutationGUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<GFileInfoInput>;
};

export type GMutationGUpdateUsersPermissionsRoleArgs = {
  data: GUsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type GMutationGUpdateUsersPermissionsUserArgs = {
  data: GUsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type GNewsPage = {
  __typename?: 'NewsPage';
  banner?: Maybe<GComponentComponentPromoBaner>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GNewsPage>>;
  localizations_connection?: Maybe<GNewsPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: GComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GNewsPageInput = {
  banner?: InputMaybe<GComponentComponentPromoBanerInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<GComponentSharedSeoInput>;
};

export type GNewsPageRelationResponseCollection = {
  __typename?: 'NewsPageRelationResponseCollection';
  nodes: Array<GNewsPage>;
};

export type GNewsPost = {
  __typename?: 'NewsPost';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GNewsPost>>;
  localizations_connection?: Maybe<GNewsPostRelationResponseCollection>;
  previewText?: Maybe<Scalars['String']['output']>;
  preview_cover?: Maybe<GUploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<GNewsPostSectionsDynamicZone>>>;
  seo: GComponentSharedSeo;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type GNewsPostGLocalizationsArgs = {
  filters?: InputMaybe<GNewsPostFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GNewsPostGLocalizations_connectionArgs = {
  filters?: InputMaybe<GNewsPostFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GNewsPostEntityResponseCollection = {
  __typename?: 'NewsPostEntityResponseCollection';
  nodes: Array<GNewsPost>;
  pageInfo: GPagination;
};

export type GNewsPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GNewsPostFiltersInput>>>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  locale?: InputMaybe<GStringFilterInput>;
  localizations?: InputMaybe<GNewsPostFiltersInput>;
  not?: InputMaybe<GNewsPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GNewsPostFiltersInput>>>;
  previewText?: InputMaybe<GStringFilterInput>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  seo?: InputMaybe<GComponentSharedSeoFiltersInput>;
  title?: InputMaybe<GStringFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
};

export type GNewsPostInput = {
  previewText?: InputMaybe<Scalars['String']['input']>;
  preview_cover?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['NewsPostSectionsDynamicZoneInput']['input']>
  >;
  seo?: InputMaybe<GComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type GNewsPostRelationResponseCollection = {
  __typename?: 'NewsPostRelationResponseCollection';
  nodes: Array<GNewsPost>;
};

export type GNewsPostSectionsDynamicZone =
  | GComponentSectionAccordionSection
  | GComponentSectionBigPromoSection
  | GComponentSectionBigThumbnailSection
  | GComponentSectionPromoSliderSection
  | GComponentSectionTextRedactor
  | GComponentSectionTitleSection
  | GError;

export type GPage = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GPage>>;
  localizations_connection?: Maybe<GPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<GPageSectionsDynamicZone>>>;
  seo: GComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type GPageGLocalizationsArgs = {
  filters?: InputMaybe<GPageFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GPageGLocalizations_connectionArgs = {
  filters?: InputMaybe<GPageFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GPageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<GPage>;
  pageInfo: GPagination;
};

export type GPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GPageFiltersInput>>>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  locale?: InputMaybe<GStringFilterInput>;
  localizations?: InputMaybe<GPageFiltersInput>;
  not?: InputMaybe<GPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GPageFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  seo?: InputMaybe<GComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
};

export type GPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['PageSectionsDynamicZoneInput']['input']>
  >;
  seo?: InputMaybe<GComponentSharedSeoInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type GPageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<GPage>;
};

export type GPageSectionsDynamicZone =
  | GComponentSectionAccordionSection
  | GComponentSectionBigPromoSection
  | GComponentSectionBigThumbnailSection
  | GComponentSectionHeroSlider
  | GComponentSectionNewsSection
  | GComponentSectionPromoSliderSection
  | GComponentSectionQuickNavigation
  | GComponentSectionTextRedactor
  | GComponentSectionTitleSection
  | GError;

export type GPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GPaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum GPublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type GQuery = {
  __typename?: 'Query';
  bikeColor?: Maybe<GBikeColor>;
  bikeColors: Array<Maybe<GBikeColor>>;
  bikeColors_connection?: Maybe<GBikeColorEntityResponseCollection>;
  bikeTypesPage?: Maybe<GBikeTypesPage>;
  bikesType?: Maybe<GBikesType>;
  bikesTypes: Array<Maybe<GBikesType>>;
  bikesTypes_connection?: Maybe<GBikesTypeEntityResponseCollection>;
  footer?: Maybe<GFooter>;
  header?: Maybe<GHeader>;
  i18NLocale?: Maybe<GI18NLocale>;
  i18NLocales: Array<Maybe<GI18NLocale>>;
  i18NLocales_connection?: Maybe<GI18NLocaleEntityResponseCollection>;
  me?: Maybe<GUsersPermissionsMe>;
  motorcycle?: Maybe<GMotorcycle>;
  motorcycles: Array<Maybe<GMotorcycle>>;
  motorcycles_connection?: Maybe<GMotorcycleEntityResponseCollection>;
  newsPage?: Maybe<GNewsPage>;
  newsPost?: Maybe<GNewsPost>;
  newsPosts: Array<Maybe<GNewsPost>>;
  newsPosts_connection?: Maybe<GNewsPostEntityResponseCollection>;
  page?: Maybe<GPage>;
  pages: Array<Maybe<GPage>>;
  pages_connection?: Maybe<GPageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<GReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<GReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<GReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<GReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<GReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<GReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<GUploadFile>;
  uploadFiles: Array<Maybe<GUploadFile>>;
  uploadFiles_connection?: Maybe<GUploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<GUsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<GUsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<GUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<GUsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<GUsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<GUsersPermissionsUserEntityResponseCollection>;
};

export type GQueryGBikeColorArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGBikeColorsArgs = {
  filters?: InputMaybe<GBikeColorFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGBikeColors_connectionArgs = {
  filters?: InputMaybe<GBikeColorFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGBikeTypesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGBikesTypeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGBikesTypesArgs = {
  filters?: InputMaybe<GBikesTypeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGBikesTypes_connectionArgs = {
  filters?: InputMaybe<GBikesTypeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGI18NLocalesArgs = {
  filters?: InputMaybe<GI18NLocaleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGI18NLocales_connectionArgs = {
  filters?: InputMaybe<GI18NLocaleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGMotorcycleArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGMotorcyclesArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGMotorcycles_connectionArgs = {
  filters?: InputMaybe<GMotorcycleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGNewsPostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGNewsPostsArgs = {
  filters?: InputMaybe<GNewsPostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGNewsPosts_connectionArgs = {
  filters?: InputMaybe<GNewsPostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGPageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGPagesArgs = {
  filters?: InputMaybe<GPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGPages_connectionArgs = {
  filters?: InputMaybe<GPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGReviewWorkflowsWorkflowStages_connectionArgs = {
  filters?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<GReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGReviewWorkflowsWorkflows_connectionArgs = {
  filters?: InputMaybe<GReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUploadFilesArgs = {
  filters?: InputMaybe<GUploadFileFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUploadFiles_connectionArgs = {
  filters?: InputMaybe<GUploadFileFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUsersPermissionsRolesArgs = {
  filters?: InputMaybe<GUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUsersPermissionsRoles_connectionArgs = {
  filters?: InputMaybe<GUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUsersPermissionsUsersArgs = {
  filters?: InputMaybe<GUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GQueryGUsersPermissionsUsers_connectionArgs = {
  filters?: InputMaybe<GUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<GPublicationStatus>;
};

export type GReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<GReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<GReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<GReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GReviewWorkflowsWorkflowGStagesArgs = {
  filters?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GReviewWorkflowsWorkflowGStages_connectionArgs = {
  filters?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<GReviewWorkflowsWorkflow>;
  pageInfo: GPagination;
};

export type GReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<GJSONFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
};

export type GReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type GReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<GReviewWorkflowsWorkflow>;
};

export type GReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<GReviewWorkflowsWorkflowStage>;
  pageInfo: GPagination;
};

export type GReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>>
  >;
  color?: InputMaybe<GStringFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  workflow?: InputMaybe<GReviewWorkflowsWorkflowFiltersInput>;
};

export type GReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type GReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<GReviewWorkflowsWorkflowStage>;
};

export type GStringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<GStringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type GUploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GGenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type GUploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<GUploadFile>;
  pageInfo: GPagination;
};

export type GUploadFileFiltersInput = {
  alternativeText?: InputMaybe<GStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GUploadFileFiltersInput>>>;
  caption?: InputMaybe<GStringFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  ext?: InputMaybe<GStringFilterInput>;
  formats?: InputMaybe<GJSONFilterInput>;
  hash?: InputMaybe<GStringFilterInput>;
  height?: InputMaybe<GIntFilterInput>;
  mime?: InputMaybe<GStringFilterInput>;
  name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GUploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GUploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<GStringFilterInput>;
  provider?: InputMaybe<GStringFilterInput>;
  provider_metadata?: InputMaybe<GJSONFilterInput>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  size?: InputMaybe<GFloatFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
  width?: InputMaybe<GIntFilterInput>;
};

export type GUploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<GUploadFile>;
};

export type GUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type GUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type GUsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type GUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: GUsersPermissionsMe;
};

export type GUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<GUsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type GUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type GUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type GUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<GUsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GUsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<GStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GUsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  not?: InputMaybe<GUsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GUsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  role?: InputMaybe<GUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
};

export type GUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<GUsersPermissionsPermission>;
};

export type GUsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type GUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<GUsersPermissionsPermission>>;
  permissions_connection?: Maybe<GUsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<GUsersPermissionsUser>>;
  users_connection?: Maybe<GUsersPermissionsUserRelationResponseCollection>;
};

export type GUsersPermissionsRoleGPermissionsArgs = {
  filters?: InputMaybe<GUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GUsersPermissionsRoleGPermissions_connectionArgs = {
  filters?: InputMaybe<GUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GUsersPermissionsRoleGUsersArgs = {
  filters?: InputMaybe<GUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GUsersPermissionsRoleGUsers_connectionArgs = {
  filters?: InputMaybe<GUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<GPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GUsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<GUsersPermissionsRole>;
  pageInfo: GPagination;
};

export type GUsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GUsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  description?: InputMaybe<GStringFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GUsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GUsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<GUsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  type?: InputMaybe<GStringFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  users?: InputMaybe<GUsersPermissionsUserFiltersInput>;
};

export type GUsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type GUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type GUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<GUsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type GUsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<GUsersPermissionsUser>;
};

export type GUsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<GUsersPermissionsUser>;
  pageInfo: GPagination;
};

export type GUsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GUsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<GBooleanFilterInput>;
  confirmed?: InputMaybe<GBooleanFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  email?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GUsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GUsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<GStringFilterInput>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  role?: InputMaybe<GUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  username?: InputMaybe<GStringFilterInput>;
};

export type GUsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<GUsersPermissionsUser>;
};

export type GBigPromoSectionFragmentFragment = {
  __typename: 'ComponentSectionBigPromoSection';
  title?: string | null;
  subtitle?: string | null;
  buttons?: Array<{
    __typename: 'ComponentUiButton';
    variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
    title: string;
    url: string;
  } | null> | null;
  cover?: {
    __typename: 'UploadFile';
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
  } | null;
};

export type GBigThumbnailSectionFragmentFragment = {
  __typename: 'ComponentSectionBigThumbnailSection';
  title?: string | null;
  active: boolean;
  cards: Array<{
    __typename: 'ComponentComponentAccordionCard';
    show: boolean;
    title?: string | null;
    button?: {
      __typename: 'ComponentUiButton';
      title: string;
      url: string;
      variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
    } | null;
    cover: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    };
  } | null>;
};

export type GCategoryAccordionFragmentFragment = {
  __typename: 'ComponentSectionAccordionSection';
  active: boolean;
  title?: string | null;
  Cards?: Array<{
    __typename: 'ComponentComponentAccordionCard';
    show: boolean;
    title?: string | null;
    button?: {
      __typename: 'ComponentUiButton';
      title: string;
      url: string;
      variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
    } | null;
    cover: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    };
  } | null> | null;
};

export type GHeroSectionFragentFragment = {
  __typename: 'ComponentSectionHeroSlider';
  Slide: Array<{
    __typename: 'ComponentComponentHeroSlide';
    show: boolean;
    title: string;
    subtitle: string;
    navText: string;
    button?: Array<{
      __typename: 'ComponentUiButton';
      title: string;
      url: string;
      variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
    } | null> | null;
    cover: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    };
  } | null>;
};

export type GMotorcycleFragmentFragment = {
  __typename: 'Motorcycle';
  category: GENUM_MOTORCYCLE_CATEGORY;
  model_name: string;
  sku: string;
  year: any;
  availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
  base_price: number;
  description?: any | null;
  available_colors: Array<{ __typename: 'BikeColor'; color: string } | null>;
  bikes_type?: { __typename: 'BikesType'; type: string; title: string } | null;
  listing_image?: {
    __typename: 'UploadFile';
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
  } | null;
  main_image: {
    __typename: 'UploadFile';
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
  };
  gallery: Array<{
    __typename: 'UploadFile';
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
  } | null>;
  details?: {
    __typename: 'ComponentComponentAttribute';
    attribute?: Array<{
      __typename: 'ComponentComponentDetail';
      group_name: string;
      item?: Array<{
        __typename: 'ComponentComponentDetailItem';
        key?: string | null;
        value?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GNewsSectionFragmentFragment = {
  __typename: 'ComponentSectionNewsSection';
  show: boolean;
  title?: string | null;
  latestNewsCount?: number | null;
  button?: {
    __typename: 'ComponentUiButton';
    title: string;
    url: string;
    variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
  } | null;
};

export type GProductDetailsFragment = {
  __typename: 'ComponentComponentAttribute';
  attribute?: Array<{
    __typename: 'ComponentComponentDetail';
    group_name: string;
    item?: Array<{
      __typename: 'ComponentComponentDetailItem';
      key?: string | null;
      value?: string | null;
    } | null> | null;
  } | null> | null;
};

export type GPromoSliderSectionFragmentFragment = {
  __typename: 'ComponentSectionPromoSliderSection';
  title?: string | null;
  cta_title?: string | null;
  active: boolean;
  motocycles: Array<{
    __typename: 'Motorcycle';
    documentId: string;
    sku: string;
    availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
    year: any;
    base_price: number;
    model_name: string;
    description?: any | null;
    bikes_type?: {
      __typename?: 'BikesType';
      title: string;
      type: string;
    } | null;
    listing_image?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
    main_image: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    };
    gallery: Array<{
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null>;
  } | null>;
};

export type GQuickNavigationFragmentFragment = {
  __typename: 'ComponentSectionQuickNavigation';
  active: boolean;
  links: Array<{
    __typename: 'ComponentUiLinkWithIcon';
    active: boolean;
    show: boolean;
    title: string;
    url: string;
    icon?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
  } | null>;
};

export type GSeoFragmentFragment = {
  __typename: 'ComponentSharedSeo';
  metaTitle: string;
  metaDescription: string;
  keywords?: string | null;
  canonicalURL?: string | null;
  metaRobots?: string | null;
  metaViewport?: string | null;
  structuredData?: any | null;
  metaImage?: {
    __typename: 'UploadFile';
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
  } | null;
  openGraph?: {
    __typename: 'ComponentSharedOpenGraph';
    id: string;
    ogTitle: string;
    ogType?: string | null;
    ogUrl?: string | null;
    ogDescription: string;
    ogImage?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
  } | null;
};

export type GTextRedactorSectionFragment = {
  __typename: 'ComponentSectionTextRedactor';
  id: string;
  theme: GENUM_COMPONENTSECTIONTEXTREDACTOR_THEME;
  show: boolean;
  blocks?: any | null;
};

export type GTitleSectionFragmentFragment = {
  __typename: 'ComponentSectionTitleSection';
  title?: string | null;
  description?: any | null;
  title_html_tag: GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG;
  cover?: {
    __typename: 'UploadFile';
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
  } | null;
};

export type GComponentUiLinkFragmentFragment = {
  __typename: 'ComponentUiLink';
  id: string;
  title: string;
  url: string;
};

export type GUploadFileFragmentFragment = {
  __typename: 'UploadFile';
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  formats?: any | null;
  hash: string;
  ext?: string | null;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  publishedAt?: any | null;
};

export type GGGetBikeTypePageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  type: Scalars['String']['input'];
}>;

export type GGGetBikeTypePageSeoQuery = {
  __typename?: 'Query';
  bikesTypes: Array<{
    __typename?: 'BikesType';
    seo: {
      __typename: 'ComponentSharedSeo';
      metaTitle: string;
      metaDescription: string;
      keywords?: string | null;
      canonicalURL?: string | null;
      metaRobots?: string | null;
      metaViewport?: string | null;
      structuredData?: any | null;
      metaImage?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
      openGraph?: {
        __typename: 'ComponentSharedOpenGraph';
        id: string;
        ogTitle: string;
        ogType?: string | null;
        ogUrl?: string | null;
        ogDescription: string;
        ogImage?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null;
    };
  } | null>;
};

export type GGGetBikesTypesPageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGGetBikesTypesPageSeoQuery = {
  __typename?: 'Query';
  bikeTypesPage?: {
    __typename?: 'BikeTypesPage';
    seo?: {
      __typename: 'ComponentSharedSeo';
      metaTitle: string;
      metaDescription: string;
      keywords?: string | null;
      canonicalURL?: string | null;
      metaRobots?: string | null;
      metaViewport?: string | null;
      structuredData?: any | null;
      metaImage?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
      openGraph?: {
        __typename: 'ComponentSharedOpenGraph';
        id: string;
        ogTitle: string;
        ogType?: string | null;
        ogUrl?: string | null;
        ogDescription: string;
        ogImage?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GGGetFooterQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGGetFooterQuery = {
  __typename?: 'Query';
  footer?: {
    __typename: 'Footer';
    documentId: string;
    contacts?: {
      __typename: 'ComponentComponentContacts';
      id: string;
      title?: string | null;
      contact_text?: any | null;
    } | null;
    column1?: {
      __typename: 'ComponentComponentFooterColumn';
      id: string;
      title?: string | null;
      link?: Array<{
        __typename: 'ComponentUiLink';
        id: string;
        title: string;
        url: string;
      } | null> | null;
    } | null;
    column2?: {
      __typename: 'ComponentComponentFooterColumn';
      id: string;
      title?: string | null;
      link?: Array<{
        __typename: 'ComponentUiLink';
        id: string;
        title: string;
        url: string;
      } | null> | null;
    } | null;
    column3?: {
      __typename: 'ComponentComponentFooterColumn';
      id: string;
      title?: string | null;
      link?: Array<{
        __typename: 'ComponentUiLink';
        id: string;
        title: string;
        url: string;
      } | null> | null;
    } | null;
    bottom?: Array<
      | {
          __typename: 'ComponentUiLink';
          id: string;
          title: string;
          url: string;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null;
};

export type GComponentUiLinkFragment = {
  __typename: 'ComponentUiLink';
  id: string;
  title: string;
  url: string;
};

export type GGGetMotorcyclePageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  sku: Scalars['String']['input'];
}>;

export type GGGetMotorcyclePageSeoQuery = {
  __typename?: 'Query';
  motorcycles: Array<{
    __typename?: 'Motorcycle';
    seo?: {
      __typename: 'ComponentSharedSeo';
      metaTitle: string;
      metaDescription: string;
      keywords?: string | null;
      canonicalURL?: string | null;
      metaRobots?: string | null;
      metaViewport?: string | null;
      structuredData?: any | null;
      metaImage?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
      openGraph?: {
        __typename: 'ComponentSharedOpenGraph';
        id: string;
        ogTitle: string;
        ogType?: string | null;
        ogUrl?: string | null;
        ogDescription: string;
        ogImage?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null;
    } | null;
  } | null>;
};

export type GGGET_MOTOCYCLES_BY_TYPEQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  type: Scalars['String']['input'];
}>;

export type GGGET_MOTOCYCLES_BY_TYPEQuery = {
  __typename?: 'Query';
  bikesTypes: Array<{
    __typename: 'BikesType';
    type: string;
    title: string;
    id: string;
    promoBanner?: {
      __typename?: 'ComponentComponentPromoBaner';
      active: boolean;
      title?: string | null;
      description?: any | null;
      cover?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
    } | null;
    sections?: Array<
      | {
          __typename: 'ComponentSectionTextRedactor';
          id: string;
          theme: GENUM_COMPONENTSECTIONTEXTREDACTOR_THEME;
          show: boolean;
          blocks?: any | null;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
    motorcycles: Array<{
      __typename?: 'Motorcycle';
      model_name: string;
      base_price: number;
      sku: string;
      id: string;
      bikes_type?: {
        __typename: 'BikesType';
        type: string;
        title: string;
      } | null;
      listing_image?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
    } | null>;
  } | null>;
};

export type GGGET_BIKES_TYPE_PAGEQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGGET_BIKES_TYPE_PAGEQuery = {
  __typename?: 'Query';
  bikeTypesPage?: {
    __typename: 'BikeTypesPage';
    navigator_title: string;
    id: string;
    displayed_bike_types: Array<{
      __typename?: 'BikesType';
      title: string;
      type: string;
      motorcycles: Array<{
        __typename?: 'Motorcycle';
        model_name: string;
        base_price: number;
        sku: string;
        bikes_type?: {
          __typename: 'BikesType';
          type: string;
          title: string;
        } | null;
        listing_image?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null>;
    } | null>;
  } | null;
};

export type GGGetNewsPageQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GGGetNewsPageQueryQuery = {
  __typename?: 'Query';
  newsPosts: Array<{
    __typename: 'NewsPost';
    title: string;
    previewText?: string | null;
    url: string;
    id: string;
    preview_cover?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
    sections?: Array<
      | { __typename?: 'ComponentSectionAccordionSection' }
      | { __typename?: 'ComponentSectionBigPromoSection' }
      | { __typename?: 'ComponentSectionBigThumbnailSection' }
      | { __typename?: 'ComponentSectionPromoSliderSection' }
      | {
          __typename: 'ComponentSectionTextRedactor';
          id: string;
          theme: GENUM_COMPONENTSECTIONTEXTREDACTOR_THEME;
          show: boolean;
          blocks?: any | null;
        }
      | {
          __typename: 'ComponentSectionTitleSection';
          title?: string | null;
          description?: any | null;
          title_html_tag: GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG;
          cover?: {
            __typename: 'UploadFile';
            documentId: string;
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number | null;
            height?: number | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
            createdAt?: any | null;
            updatedAt?: any | null;
            publishedAt?: any | null;
          } | null;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null>;
};

export type GGGetNewsPageSeoQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGGetNewsPageSeoQueryQuery = {
  __typename?: 'Query';
  newsPage?: {
    __typename?: 'NewsPage';
    seo: {
      __typename: 'ComponentSharedSeo';
      metaTitle: string;
      metaDescription: string;
      keywords?: string | null;
      canonicalURL?: string | null;
      metaRobots?: string | null;
      metaViewport?: string | null;
      structuredData?: any | null;
      metaImage?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
      openGraph?: {
        __typename: 'ComponentSharedOpenGraph';
        id: string;
        ogTitle: string;
        ogType?: string | null;
        ogUrl?: string | null;
        ogDescription: string;
        ogImage?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null;
    };
  } | null;
};

export type GGGetNewsPostSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GGGetNewsPostSeoQuery = {
  __typename?: 'Query';
  newsPosts: Array<{
    __typename?: 'NewsPost';
    seo: {
      __typename: 'ComponentSharedSeo';
      metaTitle: string;
      metaDescription: string;
      keywords?: string | null;
      canonicalURL?: string | null;
      metaRobots?: string | null;
      metaViewport?: string | null;
      structuredData?: any | null;
      metaImage?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
      openGraph?: {
        __typename: 'ComponentSharedOpenGraph';
        id: string;
        ogTitle: string;
        ogType?: string | null;
        ogUrl?: string | null;
        ogDescription: string;
        ogImage?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null;
    };
  } | null>;
};

export type GGGetNewsPostsQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  start?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GGGetNewsPostsQueryQuery = {
  __typename?: 'Query';
  newsPosts: Array<{
    __typename: 'NewsPost';
    title: string;
    url: string;
    previewText?: string | null;
    preview_cover?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
  } | null>;
  newsPosts_connection?: {
    __typename?: 'NewsPostEntityResponseCollection';
    pageInfo: {
      __typename?: 'Pagination';
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  } | null;
};

export type GGGetPageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GGGetPageSeoQuery = {
  __typename?: 'Query';
  pages: Array<{
    __typename?: 'Page';
    seo: {
      __typename: 'ComponentSharedSeo';
      metaTitle: string;
      metaDescription: string;
      keywords?: string | null;
      canonicalURL?: string | null;
      metaRobots?: string | null;
      metaViewport?: string | null;
      structuredData?: any | null;
      metaImage?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
      openGraph?: {
        __typename: 'ComponentSharedOpenGraph';
        id: string;
        ogTitle: string;
        ogType?: string | null;
        ogUrl?: string | null;
        ogDescription: string;
        ogImage?: {
          __typename: 'UploadFile';
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          formats?: any | null;
          hash: string;
          ext?: string | null;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          provider: string;
          provider_metadata?: any | null;
          createdAt?: any | null;
          updatedAt?: any | null;
          publishedAt?: any | null;
        } | null;
      } | null;
    };
  } | null>;
};

export type GGGetPreloadedNewsPostsQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  start?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GGGetPreloadedNewsPostsQueryQuery = {
  __typename?: 'Query';
  newsPage?: {
    __typename: 'NewsPage';
    id: string;
    banner?: {
      __typename: 'ComponentComponentPromoBaner';
      active: boolean;
      title?: string | null;
      description?: any | null;
      cover?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
    } | null;
  } | null;
  newsPosts: Array<{
    __typename: 'NewsPost';
    title: string;
    url: string;
    previewText?: string | null;
    preview_cover?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
  } | null>;
  newsPosts_connection?: {
    __typename?: 'NewsPostEntityResponseCollection';
    pageInfo: {
      __typename?: 'Pagination';
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  } | null;
};

export type GGGET_MOTOCYCLEQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
}>;

export type GGGET_MOTOCYCLEQuery = {
  __typename?: 'Query';
  motorcycles: Array<{
    __typename: 'Motorcycle';
    category: GENUM_MOTORCYCLE_CATEGORY;
    model_name: string;
    sku: string;
    year: any;
    availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
    base_price: number;
    description?: any | null;
    id: string;
    available_colors: Array<{ __typename: 'BikeColor'; color: string } | null>;
    bikes_type?: {
      __typename?: 'BikesType';
      type: string;
      title: string;
    } | null;
    listing_image?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
    main_image: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    };
    gallery: Array<{
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null>;
    details?: {
      __typename: 'ComponentComponentAttribute';
      attribute?: Array<{
        __typename: 'ComponentComponentDetail';
        group_name: string;
        item?: Array<{
          __typename: 'ComponentComponentDetailItem';
          key?: string | null;
          value?: string | null;
        } | null> | null;
      } | null> | null;
    } | null;
    banner?: {
      __typename?: 'ComponentComponentPromoBaner';
      active: boolean;
      title?: string | null;
      description?: any | null;
      cover?: {
        __typename: 'UploadFile';
        documentId: string;
        name: string;
        alternativeText?: string | null;
        caption?: string | null;
        width?: number | null;
        height?: number | null;
        formats?: any | null;
        hash: string;
        ext?: string | null;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
      } | null;
    } | null;
  } | null>;
};

export type GGGET_MOTOCYCLESQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGGET_MOTOCYCLESQuery = {
  __typename?: 'Query';
  motorcycles: Array<{
    __typename: 'Motorcycle';
    category: GENUM_MOTORCYCLE_CATEGORY;
    model_name: string;
    sku: string;
    year: any;
    availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
    base_price: number;
    description?: any | null;
    available_colors: Array<{ __typename: 'BikeColor'; color: string } | null>;
    bikes_type?: {
      __typename: 'BikesType';
      type: string;
      title: string;
    } | null;
    listing_image?: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null;
    main_image: {
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    };
    gallery: Array<{
      __typename: 'UploadFile';
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width?: number | null;
      height?: number | null;
      formats?: any | null;
      hash: string;
      ext?: string | null;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      publishedAt?: any | null;
    } | null>;
    details?: {
      __typename: 'ComponentComponentAttribute';
      attribute?: Array<{
        __typename: 'ComponentComponentDetail';
        group_name: string;
        item?: Array<{
          __typename: 'ComponentComponentDetailItem';
          key?: string | null;
          value?: string | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null>;
};

export type GGGET_PAGEQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GGGET_PAGEQuery = {
  __typename?: 'Query';
  pages: Array<{
    __typename: 'Page';
    url: string;
    id: string;
    sections?: Array<
      | {
          __typename: 'ComponentSectionAccordionSection';
          active: boolean;
          title?: string | null;
          Cards?: Array<{
            __typename: 'ComponentComponentAccordionCard';
            show: boolean;
            title?: string | null;
            button?: {
              __typename: 'ComponentUiButton';
              title: string;
              url: string;
              variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
            } | null;
            cover: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            };
          } | null> | null;
        }
      | {
          __typename: 'ComponentSectionBigPromoSection';
          title?: string | null;
          subtitle?: string | null;
          buttons?: Array<{
            __typename: 'ComponentUiButton';
            variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
            title: string;
            url: string;
          } | null> | null;
          cover?: {
            __typename: 'UploadFile';
            documentId: string;
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number | null;
            height?: number | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
            createdAt?: any | null;
            updatedAt?: any | null;
            publishedAt?: any | null;
          } | null;
        }
      | {
          __typename: 'ComponentSectionBigThumbnailSection';
          title?: string | null;
          active: boolean;
          cards: Array<{
            __typename: 'ComponentComponentAccordionCard';
            show: boolean;
            title?: string | null;
            button?: {
              __typename: 'ComponentUiButton';
              title: string;
              url: string;
              variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
            } | null;
            cover: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            };
          } | null>;
        }
      | {
          __typename: 'ComponentSectionHeroSlider';
          Slide: Array<{
            __typename: 'ComponentComponentHeroSlide';
            show: boolean;
            title: string;
            subtitle: string;
            navText: string;
            button?: Array<{
              __typename: 'ComponentUiButton';
              title: string;
              url: string;
              variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
            } | null> | null;
            cover: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            };
          } | null>;
        }
      | {
          __typename: 'ComponentSectionNewsSection';
          show: boolean;
          title?: string | null;
          latestNewsCount?: number | null;
          button?: {
            __typename: 'ComponentUiButton';
            title: string;
            url: string;
            variant?: GENUM_COMPONENTUIBUTTON_VARIANT | null;
          } | null;
        }
      | {
          __typename: 'ComponentSectionPromoSliderSection';
          title?: string | null;
          cta_title?: string | null;
          active: boolean;
          motocycles: Array<{
            __typename: 'Motorcycle';
            documentId: string;
            sku: string;
            availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
            year: any;
            base_price: number;
            model_name: string;
            description?: any | null;
            bikes_type?: {
              __typename?: 'BikesType';
              title: string;
              type: string;
            } | null;
            listing_image?: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            } | null;
            main_image: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            };
            gallery: Array<{
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            } | null>;
          } | null>;
        }
      | {
          __typename: 'ComponentSectionQuickNavigation';
          active: boolean;
          links: Array<{
            __typename: 'ComponentUiLinkWithIcon';
            active: boolean;
            show: boolean;
            title: string;
            url: string;
            icon?: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            } | null;
          } | null>;
        }
      | { __typename?: 'ComponentSectionTextRedactor' }
      | { __typename?: 'ComponentSectionTitleSection' }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null>;
};

export type GGHeaderQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGHeaderQuery = {
  __typename?: 'Query';
  header?: {
    __typename: 'Header';
    links?: Array<
      | {
          __typename: 'ComponentUiLink';
          id: string;
          title: string;
          url: string;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null;
  footer?: {
    __typename: 'Footer';
    documentId: string;
    contacts?: {
      __typename: 'ComponentComponentContacts';
      id: string;
      title?: string | null;
      contact_text?: any | null;
    } | null;
    column1?: {
      __typename: 'ComponentComponentFooterColumn';
      id: string;
      title?: string | null;
      link?: Array<{
        __typename: 'ComponentUiLink';
        id: string;
        title: string;
        url: string;
      } | null> | null;
    } | null;
    column2?: {
      __typename: 'ComponentComponentFooterColumn';
      id: string;
      title?: string | null;
      link?: Array<{
        __typename: 'ComponentUiLink';
        id: string;
        title: string;
        url: string;
      } | null> | null;
    } | null;
    column3?: {
      __typename: 'ComponentComponentFooterColumn';
      id: string;
      title?: string | null;
      link?: Array<{
        __typename: 'ComponentUiLink';
        id: string;
        title: string;
        url: string;
      } | null> | null;
    } | null;
    bottom?: Array<
      | {
          __typename: 'ComponentUiLink';
          id: string;
          title: string;
          url: string;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null;
};
