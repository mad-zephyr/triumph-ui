import { gql } from '@apollo/client';

export const ComponentUiLinkFragment = gql`
  fragment ComponentUiLinkFragment on ComponentUiLink {
    __typename
    id
    title
    url
  }
`;
