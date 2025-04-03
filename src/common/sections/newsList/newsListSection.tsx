import { FC } from 'react';

import img from '@/assets/images/image.jpg';
import img1 from '@/assets/images/image-1.jpg';
import img2 from '@/assets/images/image-2.jpg';
import { CardPreview } from '@/common/components';
import { Text } from '@/common/ui';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

const data = {
  title: 'INSIDE TRIUMPH',

  items: [
    {
      title:
        'Triumph la EXPO MOTO București 2025 – Pasiune, inovație și modele în premieră',
      decsription:
        'Prima ediție EXPO MOTO București s-a încheiat, iar pentru Triumph, evenimentul a fost un real succes! În cele patru zile de expoziție (6-9 martie), standul Triumph a fost punctul de atracție pentru sute de pasionați de motociclete, care au venit să descopere noile modele 2025, lansate în premieră pe piața din România.',
      image: { src: img.src, alt: 'df' },
    },
    {
      title:
        'Noul Tiger Sport 660 vine cu tehnologie avansată suplimentară, orientată spre pilot',
      decsription:
        'Vă prezentăm noul Bonneville Bobber TFC (Triumph Factory Custom), o expresie supremă a stilului și atitudinii Bobber. Cu doar 750 de unități disponibile la nivel mondial, această ediție limitată...',
      image: { src: img1.src, alt: 'df' },
    },
    {
      title:
        'Exclusivitate, Eleganță, Măiestrie – Triumph prezintă Bobber TFC, definiția perfecțiunii',
      decsription:
        'Prima ediție EXPO MOTO București s-a încheiat, iar pentru Triumph, evenimentul a fost un real succes! În cele patru zile de expoziție (6-9 martie), standul Triumph a fost punctul de atracție pentru sute de pasionați de motociclete, care au venit să descopere noile modele 2025, lansate în premieră pe piața din România.',
      image: { src: img2.src, alt: 'df' },
    },
    {
      title:
        'Triumph la EXPO MOTO București 2025 – Pasiune, inovație și modele în premieră',
      decsription:
        'Prima ediție EXPO MOTO București s-a încheiat, iar pentru Triumph, evenimentul a fost un real succes! În cele patru zile de expoziție (6-9 martie), standul Triumph a fost punctul de atracție pentru sute de pasionați de motociclete, care au venit să descopere noile modele 2025, lansate în premieră pe piața din România.',
      image: { src: img.src, alt: 'df' },
    },
    {
      title:
        'Noul Tiger Sport 660 vine cu tehnologie avansată suplimentară, orientată spre pilot',
      decsription:
        'Vă prezentăm noul Bonneville Bobber TFC (Triumph Factory Custom), o expresie supremă a stilului și atitudinii Bobber. Cu doar 750 de unități disponibile la nivel mondial, această ediție limitată...',
      image: { src: img1.src, alt: 'df' },
    },
    {
      title:
        'Exclusivitate, Eleganță, Măiestrie – Triumph prezintă Bobber TFC, definiția perfecțiunii',
      decsription:
        'Prima ediție EXPO MOTO București s-a încheiat, iar pentru Triumph, evenimentul a fost un real succes! În cele patru zile de expoziție (6-9 martie), standul Triumph a fost punctul de atracție pentru sute de pasionați de motociclete, care au venit să descopere noile modele 2025, lansate în premieră pe piața din România.',
      image: { src: img2.src, alt: 'df' },
    },
    {
      title: 'EVEL KNIEVEL LIMITED EDITIONS',
      decsription: 'sdf',
      image: { src: img.src, alt: 'df' },
    },
  ],
};

export const NewsListSection: FC = () => {
  return (
    <SectionWrapper
      title={
        <Text tag="h4" align="center">
          {data.title}
        </Text>
      }
    >
      <div className={classes.list}>
        {data.items.map((card, i) => (
          <CardPreview
            key={i}
            title={card.title}
            descr={card.decsription}
            img={card.image}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
