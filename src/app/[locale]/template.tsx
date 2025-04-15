import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Footer, Header } from '@/common';
import { getClient } from '@/libs/apollo/apolloClient';
import { GET_HEADER } from '@/libs/graphql';
import { getHeaderData } from '@/models';
import { RevalidateTags } from '@/types/entity';
import type { GHeader } from '@/types/types';

type TTechncalData = {
  header: GHeader;
};

export const dynamicParams = true;

export default async function Template({ children }: PropsWithChildren) {
  const locale = await getLocale();
  const { data } = await getClient().query<TTechncalData>({
    query: GET_HEADER,
    variables: { locale },
    errorPolicy: 'all',
  });

  const headerLinks = getHeaderData(data.header);

  return (
    <>
      <Header links={headerLinks} />
      {children}
      <Footer />
    </>
  );
}
