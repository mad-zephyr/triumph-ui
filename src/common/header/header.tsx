import { FC } from 'react';

import Logo from '@/assets/images/logo.svg';
import { Button } from '@/common';
import { Link } from '@/i18n/navigation';

import { HeaderLink, LocaleLink, MenuOpener, THeaderLink } from './components';
import classes from './header.module.sass';

type THeader = {
  links: THeaderLink[];
};

export const Header: FC<THeader> = ({ links }) => {
  return (
    <>
      <header className={classes.header}>
        <Link href={'/'} className={classes.logo} aria-label="Twitter">
          <Logo />
        </Link>

        <nav className={classes.nav}>
          {links.map((link, i) => (
            <HeaderLink key={i} title={link.title} href={link.href} />
          ))}
        </nav>

        <div className={classes.right}>
          <LocaleLink />
          <Button title="Contact" />
          <MenuOpener />
        </div>
      </header>
      <div className={classes.margin} />
    </>
  );
};
