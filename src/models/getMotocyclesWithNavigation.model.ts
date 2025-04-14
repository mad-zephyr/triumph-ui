import { TProductCardPreview } from '@/common/components/productPreview/productCardPreview';
import { TNavigatorNavItem } from '@/common/sections/productListing/components/navigator/navigator';
import { TProductListingSection } from '@/common/sections/productListing/productListingSection';
import { TProduct } from '@/types/entity';
import { GBikesType, GBikeTypesPage, GMotorcycle } from '@/types/types';

import { getMotocycle } from './getMotocycle.model';
const getMotoPreview = (moto: TProduct): TProductCardPreview => {
  return {
    title: moto.model_name,
    subtitle: `${moto.base_price}` || '0',
    image: moto.listing_image,
    href: `/${moto.productType}/${moto.bikes_type.type}/${moto.sku}`,
  };
};

export const getMotocyclesWithNavigation = (
  bikeTypesPage: GBikeTypesPage
): TProductListingSection => {
  const sectionsNav = new Map<string, TNavigatorNavItem>();

  const sectionsMoto = bikeTypesPage?.displayed_bike_types
    .filter((bikeType): bikeType is GBikesType => !!bikeType)

    .reduce<Map<string, TProductCardPreview[]>>((acc, cur) => {
      if (cur.__typename === 'BikesType' && cur?.motorcycles) {
        const motoPreviewCards = cur.motorcycles
          .filter((moto): moto is GMotorcycle => !!moto)
          .map(getMotocycle)
          .map(getMotoPreview);

        if (motoPreviewCards.length) {
          sectionsNav.set(cur.type, {
            title: cur.title,
            navId: cur.type,
          });
        }

        acc.set(cur.type, motoPreviewCards);
      }

      return acc;
    }, new Map());

  const motoSectionKeys = [...sectionsNav.keys()];

  const motoSections = motoSectionKeys.reduce<
    TProductListingSection['sections']
  >((acc, key) => {
    const nav = sectionsNav.get(key);

    const motoSection: TProductListingSection['sections'][0] = {
      cards: sectionsMoto.get(key) || [],
      navId: nav?.navId || '',
      title: nav?.title || '',
    };

    acc.push(motoSection);

    return acc;
  }, []);

  return {
    nav: [...sectionsNav.values()],
    sections: motoSections,
  };
};
