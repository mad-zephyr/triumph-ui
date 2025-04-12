import { ProductListingSection } from '@/common';
import { getPagesData } from '@/libs/apollo/getData';
import { GetMotocycles } from '@/libs/graphql';
import { getMotocycles } from '@/models';
import { GMotorcycle } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Page({ params }: TPage) {
  const { locale } = await params;

  const { motorcycles } = await getPagesData<{ motorcycles: GMotorcycle[] }>({
    query: GetMotocycles,
    variables: { locale },
  });

  const listing = getMotocycles(motorcycles);

  return (
    <main>
      <ProductListingSection nav={listing.nav} sections={listing.sections} />
    </main>
  );
}
