import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const BigPromoSectionFragment = gql`
  ${UploadFileFragment}
  fragment BigPromoSectionFragment on ComponentSectionBigPromoSection {
    __typename
    title
    subtitle
    buttons {
      __typename
      variant
      title
      url
    }
    cover {
      ...UploadFileFragment
    }
  }
`;
