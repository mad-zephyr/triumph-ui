import { gql } from '@apollo/client';

import { SeoFragment } from './fragments';
export const getNewsPageSeo = gql`
  ${SeoFragment}
  query GetNewsPageSeoQuery($locale: I18NLocaleCode!) {
    newsPage(locale: $locale) {
      seo {
        ...SeoFragment
      }
    }
  }
`;
