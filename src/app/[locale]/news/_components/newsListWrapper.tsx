'use client';

import { useLazyQuery } from '@apollo/client';
import { useLocale } from 'next-intl';
import { FC, useEffect, useState } from 'react';

import {
  CardPreview,
  TCardPreview,
} from '@/common/components/cardPreview/cardPreview';
import {} from '@/common/sections/components';
import { GetNewsPostsQuery } from '@/libs/graphql';
import {
  NewsPostEntityResponseCollection,
  Pagination,
} from '@/libs/graphql/gql/graphql';
import { getNewsPreviewCards } from '@/models';
import { GNewsPost } from '@/types/types';

import { CardPreviewSkeleton } from './components/cardPreviewSceleton/cardPreviewSceleton';
import { Paginator } from './components/paginator/paginator';
import classes from './styles.module.sass';

type TNewsListWrapper = {
  preloadPagination: Pagination;
  preloadedPosts: TCardPreview[];
};

export const NewsListWrapper: FC<TNewsListWrapper> = ({
  preloadPagination,
  preloadedPosts,
}) => {
  const locale = useLocale();
  const [pageSize] = useState(Array(preloadPagination.pageSize).fill(''));
  const [pagination, setPagination] = useState<Pagination>(preloadPagination);
  const [posts, setPosts] = useState<TCardPreview[]>(preloadedPosts);

  const [loadPosts, { loading, data }] = useLazyQuery<{
    newsPosts: GNewsPost[];
    newsPosts_connection: NewsPostEntityResponseCollection;
  }>(GetNewsPostsQuery, {
    ssr: false,
    variables: { locale, start: 0, limit: 6 },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) {
      const transformed = getNewsPreviewCards(data?.newsPosts || []);

      setPosts(transformed);
    }
  }, [data]);

  const handlePagination = (start: number) => {
    setPagination((prevstate) => ({
      ...prevstate,
      page: start,
    }));

    loadPosts({
      variables: { locale, start, limit: 6 },
    });
  };

  const elements = loading
    ? pageSize.map((item, i) => <CardPreviewSkeleton key={i} />)
    : posts?.map((card, i) => (
        <CardPreview
          key={i}
          title={card.title}
          descr={card.descr}
          image={card.image}
          url={card.url}
        />
      ));

  return (
    <section>
      <div className={classes.list}>{elements}</div>
      <div className={classes.footer}>
        <Paginator pagination={pagination} onChange={handlePagination} />
      </div>
    </section>
  );
};
