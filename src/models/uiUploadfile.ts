import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

import { placeholderShimmer } from '@/common';
import { UploadFile } from '@/libs/graphql/gql/graphql';
import { getBasePath } from '@/libs/helpers';
import { GUploadFile, Maybe } from '@/types/types';

export type TUploadFile = GUploadFile & {
  placeholder: PlaceholderValue;
};

const getFileUrl = (path: string) => {
  if (path && !path?.startsWith('https')) {
    return `${getBasePath()}${path}`;
  }

  return path;
};

export const uiUploadfile = (
  upload?: Maybe<GUploadFile> | Maybe<UploadFile>
): TUploadFile | undefined => {
  if (!upload) {
    return;
  }

  const url = getFileUrl(upload?.url);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { related, ...restUpload } = upload;

  return {
    ...restUpload,
    alternativeText: upload.alternativeText || 'altText',
    placeholder: placeholderShimmer(),
    url,
  };
};
