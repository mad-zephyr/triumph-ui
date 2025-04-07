'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';

import classes from './styles.module.sass';

export const MenuOpener: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(classes.main, { [classes.open]: isOpen })}
    >
      <div />
      <div />
      <div />
      <div />
    </button>
  );
};
