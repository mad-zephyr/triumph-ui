import { gql } from '@apollo/client';

import { SeoFragment } from './fragments';

export const GetPageSeo = gql`
  ${SeoFragment}
  query GetPageSeo($locale: I18NLocaleCode!, $url: String!) {
    pages(locale: $locale, filters: { url: { eq: $url } }) {
      url
      seo {
        ...SeoFragment
      }
    }
  }
`;
