import { gql } from '@apollo/client';

import { UploadFileFragment } from './uploadFile.fragment';

export const SeoFragment = gql`
  ${UploadFileFragment}
  fragment SeoFragment on ComponentSharedSeo {
    __typename
    metaTitle
    metaDescription
    keywords
    canonicalURL
    metaImage {
      ...UploadFileFragment
    }
    metaRobots
    metaViewport
    structuredData
    openGraph {
      __typename
      id
      ogTitle
      ogType
      ogUrl
      ogDescription
      ogImage {
        ...UploadFileFragment
      }
    }
  }
`;
