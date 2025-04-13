import { gql } from '@apollo/client';

export const NewsSectionFragment = gql`
  fragment NewsSectionFragment on ComponentSectionNewsSection {
    __typename
    show
    title
    latestNewsCount
    button {
      __typename
      title
      url
      variant
    }
  }
`;
