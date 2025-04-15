import { Metadata } from 'next';

import { ProductListingSection, TitleSection } from '@/common';
import { fetchRawMetadata } from '@/libs/apollo/fetchRawMetadata';
import { getPagesData } from '@/libs/apollo/getData';
import { getBikeTypePageSeo, getMotorcyclesByType } from '@/libs/graphql';
import {
  generateSeo,
  getMotocycles,
  getPageModel,
  getTTagFromTitleTagEnum,
} from '@/models';
import { uiUploadfile } from '@/models/uiUploadfile';
import { GBikesType, GMotorcycle } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
    type: string;
  }>;
};

export async function generateMetadata({ params }: TPage): Promise<Metadata> {
  const { locale, type } = await params;
  const response = await fetchRawMetadata<{
    bikesTypes: GBikesType[];
  }>({
    query: getBikeTypePageSeo,
    variables: { locale, type },
  });

  if (response?.bikesTypes) {
    const [page] = response.bikesTypes;
    return await generateSeo(page?.seo);
  }
  return await generateSeo();
}

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

  const { sections } = getPageModel(motoTypes);

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
      <ProductListingSection withPadding sections={listing.sections} />
      {sections}
    </main>
  );
}
