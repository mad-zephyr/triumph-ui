import { gql } from '@apollo/client';

import { UploadFileFragment } from './fragments/uploadFile.fragment';
export const GetPreloadedNewsPostsQuery = gql`
  ${UploadFileFragment}
  query GetPreloadedNewsPostsQuery(
    $locale: I18NLocaleCode!
    $start: Int
    $limit: Int
  ) {
    newsPage {
      __typename
      id: documentId
      banner {
        __typename
        active
        title
        description
        cover {
          ...UploadFileFragment
        }
      }
    }
    newsPosts(
      locale: $locale
      status: PUBLISHED
      pagination: { start: $start, limit: $limit }
      sort: ["createdAt:desc"]
    ) {
      __typename
      title
      url
      previewText
      preview_cover {
        ...UploadFileFragment
      }
    }
    newsPosts_connection(
      locale: $locale
      pagination: { start: $start, limit: $limit }
      status: PUBLISHED
    ) {
      pageInfo {
        total
        page
        pageSize
        pageCount
      }
    }
  }
`;
