import { TDropDownItem } from '@/common/components/dropDownList/components/dropDownItem/dropDownItem';
import { TProduct } from '@/types/entity';
import { GComponentComponentDetailItem } from '@/types/types';

export function getProductDetailsAccordion(moto: TProduct): TDropDownItem[] {
  if (!moto?.details) {
    return [];
  }

  if (moto.details.__typename !== 'ComponentComponentAttribute') {
    return [];
  }

  const details = moto.details.attribute?.map((attr) => {
    const title = attr?.group_name || 'no name';
    const rows =
      attr?.item
        ?.filter((item): item is GComponentComponentDetailItem => !!item)
        .map((item) => {
          const key = item?.key || 'no key';
          const value = item?.value || 'no value';
          return {
            items: [key, value],
          };
        }) || [];

    return {
      title,
      rows,
      isOpen: false,
    };
  });

  return details ? details : [];
}
