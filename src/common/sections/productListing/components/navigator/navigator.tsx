'use client';

import { FC, useCallback } from 'react';

import { Text } from '@/common/ui';

export type TNavigatorNavItem = {
  title: string;
  navId: string;
};

export type TNavigator = {
  title?: string;
  navItems: TNavigatorNavItem[];
};

import classes from './styles.module.sass';
export const Navigator: FC<TNavigator> = ({ navItems, title = 'navTitle' }) => {
  const hendleScroll = useCallback((id: string) => {
    const element = window.document.querySelector(
      `#${id.replaceAll(' ', '-')}`
    );
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <aside className={classes.wrapper}>
      <Text tag="p" className={classes.title}>
        {title}
      </Text>
      <div className={classes.content}>
        {navItems.map((item, i) => (
          <div key={i} role="button" onClick={() => hendleScroll(item.navId)}>
            <Text tag={'p'}>{item.title}</Text>
          </div>
        ))}
      </div>
    </aside>
  );
};
