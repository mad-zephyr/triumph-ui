import { FC, PropsWithChildren, ReactElement } from 'react';

import classes from './styles.module.sass';

type TSectionWrapper = {
  title?: ReactElement;
};

export const SectionWrapper: FC<PropsWithChildren<TSectionWrapper>> = ({
  title,
  children,
}) => {
  return (
    <section className={classes.section}>
      {title}
      <div className={classes.wrapper}>{children}</div>
    </section>
  );
};
