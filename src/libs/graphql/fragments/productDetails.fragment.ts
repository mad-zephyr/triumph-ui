import { gql } from '@apollo/client';

export const ProductDetails = gql`
  fragment ProductDetails on ComponentComponentAttribute {
    __typename
    attribute {
      __typename
      group_name
      item {
        __typename
        key
        value
      }
    }
  }
`;
