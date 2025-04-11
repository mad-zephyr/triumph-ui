'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, MouseEvent } from 'react';

import { Link } from '@/i18n/navigation';
import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';

export type TQuickNavigationLink = {
  icon?: TUploadFile;
  title?: string;
  url: string;
  active?: boolean;
};

export type TQuickNavigation = {
  links: TQuickNavigationLink[];
};

const DATA_ATTR_ACTIVE = 'data-active';

export const QuickNavigation: FC<TQuickNavigation> = ({ links }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement;
    const attribute = target.attributes.getNamedItem(DATA_ATTR_ACTIVE)?.value;

    if (attribute === 'false') {
      e.preventDefault();
    }
  };

  return (
    <section className={classes.section}>
      {links.map((item, i) =>
        item.active ? (
          <span
            key={i}
            className={clsx(classes.btn, {
              [classes.inActive]: !item.active,
            })}
          >
            <Link
              data-active={item.active}
              onClick={handleClick}
              href={item.url}
            >
              {item.icon?.url && (
                <Image
                  width={20}
                  height={20}
                  src={item.icon?.url}
                  alt={item.icon?.alternativeText || ''}
                />
              )}
              {item.title}
            </Link>
          </span>
        ) : (
          <span
            key={i}
            className={clsx(classes.btn, { [classes.inActive]: !item.active })}
          >
            {item.icon?.url && (
              <Image
                width={20}
                height={20}
                src={item.icon?.url}
                alt={item.icon?.alternativeText || ''}
              />
            )}
            {item.title}
          </span>
        )
      )}
    </section>
  );
};
