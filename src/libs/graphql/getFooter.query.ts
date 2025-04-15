import { gql } from '@apollo/client';

export const GetFooter = gql`
  query GetFooter($locale: I18NLocaleCode!) {
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
          ...ComponentUiLink
        }
      }
      column2 {
        __typename
        id
        title
        link {
          ...ComponentUiLink
        }
      }
      column3 {
        __typename
        id
        title
        link {
          ...ComponentUiLink
        }
      }
      bottom {
        ...ComponentUiLink
      }
    }
  }

  fragment ComponentUiLink on ComponentUiLink {
    __typename
    id
    title
    url
  }
`;
