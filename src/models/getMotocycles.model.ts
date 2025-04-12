import { TProductCardPreview } from '@/common/components/productPreview/productCardPreview';
import { TProductListingSection } from '@/common/sections/productListing/productListingSection';
import { TProduct } from '@/types/entity';
import { GMotorcycle } from '@/types/types';

import { getMotocycle } from './getMotocycle.model';
const getMotoPreview = (moto: TProduct): TProductCardPreview => {
  return {
    title: moto.model_name,
    subtitle: `${moto.base_price}` || '0',
    image: moto.listing_image,
    href: `${moto.productType}/${moto.sku}`,
  };
};

export const getMotocycles = (motos: GMotorcycle[]): TProductListingSection => {
  const sectionsNav = new Map<string, TProductListingSection['nav'][0]>();
  const sectionsMoto = motos
    .filter((moto): moto is GMotorcycle => !!moto)
    .reduce<Map<string, TProductCardPreview[]>>((acc, cur) => {
      if (
        cur.__typename === 'Motorcycle' &&
        cur.bikes_type?.__typename === 'BikesType'
      ) {
        const prod = getMotocycle(cur);

        sectionsNav.set(prod.bikes_type.type, {
          title: prod.bikes_type.title,
          navId: prod.bikes_type.type,
        });

        if (acc.has(prod.bikes_type.type)) {
          const card = getMotoPreview(prod);

          acc.get(prod.bikes_type.type)?.push(card);
        } else {
          const card = getMotoPreview(prod);
          acc.set(prod.bikes_type.type, [card]);
        }
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
