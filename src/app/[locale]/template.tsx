import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Footer, Header } from '@/common';
import { getClient } from '@/libs/apollo/apolloClient';
import { GET_TECHNICAL } from '@/libs/graphql';
import { getHeaderData } from '@/models';
import type { GFooter, GHeader } from '@/types/types';

type TTechncalData = {
  header: GHeader;
  footer: GFooter;
};

export default async function Template({ children }: PropsWithChildren) {
  const locale = await getLocale();
  const { data } = await getClient().query<TTechncalData>({
    query: GET_TECHNICAL,
    variables: { locale },
    errorPolicy: 'ignore',
  });

  const headerLinks = getHeaderData(data.header);

  return (
    <>
      <Header links={headerLinks} />
      {children}
      <Footer data={data.footer} />
    </>
  );
}
