import { getPagesData } from '@/libs/apollo/getData';
import { GetPage } from '@/libs/graphql';
import { getPageModel } from '@/models';
import { GPage } from '@/types/types';
type TPage = {
  params: Promise<{
    locale: string;
    any_level: string[];
  }>;
};

export default async function NotFoundCatchAll({ params }: TPage) {
  const { any_level, locale } = await params;

  const { pages } = await getPagesData<{ pages: GPage[] }>({
    query: GetPage,
    variables: { locale, url: any_level.join('/').toLowerCase() },
  });

  const { sections } = getPageModel(pages[0]);

  return <main>{sections}</main>;
}
