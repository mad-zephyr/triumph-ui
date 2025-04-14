import { gql } from '@apollo/client';

import { SeoFragment } from './fragments';

export const GetMotorcyclePageSeo = gql`
  ${SeoFragment}
  query GetMotorcyclePageSeo($locale: I18NLocaleCode!, $sku: String!) {
    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {
      seo {
        ...SeoFragment
      }
    }
  }
`;
