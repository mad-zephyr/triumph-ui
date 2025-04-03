import { FC } from 'react';

import img1 from '@/assets/images/moto/image-1.webp';
import img2 from '@/assets/images/moto/image-2.webp';
import img3 from '@/assets/images/moto/image-3.webp';
import img4 from '@/assets/images/moto/image-4.webp';
import img5 from '@/assets/images/moto/image-5.webp';
import img6 from '@/assets/images/moto/image-6.webp';
import { ProductCardPreview } from '@/common/components';
import { Text } from '@/common/ui';

import { Navigator } from './components';
import classes from './styles.module.sass';

const items = [
  {
    image: { src: img1.src },
    title: 'TIGER SPORT 660 MY2024',
    subtitle: '9.290 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img2.src },
    title: 'TIGER SPORT 660',
    subtitle: '7.390 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img3.src },
    title: 'TIGER SPORT 850 SPORT',
    subtitle: '11.370 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img4.src },
    title: 'TIGER SPORT 660',
    subtitle: '7.390 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img5.src },
    title: 'TIGER SPORT 660 MY2024',
    subtitle: '9.290 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img6.src },
    title: 'TIGER SPORT 660 MY2024',
    subtitle: '9.290 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img2.src },
    title: 'TIGER SPORT 660',
    subtitle: '7.390 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img3.src },
    title: 'TIGER SPORT 850 SPORT',
    subtitle: '11.370 Euro',
    link: { url: '/' },
  },
  {
    image: { src: img2.src },
    title: 'TIGER SPORT 660',
    subtitle: '7.390 Euro',
    link: { url: '/' },
  },
];

export const ProductListingSection: FC = () => {
  return (
    <section className={classes.main}>
      <Navigator />

      <div className={classes.content_wrapper}>
        <div id={'Adventure'} className={classes.snapPoint} />
        <div className={classes.content}>
          <div className={classes.title}>
            <Text tag="h4">ADVENTURE</Text>
          </div>
          <div className={classes.grid}>
            {items.map((item, i) => {
              return (
                <div key={i} className={classes.product}>
                  <ProductCardPreview
                    image={item.image.src}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div id={'Roadsters'} className={classes.snapPoint} />
        <div className={classes.content}>
          <div className={classes.title}>
            <Text tag="h4">ROADSTERS</Text>
          </div>
          <div className={classes.grid}>
            {items.map((item, i) => {
              return (
                <div key={i} className={classes.product}>
                  <ProductCardPreview
                    image={item.image.src}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div id={'Modern-Classics'} className={classes.snapPoint} />
        <div className={classes.content} data-lenis-prevent>
          <div className={classes.title}>
            <Text tag="h4">Modern Classics</Text>
          </div>
          <div className={classes.grid}>
            {items.map((item, i) => {
              return (
                <div key={i} className={classes.product}>
                  <ProductCardPreview
                    image={item.image.src}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div id={'Rocket-3'} className={classes.snapPoint} />
        <div className={classes.content} data-lenis-prevent>
          <div className={classes.title}>
            <Text tag="h4">Rocket 3</Text>
          </div>
          <div className={classes.grid}>
            {items.map((item, i) => {
              return (
                <div key={i} className={classes.product}>
                  <ProductCardPreview
                    image={item.image.src}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
