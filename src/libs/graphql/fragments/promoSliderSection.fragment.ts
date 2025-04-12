import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const PromoSliderSectionFragment = gql`
  ${UploadFileFragment}
  fragment PromoSliderSectionFragment on ComponentSectionPromoSliderSection {
    __typename
    title
    cta_title
    active
    motocycles {
      documentId
      __typename
      sku
      availability_status
      bikes_type {
        title
        type
      }
      year
      base_price
      model_name
      description
      listing_image {
        ...UploadFileFragment
      }
      main_image {
        ...UploadFileFragment
      }
      gallery {
        ...UploadFileFragment
      }
    }
  }
`;
