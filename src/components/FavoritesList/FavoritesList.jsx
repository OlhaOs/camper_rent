import { CatalogItem } from '../CatalogItem/CatalogItem';
import css from './FavoritesList.module.css';
import { useSelector } from 'react-redux';

export const FavoritesList = () => {
  const favoritesCampers = useSelector(state => state.favorites.favorites);

  return (
    <>
      {favoritesCampers.length > 0 && (
        <>
          <ul className={css.catalogList}>
            {favoritesCampers.map(item => (
              <CatalogItem key={item._id} listItem={item} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
