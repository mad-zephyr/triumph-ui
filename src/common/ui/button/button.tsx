import { ButtonHTMLAttributes, FC } from "react";

import classes from "./styles.module.sass";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: FC<TButton> = ({ title, ...props }) => {

  return (
    <button className={classes.btn} {...props}>
      {title}
    </button>
  );
};
