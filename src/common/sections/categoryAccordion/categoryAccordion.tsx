import Image from 'next/image';

import img3 from '@/assets/images/hero.webp';
import img1 from '@/assets/images/my26-enduro-fam-01-v2-1920x1080.avif';
import img2 from '@/assets/images/scrambler-400-x-my24-family-multi-content-block-2-1920x1080.avif';
import { Button, Text } from '@/common/ui';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

export const CategoryAccordion = () => {
  const items = [
    { title: 'Adventure', image: img1.src },
    { title: 'Modern Classics', image: img2.src },
    { title: 'Roadsters', image: img3.src },
    { title: 'Rocket 3', image: img2.src },
    { title: 'Special Edition', image: img3.src },
    { title: 'Sport', image: img2.src },
  ];
  return (
    <SectionWrapper title={<Text tag="h3">Categorii de motociclete</Text>}>
      <div className={classes.wrapper}>
        {items.map((item, i) => (
          <div key={i} className={classes.item}>
            <div className={classes.content}>
              <Text tag={'h4'}>{item.title}</Text>
              <Button variant="outline" title={'DESCOPERA'} />
            </div>
            <figure className={classes.cover}>
              <Image src={item.image} fill alt={item.title} />
            </figure>
          </div>
        ))}
      </div>
    </SectionWrapper>
    // <section className={classes.section}>
    //   <Text tag="h3">Categorii de motociclete</Text>

    //   <div className={classes.wrapper}>
    //     {items.map((item, i) => (
    //       <div key={i} className={classes.item}>
    //         <div className={classes.content}>
    //           <Text tag={'h4'}>{item.title}</Text>
    //           <Button variant="outline" title={'DESCOPERA'} />
    //         </div>
    //         <figure className={classes.cover}>
    //           <Image src={item.image} fill alt={item.title} />
    //         </figure>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};
