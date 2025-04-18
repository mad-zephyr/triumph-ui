import { gql } from '@apollo/client';

import { ComponentUiLinkFragment } from './fragments/uiLink.fragments';

export const GET_TECHNICAL = gql`
  ${ComponentUiLinkFragment}
  query Header($locale: I18NLocaleCode!) {
    header(locale: $locale) {
      __typename
      links {
        ...ComponentUiLinkFragment
      }
    }
    footer(locale: $locale) {
      __typename
      documentId
      contacts {
        __typename
        id
        title
        contact_text
      }
      column1 {
        __typename
        id
        title
        link {
          ...ComponentUiLinkFragment
        }
      }
      column2 {
        __typename
        id
        title
        link {
          ...ComponentUiLinkFragment
        }
      }
      column3 {
        __typename
        id
        title
        link {
          ...ComponentUiLinkFragment
        }
      }
      bottom {
        ...ComponentUiLinkFragment
      }
    }
  }
`;
