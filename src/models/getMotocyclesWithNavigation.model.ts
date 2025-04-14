import { TProductCardPreview } from '@/common/components/productPreview/productCardPreview';
import { TProductListingSection } from '@/common/sections/productListing/productListingSection';
import { TProduct } from '@/types/entity';
import { GBikeTypesPage, GMotorcycle } from '@/types/types';

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
  return bikeTypesPage.displayed_bike_types.reduce<TProductListingSection>(
    (acc, cur) => {
      if (cur?.motorcycles.length) {
        const moto = cur?.motorcycles
          .filter((item): item is GMotorcycle => !!item)
          .map((item) => {
            const prod = getMotocycle(item);
            return prod;
          })
          .map(getMotoPreview);

        const nav = {
          title: cur.title,
          navId: cur.type,
        };

        acc.nav?.push(nav);
        acc.sections.push({ ...nav, cards: moto });
      }

      return acc;
    },
    { navTitle: bikeTypesPage.navigator_title, nav: [], sections: [] }
  );
};
