'use client';
import { FC, useState } from 'react';

import { DropDownItem } from './components';
import type { TDropDownItem } from './components/dropDownItem/dropDownItem';
import classes from './styles.module.sass';

export type TDropDownList = {
  details: TDropDownItem[];
};

export const DropDownList: FC<TDropDownList> = ({ details }) => {
  const [dropDownOpened, setDropDownOpened] = useState<boolean[]>(() =>
    details.map((item) => item.isOpen)
  );

  const handleOpenChange = (index: number) => {
    const updatedOpenedDropDown = dropDownOpened.map((opened, i) =>
      i === index ? !opened : opened
    );

    setDropDownOpened(updatedOpenedDropDown);
  };

  return (
    <section className={classes.main}>
      {details.map((row, i) => (
        <DropDownItem
          key={i}
          index={i}
          onOpen={handleOpenChange}
          isOpen={dropDownOpened[i]}
          title={row.title}
          rows={row.rows}
        />
      ))}
    </section>
  );
};
