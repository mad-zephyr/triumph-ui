import clsx from 'clsx';
import { FC } from 'react';

import { Pagination } from '@/libs/graphql/gql/graphql';

import classes from './styles.module.sass';

type TPaginator = {
  pagination: Pagination;
  onChange: (start: number) => void;
};

export const Paginator: FC<TPaginator> = ({ pagination, onChange }) => {
  const { page, pageCount } = pagination;
  return (
    <div className={classes.main}>
      {Array(pageCount)
        .fill(0)
        .map((_, i) => {
          const index = i + 1;
          return (
            <button
              type={'button'}
              key={i}
              disabled={page === index}
              onClick={() => onChange(index)}
              className={clsx(classes.switcher, {
                [classes.active]: page === index,
              })}
            >
              {index}
            </button>
          );
        })}
    </div>
  );
};
