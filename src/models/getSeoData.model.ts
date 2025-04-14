import { Metadata } from 'next';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

import { GComponentSharedSeo, Maybe } from '@/types/types';

import { TUploadFile, uiUploadfile } from './uiUploadfile';

const BASE_PATH = 'https://triumph.nx.md';
const OGG_SIZE = {
  width: 1200,
  height: 630,
};

const SEO_PLACEHOLDER = {
  title: 'Triumph Motocycle Moldova',
  description: 'Join Triumph Motocycle Club for a premium moto experience.',
  openGraph: {
    title: 'Triumph Moldova',
    images: [
      {
        url: `${BASE_PATH}/og-image.jpg`,
        height: 630,
        width: 1200,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triumph Motocycle Club',
    description: 'Join Triumph Motocycle Club for a premium moto experience.',
    images: `${BASE_PATH}/og-image.jpg`,
  },
};

export const generateSeo = async (
  seo?: Maybe<GComponentSharedSeo>
): Promise<Metadata> => {
  if (!seo) {
    return SEO_PLACEHOLDER;
  }

  const image = uiUploadfile(seo.metaImage);
  const oggImage = uiUploadfile(seo.openGraph?.ogImage);

  return {
    title: seo?.metaTitle || SEO_PLACEHOLDER.title,
    description: seo?.metaDescription || SEO_PLACEHOLDER.description,
    keywords: seo?.keywords || 'default, keywords',
    robots: seo?.metaRobots || 'index, follow',
    viewport: seo?.metaViewport || 'width=device-width, initial-scale=1.0',
    openGraph: {
      title: seo?.metaTitle || SEO_PLACEHOLDER.title,
      description: seo?.metaDescription || SEO_PLACEHOLDER.description,
      url: seo?.canonicalURL || 'triumph.nx.md',
      images: [
        {
          url: image?.formats?.large?.url || image?.url,
          width: OGG_SIZE.width,
          height: OGG_SIZE.height,
          alt: image?.alternativeText || SEO_PLACEHOLDER.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.openGraph?.ogTitle || SEO_PLACEHOLDER.title,
      description: seo.openGraph?.ogDescription || SEO_PLACEHOLDER.description,
      images: mapToTwitterImage(oggImage),
    },
    alternates: {
      canonical: BASE_PATH,
      languages: {
        'ru-RU': `${BASE_PATH}/ru`,

        en: `${BASE_PATH}/ru`,
        ro: `${BASE_PATH}/ro`,
      },
      types: { ['website']: `${BASE_PATH}` },
    },

    appleWebApp: {
      capable: true,
      title: SEO_PLACEHOLDER.title as string,
      statusBarStyle: 'black-translucent',
    },
    other: {
      'og:logo': 'images/icons/512x512.png',
      'og:type': 'website',
      'application/ld+json': seo.structuredData,
    },

    // Добавьте другие социальные сети по аналогии
  };
};

export const mapToTwitterImage = (file?: TUploadFile): Twitter['images'] => {
  if (!file) return;

  const { url, alternativeText, mime, width, height } = file;

  return [
    {
      url,
      alt: alternativeText || '',
      secureUrl: url.startsWith('https') ? url : undefined,
      type: mime,
      width: width || OGG_SIZE.width,
      height: height || OGG_SIZE.height,
    },
  ];
};
