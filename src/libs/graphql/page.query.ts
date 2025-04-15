import { gql } from '@apollo/client';

import {
  BigPromoSectionFragment,
  BigThumbnailSectionFragment,
  CategoryAccordionFragment,
  NewsSectionFragment,
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
  ${BigPromoSectionFragment}
  ${NewsSectionFragment}
  query GET_PAGE($locale: I18NLocaleCode!, $url: String!) {
    pages(locale: $locale, filters: { url: { eq: $url } }) {
      __typename
      url
      sections {
        ...HeroSectionFragent
        ...QuickNavigationFragment
        ...CategoryAccordionFragment
        ...BigThumbnailSectionFragment
        ...PromoSliderSectionFragment
        ...BigPromoSectionFragment
        ...NewsSectionFragment
      }
    }
  }
`;
