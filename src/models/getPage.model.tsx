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
import { TProduct } from '@/types/entity';
import { GMotorcycle, GPage, Maybe } from '@/types/types';

import { getButtons } from './getButtons.model';
import { TUploadFile, uiUploadfile } from './uiUploadfile';

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

    if (section?.__typename === 'ComponentSectionPromoSliderSection') {
      if (section.motocycles) {
        const motos = MaybeMotocycleToMotocycle(section.motocycles);

        sections.push(
          <SliderSection
            key={i}
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
                    url: `/${card.productType?.toLowerCase()}/${card.sku}`,
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

function MaybeMotocycleToMotocycle(motos: Maybe<GMotorcycle>[]) {
  if (!motos) {
    return [];
  }

  return (
    motos
      .filter<GMotorcycle>((moto): moto is GMotorcycle => !!moto)
      .map<TProduct>((moto) => {
        return {
          sku: moto.sku,
          productType: moto.__typename,
          model_name: moto.model_name,
          status: moto.availability_status,
          base_price: moto.base_price,
          year: moto.year,
          main_image: uiUploadfile(moto.main_image),
          listing_image: uiUploadfile(moto.listing_image),
          gallery: moto.gallery
            .map((image) => uiUploadfile(image))
            .filter((image): image is TUploadFile => !image),
          description: moto.description,
          ...(moto.bikes_type && { bikes_type: moto.bikes_type }),
          ...(moto?.details && { details: moto.details }),
          ...(moto.availability_status && {
            availability_status: moto.availability_status,
          }),
          ...(moto.description && { description: moto.description }),
          ...(moto.banner && moto.banner.active && { banner: moto.banner }),
        };
      }) || []
  );
}
