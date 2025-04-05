import { PropsWithChildren } from 'react';

import { Footer, Header } from '@/common';

export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}
