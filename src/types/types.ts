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
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  HeaderLinksDynamicZoneInput: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
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

export type GBikesType = {
  __typename?: 'BikesType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GBikesType>>;
  localizations_connection?: Maybe<GBikesTypeRelationResponseCollection>;
  motorcycles: Array<Maybe<GMotorcycle>>;
  motorcycles_connection?: Maybe<GMotorcycleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
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
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  title?: InputMaybe<GStringFilterInput>;
  type?: InputMaybe<GStringFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
};

export type GBikesTypeInput = {
  motorcycles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GBikesTypeRelationResponseCollection = {
  __typename?: 'BikesTypeRelationResponseCollection';
  nodes: Array<GBikesType>;
};

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

export type GGenericMorph =
  | GBikeColor
  | GBikesType
  | GComponentComponentAccordionCard
  | GComponentComponentHeroSlide
  | GComponentMotorcycleMotorcycle
  | GComponentSectionAccordionSection
  | GComponentSectionBigThumbnailSection
  | GComponentSectionHeroSlider
  | GComponentSectionQuickNavigation
  | GComponentUiButton
  | GComponentUiLink
  | GComponentUiLinkWithIcon
  | GHeader
  | GI18NLocale
  | GMotorcycle
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
  base_price: Scalars['Int']['output'];
  bikes_type?: Maybe<GBikesType>;
  category: GENUM_MOTORCYCLE_CATEGORY;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
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
  base_price?: InputMaybe<GIntFilterInput>;
  bikes_type?: InputMaybe<GBikesTypeFiltersInput>;
  category?: InputMaybe<GStringFilterInput>;
  createdAt?: InputMaybe<GDateTimeFilterInput>;
  description?: InputMaybe<GJSONFilterInput>;
  documentId?: InputMaybe<GIDFilterInput>;
  locale?: InputMaybe<GStringFilterInput>;
  localizations?: InputMaybe<GMotorcycleFiltersInput>;
  model_name?: InputMaybe<GStringFilterInput>;
  not?: InputMaybe<GMotorcycleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GMotorcycleFiltersInput>>>;
  publishedAt?: InputMaybe<GDateTimeFilterInput>;
  sku?: InputMaybe<GStringFilterInput>;
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  year?: InputMaybe<GDateFilterInput>;
};

export type GMotorcycleInput = {
  availability_status?: InputMaybe<GENUM_MOTORCYCLE_AVAILABILITY_STATUS>;
  available_colors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  base_price?: InputMaybe<Scalars['Int']['input']>;
  bikes_type?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<GENUM_MOTORCYCLE_CATEGORY>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listing_image?: InputMaybe<Scalars['ID']['input']>;
  main_image?: InputMaybe<Scalars['ID']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createPage?: Maybe<GPage>;
  createReviewWorkflowsWorkflow?: Maybe<GReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<GReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<GUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: GUsersPermissionsUserEntityResponse;
  deleteBikeColor?: Maybe<GDeleteMutationResponse>;
  deleteBikesType?: Maybe<GDeleteMutationResponse>;
  deleteHeader?: Maybe<GDeleteMutationResponse>;
  deleteMotorcycle?: Maybe<GDeleteMutationResponse>;
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
  updateBikesType?: Maybe<GBikesType>;
  updateHeader?: Maybe<GHeader>;
  updateMotorcycle?: Maybe<GMotorcycle>;
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

export type GMutationGDeleteBikesTypeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type GMutationGDeleteMotorcycleArgs = {
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

export type GMutationGUpdateBikesTypeArgs = {
  data: GBikesTypeInput;
  documentId: Scalars['ID']['input'];
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

export type GPage = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GPage>>;
  localizations_connection?: Maybe<GPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<GPageSectionsDynamicZone>>>;
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
  updatedAt?: InputMaybe<GDateTimeFilterInput>;
  url?: InputMaybe<GStringFilterInput>;
};

export type GPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['PageSectionsDynamicZoneInput']['input']>
  >;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type GPageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<GPage>;
};

export type GPageSectionsDynamicZone =
  | GComponentSectionAccordionSection
  | GComponentSectionBigThumbnailSection
  | GComponentSectionHeroSlider
  | GComponentSectionQuickNavigation
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
  bikesType?: Maybe<GBikesType>;
  bikesTypes: Array<Maybe<GBikesType>>;
  bikesTypes_connection?: Maybe<GBikesTypeEntityResponseCollection>;
  header?: Maybe<GHeader>;
  i18NLocale?: Maybe<GI18NLocale>;
  i18NLocales: Array<Maybe<GI18NLocale>>;
  i18NLocales_connection?: Maybe<GI18NLocaleEntityResponseCollection>;
  me?: Maybe<GUsersPermissionsMe>;
  motorcycle?: Maybe<GMotorcycle>;
  motorcycles: Array<Maybe<GMotorcycle>>;
  motorcycles_connection?: Maybe<GMotorcycleEntityResponseCollection>;
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
  } | null>;
};

export type GGGET_PAGEQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GGGET_PAGEQuery = {
  __typename?: 'Query';
  pages: Array<{
    __typename: 'Page';
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
};
