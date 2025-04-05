'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { FC } from 'react';

import { Link, usePathname } from '@/i18n/navigation';

import classes from './styles.module.sass';

export const LocaleLink: FC = () => {
  const pathname = usePathname();
  const curLocale = useLocale();

  const localeToSwitch = curLocale === 'ru' ? 'ro' : 'ru';

  return (
    <Link
      className={clsx(classes.link)}
      href={pathname}
      locale={localeToSwitch}
    >
      {localeToSwitch.toUpperCase()}
    </Link>
  );
};
