'use client';
import { FC, useState } from 'react';

import { DropDownItem } from './components';
import type { TDropDownItem } from './components/dropDownItem/dropDownItem';
import classes from './styles.module.sass';

const data: TDropDownItem[] = [
  {
    title: 'Motor',
    isOpen: true,
    rows: [
      { items: ['MOTOR:', '3 cilindri în linie, 12 valve, DOHC'] },
      { items: ['RACIRE:', 'cu lichid'] },
      {
        items: ['CAPACITATE CILINDRICĂ:', '660 cmc'],
      },
      {
        items: ['RAPORT DE COMPRESIE:', '11.95:1'],
      },
      {
        items: ['PUTERE:', '81 CP'],
      },
      {
        items: ['CUPLU:', '64 Nm @ 6,250 rpm'],
      },
    ],
  },
  {
    title: 'DIMENSIUNI',
    isOpen: false,
    rows: [
      { items: ['MOTOR:', '3 cilindri în linie, 12 valve, DOHC'] },
      { items: ['RACIRE:', 'cu lichid'] },
      {
        items: ['CAPACITATE CILINDRICĂ:', '660 cmc'],
      },
      {
        items: ['RAPORT DE COMPRESIE:', '11.95:1'],
      },
      {
        items: ['PUTERE:', '81 CP'],
      },
      {
        items: ['CUPLU:', '64 Nm @ 6,250 rpm'],
      },
    ],
  },
  {
    title: 'ALTE DETALII',
    isOpen: false,
    rows: [
      { items: ['MOTOR:', '3 cilindri în linie, 12 valve, DOHC'] },
      { items: ['RACIRE:', 'cu lichid'] },
      {
        items: ['CAPACITATE CILINDRICĂ:', '660 cmc'],
      },
      {
        items: ['RAPORT DE COMPRESIE:', '11.95:1'],
      },
      {
        items: ['PUTERE:', '81 CP'],
      },
      {
        items: ['CUPLU:', '64 Nm @ 6,250 rpm'],
      },
    ],
  },
];

export const DropDownList: FC = () => {
  const [dropDownOpened, setDropDownOpened] = useState<boolean[]>(() =>
    data.map((item) => item.isOpen)
  );

  const handleOpenChange = (index: number) => {
    const updatedOpenedDropDown = [...dropDownOpened].map((opened, i) =>
      i === index ? !opened : opened
    );
    setDropDownOpened(updatedOpenedDropDown);
  };

  return (
    <section className={classes.main}>
      {data.map((row, i) => (
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
