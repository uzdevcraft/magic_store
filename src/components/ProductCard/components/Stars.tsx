import { IconStar } from '@tabler/icons-react';

import cx from 'clsx';
import classes from '../ProductCard.module.scss';

export const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className={classes.product_rating}>
      {[1, 2, 3, 4, 5].map(star => (
        <IconStar
          size={12}
          key={star}
          fill={star <= rating ? 'currentColor' : 'none'}
          className={cx(classes.star, star <= rating ? classes.star_filled : classes.star_empty)}
        />
      ))}
      <span className={classes.rating_text}>{rating}</span>
    </div>
  );
};
