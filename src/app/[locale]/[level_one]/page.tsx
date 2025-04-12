import { notFound } from 'next/navigation';

// import { TitleSection } from '@/common';
import { getClient } from '@/libs/apollo/apolloClient';
import { GetPage } from '@/libs/graphql';
import { getPageModel } from '@/models';
import { GPage } from '@/types/types';

type TPage = {
  params: Promise<{
    locale: string;
    level_one: string;
  }>;
};

export default async function Page({ params }: TPage) {
  const { locale } = await params;

  let data: Record<'pages', GPage[]> = {
    pages: [],
  };

  try {
    const response = await getClient().query<{ pages: GPage[] }>({
      query: GetPage,
      variables: { locale },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    });

    data = response.data;
  } catch (e: unknown) {
    if (typeof e === 'undefined') {
    }

    notFound();
  }

  const { sections } = getPageModel(data.pages[0]);
  return <main>{sections}</main>;
}
