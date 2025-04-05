import { FC } from 'react';

import Logo from '@/assets/images/logo.svg';
import { Link } from '@/i18n/navigation';

import { Text } from '../ui';
import classes from './styles.module.sass';

export const Footer: FC = () => {
  return (
    <footer className={classes.main}>
      <Link href={'/'} className={classes.logo}>
        <Logo />
      </Link>

      <div className={classes.column}>
        <Text tag="h5">CONTACT</Text>

        <Text tag="p">Triumph Chisinau Sos. Calea Orheiului, 200</Text>
        <Text tag="p">0373 797 44 777 info@triumphmoldova.md</Text>
      </div>
      <div className={classes.column}>
        <Text tag="h5">Servicii Clienți</Text>

        <Text tag="p">Motociclete</Text>
        <Text tag="p">Promoții</Text>
        <Text tag="p">Finanțare </Text>
        <Text tag="p">Service Test Ride </Text>
      </div>
      <div className={classes.column}>
        <Text tag="h5">Informații</Text>

        <Text tag="p">Inside Triumph</Text>
        <Text tag="p">Povestea Triumph</Text>
        <Text tag="p">Termeni și Condiții </Text>
        <Text tag="p">Confidențialitate </Text>
        <Text tag="p">Contact </Text>
      </div>

      <div className={classes.column}>
        <Text tag="h5">Social</Text>

        <Text tag="p">Facebook</Text>
        <Text tag="p">Instagram</Text>
        <Text tag="p">YouTube</Text>
      </div>

      <div className={classes.bottom}>
        <Text tag="p">COPYRIGHT © 2025 MotocicleteTriumph.md</Text>
        <Text tag="p">Politica de confidențialitate </Text>
        <Text tag="p">Termeni și condiți</Text>
      </div>
    </footer>
  );
};
