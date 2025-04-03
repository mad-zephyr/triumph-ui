'use client';

import { FC, useCallback } from 'react';

import { Text } from '@/common/ui';
const data = {
  title: 'Categorii de motociclete',
  list: [
    {
      title: 'Adventure',
    },
    {
      title: 'Roadsters',
    },
    {
      title: 'Modern Classics',
    },
    {
      title: 'Rocket 3',
    },
    {
      title: 'Special edition',
    },
    {
      title: 'Sport',
    },
  ],
};

type TNavigator = {
  scrolled?: number | null;
};

import classes from './styles.module.sass';
export const Navigator: FC<TNavigator> = () => {
  const hendleScroll = useCallback((id: string) => {
    const element = window.document.querySelector(
      `#${id.replaceAll(' ', '-')}`
    );
    if (element) {
      //   lenis.scrollTo(element, { offset: 100 });
      console.log(element);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <aside className={classes.wrapper}>
      {/* <div style={{ height: '2.25rem' }} /> */}
      <Text tag="p" className={classes.title}>
        {data.title}
      </Text>
      <div className={classes.content}>
        {data.list.map((item, i) => (
          <div key={i} role="button" onClick={() => hendleScroll(item.title)}>
            <Text tag={'p'}>{item.title}</Text>
          </div>
        ))}
      </div>
    </aside>
  );
};
