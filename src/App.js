import { Link, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { HomePage } from './pages/HomePage';
import { Catalog } from './pages/Catalog';
import { Favorites } from './pages/Favorites';
import { Features } from './components/Features/Features';
import { Reviews } from './components/Reviews/Reviews';
import { Modal } from './components/Modal/Modal';

export const App = () => {
  return (
    <>
      <Link to='/' className={css.Navlink}>
        Home
      </Link>
      <Link to='/catalog' className={css.Navlink}>
        Catalog
      </Link>
      <Link to='/favorites'>Favorites</Link>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:itemId' element={<Modal/>}>
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<div>Error 404</div>} />
      </Routes>
    </>
  );
};
