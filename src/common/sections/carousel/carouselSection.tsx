import Image from 'next/image';
import { FC } from 'react';

import { TUploadFile } from '@/models/uiUploadfile';

import classes from './styles.module.sass';
type TCarouselSection = {
  images: TUploadFile[];
};

export const CarouselSection: FC<TCarouselSection> = ({ images }) => {
  return (
    <section className={classes.main}>
      <div className={classes.track}>
        {images.map((img, i) => (
          <figure key={i} className={classes.slide}>
            <Image
              src={img.url}
              alt={img.alternativeText || ''}
              placeholder={img.placeholder}
              fill
            />
            {/* <figcaption>sdfsdf</figcaption> */}
          </figure>
        ))}
      </div>
    </section>
  );
};
