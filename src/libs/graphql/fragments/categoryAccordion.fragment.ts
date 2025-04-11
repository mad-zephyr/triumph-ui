import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const CategoryAccordionFragment = gql`
  ${UploadFileFragment}
  fragment CategoryAccordionFragment on ComponentSectionAccordionSection {
    __typename
    active
    title
    Cards {
      __typename
      show
      title
      button {
        __typename
        title
        url
        variant
      }
      cover {
        ...UploadFileFragment
      }
    }
  }
`;
