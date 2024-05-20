import { FavoritesList } from '../../components/FavoritesList/FavoritesList';

import css from './Favorites.module.css';

export const Favorites = () => {
  return (
    <>
      <section className={css.catalogSection}>
       
        <FavoritesList />
      </section>
    </>
  );
};
