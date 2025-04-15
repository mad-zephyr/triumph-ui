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
  '\n  \n  fragment BigPromoSectionFragment on ComponentSectionBigPromoSection {\n    __typename\n    title\n    subtitle\n    buttons {\n      __typename\n      variant\n      title\n      url\n    }\n    cover {\n      ...UploadFileFragment\n    }\n  }\n': typeof types.BigPromoSectionFragmentFragmentDoc;
  '\n  \n  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {\n    __typename\n    title\n    active\n    cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.BigThumbnailSectionFragmentFragmentDoc;
  '\n  \n  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {\n    __typename\n    active\n    title\n    Cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.CategoryAccordionFragmentFragmentDoc;
  '\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      navText\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.HeroSectionFragentFragmentDoc;
  '\n  \n  \n  fragment MotorcycleFragment on Motorcycle {\n    __typename\n    category\n    model_name\n    sku\n    year\n    availability_status\n    base_price\n    description\n    available_colors {\n      ... on BikeColor {\n        __typename\n        color\n      }\n    }\n    bikes_type {\n      __typename\n      ... on BikesType {\n        type\n        title\n      }\n    }\n    listing_image {\n      ...UploadFileFragment\n    }\n    main_image {\n      ...UploadFileFragment\n    }\n    gallery {\n      ...UploadFileFragment\n    }\n    details {\n      ...ProductDetails\n    }\n  }\n': typeof types.MotorcycleFragmentFragmentDoc;
  '\n  fragment NewsSectionFragment on ComponentSectionNewsSection {\n    __typename\n    show\n    title\n    latestNewsCount\n    button {\n      __typename\n      title\n      url\n      variant\n    }\n  }\n': typeof types.NewsSectionFragmentFragmentDoc;
  '\n  fragment ProductDetails on ComponentComponentAttribute {\n    __typename\n    attribute {\n      __typename\n      group_name\n      item {\n        __typename\n        key\n        value\n      }\n    }\n  }\n': typeof types.ProductDetailsFragmentDoc;
  '\n  \n  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {\n    __typename\n    title\n    cta_title\n    active\n    motocycles {\n      documentId\n      __typename\n      sku\n      availability_status\n      bikes_type {\n        title\n        type\n      }\n      year\n      base_price\n      model_name\n      description\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.PromoSliderSectionFragmentFragmentDoc;
  '\n  \n  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {\n    __typename\n    active\n    links {\n      __typename\n      active\n      show\n      title\n      url\n      icon {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.QuickNavigationFragmentFragmentDoc;
  '\n  \n  fragment SeoFragment on ComponentSharedSeo {\n    __typename\n    metaTitle\n    metaDescription\n    keywords\n    canonicalURL\n    metaImage {\n      ...UploadFileFragment\n    }\n    metaRobots\n    metaViewport\n    structuredData\n    openGraph {\n      __typename\n      id\n      ogTitle\n      ogType\n      ogUrl\n      ogDescription\n      ogImage {\n        ...UploadFileFragment\n      }\n    }\n  }\n': typeof types.SeoFragmentFragmentDoc;
  '\n  \n  fragment TextRedactorSection on ComponentSectionTextRedactor {\n    __typename\n    blocks\n  }\n': typeof types.TextRedactorSectionFragmentDoc;
  '\n  \n  fragment TitleSectionFragment on ComponentSectionTitleSection {\n    __typename\n    title\n    description\n    title_html_tag\n    cover {\n      ...UploadFileFragment\n    }\n  }\n': typeof types.TitleSectionFragmentFragmentDoc;
  '\n  fragment ComponentUiLinkFragment on ComponentUiLink {\n    __typename\n    id\n    title\n    url\n  }\n': typeof types.ComponentUiLinkFragmentFragmentDoc;
  '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n': typeof types.UploadFileFragmentFragmentDoc;
  '\n  \n  query GetBikeTypePageSeo($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n': typeof types.GetBikeTypePageSeoDocument;
  '\n  \n  query GetBikesTypesPageSeo($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n': typeof types.GetBikesTypesPageSeoDocument;
  '\n  \n  query GetMotorcyclePageSeo($locale: I18NLocaleCode!, $sku: String!) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n': typeof types.GetMotorcyclePageSeoDocument;
  '\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      id: documentId\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        id: documentId\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n': typeof types.Get_Motocycles_By_TypeDocument;
  '\n  \n  query GET_MOTOCYCLE_PAGE($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      __typename\n      navigator_title\n      id: documentId\n      displayed_bike_types {\n        title\n        type\n        motorcycles {\n          model_name\n          base_price\n          sku\n          bikes_type {\n            __typename\n            ... on BikesType {\n              type\n              title\n            }\n          }\n          listing_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n': typeof types.Get_Motocycle_PageDocument;
  '\n  \n  \n  \n  query GetNewsPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(\n      locale: $locale\n      filters: { url: { eq: $url } }\n      status: PUBLISHED\n    ) {\n      __typename\n      title\n      previewText\n      url\n      id: documentId\n      preview_cover {\n        ...UploadFileFragment\n      }\n      sections {\n        ...TitleSectionFragment\n        ...TextRedactorSection\n      }\n    }\n  }\n': typeof types.GetNewsPageQueryDocument;
  '\n  \n  query GetNewsPageSeoQuery($locale: I18NLocaleCode!) {\n    newsPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n': typeof types.GetNewsPageSeoQueryDocument;
  '\n  \n  query GetNewsPostSeo($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n': typeof types.GetNewsPostSeoDocument;
  '\n  \n  query GetNewsPostsQuery($locale: I18NLocaleCode!, $start: Int, $limit: Int) {\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n': typeof types.GetNewsPostsQueryDocument;
  '\n  \n  query GetPageSeo($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n': typeof types.GetPageSeoDocument;
  '\n  \n  query GetPreloadedNewsPostsQuery(\n    $locale: I18NLocaleCode!\n    $start: Int\n    $limit: Int\n  ) {\n    newsPage {\n      __typename\n      id: documentId\n      banner {\n        __typename\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n': typeof types.GetPreloadedNewsPostsQueryDocument;
  '\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      id: documentId\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n': typeof types.Get_MotocycleDocument;
  '\n  \n  \n  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {\n    motorcycles(locale: $locale) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          __typename\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n    }\n  }\n': typeof types.Get_MotocyclesDocument;
  '\n  \n  \n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      url\n      id: documentId\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n        ...BigPromoSectionFragment\n        ...NewsSectionFragment\n      }\n    }\n  }\n': typeof types.Get_PageDocument;
  '\n  \n  query Header($locale: I18NLocaleCode!) {\n    header(locale: $locale) {\n      __typename\n      links {\n        ...ComponentUiLinkFragment\n      }\n    }\n  }\n': typeof types.HeaderDocument;
};
const documents: Documents = {
  '\n  \n  fragment BigPromoSectionFragment on ComponentSectionBigPromoSection {\n    __typename\n    title\n    subtitle\n    buttons {\n      __typename\n      variant\n      title\n      url\n    }\n    cover {\n      ...UploadFileFragment\n    }\n  }\n':
    types.BigPromoSectionFragmentFragmentDoc,
  '\n  \n  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {\n    __typename\n    title\n    active\n    cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.BigThumbnailSectionFragmentFragmentDoc,
  '\n  \n  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {\n    __typename\n    active\n    title\n    Cards {\n      __typename\n      show\n      title\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.CategoryAccordionFragmentFragmentDoc,
  '\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      navText\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.HeroSectionFragentFragmentDoc,
  '\n  \n  \n  fragment MotorcycleFragment on Motorcycle {\n    __typename\n    category\n    model_name\n    sku\n    year\n    availability_status\n    base_price\n    description\n    available_colors {\n      ... on BikeColor {\n        __typename\n        color\n      }\n    }\n    bikes_type {\n      __typename\n      ... on BikesType {\n        type\n        title\n      }\n    }\n    listing_image {\n      ...UploadFileFragment\n    }\n    main_image {\n      ...UploadFileFragment\n    }\n    gallery {\n      ...UploadFileFragment\n    }\n    details {\n      ...ProductDetails\n    }\n  }\n':
    types.MotorcycleFragmentFragmentDoc,
  '\n  fragment NewsSectionFragment on ComponentSectionNewsSection {\n    __typename\n    show\n    title\n    latestNewsCount\n    button {\n      __typename\n      title\n      url\n      variant\n    }\n  }\n':
    types.NewsSectionFragmentFragmentDoc,
  '\n  fragment ProductDetails on ComponentComponentAttribute {\n    __typename\n    attribute {\n      __typename\n      group_name\n      item {\n        __typename\n        key\n        value\n      }\n    }\n  }\n':
    types.ProductDetailsFragmentDoc,
  '\n  \n  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {\n    __typename\n    title\n    cta_title\n    active\n    motocycles {\n      documentId\n      __typename\n      sku\n      availability_status\n      bikes_type {\n        title\n        type\n      }\n      year\n      base_price\n      model_name\n      description\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.PromoSliderSectionFragmentFragmentDoc,
  '\n  \n  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {\n    __typename\n    active\n    links {\n      __typename\n      active\n      show\n      title\n      url\n      icon {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.QuickNavigationFragmentFragmentDoc,
  '\n  \n  fragment SeoFragment on ComponentSharedSeo {\n    __typename\n    metaTitle\n    metaDescription\n    keywords\n    canonicalURL\n    metaImage {\n      ...UploadFileFragment\n    }\n    metaRobots\n    metaViewport\n    structuredData\n    openGraph {\n      __typename\n      id\n      ogTitle\n      ogType\n      ogUrl\n      ogDescription\n      ogImage {\n        ...UploadFileFragment\n      }\n    }\n  }\n':
    types.SeoFragmentFragmentDoc,
  '\n  \n  fragment TextRedactorSection on ComponentSectionTextRedactor {\n    __typename\n    blocks\n  }\n':
    types.TextRedactorSectionFragmentDoc,
  '\n  \n  fragment TitleSectionFragment on ComponentSectionTitleSection {\n    __typename\n    title\n    description\n    title_html_tag\n    cover {\n      ...UploadFileFragment\n    }\n  }\n':
    types.TitleSectionFragmentFragmentDoc,
  '\n  fragment ComponentUiLinkFragment on ComponentUiLink {\n    __typename\n    id\n    title\n    url\n  }\n':
    types.ComponentUiLinkFragmentFragmentDoc,
  '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n':
    types.UploadFileFragmentFragmentDoc,
  '\n  \n  query GetBikeTypePageSeo($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n':
    types.GetBikeTypePageSeoDocument,
  '\n  \n  query GetBikesTypesPageSeo($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n':
    types.GetBikesTypesPageSeoDocument,
  '\n  \n  query GetMotorcyclePageSeo($locale: I18NLocaleCode!, $sku: String!) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n':
    types.GetMotorcyclePageSeoDocument,
  '\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      id: documentId\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        id: documentId\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n':
    types.Get_Motocycles_By_TypeDocument,
  '\n  \n  query GET_MOTOCYCLE_PAGE($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      __typename\n      navigator_title\n      id: documentId\n      displayed_bike_types {\n        title\n        type\n        motorcycles {\n          model_name\n          base_price\n          sku\n          bikes_type {\n            __typename\n            ... on BikesType {\n              type\n              title\n            }\n          }\n          listing_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n':
    types.Get_Motocycle_PageDocument,
  '\n  \n  \n  \n  query GetNewsPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(\n      locale: $locale\n      filters: { url: { eq: $url } }\n      status: PUBLISHED\n    ) {\n      __typename\n      title\n      previewText\n      url\n      id: documentId\n      preview_cover {\n        ...UploadFileFragment\n      }\n      sections {\n        ...TitleSectionFragment\n        ...TextRedactorSection\n      }\n    }\n  }\n':
    types.GetNewsPageQueryDocument,
  '\n  \n  query GetNewsPageSeoQuery($locale: I18NLocaleCode!) {\n    newsPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n':
    types.GetNewsPageSeoQueryDocument,
  '\n  \n  query GetNewsPostSeo($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n':
    types.GetNewsPostSeoDocument,
  '\n  \n  query GetNewsPostsQuery($locale: I18NLocaleCode!, $start: Int, $limit: Int) {\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n':
    types.GetNewsPostsQueryDocument,
  '\n  \n  query GetPageSeo($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n':
    types.GetPageSeoDocument,
  '\n  \n  query GetPreloadedNewsPostsQuery(\n    $locale: I18NLocaleCode!\n    $start: Int\n    $limit: Int\n  ) {\n    newsPage {\n      __typename\n      id: documentId\n      banner {\n        __typename\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n':
    types.GetPreloadedNewsPostsQueryDocument,
  '\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      id: documentId\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n':
    types.Get_MotocycleDocument,
  '\n  \n  \n  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {\n    motorcycles(locale: $locale) {\n      __typename\n      category\n      model_name\n      sku\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          __typename\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n    }\n  }\n':
    types.Get_MotocyclesDocument,
  '\n  \n  \n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      url\n      id: documentId\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n        ...BigPromoSectionFragment\n        ...NewsSectionFragment\n      }\n    }\n  }\n':
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
  source: '\n  \n  fragment BigPromoSectionFragment on ComponentSectionBigPromoSection {\n    __typename\n    title\n    subtitle\n    buttons {\n      __typename\n      variant\n      title\n      url\n    }\n    cover {\n      ...UploadFileFragment\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment BigPromoSectionFragment on ComponentSectionBigPromoSection {\n    __typename\n    title\n    subtitle\n    buttons {\n      __typename\n      variant\n      title\n      url\n    }\n    cover {\n      ...UploadFileFragment\n    }\n  }\n'];
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
  source: '\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      navText\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment HeroSectionFragent on ComponentSectionHeroSlider {\n    __typename\n    Slide {\n      show\n      __typename\n      title\n      subtitle\n      navText\n      button {\n        __typename\n        title\n        url\n        variant\n      }\n      cover {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  fragment MotorcycleFragment on Motorcycle {\n    __typename\n    category\n    model_name\n    sku\n    year\n    availability_status\n    base_price\n    description\n    available_colors {\n      ... on BikeColor {\n        __typename\n        color\n      }\n    }\n    bikes_type {\n      __typename\n      ... on BikesType {\n        type\n        title\n      }\n    }\n    listing_image {\n      ...UploadFileFragment\n    }\n    main_image {\n      ...UploadFileFragment\n    }\n    gallery {\n      ...UploadFileFragment\n    }\n    details {\n      ...ProductDetails\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  fragment MotorcycleFragment on Motorcycle {\n    __typename\n    category\n    model_name\n    sku\n    year\n    availability_status\n    base_price\n    description\n    available_colors {\n      ... on BikeColor {\n        __typename\n        color\n      }\n    }\n    bikes_type {\n      __typename\n      ... on BikesType {\n        type\n        title\n      }\n    }\n    listing_image {\n      ...UploadFileFragment\n    }\n    main_image {\n      ...UploadFileFragment\n    }\n    gallery {\n      ...UploadFileFragment\n    }\n    details {\n      ...ProductDetails\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NewsSectionFragment on ComponentSectionNewsSection {\n    __typename\n    show\n    title\n    latestNewsCount\n    button {\n      __typename\n      title\n      url\n      variant\n    }\n  }\n'
): (typeof documents)['\n  fragment NewsSectionFragment on ComponentSectionNewsSection {\n    __typename\n    show\n    title\n    latestNewsCount\n    button {\n      __typename\n      title\n      url\n      variant\n    }\n  }\n'];
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
  source: '\n  \n  fragment SeoFragment on ComponentSharedSeo {\n    __typename\n    metaTitle\n    metaDescription\n    keywords\n    canonicalURL\n    metaImage {\n      ...UploadFileFragment\n    }\n    metaRobots\n    metaViewport\n    structuredData\n    openGraph {\n      __typename\n      id\n      ogTitle\n      ogType\n      ogUrl\n      ogDescription\n      ogImage {\n        ...UploadFileFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment SeoFragment on ComponentSharedSeo {\n    __typename\n    metaTitle\n    metaDescription\n    keywords\n    canonicalURL\n    metaImage {\n      ...UploadFileFragment\n    }\n    metaRobots\n    metaViewport\n    structuredData\n    openGraph {\n      __typename\n      id\n      ogTitle\n      ogType\n      ogUrl\n      ogDescription\n      ogImage {\n        ...UploadFileFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment TextRedactorSection on ComponentSectionTextRedactor {\n    __typename\n    blocks\n  }\n'
): (typeof documents)['\n  \n  fragment TextRedactorSection on ComponentSectionTextRedactor {\n    __typename\n    blocks\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment TitleSectionFragment on ComponentSectionTitleSection {\n    __typename\n    title\n    description\n    title_html_tag\n    cover {\n      ...UploadFileFragment\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment TitleSectionFragment on ComponentSectionTitleSection {\n    __typename\n    title\n    description\n    title_html_tag\n    cover {\n      ...UploadFileFragment\n    }\n  }\n'];
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
  source: '\n  \n  query GetBikeTypePageSeo($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetBikeTypePageSeo($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetBikesTypesPageSeo($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetBikesTypesPageSeo($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetMotorcyclePageSeo($locale: I18NLocaleCode!, $sku: String!) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetMotorcyclePageSeo($locale: I18NLocaleCode!, $sku: String!) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      id: documentId\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        id: documentId\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {\n    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {\n      __typename\n      type\n      title\n      id: documentId\n      promoBanner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n      motorcycles {\n        model_name\n        base_price\n        sku\n        id: documentId\n        bikes_type {\n          __typename\n          ... on BikesType {\n            type\n            title\n          }\n        }\n        listing_image {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GET_MOTOCYCLE_PAGE($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      __typename\n      navigator_title\n      id: documentId\n      displayed_bike_types {\n        title\n        type\n        motorcycles {\n          model_name\n          base_price\n          sku\n          bikes_type {\n            __typename\n            ... on BikesType {\n              type\n              title\n            }\n          }\n          listing_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GET_MOTOCYCLE_PAGE($locale: I18NLocaleCode!) {\n    bikeTypesPage(locale: $locale) {\n      __typename\n      navigator_title\n      id: documentId\n      displayed_bike_types {\n        title\n        type\n        motorcycles {\n          model_name\n          base_price\n          sku\n          bikes_type {\n            __typename\n            ... on BikesType {\n              type\n              title\n            }\n          }\n          listing_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  \n  query GetNewsPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(\n      locale: $locale\n      filters: { url: { eq: $url } }\n      status: PUBLISHED\n    ) {\n      __typename\n      title\n      previewText\n      url\n      id: documentId\n      preview_cover {\n        ...UploadFileFragment\n      }\n      sections {\n        ...TitleSectionFragment\n        ...TextRedactorSection\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  \n  query GetNewsPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(\n      locale: $locale\n      filters: { url: { eq: $url } }\n      status: PUBLISHED\n    ) {\n      __typename\n      title\n      previewText\n      url\n      id: documentId\n      preview_cover {\n        ...UploadFileFragment\n      }\n      sections {\n        ...TitleSectionFragment\n        ...TextRedactorSection\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetNewsPageSeoQuery($locale: I18NLocaleCode!) {\n    newsPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetNewsPageSeoQuery($locale: I18NLocaleCode!) {\n    newsPage(locale: $locale) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetNewsPostSeo($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetNewsPostSeo($locale: I18NLocaleCode!, $url: String!) {\n    newsPosts(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetNewsPostsQuery($locale: I18NLocaleCode!, $start: Int, $limit: Int) {\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetNewsPostsQuery($locale: I18NLocaleCode!, $start: Int, $limit: Int) {\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetPageSeo($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetPageSeo($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      seo {\n        ...SeoFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetPreloadedNewsPostsQuery(\n    $locale: I18NLocaleCode!\n    $start: Int\n    $limit: Int\n  ) {\n    newsPage {\n      __typename\n      id: documentId\n      banner {\n        __typename\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetPreloadedNewsPostsQuery(\n    $locale: I18NLocaleCode!\n    $start: Int\n    $limit: Int\n  ) {\n    newsPage {\n      __typename\n      id: documentId\n      banner {\n        __typename\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n    newsPosts(\n      locale: $locale\n      status: PUBLISHED\n      pagination: { start: $start, limit: $limit }\n      sort: ["createdAt:desc"]\n    ) {\n      __typename\n      title\n      url\n      previewText\n      preview_cover {\n        ...UploadFileFragment\n      }\n    }\n    newsPosts_connection(\n      locale: $locale\n      pagination: { start: $start, limit: $limit }\n      status: PUBLISHED\n    ) {\n      pageInfo {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      id: documentId\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {\n    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {\n      __typename\n      category\n      model_name\n      sku\n      id: documentId\n      year\n      availability_status\n      base_price\n      description\n      available_colors {\n        ... on BikeColor {\n          __typename\n          color\n        }\n      }\n      bikes_type {\n        ... on BikesType {\n          type\n          title\n        }\n      }\n      listing_image {\n        ...UploadFileFragment\n      }\n      main_image {\n        ...UploadFileFragment\n      }\n      gallery {\n        ...UploadFileFragment\n      }\n      details {\n        ...ProductDetails\n      }\n      banner {\n        active\n        title\n        description\n        cover {\n          ...UploadFileFragment\n        }\n      }\n    }\n  }\n'];
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
  source: '\n  \n  \n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      url\n      id: documentId\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n        ...BigPromoSectionFragment\n        ...NewsSectionFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  \n  \n  \n  \n  \n  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      url\n      id: documentId\n      sections {\n        ...HeroSectionFragent\n        ...QuickNavigationFragment\n        ...CategoryAccordionFragment\n        ...BigThumbnailSectionFragment\n        ...PromoSliderSectionFragment\n        ...BigPromoSectionFragment\n        ...NewsSectionFragment\n      }\n    }\n  }\n'];
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
