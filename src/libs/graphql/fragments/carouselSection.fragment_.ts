import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const CarouselSectionFragment = gql`
  ${UploadFileFragment}
  fragment CarouselSectionFragment on ComponentSectionCarousel {
    id
    __typename
    image {
      ...UploadFileFragment
    }
  }
`;
