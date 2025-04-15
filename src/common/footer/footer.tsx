import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { FC } from 'react';

import Logo from '@/assets/images/logo.svg';
import { Link } from '@/i18n/navigation';
import { GComponentUiLink, GFooter, Maybe } from '@/types/types';

import { Text } from '../ui';
import classes from './styles.module.sass';

type TLink = {
  title: string;
  url: string;
};

type FooterContacts = {
  title?: Maybe<string>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
};

type FooterColumn = {
  title?: Maybe<string>;
  links: { title?: string; url?: string }[];
};

type TFooter = {
  data: GFooter;
};

export const Footer: FC<TFooter> = ({ data }) => {
  const { contacts, column1, column2, column3 } = getFooter(data);

  const getLink = (link: Partial<TLink>, i: number) => (
    <Link key={i} href={link?.url || ''}>
      {link.title}
    </Link>
  );
  return (
    <footer className={classes.main}>
      <Link href={'/'} className={classes.logo}>
        <Logo />
      </Link>

      <div className={classes.column}>
        <Text tag="h5">{contacts.title}</Text>

        {contacts.data && <BlocksRenderer content={contacts.data} />}
      </div>
      <div className={classes.column}>
        <Text tag="h5">{column1.title}</Text>

        {column1.links.map(getLink)}
      </div>
      <div className={classes.column}>
        <Text tag="h5">{column2.title}</Text>

        {column2.links.map(getLink)}
      </div>

      <div className={classes.column}>
        <Text tag="h5">{column3.title}</Text>

        {column3.links.map(getLink)}
      </div>

      <div className={classes.bottom}>
        <Text tag="p">COPYRIGHT © 2025 MotocicleteTriumph.md</Text>
        <Text tag="p">Politica de confidențialitate </Text>
        <Text tag="p">Termeni și condiți</Text>
      </div>
    </footer>
  );
};

function getFooter(footer: GFooter) {
  const contacts: FooterContacts = {
    title: footer?.contacts?.title,
    data: footer?.contacts?.contact_text,
  };

  function getLink(link: Maybe<GComponentUiLink>) {
    return {
      ...(link?.url && { url: link.url }),
      ...(link?.title && { title: link.title }),
    };
  }

  const column1: FooterColumn = {
    title: footer?.column1?.title,
    links: footer?.column1?.link?.map(getLink) || [],
  };
  const column2: FooterColumn = {
    title: footer?.column2?.title,
    links: footer?.column2?.link?.map(getLink) || [],
  };
  const column3: FooterColumn = {
    title: footer?.column3?.title,
    links: footer?.column3?.link?.map(getLink) || [],
  };

  return {
    contacts,
    column1,
    column2,
    column3,
  };
}
