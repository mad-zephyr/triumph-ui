import clsx from 'clsx';
import { FC, MouseEvent } from 'react';

import Arrow from '@/assets/icons/carret_down.svg';
import { Text } from '@/common/ui';

import classes from './styles.module.sass';

export type TDropDownItem = {
  title: string;
  isOpen: boolean;
  rows: { items: string[] }[];
};

export const DropDownItem: FC<
  TDropDownItem & { onOpen: (i: number) => void; index: number }
> = ({ title, rows, isOpen, index, onOpen }) => {
  const handleOpen = (e: MouseEvent) => {
    const index = e.currentTarget.getAttribute('data-index');
    if (index !== null) {
      onOpen(+index);
    }
  };
  return (
    <div className={classes.wrapper}>
      <div
        data-index={index}
        className={clsx(classes.header, { [classes.open]: isOpen })}
        onClick={handleOpen}
      >
        <Text tag="p">{title}</Text>
        <Arrow />
      </div>

      <div
        className={clsx(classes.content, { [classes.content_open]: isOpen })}
      >
        {rows?.map((row, i) => (
          <div key={i} className={clsx(classes.row)}>
            {row.items?.map((item, k) => (
              <div key={k} className={clsx(classes.item)}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
