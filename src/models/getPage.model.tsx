import { ReactNode } from 'react';

import {
  BigPromoSection,
  BigThumbnailSection,
  CarouselSection,
  CategoryAccordion,
  ContentBlocksSection,
  HeroSection,
  NewsListSection,
  QuickNavigation,
  SliderSection,
  TitleSection,
} from '@/common';
import { ProductCardBig } from '@/common/components';
import { TBigThumbnailCard } from '@/common/sections/bigThumbnail/bigThumbnailSection';
import { TTCategoryAccordionCard } from '@/common/sections/categoryAccordion/categoryAccordion';
import { TSlide } from '@/common/sections/hero/components/heroSlider/components/slide/slide';
import { GBikesType, GNewsPost, GPage } from '@/types/types';

import { getButtons } from './getButtons.model';
import { getMotocycles } from './getMotocycle.model';
import { getTTagFromTitleTagEnum } from './getTTag.model';
import { TUploadFile, uiUploadfile } from './uiUploadfile';

export const getPageModel = (page: GPage | GNewsPost | GBikesType) => {
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
            {motos.map((card, k) => {
              return (
                <ProductCardBig
                  key={k}
                  data={{
                    image: card.listing_image,
                    title: card.model_name,
                    cta: {
                      title: section.cta_title || 'more',
                      url: `/${card.productType?.toLowerCase()}/${card.bikes_type?.type}/${card.sku}`,
                    },
                  }}
                />
              );
            })}
          </SliderSection>
        );
      }
    }

    if (section?.__typename === 'ComponentSectionBigPromoSection') {
      sections.push(
        <BigPromoSection
          key={i}
          title={section.title}
          subtitle={section.subtitle}
          buttons={section.buttons?.map(getButtons) || []}
          cover={uiUploadfile(section.cover)}
        />
      );
    }

    if (section?.__typename === 'ComponentSectionNewsSection') {
      if (section.show) {
        sections.push(
          <NewsListSection
            key={i}
            title={section.title}
            button={getButtons(section.button)}
            latestNewsCount={section?.latestNewsCount || 6}
          />
        );
      }
    }

    if (section?.__typename === 'ComponentSectionTitleSection') {
      sections.push(
        <TitleSection
          key={i}
          data={{
            title: section.title,
            description: section.description,
            image: uiUploadfile(section.cover),
            titleHtmlTag: getTTagFromTitleTagEnum(section.title_html_tag),
          }}
        />
      );
    }

    if (section?.__typename === 'ComponentSectionTextRedactor') {
      sections.push(
        <ContentBlocksSection
          theme={section.theme}
          key={i}
          content={section.blocks}
        />
      );
    }

    if (section?.__typename === 'ComponentSectionCarousel') {
      const carouselImages = section.image
        .map(uiUploadfile)
        .filter((image): image is TUploadFile => !!image);

      sections.push(<CarouselSection key={i} images={carouselImages} />);
    }
  });

  return {
    sections,
  };
};
