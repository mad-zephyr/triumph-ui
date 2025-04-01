import cn from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import classes from './styles.module.sass';

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'prime' | 'secondary' | 'outline';
};

export const Button: FC<TButton> = ({
  title,
  className,
  variant = 'prime',
  ...props
}) => {
  return (
    <button className={cn(classes.btn, classes[variant], className)} {...props}>
      {title}
    </button>
  );
};
