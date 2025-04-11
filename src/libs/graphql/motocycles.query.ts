import { gql } from '@apollo/client';

import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const GetMotocycles = gql`
  ${UploadFileFragment}
  query GET_MOTOCYCLES($locale: I18NLocaleCode!) {
    motorcycles(locale: $locale) {
      __typename
      category
      model_name
      sku
      year
      availability_status
      base_price
      description
      available_colors {
        ... on BikeColor {
          __typename
          color
        }
      }
      bikes_type {
        ... on BikesType {
          type
          title
        }
      }
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
