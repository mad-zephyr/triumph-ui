import { getPagesData } from '@/libs/apollo/getData';
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

  const response = await getPagesData<{ pages: GPage[] }>({
    query: GetPage,
    variables: { locale },
    // fetchPolicy: 'no-cache',
    // errorPolicy: 'all',
  });

  const { sections } = getPageModel(response.pages?.[0]);
  return <main>{sections}</main>;
}
