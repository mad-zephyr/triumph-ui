import { gql } from '@apollo/client';

import { ProductDetails } from './fragments';
import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const GetMotocycle = gql`
  ${UploadFileFragment}
  ${ProductDetails}
  query GET_MOTOCYCLE($locale: I18NLocaleCode!, $sku: String) {
    motorcycles(locale: $locale, filters: { sku: { eq: $sku } }) {
      __typename
      category
      model_name
      sku
      id: documentId
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
      details {
        ...ProductDetails
      }
      banner {
        active
        title
        description
        cover {
          ...UploadFileFragment
        }
      }
    }
  }
`;
