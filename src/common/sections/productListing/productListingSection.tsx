import clsx from 'clsx';
import { FC } from 'react';

import { Navigator } from './components';
import {
  ListSection,
  TListSection,
} from './components/listSection/listSection';
import { TNavigator } from './components/navigator/navigator';
import classes from './styles.module.sass';

export type TProductListingSection = {
  nav?: TNavigator['navItems'];
  navTitle?: string;
  sections: TListSection[];
  withPadding?: boolean;
};

export const ProductListingSection: FC<TProductListingSection> = ({
  nav,
  navTitle,
  sections,
  withPadding,
  ...props
}) => {
  return (
    <section
      className={clsx(classes.main, { [classes.withPadding]: withPadding })}
      {...props}
    >
      {nav && <Navigator navItems={nav} title={navTitle} />}

      <div className={classes.content_wrapper}>
        {sections.map((section, i) => (
          <ListSection key={i} data={section} />
        ))}
      </div>
    </section>
  );
};
