'use client';

import { FC, useCallback } from 'react';

import { Text } from '@/common/ui';
// const data = {
//   title: 'Categorii de motociclete',
//   list: [
//     {
//       title: 'Adventure',
//     },
//     {
//       title: 'Roadsters',
//     },
//     {
//       title: 'Modern Classics',
//     },
//     {
//       title: 'Rocket 3',
//     },
//     {
//       title: 'Special edition',
//     },
//     {
//       title: 'Sport',
//     },
//   ],
// };

export type TNavigator = {
  title?: string;
  navItems: {
    title: string;
    navId: string;
  }[];
};

import classes from './styles.module.sass';
export const Navigator: FC<TNavigator> = ({ navItems }) => {
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
        {'Categorii de motociclete'}
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
