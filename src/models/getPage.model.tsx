import { ReactNode } from 'react';

import {
  BigThumbnailSection,
  CategoryAccordion,
  HeroSection,
  QuickNavigation,
  SliderSection,
} from '@/common';
import { ProductCardBig } from '@/common/components';
import { TBigThumbnailCard } from '@/common/sections/bigThumbnail/bigThumbnailSection';
import { TTCategoryAccordionCard } from '@/common/sections/categoryAccordion/categoryAccordion';
import { TSlide } from '@/common/sections/hero/components/heroSlider/components/slide/slide';
import { GPage } from '@/types/types';

import { getButtons } from './getButtons.model';
import { getMotocycles } from './getMotocycle.model';
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
          navTitle: slide?.navText,
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

    if (section?.__typename === 'ComponentSectionPromoSliderSection') {
      if (section.motocycles) {
        const motos = getMotocycles(section.motocycles);

        sections.push(
          <SliderSection
            key={i}
            title={section.title}
            options={{
              type: 'loop',
              autoplay: true,
              perPage: 2,
              pagination: true,
            }}
          >
            {motos.map((card, k) => (
              <ProductCardBig
                key={k}
                data={{
                  image: card.listing_image,
                  title: card.model_name,
                  cta: {
                    title: section.cta_title || 'more',
                    url: `/${card.productType?.toLowerCase()}/${card.bikes_type.type}/${card.sku}`,
                  },
                }}
              />
            ))}
          </SliderSection>
        );
      }
    }
  });

  return {
    sections,
  };
};
