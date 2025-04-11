'use client';

import cn from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import { useRouter } from '@/i18n/navigation';

import classes from './styles.module.sass';

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'prime' | 'secondary' | 'outline';
  url?: string;
};

export const Button: FC<TButton> = ({
  title,
  className,
  variant = 'prime',
  url,
  ...props
}) => {
  const { push } = useRouter();

  const handleClick = () => {
    if (url) {
      push(url);
    }
  };

  return (
    <button
      className={cn(classes.btn, classes[variant], className)}
      {...props}
      name={title}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
