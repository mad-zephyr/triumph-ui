import { gql } from '@apollo/client';

import {
  BigThumbnailSectionFragment,
  CategoryAccordionFragment,
  QuickNavigationFragment,
} from './fragments';
import { HeroSectionFragent } from './fragments/heroSection.fragment';

export const GetPage = gql`
  ${HeroSectionFragent}
  ${QuickNavigationFragment}
  ${CategoryAccordionFragment}
  ${BigThumbnailSectionFragment}
  query GET_PAGE($locale: I18NLocaleCode!) {
    pages(locale: $locale) {
      __typename
      sections {
        ...HeroSectionFragent
        ...QuickNavigationFragment
        ...CategoryAccordionFragment
        ...BigThumbnailSectionFragment
      }
    }
  }
`;
