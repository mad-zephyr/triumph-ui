import { TCardPreview } from '@/common/components/cardPreview/cardPreview';
import { GNewsPost } from '@/types/types';

import { uiUploadfile } from './uiUploadfile';

export function getNewsPreviewCards(newsPosts: GNewsPost[]): TCardPreview[] {
  return newsPosts.map((post) => ({
    title: post.title,
    descr: post.previewText,
    image: uiUploadfile(post.preview_cover),
    url: `/news/${post.url}`,
  }));
}
