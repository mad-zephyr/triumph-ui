import { gql } from '@apollo/client';

import { SeoFragment } from './fragments';
export const getBikeTypePageSeo = gql`
  ${SeoFragment}
  query GetBikeTypePageSeo($locale: I18NLocaleCode!, $type: String!) {
    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {
      seo {
        ...SeoFragment
      }
    }
  }
`;
