import { FC } from 'react';

import { ProductCardPreview } from '@/common/components';
import { TProductCardPreview } from '@/common/components/productPreview/productCardPreview';
import { Text } from '@/common/ui';

import classes from './styles.module.sass';

export type TListSection = {
  title: string;
  navId: string;
  cards: TProductCardPreview[];
};

export const ListSection: FC<{ data: TListSection }> = ({ data }) => {
  const { navId, title, cards } = data;

  return (
    <div className={classes.main}>
      <div id={navId} className={classes.snapPoint} />
      <div className={classes.content}>
        <div className={classes.title}>
          <Text tag="h4">{title}</Text>
        </div>
        <div className={classes.grid}>
          {cards.map((item, i) => (
            <div key={i} className={classes.product}>
              <ProductCardPreview
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
