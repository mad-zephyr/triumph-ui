import { ProductListingSection, TitleSection } from '@/common';

export default async function Page() {
  return (
    <main style={{ overflow: 'visible', height: 'calc(100dvh - 3.75rem)' }}>
      <ProductListingSection />
      <TitleSection />
    </main>
  );
}
