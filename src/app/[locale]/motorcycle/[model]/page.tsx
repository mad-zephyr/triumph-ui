import { ProductDetailsSection, TitleSection } from '@/common';
import { DropDownList } from '@/common/components';
import { getClient } from '@/libs/apollo/apolloClient';
import { GetMotocycle } from '@/libs/graphql';
import { getMotocycle, getProductDetailsAccordion } from '@/models';
import { GMotorcycle } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
    model: string;
  }>;
};

export default async function Page({ params }: TPage) {
  const { locale, model } = await params;

  const { data } = await getClient().query<{ motorcycles: [GMotorcycle] }>({
    query: GetMotocycle,
    variables: { locale, sku: model },
    fetchPolicy: 'cache-first',
  });

  const [product] = getMotocycle(data.motorcycles);
  const details = getProductDetailsAccordion(product);

  return (
    <main>
      {!!product?.banner && (
        <TitleSection data={{ ...product.banner, image: product.main_image }} />
      )}
      {!!product && (
        <ProductDetailsSection
          title={product.model_name}
          subtitile={`${product.base_price}`}
          description={product.description}
          images={product.gallery}
        />
      )}
      {!!details && <DropDownList details={details} />}
    </main>
  );
}
