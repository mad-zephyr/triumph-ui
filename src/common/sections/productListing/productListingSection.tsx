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
  sections: TListSection[];
};

export const ProductListingSection: FC<TProductListingSection> = ({
  nav,
  sections,
}) => {
  return (
    <section className={classes.main}>
      {nav && <Navigator navItems={nav} />}

      <div className={classes.content_wrapper}>
        {sections.map((section, i) => (
          <ListSection key={i} data={section} />
        ))}
      </div>
    </section>
  );
};
