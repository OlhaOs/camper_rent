import { Link, useLocation } from 'react-router-dom';
import css from './ShowMoreButton.module.css';
export const ShowMoreButton = ({ itemId }) => {
  const location = useLocation();
  console.log('button', location);
  return (
    <button type='button' className={css.showMoreBtn}>
      <Link
        to={`/catalog/${itemId}`}
        className={css.link}
        state={{ from: location }}
      >
        Show More
      </Link>
    </button>
  );
};
