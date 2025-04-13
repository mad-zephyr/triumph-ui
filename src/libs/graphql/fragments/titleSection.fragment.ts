import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const TitleSectionFragment = gql`
  ${UploadFileFragment}
  fragment TitleSectionFragment on ComponentSectionTitleSection {
    __typename
    title
    description
    cover {
      ...UploadFileFragment
    }
  }
`;
