import { gql } from '@apollo/client';

import { UploadFileFragment } from './fragments/uploadFile.fragment';
export const GetNewsPostsQuery = gql`
  ${UploadFileFragment}
  query GetNewsPostsQuery($locale: I18NLocaleCode!, $start: Int, $limit: Int) {
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
