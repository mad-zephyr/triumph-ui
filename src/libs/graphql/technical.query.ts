import { gql } from '@apollo/client';

import { ComponentUiLinkFragment } from './fragments/uiLink.fragments';

export const GET_HEADER = gql`
  ${ComponentUiLinkFragment}
  query Header($locale: I18NLocaleCode!) {
    header(locale: $locale) {
      __typename
      links {
        ...ComponentUiLinkFragment
      }
    }
  }
`;
