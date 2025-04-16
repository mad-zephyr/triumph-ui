import { gql } from '@apollo/client';

export const TextRedactorSection = gql`
  fragment TextRedactorSection on ComponentSectionTextRedactor {
    __typename
    id
    theme
    show
    blocks
  }
`;
