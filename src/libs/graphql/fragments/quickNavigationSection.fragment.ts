import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const QuickNavigationFragment = gql`
  ${UploadFileFragment}
  fragment QuickNavigationFragment on ComponentSectionQuickNavigation {
    __typename
    active
    links {
      __typename
      active
      show
      title
      url
      icon {
        ...UploadFileFragment
      }
    }
  }
`;
