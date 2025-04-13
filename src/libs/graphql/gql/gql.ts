/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  \n  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {\n    __typename\n    title\n    active\n    cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.BigThumbnailSectionFragmentFragmentDoc;
  '\n  \n  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {\n    __typename\n    active\n    title\n    Cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.CategoryAccordionFragmentFragmentDoc;
  '\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.HeroSectionFragentFragmentDoc;
  '\n  fragment ProductDetails on ComponentComponentAttribute {\n    __typename\n    attribute {\n      __typename\n      group_name\n      item {\n        __typename\n        key\n        value\n      }\n    }\n  }\n': typeof types.ProductDetailsFragmentDoc;
  '\n  \n  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {\n    __typename\n    title\n    cta_title\n    active\n    motocycles {\n      documentId\n      __typename\n      sku\n      availability_status\n      bikes_type {\n        title\n        type\n      }\n      year\n      base_price\n      model_name\n      description\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.PromoSliderSectionFragmentFragmentDoc;
  '\n  \n  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {\n    __typename\n    active\n    links {\n      __typename\n      active\n      show\n      title\n      url\n      icon {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.QuickNavigationFragmentFragmentDoc;
  '\n  fragment ComponentUiLinkFragment on ComponentUiLink {\n    __typename\n    id\n    title\n    url\n  }\n': typeof types.ComponentUiLinkFragmentFragmentDoc;
  '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n': typeof types.UploadFileFragmentFragmentDoc;
  '\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n': typeof types.Get_Motocycles_By_TypeDocument;
  '\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n': typeof types.Get_MotocycleDocument;
  '\n  \n  \n  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {\n    motorcycles(locale: $locale) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          __typename\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n    }\n  }\n': typeof types.Get_MotocyclesDocument;
  '\n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n      }\n    }\n  }\n': typeof types.Get_PageDocument;
  '\n  \n  query Header($locale: I18NLocaleCode!) {\n    header(locale: $locale) {\n      __typename\n      links {\n        ...ComponentUiLinkFragment\n      }\n    }\n  }\n': typeof types.HeaderDocument;
};
const documents: Documents = {
  '\n  \n  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {\n    __typename\n    title\n    active\n    cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.BigThumbnailSectionFragmentFragmentDoc,
  '\n  \n  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {\n    __typename\n    active\n    title\n    Cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.CategoryAccordionFragmentFragmentDoc,
  '\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.HeroSectionFragentFragmentDoc,
  '\n  fragment ProductDetails on ComponentComponentAttribute {\n    __typename\n    attribute {\n      __typename\n      group_name\n      item {\n        __typename\n        key\n        value\n      }\n    }\n  }\n':
    types.ProductDetailsFragmentDoc,
  '\n  \n  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {\n    __typename\n    title\n    cta_title\n    active\n    motocycles {\n      documentId\n      __typename\n      sku\n      availability_status\n      bikes_type {\n        title\n        type\n      }\n      year\n      base_price\n      model_name\n      description\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.PromoSliderSectionFragmentFragmentDoc,
  '\n  \n  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {\n    __typename\n    active\n    links {\n      __typename\n      active\n      show\n      title\n      url\n      icon {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.QuickNavigationFragmentFragmentDoc,
  '\n  fragment ComponentUiLinkFragment on ComponentUiLink {\n    __typename\n    id\n    title\n    url\n  }\n':
    types.ComponentUiLinkFragmentFragmentDoc,
  '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n':
    types.UploadFileFragmentFragmentDoc,
  '\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n':
    types.Get_Motocycles_By_TypeDocument,
  '\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n':
    types.Get_MotocycleDocument,
  '\n  \n  \n  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {\n    motorcycles(locale: $locale) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          __typename\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n    }\n  }\n':
    types.Get_MotocyclesDocument,
  '\n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n      }\n    }\n  }\n':
    types.Get_PageDocument,
  '\n  \n  query Header($locale: I18NLocaleCode!) {\n    header(locale: $locale) {\n      __typename\n      links {\n        ...ComponentUiLinkFragment\n      }\n    }\n  }\n':
    types.HeaderDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {\n    __typename\n    title\n    active\n    cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {\n    __typename\n    title\n    active\n    cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {\n    __typename\n    active\n    title\n    Cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {\n    __typename\n    active\n    title\n    Cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductDetails on ComponentComponentAttribute {\n    __typename\n    attribute {\n      __typename\n      group_name\n      item {\n        __typename\n        key\n        value\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment ProductDetails on ComponentComponentAttribute {\n    __typename\n    attribute {\n      __typename\n      group_name\n      item {\n        __typename\n        key\n        value\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {\n    __typename\n    title\n    cta_title\n    active\n    motocycles {\n      documentId\n      __typename\n      sku\n      availability_status\n      bikes_type {\n        title\n        type\n      }\n      year\n      base_price\n      model_name\n      description\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {\n    __typename\n    title\n    cta_title\n    active\n    motocycles {\n      documentId\n      __typename\n      sku\n      availability_status\n      bikes_type {\n        title\n        type\n      }\n      year\n      base_price\n      model_name\n      description\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {\n    __typename\n    active\n    links {\n      __typename\n      active\n      show\n      title\n      url\n      icon {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {\n    __typename\n    active\n    links {\n      __typename\n      active\n      show\n      title\n      url\n      icon {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ComponentUiLinkFragment on ComponentUiLink {\n    __typename\n    id\n    title\n    url\n  }\n'
): (typeof documents)['\n  fragment ComponentUiLinkFragment on ComponentUiLink {\n    __typename\n    id\n    title\n    url\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n'
): (typeof documents)['\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {\n    motorcycles(locale: $locale) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          __typename\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {\n    motorcycles(locale: $locale) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          __typename\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query Header($locale: I18NLocaleCode!) {\n    header(locale: $locale) {\n      __typename\n      links {\n        ...ComponentUiLinkFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query Header($locale: I18NLocaleCode!) {\n    header(locale: $locale) {\n      __typename\n      links {\n        ...ComponentUiLinkFragment\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
