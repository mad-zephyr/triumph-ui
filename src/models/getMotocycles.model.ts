import { TProductCardPreview } from '@/common/components/productPreview/productCardPreview';
import { TProductListingSection } from '@/common/sections/productListing/productListingSection';
import { GMotorcycle } from '@/types/types';

import { uiUploadfile } from './uiUploadfile';

const getMotoPreview = (moto: GMotorcycle): TProductCardPreview => {
  return {
    title: moto.model_name,
    subtitle: `${moto.base_price}` || '0',
    image: uiUploadfile(moto.listing_image),
  };
};

export const getMotocycles = (moto: GMotorcycle[]): TProductListingSection => {
  const sectionsNav = new Map<string, TProductListingSection['nav'][0]>();
  const sectionsMoto = moto.reduce<Map<string, TProductCardPreview[]>>(
    (acc, cur) => {
      if (
        cur.__typename === 'Motorcycle' &&
        cur.bikes_type?.__typename === 'BikesType'
      ) {
        sectionsNav.set(cur.bikes_type.type, {
          title: cur.bikes_type.title,
          navId: cur.bikes_type.type,
        });

        if (acc.has(cur.bikes_type.type)) {
          const card = getMotoPreview(cur);

          acc.get(cur.bikes_type.type)?.push(card);
        } else {
          const card = getMotoPreview(cur);
          acc.set(cur.bikes_type.type, [card]);
        }
      }

      return acc;
    },
    new Map()
  );

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

  console.log('motoSections', sectionsMoto);

  return {
    nav: [...sectionsNav.values()],
    sections: motoSections,
  };
};
