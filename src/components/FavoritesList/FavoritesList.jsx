import { CatalogItem } from '../CatalogItem/CatalogItem';
import css from './FavoritesList.module.css';
import { useSelector } from 'react-redux';
import icons from '../../icon/icons.svg';

export const FavoritesList = () => {
  const favoritesCampers = useSelector(state => state.favorites.favorites);

  return (
    <>
      {favoritesCampers.length > 0 ? (
        <>
          <ul className={css.catalogList}>
            {favoritesCampers.map(item => (
              <CatalogItem key={item._id} listItem={item} />
            ))}
          </ul>
        </>
      ) : (
        <div className={css.wrapper}>
          <svg className={css.heartIcon}>
            <use href={icons + '#icon-heart'} />
          </svg>
          <h2 className={css.title}>You haven't added any favorite campers.</h2>
          <p className={css.text}>
            Add your favorite campers to easily find them here.
          </p>
        </div>
      )}
    </>
  );
};
