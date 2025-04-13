import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const TextRedactorSection = gql`
  ${UploadFileFragment}
  fragment TextRedactorSection on ComponentSectionTextRedactor {
    __typename
    blocks
  }
`;
