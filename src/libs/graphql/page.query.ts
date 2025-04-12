import { gql } from '@apollo/client';

import {
  BigThumbnailSectionFragment,
  CategoryAccordionFragment,
  PromoSliderSectionFragment,
  QuickNavigationFragment,
} from './fragments';
import { HeroSectionFragent } from './fragments/heroSection.fragment';

export const GetPage = gql`
  ${HeroSectionFragent}
  ${QuickNavigationFragment}
  ${CategoryAccordionFragment}
  ${BigThumbnailSectionFragment}
  ${PromoSliderSectionFragment}
  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {
    pages(locale: $locale, filters: { url: { eq: $url } }) {
      __typename
      sections {
        ...HeroSectionFragent
        ...QuickNavigationFragment
        ...CategoryAccordionFragment
        ...BigThumbnailSectionFragment
        ...PromoSliderSectionFragment
      }
    }
  }
`;
