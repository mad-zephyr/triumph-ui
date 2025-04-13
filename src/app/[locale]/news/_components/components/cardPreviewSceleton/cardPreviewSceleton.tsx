import clsx from 'clsx';

import classes from './styles.module.sass';

export const CardPreviewSkeleton = () => {
  return (
    <div className={classes['news-skeleton']}>
      <div className={classes['skeleton-image']} />

      <div className={classes.title} />

      <div className={classes.subtitles}>
        <div className={classes.line} />
        <div className={clsx(classes.line)} />
        <div className={clsx(classes.line, classes.medium)} />
        <div className={clsx(classes.line, classes.short)} />
      </div>
    </div>
  );
};
