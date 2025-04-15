import { gql } from '@apollo/client';

import { TextRedactorSection, TitleSectionFragment } from './fragments';
import { UploadFileFragment } from './fragments/uploadFile.fragment';
export const getNewsPage = gql`
  ${TitleSectionFragment}
  ${TextRedactorSection}
  ${UploadFileFragment}
  query GetNewsPageQuery($locale: I18NLocaleCode!, $url: String!) {
    newsPosts(
      locale: $locale
      filters: { url: { eq: $url } }
      status: PUBLISHED
    ) {
      __typename
      title
      previewText
      url
      id: documentId
      preview_cover {
        ...UploadFileFragment
      }
      sections {
        ...TitleSectionFragment
        ...TextRedactorSection
      }
    }
  }
`;
