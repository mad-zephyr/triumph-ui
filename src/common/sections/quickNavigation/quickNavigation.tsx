import { FC } from 'react';

import Configurator from '@/assets/icons/configurator.svg';
import Rocket from '@/assets/icons/rocket.svg';
import Settings from '@/assets/icons/settings.svg';

import classes from './styles.module.sass';

const links = [
  { title: 'CONFIGURATOR', icon: <Configurator /> },
  { title: 'TEST RIDE', icon: <Rocket /> },
  { title: 'SERVICE', icon: <Settings /> },
];

export const QuickNavigation: FC = () => {
  return (
    <section className={classes.section}>
      {links.map((item, i) => (
        <button key={i} className={classes.btn}>
          {item.icon}
          {item.title}
        </button>
      ))}
    </section>
  );
};
