import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const HeroSectionFragent = gql`
  ${UploadFileFragment}
  fragment HeroSectionFragent on ComponentSectionHeroSlider {
    __typename
    Slide {
      show
      __typename
      title
      subtitle
      navText
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
