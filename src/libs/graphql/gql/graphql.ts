/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  HeaderLinksDynamicZoneInput: { input: any; output: any };
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  NewsPostSectionsDynamicZoneInput: { input: any; output: any };
  PageSectionsDynamicZoneInput: { input: any; output: any };
};

export type BikeColor = {
  __typename?: 'BikeColor';
  color: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<BikeColor>>;
  localizations_connection?: Maybe<BikeColorRelationResponseCollection>;
  motorcycle?: Maybe<Motorcycle>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BikeColorLocalizationsArgs = {
  filters?: InputMaybe<BikeColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikeColorLocalizations_ConnectionArgs = {
  filters?: InputMaybe<BikeColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikeColorEntityResponseCollection = {
  __typename?: 'BikeColorEntityResponseCollection';
  nodes: Array<BikeColor>;
  pageInfo: Pagination;
};

export type BikeColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BikeColorFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BikeColorFiltersInput>;
  motorcycle?: InputMaybe<MotorcycleFiltersInput>;
  not?: InputMaybe<BikeColorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BikeColorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BikeColorInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  motorcycle?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BikeColorRelationResponseCollection = {
  __typename?: 'BikeColorRelationResponseCollection';
  nodes: Array<BikeColor>;
};

export type BikeTypesPage = {
  __typename?: 'BikeTypesPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayed_bike_types: Array<Maybe<BikesType>>;
  displayed_bike_types_connection?: Maybe<BikesTypeRelationResponseCollection>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<BikeTypesPage>>;
  localizations_connection?: Maybe<BikeTypesPageRelationResponseCollection>;
  navigator_title: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type BikeTypesPageDisplayed_Bike_TypesArgs = {
  filters?: InputMaybe<BikesTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikeTypesPageDisplayed_Bike_Types_ConnectionArgs = {
  filters?: InputMaybe<BikesTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikeTypesPageInput = {
  displayed_bike_types?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  navigator_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type BikeTypesPageRelationResponseCollection = {
  __typename?: 'BikeTypesPageRelationResponseCollection';
  nodes: Array<BikeTypesPage>;
};

export type BikesType = {
  __typename?: 'BikesType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<BikesType>>;
  localizations_connection?: Maybe<BikesTypeRelationResponseCollection>;
  motorcycles: Array<Maybe<Motorcycle>>;
  motorcycles_connection?: Maybe<MotorcycleRelationResponseCollection>;
  promoBanner?: Maybe<ComponentComponentPromoBaner>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: ComponentSharedSeo;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BikesTypeLocalizationsArgs = {
  filters?: InputMaybe<BikesTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikesTypeLocalizations_ConnectionArgs = {
  filters?: InputMaybe<BikesTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikesTypeMotorcyclesArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikesTypeMotorcycles_ConnectionArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BikesTypeEntityResponseCollection = {
  __typename?: 'BikesTypeEntityResponseCollection';
  nodes: Array<BikesType>;
  pageInfo: Pagination;
};

export type BikesTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BikesTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BikesTypeFiltersInput>;
  motorcycles?: InputMaybe<MotorcycleFiltersInput>;
  not?: InputMaybe<BikesTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BikesTypeFiltersInput>>>;
  promoBanner?: InputMaybe<ComponentComponentPromoBanerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BikesTypeInput = {
  motorcycles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  promoBanner?: InputMaybe<ComponentComponentPromoBanerInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type BikesTypeRelationResponseCollection = {
  __typename?: 'BikesTypeRelationResponseCollection';
  nodes: Array<BikesType>;
};

export type BooleanFilterInput = {
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
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentComponentAccordionCard = {
  __typename?: 'ComponentComponentAccordionCard';
  button?: Maybe<ComponentUiButton>;
  cover: UploadFile;
  id: Scalars['ID']['output'];
  show: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentAccordionCardFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentComponentAccordionCardFiltersInput>>
  >;
  button?: InputMaybe<ComponentUiButtonFiltersInput>;
  not?: InputMaybe<ComponentComponentAccordionCardFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentComponentAccordionCardFiltersInput>>
  >;
  show?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentAttribute = {
  __typename?: 'ComponentComponentAttribute';
  attribute?: Maybe<Array<Maybe<ComponentComponentDetail>>>;
  id: Scalars['ID']['output'];
};

export type ComponentComponentAttributeAttributeArgs = {
  filters?: InputMaybe<ComponentComponentDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentAttributeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentAttributeFiltersInput>>>;
  attribute?: InputMaybe<ComponentComponentDetailFiltersInput>;
  not?: InputMaybe<ComponentComponentAttributeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentAttributeFiltersInput>>>;
};

export type ComponentComponentAttributeInput = {
  attribute?: InputMaybe<Array<InputMaybe<ComponentComponentDetailInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentComponentDetail = {
  __typename?: 'ComponentComponentDetail';
  group_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  item?: Maybe<Array<Maybe<ComponentComponentDetailItem>>>;
};

export type ComponentComponentDetailItemArgs = {
  filters?: InputMaybe<ComponentComponentDetailItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentDetailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentDetailFiltersInput>>>;
  group_name?: InputMaybe<StringFilterInput>;
  item?: InputMaybe<ComponentComponentDetailItemFiltersInput>;
  not?: InputMaybe<ComponentComponentDetailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentDetailFiltersInput>>>;
};

export type ComponentComponentDetailInput = {
  group_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Array<InputMaybe<ComponentComponentDetailItemInput>>>;
};

export type ComponentComponentDetailItem = {
  __typename?: 'ComponentComponentDetailItem';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentDetailItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentDetailItemFiltersInput>>>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentDetailItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentDetailItemFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentDetailItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentHeroSlide = {
  __typename?: 'ComponentComponentHeroSlide';
  button?: Maybe<Array<Maybe<ComponentUiButton>>>;
  cover: UploadFile;
  id: Scalars['ID']['output'];
  navText: Scalars['String']['output'];
  show: Scalars['Boolean']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ComponentComponentHeroSlideButtonArgs = {
  filters?: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentHeroSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentHeroSlideFiltersInput>>>;
  button?: InputMaybe<ComponentUiButtonFiltersInput>;
  navText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentHeroSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentHeroSlideFiltersInput>>>;
  show?: InputMaybe<BooleanFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentPromoBaner = {
  __typename?: 'ComponentComponentPromoBaner';
  active: Scalars['Boolean']['output'];
  cover?: Maybe<UploadFile>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentPromoBanerFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentComponentPromoBanerFiltersInput>>>;
  description?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<ComponentComponentPromoBanerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentPromoBanerFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentPromoBanerInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMotorcycleMotorcycle = {
  __typename?: 'ComponentMotorcycleMotorcycle';
  active: Scalars['Boolean']['output'];
  basePrice: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Array<Maybe<UploadFile>>;
  image_connection?: Maybe<UploadFileRelationResponseCollection>;
  title: Scalars['String']['output'];
};

export type ComponentMotorcycleMotorcycleImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMotorcycleMotorcycleImage_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionAccordionSection = {
  __typename?: 'ComponentSectionAccordionSection';
  Cards?: Maybe<Array<Maybe<ComponentComponentAccordionCard>>>;
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionAccordionSectionCardsArgs = {
  filters?: InputMaybe<ComponentComponentAccordionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionBigPromoSection = {
  __typename?: 'ComponentSectionBigPromoSection';
  buttons?: Maybe<Array<Maybe<ComponentUiButton>>>;
  cover?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionBigPromoSectionButtonsArgs = {
  filters?: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionBigThumbnailSection = {
  __typename?: 'ComponentSectionBigThumbnailSection';
  active: Scalars['Boolean']['output'];
  cards: Array<Maybe<ComponentComponentAccordionCard>>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionBigThumbnailSectionCardsArgs = {
  filters?: InputMaybe<ComponentComponentAccordionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionHeroSlider = {
  __typename?: 'ComponentSectionHeroSlider';
  Slide: Array<Maybe<ComponentComponentHeroSlide>>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionHeroSliderSlideArgs = {
  filters?: InputMaybe<ComponentComponentHeroSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionNewsSection = {
  __typename?: 'ComponentSectionNewsSection';
  button?: Maybe<ComponentUiButton>;
  id: Scalars['ID']['output'];
  latestNewsCount?: Maybe<Scalars['Int']['output']>;
  show: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionPromoSliderSection = {
  __typename?: 'ComponentSectionPromoSliderSection';
  active: Scalars['Boolean']['output'];
  cta_title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  motocycles: Array<Maybe<Motorcycle>>;
  motocycles_connection?: Maybe<MotorcycleRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionPromoSliderSectionMotocyclesArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionPromoSliderSectionMotocycles_ConnectionArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionQuickNavigation = {
  __typename?: 'ComponentSectionQuickNavigation';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  links: Array<Maybe<ComponentUiLinkWithIcon>>;
};

export type ComponentSectionQuickNavigationLinksArgs = {
  filters?: InputMaybe<ComponentUiLinkWithIconFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionTextRedactor = {
  __typename?: 'ComponentSectionTextRedactor';
  blocks?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionTitleSection = {
  __typename?: 'ComponentSectionTitleSection';
  cover?: Maybe<UploadFile>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  title_html_tag: Enum_Componentsectiontitlesection_Title_Html_Tag;
};

export type ComponentSharedOpenGraph = {
  __typename?: 'ComponentSharedOpenGraph';
  id: Scalars['ID']['output'];
  ogDescription: Scalars['String']['output'];
  ogImage?: Maybe<UploadFile>;
  ogTitle: Scalars['String']['output'];
  ogType?: Maybe<Scalars['String']['output']>;
  ogUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedOpenGraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedOpenGraphFiltersInput>>>;
  not?: InputMaybe<ComponentSharedOpenGraphFiltersInput>;
  ogDescription?: InputMaybe<StringFilterInput>;
  ogTitle?: InputMaybe<StringFilterInput>;
  ogType?: InputMaybe<StringFilterInput>;
  ogUrl?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedOpenGraphFiltersInput>>>;
};

export type ComponentSharedOpenGraphInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['ID']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  ogType?: InputMaybe<Scalars['String']['input']>;
  ogUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFile>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  openGraph?: Maybe<ComponentSharedOpenGraph>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  openGraph?: InputMaybe<ComponentSharedOpenGraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  openGraph?: InputMaybe<ComponentSharedOpenGraphInput>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentUiButton = {
  __typename?: 'ComponentUiButton';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  variant?: Maybe<Enum_Componentuibutton_Variant>;
};

export type ComponentUiButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiButtonFiltersInput>>>;
  not?: InputMaybe<ComponentUiButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiButtonFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentUiLink = {
  __typename?: 'ComponentUiLink';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentUiLinkWithIcon = {
  __typename?: 'ComponentUiLinkWithIcon';
  active: Scalars['Boolean']['output'];
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  show: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentUiLinkWithIconFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentUiLinkWithIconFiltersInput>>>;
  not?: InputMaybe<ComponentUiLinkWithIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiLinkWithIconFiltersInput>>>;
  show?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type DateFilterInput = {
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
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
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
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum Enum_Componentsectiontitlesection_Title_Html_Tag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

export enum Enum_Componentuibutton_Variant {
  Outline = 'outline',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Enum_Motorcycle_Availability_Status {
  InStock = 'in_stock',
  OnRequest = 'on_request',
}

export enum Enum_Motorcycle_Category {
  Custom = 'custom',
  Stock = 'stock',
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
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
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph =
  | BikeColor
  | BikeTypesPage
  | BikesType
  | ComponentComponentAccordionCard
  | ComponentComponentAttribute
  | ComponentComponentDetail
  | ComponentComponentDetailItem
  | ComponentComponentHeroSlide
  | ComponentComponentPromoBaner
  | ComponentMotorcycleMotorcycle
  | ComponentSectionAccordionSection
  | ComponentSectionBigPromoSection
  | ComponentSectionBigThumbnailSection
  | ComponentSectionHeroSlider
  | ComponentSectionNewsSection
  | ComponentSectionPromoSliderSection
  | ComponentSectionQuickNavigation
  | ComponentSectionTextRedactor
  | ComponentSectionTitleSection
  | ComponentSharedOpenGraph
  | ComponentSharedSeo
  | ComponentUiButton
  | ComponentUiLink
  | ComponentUiLinkWithIcon
  | Header
  | I18NLocale
  | Motorcycle
  | NewsPage
  | NewsPost
  | Page
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<HeaderLinksDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Header>>;
  localizations_connection?: Maybe<HeaderRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeaderInput = {
  links?: InputMaybe<Array<Scalars['HeaderLinksDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HeaderLinksDynamicZone = ComponentUiLink | Error;

export type HeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  nodes: Array<Header>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
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
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
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
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
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
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Motorcycle = {
  __typename?: 'Motorcycle';
  availability_status: Enum_Motorcycle_Availability_Status;
  available_colors: Array<Maybe<BikeColor>>;
  available_colors_connection?: Maybe<BikeColorRelationResponseCollection>;
  banner?: Maybe<ComponentComponentPromoBaner>;
  base_price: Scalars['Int']['output'];
  bikes_type?: Maybe<BikesType>;
  category: Enum_Motorcycle_Category;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  details?: Maybe<ComponentComponentAttribute>;
  documentId: Scalars['ID']['output'];
  gallery: Array<Maybe<UploadFile>>;
  gallery_connection?: Maybe<UploadFileRelationResponseCollection>;
  listing_image?: Maybe<UploadFile>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Motorcycle>>;
  localizations_connection?: Maybe<MotorcycleRelationResponseCollection>;
  main_image: UploadFile;
  model_name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  sku: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year: Scalars['Date']['output'];
};

export type MotorcycleAvailable_ColorsArgs = {
  filters?: InputMaybe<BikeColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MotorcycleAvailable_Colors_ConnectionArgs = {
  filters?: InputMaybe<BikeColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MotorcycleGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MotorcycleGallery_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MotorcycleLocalizationsArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MotorcycleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MotorcycleEntityResponseCollection = {
  __typename?: 'MotorcycleEntityResponseCollection';
  nodes: Array<Motorcycle>;
  pageInfo: Pagination;
};

export type MotorcycleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MotorcycleFiltersInput>>>;
  availability_status?: InputMaybe<StringFilterInput>;
  available_colors?: InputMaybe<BikeColorFiltersInput>;
  banner?: InputMaybe<ComponentComponentPromoBanerFiltersInput>;
  base_price?: InputMaybe<IntFilterInput>;
  bikes_type?: InputMaybe<BikesTypeFiltersInput>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<JsonFilterInput>;
  details?: InputMaybe<ComponentComponentAttributeFiltersInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MotorcycleFiltersInput>;
  model_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MotorcycleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MotorcycleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sku?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  year?: InputMaybe<DateFilterInput>;
};

export type MotorcycleInput = {
  availability_status?: InputMaybe<Enum_Motorcycle_Availability_Status>;
  available_colors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  banner?: InputMaybe<ComponentComponentPromoBanerInput>;
  base_price?: InputMaybe<Scalars['Int']['input']>;
  bikes_type?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Enum_Motorcycle_Category>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  details?: InputMaybe<ComponentComponentAttributeInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listing_image?: InputMaybe<Scalars['ID']['input']>;
  main_image?: InputMaybe<Scalars['ID']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Date']['input']>;
};

export type MotorcycleRelationResponseCollection = {
  __typename?: 'MotorcycleRelationResponseCollection';
  nodes: Array<Motorcycle>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBikeColor?: Maybe<BikeColor>;
  createBikesType?: Maybe<BikesType>;
  createMotorcycle?: Maybe<Motorcycle>;
  createNewsPost?: Maybe<NewsPost>;
  createPage?: Maybe<Page>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBikeColor?: Maybe<DeleteMutationResponse>;
  deleteBikeTypesPage?: Maybe<DeleteMutationResponse>;
  deleteBikesType?: Maybe<DeleteMutationResponse>;
  deleteHeader?: Maybe<DeleteMutationResponse>;
  deleteMotorcycle?: Maybe<DeleteMutationResponse>;
  deleteNewsPage?: Maybe<DeleteMutationResponse>;
  deleteNewsPost?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBikeColor?: Maybe<BikeColor>;
  updateBikeTypesPage?: Maybe<BikeTypesPage>;
  updateBikesType?: Maybe<BikesType>;
  updateHeader?: Maybe<Header>;
  updateMotorcycle?: Maybe<Motorcycle>;
  updateNewsPage?: Maybe<NewsPage>;
  updateNewsPost?: Maybe<NewsPost>;
  updatePage?: Maybe<Page>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateBikeColorArgs = {
  data: BikeColorInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateBikesTypeArgs = {
  data: BikesTypeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateMotorcycleArgs = {
  data: MotorcycleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateNewsPostArgs = {
  data: NewsPostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteBikeColorArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteBikeTypesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteBikesTypeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteMotorcycleArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteNewsPostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateBikeColorArgs = {
  data: BikeColorInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateBikeTypesPageArgs = {
  data: BikeTypesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateBikesTypeArgs = {
  data: BikesTypeInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateMotorcycleArgs = {
  data: MotorcycleInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateNewsPageArgs = {
  data: NewsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateNewsPostArgs = {
  data: NewsPostInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type NewsPage = {
  __typename?: 'NewsPage';
  banner?: Maybe<ComponentComponentPromoBaner>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<NewsPage>>;
  localizations_connection?: Maybe<NewsPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NewsPageInput = {
  banner?: InputMaybe<ComponentComponentPromoBanerInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type NewsPageRelationResponseCollection = {
  __typename?: 'NewsPageRelationResponseCollection';
  nodes: Array<NewsPage>;
};

export type NewsPost = {
  __typename?: 'NewsPost';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<NewsPost>>;
  localizations_connection?: Maybe<NewsPostRelationResponseCollection>;
  previewText?: Maybe<Scalars['String']['output']>;
  preview_cover?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<NewsPostSectionsDynamicZone>>>;
  seo: ComponentSharedSeo;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type NewsPostLocalizationsArgs = {
  filters?: InputMaybe<NewsPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NewsPostLocalizations_ConnectionArgs = {
  filters?: InputMaybe<NewsPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NewsPostEntityResponseCollection = {
  __typename?: 'NewsPostEntityResponseCollection';
  nodes: Array<NewsPost>;
  pageInfo: Pagination;
};

export type NewsPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewsPostFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NewsPostFiltersInput>;
  not?: InputMaybe<NewsPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsPostFiltersInput>>>;
  previewText?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type NewsPostInput = {
  previewText?: InputMaybe<Scalars['String']['input']>;
  preview_cover?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['NewsPostSectionsDynamicZoneInput']['input']>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type NewsPostRelationResponseCollection = {
  __typename?: 'NewsPostRelationResponseCollection';
  nodes: Array<NewsPost>;
};

export type NewsPostSectionsDynamicZone =
  | ComponentSectionAccordionSection
  | ComponentSectionBigPromoSection
  | ComponentSectionBigThumbnailSection
  | ComponentSectionPromoSliderSection
  | ComponentSectionTextRedactor
  | ComponentSectionTitleSection
  | Error;

export type Page = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Page>>;
  localizations_connection?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type PageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['PageSectionsDynamicZoneInput']['input']>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<Page>;
};

export type PageSectionsDynamicZone =
  | ComponentSectionAccordionSection
  | ComponentSectionBigPromoSection
  | ComponentSectionBigThumbnailSection
  | ComponentSectionHeroSlider
  | ComponentSectionNewsSection
  | ComponentSectionPromoSliderSection
  | ComponentSectionQuickNavigation
  | ComponentSectionTextRedactor
  | ComponentSectionTitleSection
  | Error;

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type Query = {
  __typename?: 'Query';
  bikeColor?: Maybe<BikeColor>;
  bikeColors: Array<Maybe<BikeColor>>;
  bikeColors_connection?: Maybe<BikeColorEntityResponseCollection>;
  bikeTypesPage?: Maybe<BikeTypesPage>;
  bikesType?: Maybe<BikesType>;
  bikesTypes: Array<Maybe<BikesType>>;
  bikesTypes_connection?: Maybe<BikesTypeEntityResponseCollection>;
  header?: Maybe<Header>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  motorcycle?: Maybe<Motorcycle>;
  motorcycles: Array<Maybe<Motorcycle>>;
  motorcycles_connection?: Maybe<MotorcycleEntityResponseCollection>;
  newsPage?: Maybe<NewsPage>;
  newsPost?: Maybe<NewsPost>;
  newsPosts: Array<Maybe<NewsPost>>;
  newsPosts_connection?: Maybe<NewsPostEntityResponseCollection>;
  page?: Maybe<Page>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryBikeColorArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryBikeColorsArgs = {
  filters?: InputMaybe<BikeColorFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryBikeColors_ConnectionArgs = {
  filters?: InputMaybe<BikeColorFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryBikeTypesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryBikesTypeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryBikesTypesArgs = {
  filters?: InputMaybe<BikesTypeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryBikesTypes_ConnectionArgs = {
  filters?: InputMaybe<BikesTypeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryMotorcycleArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryMotorcyclesArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryMotorcycles_ConnectionArgs = {
  filters?: InputMaybe<MotorcycleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryNewsPostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryNewsPostsArgs = {
  filters?: InputMaybe<NewsPostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryNewsPosts_ConnectionArgs = {
  filters?: InputMaybe<NewsPostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
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
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
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
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type BigPromoSectionFragmentFragment = {
  __typename: 'ComponentSectionBigPromoSection';
  title?: string | null;
  subtitle?: string | null;
  buttons?: Array<{
    __typename: 'ComponentUiButton';
    variant?: Enum_Componentuibutton_Variant | null;
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

export type BigThumbnailSectionFragmentFragment = {
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
      variant?: Enum_Componentuibutton_Variant | null;
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

export type CategoryAccordionFragmentFragment = {
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
      variant?: Enum_Componentuibutton_Variant | null;
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

export type HeroSectionFragentFragment = {
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
      variant?: Enum_Componentuibutton_Variant | null;
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

export type MotorcycleFragmentFragment = {
  __typename: 'Motorcycle';
  category: Enum_Motorcycle_Category;
  model_name: string;
  sku: string;
  year: any;
  availability_status: Enum_Motorcycle_Availability_Status;
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

export type NewsSectionFragmentFragment = {
  __typename: 'ComponentSectionNewsSection';
  show: boolean;
  title?: string | null;
  latestNewsCount?: number | null;
  button?: {
    __typename: 'ComponentUiButton';
    title: string;
    url: string;
    variant?: Enum_Componentuibutton_Variant | null;
  } | null;
};

export type ProductDetailsFragment = {
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

export type PromoSliderSectionFragmentFragment = {
  __typename: 'ComponentSectionPromoSliderSection';
  title?: string | null;
  cta_title?: string | null;
  active: boolean;
  motocycles: Array<{
    __typename: 'Motorcycle';
    documentId: string;
    sku: string;
    availability_status: Enum_Motorcycle_Availability_Status;
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

export type QuickNavigationFragmentFragment = {
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

export type SeoFragmentFragment = {
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

export type TextRedactorSectionFragment = {
  __typename: 'ComponentSectionTextRedactor';
  blocks?: any | null;
};

export type TitleSectionFragmentFragment = {
  __typename: 'ComponentSectionTitleSection';
  title?: string | null;
  description?: any | null;
  title_html_tag: Enum_Componentsectiontitlesection_Title_Html_Tag;
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

export type ComponentUiLinkFragmentFragment = {
  __typename: 'ComponentUiLink';
  id: string;
  title: string;
  url: string;
};

export type UploadFileFragmentFragment = {
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

export type GetBikeTypePageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  type: Scalars['String']['input'];
}>;

export type GetBikeTypePageSeoQuery = {
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

export type GetBikesTypesPageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetBikesTypesPageSeoQuery = {
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

export type GetMotorcyclePageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  sku: Scalars['String']['input'];
}>;

export type GetMotorcyclePageSeoQuery = {
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

export type Get_Motocycles_By_TypeQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  type: Scalars['String']['input'];
}>;

export type Get_Motocycles_By_TypeQuery = {
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

export type Get_Motocycle_PageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type Get_Motocycle_PageQuery = {
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

export type GetNewsPageQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GetNewsPageQueryQuery = {
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
      | { __typename: 'ComponentSectionTextRedactor'; blocks?: any | null }
      | {
          __typename: 'ComponentSectionTitleSection';
          title?: string | null;
          description?: any | null;
          title_html_tag: Enum_Componentsectiontitlesection_Title_Html_Tag;
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

export type GetNewsPageSeoQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetNewsPageSeoQueryQuery = {
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

export type GetNewsPostSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GetNewsPostSeoQuery = {
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

export type GetNewsPostsQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  start?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetNewsPostsQueryQuery = {
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

export type GetPageSeoQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GetPageSeoQuery = {
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

export type GetPreloadedNewsPostsQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  start?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetPreloadedNewsPostsQueryQuery = {
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

export type Get_MotocycleQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
}>;

export type Get_MotocycleQuery = {
  __typename?: 'Query';
  motorcycles: Array<{
    __typename: 'Motorcycle';
    category: Enum_Motorcycle_Category;
    model_name: string;
    sku: string;
    year: any;
    availability_status: Enum_Motorcycle_Availability_Status;
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

export type Get_MotocyclesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type Get_MotocyclesQuery = {
  __typename?: 'Query';
  motorcycles: Array<{
    __typename: 'Motorcycle';
    category: Enum_Motorcycle_Category;
    model_name: string;
    sku: string;
    year: any;
    availability_status: Enum_Motorcycle_Availability_Status;
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

export type Get_PageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type Get_PageQuery = {
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
              variant?: Enum_Componentuibutton_Variant | null;
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
            variant?: Enum_Componentuibutton_Variant | null;
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
              variant?: Enum_Componentuibutton_Variant | null;
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
              variant?: Enum_Componentuibutton_Variant | null;
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
            variant?: Enum_Componentuibutton_Variant | null;
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
            availability_status: Enum_Motorcycle_Availability_Status;
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

export type HeaderQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type HeaderQuery = {
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
};

export const UploadFileFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UploadFileFragmentFragment, unknown>;
export const BigPromoSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BigPromoSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionBigPromoSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'buttons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BigPromoSectionFragmentFragment, unknown>;
export const BigThumbnailSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BigThumbnailSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionBigThumbnailSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'button' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'variant' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BigThumbnailSectionFragmentFragment, unknown>;
export const CategoryAccordionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CategoryAccordionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionAccordionSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'button' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'variant' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryAccordionFragmentFragment, unknown>;
export const HeroSectionFragentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HeroSectionFragent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionHeroSlider' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Slide' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'navText' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'button' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'variant' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroSectionFragentFragment, unknown>;
export const ProductDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentComponentAttribute' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attribute' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'group_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductDetailsFragment, unknown>;
export const MotorcycleFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MotorcycleFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Motorcycle' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'category' } },
          { kind: 'Field', name: { kind: 'Name', value: 'model_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'year' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'availability_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'base_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'available_colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'BikeColor' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bikes_type' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'BikesType' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listing_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'main_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'gallery' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'details' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentComponentAttribute' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attribute' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'group_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MotorcycleFragmentFragment, unknown>;
export const NewsSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NewsSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionNewsSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'show' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'latestNewsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'button' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewsSectionFragmentFragment, unknown>;
export const PromoSliderSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PromoSliderSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionPromoSliderSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cta_title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'motocycles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availability_status' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bikes_type' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'year' } },
                { kind: 'Field', name: { kind: 'Name', value: 'base_price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'model_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'listing_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'main_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gallery' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PromoSliderSectionFragmentFragment, unknown>;
export const QuickNavigationFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'QuickNavigationFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionQuickNavigation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'icon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuickNavigationFragmentFragment, unknown>;
export const SeoFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFragmentFragment, unknown>;
export const TextRedactorSectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TextRedactorSection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionTextRedactor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blocks' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TextRedactorSectionFragment, unknown>;
export const TitleSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TitleSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionTitleSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title_html_tag' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TitleSectionFragmentFragment, unknown>;
export const ComponentUiLinkFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ComponentUiLinkFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentUiLink' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ComponentUiLinkFragmentFragment, unknown>;
export const GetBikeTypePageSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBikeTypePageSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bikesTypes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'type' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeoFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBikeTypePageSeoQuery,
  GetBikeTypePageSeoQueryVariables
>;
export const GetBikesTypesPageSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBikesTypesPageSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bikeTypesPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeoFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBikesTypesPageSeoQuery,
  GetBikesTypesPageSeoQueryVariables
>;
export const GetMotorcyclePageSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMotorcyclePageSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sku' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'motorcycles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sku' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'sku' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeoFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMotorcyclePageSeoQuery,
  GetMotorcyclePageSeoQueryVariables
>;
export const Get_Motocycles_By_TypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_MOTOCYCLES_BY_TYPE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bikesTypes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'type' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: 'documentId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'promoBanner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cover' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'UploadFileFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'motorcycles' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'model_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'base_price' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'id' },
                        name: { kind: 'Name', value: 'documentId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bikes_type' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'BikesType' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'listing_image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'UploadFileFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Get_Motocycles_By_TypeQuery,
  Get_Motocycles_By_TypeQueryVariables
>;
export const Get_Motocycle_PageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_MOTOCYCLE_PAGE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bikeTypesPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'navigator_title' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: 'documentId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'displayed_bike_types' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'motorcycles' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'model_name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'base_price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sku' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bikes_type' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'BikesType',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'type' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'title',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'listing_image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'UploadFileFragment',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Get_Motocycle_PageQuery,
  Get_Motocycle_PageQueryVariables
>;
export const GetNewsPageQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNewsPageQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'url' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'url' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: { kind: 'EnumValue', value: 'PUBLISHED' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'previewText' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: 'documentId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'preview_cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TitleSectionFragment' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TextRedactorSection' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TitleSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionTitleSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title_html_tag' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TextRedactorSection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionTextRedactor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blocks' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNewsPageQueryQuery,
  GetNewsPageQueryQueryVariables
>;
export const GetNewsPageSeoQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNewsPageSeoQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeoFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNewsPageSeoQueryQuery,
  GetNewsPageSeoQueryQueryVariables
>;
export const GetNewsPostSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNewsPostSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'url' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'url' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeoFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNewsPostSeoQuery, GetNewsPostSeoQueryVariables>;
export const GetNewsPostsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNewsPostsQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'start' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: { kind: 'EnumValue', value: 'PUBLISHED' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'start' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'StringValue',
                      value: 'createdAt:desc',
                      block: false,
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'previewText' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'preview_cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPosts_connection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'start' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: { kind: 'EnumValue', value: 'PUBLISHED' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSize' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageCount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNewsPostsQueryQuery,
  GetNewsPostsQueryQueryVariables
>;
export const GetPageSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPageSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'url' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'url' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeoFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeoFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSharedSeo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keywords' } },
          { kind: 'Field', name: { kind: 'Name', value: 'canonicalURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaRobots' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaViewport' } },
          { kind: 'Field', name: { kind: 'Name', value: 'structuredData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'openGraph' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ogUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogDescription' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ogImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageSeoQuery, GetPageSeoQueryVariables>;
export const GetPreloadedNewsPostsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPreloadedNewsPostsQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'start' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: 'documentId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'banner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cover' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'UploadFileFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: { kind: 'EnumValue', value: 'PUBLISHED' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'start' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'StringValue',
                      value: 'createdAt:desc',
                      block: false,
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'previewText' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'preview_cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newsPosts_connection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'start' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: { kind: 'EnumValue', value: 'PUBLISHED' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSize' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageCount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPreloadedNewsPostsQueryQuery,
  GetPreloadedNewsPostsQueryQueryVariables
>;
export const Get_MotocycleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_MOTOCYCLE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sku' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'motorcycles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sku' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'sku' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'category' } },
                { kind: 'Field', name: { kind: 'Name', value: 'model_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: 'documentId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'year' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availability_status' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'base_price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'available_colors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'BikeColor' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'color' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bikes_type' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'BikesType' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'listing_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'main_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gallery' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'details' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ProductDetails' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'banner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cover' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'UploadFileFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentComponentAttribute' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attribute' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'group_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_MotocycleQuery, Get_MotocycleQueryVariables>;
export const Get_MotocyclesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_MOTOCYCLES' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'motorcycles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'category' } },
                { kind: 'Field', name: { kind: 'Name', value: 'model_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                { kind: 'Field', name: { kind: 'Name', value: 'year' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availability_status' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'base_price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'available_colors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'BikeColor' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'color' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bikes_type' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'BikesType' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'listing_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'main_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gallery' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'details' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ProductDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentComponentAttribute' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attribute' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'group_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_MotocyclesQuery, Get_MotocyclesQueryVariables>;
export const Get_PageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_PAGE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'url' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'url' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: 'documentId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'HeroSectionFragent' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'QuickNavigationFragment',
                        },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'CategoryAccordionFragment',
                        },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'BigThumbnailSectionFragment',
                        },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PromoSliderSectionFragment',
                        },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'BigPromoSectionFragment',
                        },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'NewsSectionFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadFileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alternativeText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ext' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previewUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider_metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HeroSectionFragent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionHeroSlider' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Slide' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'navText' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'button' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'variant' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'QuickNavigationFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionQuickNavigation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'icon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CategoryAccordionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionAccordionSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'button' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'variant' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BigThumbnailSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionBigThumbnailSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'show' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'button' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'variant' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PromoSliderSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionPromoSliderSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cta_title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'motocycles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availability_status' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bikes_type' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'year' } },
                { kind: 'Field', name: { kind: 'Name', value: 'base_price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'model_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'listing_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'main_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gallery' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadFileFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BigPromoSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionBigPromoSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'buttons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadFileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NewsSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentSectionNewsSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'show' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'latestNewsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'button' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_PageQuery, Get_PageQueryVariables>;
export const HeaderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Header' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'header' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'links' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'ComponentUiLinkFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ComponentUiLinkFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentUiLink' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>;
