import { TProduct } from '@/types/entity';
import { GMotorcycle, Maybe } from '@/types/types';

import { getTTagFromTitleTagEnum } from './getTTag.model';
import { TUploadFile, uiUploadfile } from './uiUploadfile';

export function getMotocycles(motos: Maybe<GMotorcycle>[]): TProduct[] {
  if (!motos) {
    return [];
  }

  return (
    motos
      .filter<GMotorcycle>((moto): moto is GMotorcycle => !!moto)
      .map<TProduct>(getMotocycle) || []
  );
}

export function getMotocycle(moto: GMotorcycle): TProduct {
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
      ?.map((image) => uiUploadfile(image))
      ?.filter((image): image is TUploadFile => !!image),
    ...(moto?.description && { description: moto.description }),
    ...(moto?.bikes_type && { bikes_type: moto.bikes_type }),
    ...(moto?.details && { details: moto.details }),
    ...(moto?.availability_status && {
      availability_status: moto.availability_status,
    }),
    ...(moto?.description && { description: moto.description }),
    ...(moto?.banner &&
      moto.banner.active && {
        banner: {
          ...moto.banner,
          image: uiUploadfile(moto.banner.cover),
          titleHtmlTag: getTTagFromTitleTagEnum(),
        },
      }),
  };
}
