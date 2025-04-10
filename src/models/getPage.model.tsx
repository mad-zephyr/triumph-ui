import { ReactNode } from 'react';

import {
  BigThumbnailSection,
  CategoryAccordion,
  HeroSection,
  QuickNavigation,
} from '@/common';
import { TBigThumbnailCard } from '@/common/sections/bigThumbnail/bigThumbnailSection';
import { TTCategoryAccordionCard } from '@/common/sections/categoryAccordion/categoryAccordion';
import { TSlide } from '@/common/sections/hero/components/heroSlider/components/slide/slide';
import { GPage } from '@/types/types';

import { getButtons } from './getButtons.model';
import { uiUploadfile } from './uiUploadfile';

export const getPageModel = (page: GPage) => {
  const sections: ReactNode[] = [];

  page?.sections?.forEach((section, i) => {
    if (section?.__typename === 'ComponentSectionHeroSlider') {
      const slides = section.Slide.map<TSlide>((slide) => {
        return {
          title: slide?.title,
          subtitle: slide?.subtitle,
          image: uiUploadfile(slide?.cover),
          buttons: slide?.button?.map((btn) => getButtons(btn)) || [],
        } satisfies TSlide;
      });

      sections.push(<HeroSection key={i} slides={slides} />);
    }

    if (section?.__typename === 'ComponentSectionQuickNavigation') {
      sections.push(
        <QuickNavigation
          key={i}
          links={section.links.map((link) => ({
            title: link?.title,
            url: link?.url || '/',
            icon: uiUploadfile(link?.icon),
            active: link?.active,
          }))}
        />
      );
    }

    if (section?.__typename === 'ComponentSectionAccordionSection') {
      const accordionCards =
        section.Cards?.reduce<TTCategoryAccordionCard[]>((acc, card) => {
          if (card?.show) {
            acc.push({
              title: card?.title || '',
              button: getButtons(card?.button),
              image: uiUploadfile(card?.cover),
            });
          }

          return acc;
        }, []) || [];

      sections.push(
        <CategoryAccordion
          key={i}
          title={section.title || ''}
          cards={accordionCards}
        />
      );
    }

    if (section?.__typename === 'ComponentSectionBigThumbnailSection') {
      const cards =
        section.cards?.reduce<TBigThumbnailCard[]>((acc, card) => {
          if (card?.show) {
            acc.push({
              title: card.title || '',
              button: getButtons(card?.button),
              image: uiUploadfile(card?.cover),
            });
          }

          return acc;
        }, []) || [];

      sections.push(
        <BigThumbnailSection
          key={i}
          title={section.title || ''}
          cards={cards}
        />
      );
    }
  });

  return {
    sections,
  };
};
