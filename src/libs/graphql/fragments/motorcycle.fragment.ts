import { gql } from '@apollo/client';

import { ProductDetails } from './productDetails.fragment';
import { UploadFileFragment } from './uploadFile.fragment';

export const MotorcycleFragment = gql`
  ${UploadFileFragment}
  ${ProductDetails}
  fragment MotorcycleFragment on Motorcycle {
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
      __typename
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
  }
`;
