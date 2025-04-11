import { THeaderLink } from '@/common/header/components';
import { GHeader } from '@/types/types';

export const getHeaderData = (header: GHeader): THeaderLink[] => {
  return (
    header.links?.map((link) => {
      const headerLink: THeaderLink = {};
      if (link?.__typename === 'ComponentUiLink') {
        headerLink.title = link.title;
        headerLink.href = link.url;
      }

      return headerLink;
    }) || []
  );
};
