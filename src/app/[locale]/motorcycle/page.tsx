import { ProductListingSection, TitleSection } from '@/common';
import { getClient } from '@/libs/apollo/apolloClient';
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
  const { data } = await getClient().query<{ motorcycles: GMotorcycle[] }>({
    query: GetMotocycles,
    variables: { locale },
    fetchPolicy: 'cache-first',
  });

  const listing = getMotocycles(data.motorcycles);

  return (
    <main>
      <ProductListingSection nav={listing.nav} sections={listing.sections} />
      <TitleSection />
    </main>
  );
}
