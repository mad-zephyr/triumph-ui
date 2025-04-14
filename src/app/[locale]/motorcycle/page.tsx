import { ProductListingSection } from '@/common';
import { getPagesData } from '@/libs/apollo/getData';
import { getMotorcycleTypesPage } from '@/libs/graphql';
import { getMotocyclesWithNavigation } from '@/models/getMotocyclesWithNavigation.model';
import { GBikeTypesPage } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Page({ params }: TPage) {
  const { locale } = await params;

  const { bikeTypesPage } = await getPagesData<{
    bikeTypesPage: GBikeTypesPage;
  }>({
    query: getMotorcycleTypesPage,
    variables: { locale },
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
