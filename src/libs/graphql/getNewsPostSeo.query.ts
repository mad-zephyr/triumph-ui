import { gql } from '@apollo/client';

import { SeoFragment } from './fragments';
export const getNewsPostSeo = gql`
  ${SeoFragment}
  query GetNewsPostSeo($locale: I18NLocaleCode!, $url: String!) {
    newsPosts(locale: $locale, filters: { url: { eq: $url } }) {
      seo {
        ...SeoFragment
      }
    }
  }
`;
