import localFont from 'next/font/local';

export const mainFont = localFont({
  src: [
    {
      path: './DIN2014-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './DIN2014-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './DIN2014-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './DIN2014-Demi.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './DIN2014-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './DIN2014-ExtraBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-din',
});
