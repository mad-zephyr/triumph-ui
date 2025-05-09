import { gql } from '@apollo/client';

import { TextRedactorSection } from './fragments';
import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const getMotorcyclesByType = gql`
  ${UploadFileFragment}
  ${TextRedactorSection}
  query GET_MOTOCYCLES_BY_TYPE($locale: I18NLocaleCode!, $type: String!) {
    bikesTypes(locale: $locale, filters: { type: { eq: $type } }) {
      __typename
      type
      title
      id: documentId
      promoBanner {
        active
        title
        description
        cover {
          ...UploadFileFragment
        }
      }
      sections {
        ...TextRedactorSection
      }
      motorcycles {
        model_name
        base_price
        sku
        id: documentId
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
`;
