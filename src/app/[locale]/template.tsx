import { PropsWithChildren } from 'react';

import { Header } from '@/common';

export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
}
