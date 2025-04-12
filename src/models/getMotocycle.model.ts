import { TProduct } from '@/types/entity';
import { GMotorcycle, Maybe } from '@/types/types';

import { TUploadFile, uiUploadfile } from './uiUploadfile';

export function getMotocycle(motos: Maybe<GMotorcycle>[]) {
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
            .filter((image): image is TUploadFile => !!image),
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
