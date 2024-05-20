import { useDispatch } from 'react-redux';
import { CatalogList } from '../../components/CatalogList/CatalogList';

import { Filters } from '../../components/Filters/Filters';
import css from './Catalog.module.css';
import { useEffect } from 'react';
import { setPage } from '../../store/campers/slice';
import { useLocation } from 'react-router-dom';

export const Catalog = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/catalog') {
      dispatch(setPage(1));
    }
  }, [location, dispatch]);
  return (
    <>
      <section className={css.catalogSection}>
        <Filters />
        <CatalogList />
      </section>
    </>
  );
};
