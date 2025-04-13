import { ProductDetailsSection, TitleSection } from '@/common';
import { DropDownList } from '@/common/components';
import { getPagesData } from '@/libs/apollo/getData';
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

  const { motorcycles } = await getPagesData<{ motorcycles: [GMotorcycle] }>({
    query: GetMotocycle,
    variables: { locale, sku: model },
  });

  const [product] = getMotocycle(motorcycles);
  const details = getProductDetailsAccordion(product);

  return (
    <main>
      {!!product?.banner && <TitleSection data={{ ...product.banner }} />}
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
