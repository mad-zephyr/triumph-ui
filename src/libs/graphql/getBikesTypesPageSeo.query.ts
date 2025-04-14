import { gql } from '@apollo/client';

import { SeoFragment } from './fragments';
export const getBikesTypesPageSeo = gql`
  ${SeoFragment}
  query GetBikesTypesPageSeo($locale: I18NLocaleCode!) {
    bikeTypesPage(locale: $locale) {
      seo {
        ...SeoFragment
      }
    }
  }
`;
