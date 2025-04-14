import { TTag } from '@/common/ui/text/text';
import { TUploadFile } from '@/models/uiUploadfile';

import {
  GBikesType,
  GComponentComponentAttribute,
  GENUM_MOTORCYCLE_AVAILABILITY_STATUS,
} from './types';

export type TProduct = {
  sku: string;
  productType: string;
  model_name: string;
  status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
  base_price: number;
  year: unknown;
  main_image: TUploadFile;
  listing_image: TUploadFile;
  gallery: TUploadFile[];
  description: unknown;
  bikes_type: GBikesType;
  details: GComponentComponentAttribute;
  availability_status: GENUM_MOTORCYCLE_AVAILABILITY_STATUS;
  banner: {
    title: string;
    description: unknown;
    image: TUploadFile;
    titleHtmlTag: TTag;
  };
};
