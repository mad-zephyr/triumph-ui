'use client';

import { useSuspenseQuery } from '@apollo/client';
import { useLocale } from 'next-intl';
import { FC } from 'react';

import { CardPreview } from '@/common/components';
import { Text } from '@/common/ui';
import { Button, TButton } from '@/common/ui/button/button';
import { GetNewsPostsQuery } from '@/libs/graphql';
import { getNewsPreviewCards } from '@/models';
import { GNewsPost, Maybe } from '@/types/types';

import { SectionWrapper } from '../components';
import classes from './styles.module.sass';

export type TNewsListSection = {
  title?: Maybe<string>;
  button: TButton;
  latestNewsCount: number;
};

export const NewsListSection: FC<TNewsListSection> = ({
  title,
  button,
  latestNewsCount,
}) => {
  const locale = useLocale();

  const {
    data: { newsPosts },
  } = useSuspenseQuery<{ newsPosts: GNewsPost[] }>(GetNewsPostsQuery, {
    variables: { locale, start: 0, limit: latestNewsCount },
  });

  const data = getNewsPreviewCards(newsPosts);

  return (
    <SectionWrapper
      title={
        <Text tag="h4" className={classes.title}>
          {title}
        </Text>
      }
    >
      <div className={classes.wrapper}>
        <div className={classes.list}>
          {data?.map((card, i) => (
            <CardPreview
              key={i}
              title={card.title}
              descr={card.descr}
              image={card.image}
              url={card.url}
            />
          ))}
        </div>
        <Button
          title={button.title}
          variant={button.variant}
          url={button.url}
        />
      </div>
    </SectionWrapper>
  );
};
