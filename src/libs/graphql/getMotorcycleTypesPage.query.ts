import { gql } from '@apollo/client';

import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const getBikesTypePage = gql`
  ${UploadFileFragment}
  query GET_BIKES_TYPE_PAGE($locale: I18NLocaleCode!) {
    bikeTypesPage(locale: $locale) {
      __typename
      navigator_title
      id: documentId
      displayed_bike_types {
        title
        type
        motorcycles {
          model_name
          base_price
          sku
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
        }
      }
    }
  }
`;
