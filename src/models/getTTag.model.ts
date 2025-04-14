import { TTag } from '@/common/ui/text/text';
import { GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG } from '@/types/types';

export function getTTagFromTitleTagEnum(
  tagEnum?: GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG
): TTag {
  switch (tagEnum) {
    case GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG.H1: {
      return 'h1';
    }
    case GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG.H2: {
      return 'h2';
    }
    case GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG.H3: {
      return 'h3';
    }
    case GENUM_COMPONENTSECTIONTITLESECTION_TITLE_HTML_TAG.H4: {
      return 'h4';
    }
    default: {
      return 'h2';
    }
  }
}
