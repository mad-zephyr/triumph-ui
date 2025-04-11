import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const BigThumbnailSectionFragment = gql`
  ${UploadFileFragment}
  fragment BigThumbnailSectionFragment on ComponentSectionBigThumbnailSection {
    __typename
    title
    active
    cards {
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
