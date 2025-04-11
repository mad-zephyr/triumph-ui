import { ProductDetailsSection, TitleSection } from '@/common';
import { DropDownList } from '@/common/components';

export default async function Page() {
  return (
    <main>
      <TitleSection />
      <ProductDetailsSection />
      <DropDownList />
    </main>
  );
}
