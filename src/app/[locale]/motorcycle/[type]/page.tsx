import { ProductListingSection, TitleSection } from '@/common';
import { getPagesData } from '@/libs/apollo/getData';
import { getMotorcyclesByType } from '@/libs/graphql';
import { getMotocycles, getTTagFromTitleTagEnum } from '@/models';
import { uiUploadfile } from '@/models/uiUploadfile';
import { GBikesType, GMotorcycle } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
    type: string;
  }>;
};

export default async function Page({ params }: TPage) {
  const { locale, type } = await params;

  const { bikesTypes } = await getPagesData<{ bikesTypes: GBikesType[] }>({
    query: getMotorcyclesByType,
    variables: { locale, type },
  });

  const [motoTypes] = bikesTypes;

  const filteredMotocycles =
    motoTypes?.motorcycles.filter((moto): moto is GMotorcycle => !!moto) || [];

  const listing = getMotocycles(filteredMotocycles);

  return (
    <main>
      {!!motoTypes.promoBanner && motoTypes.promoBanner.active && (
        <TitleSection
          data={{
            title: motoTypes.promoBanner.title || '',
            description: motoTypes.promoBanner.description,
            image: uiUploadfile(motoTypes.promoBanner.cover),
            titleHtmlTag: getTTagFromTitleTagEnum(),
          }}
        />
      )}
      <ProductListingSection sections={listing.sections} />
    </main>
  );
}
