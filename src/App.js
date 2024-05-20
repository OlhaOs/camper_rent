import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { Catalog } from './pages/Catalog';
import { Favorites } from './pages/Favorites';
import { Features } from './components/Features/Features';
import { Reviews } from './components/Reviews/Reviews';
import { Modal } from './components/Modal/Modal';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:itemId' element={<Modal />}>
            <Route path='features' element={<Features />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='/favorites' element={<Favorites />} />
        </Route>
        <Route path='*' element={<div>Error 404</div>} />
      </Routes>
    </>
  );
};
