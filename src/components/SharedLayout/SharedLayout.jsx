import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.container}>
        <Link to='/' className={css.navlink}>
          Home
        </Link>
        <Link to='/catalog' className={css.navlink}>
          Catalog
        </Link>
        <Link to='/favorites' className={css.navlink}>
          Favorites
        </Link>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
