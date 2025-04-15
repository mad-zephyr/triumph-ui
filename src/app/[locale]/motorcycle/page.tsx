import { Metadata } from 'next';

import { ProductListingSection } from '@/common';
import { fetchRawMetadata } from '@/libs/apollo/fetchRawMetadata';
import { getPagesData } from '@/libs/apollo/getData';
import { getBikesTypesPageSeo, getMotorcycleTypesPage } from '@/libs/graphql';
import { generateSeo } from '@/models';
import { getMotocyclesWithNavigation } from '@/models/getMotocyclesWithNavigation.model';
import { RevalidateTags } from '@/types/entity';
import { GBikeTypesPage } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
  }>;
};

// export const dynamic = 'force-static';

export async function generateMetadata({ params }: TPage): Promise<Metadata> {
  const { locale } = await params;
  const response = await fetchRawMetadata<{
    bikeTypesPage: GBikeTypesPage;
  }>({
    query: getBikesTypesPageSeo,
    variables: { locale },
  });

  if (response?.bikeTypesPage) {
    const page = response.bikeTypesPage;
    return await generateSeo(page?.seo);
  }

  return await generateSeo();
}

export default async function Page({ params }: TPage) {
  const { locale } = await params;

  const { bikeTypesPage } = await getPagesData<{
    bikeTypesPage: GBikeTypesPage;
  }>({
    query: getMotorcycleTypesPage,
    variables: { locale },
    tags: RevalidateTags.BikeTypesPage,
  });

  const listing = getMotocyclesWithNavigation(bikeTypesPage);

  return (
    <main>
      <ProductListingSection
        navTitle={bikeTypesPage?.navigator_title}
        nav={listing.nav}
        sections={listing.sections}
      />
    </main>
  );
}
