import { ProductListingSection, TitleSection } from '@/common';

export default async function Page() {
  return (
    <main style={{ overflow: 'visible', height: '100dvh' }}>
      <ProductListingSection />
      <TitleSection />
    </main>
  );
}
