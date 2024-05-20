import { CatalogItem } from '../CatalogItem/CatalogItem';
import css from './FavoritesList.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../store/campers/selectors';
import { Loader } from '../../components/Loader/Loader';

export const FavoritesList = () => {
  const favoritesCampers = useSelector(state => state.favorites.favorites);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        favoritesCampers.length > 0 && (
          <>
            <ul className={css.catalogList}>
              {favoritesCampers.map(item => (
                <CatalogItem key={item._id} listItem={item} />
              ))}
            </ul>
          </>
        )
      )}
    </>
  );
};
