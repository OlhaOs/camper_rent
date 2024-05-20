import { CatalogItem } from '../CatalogItem/CatalogItem';
import css from './CatalogList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamperList } from '../../api/operation';
import { getFilteredCampers } from '../../store/selectors';

import { pageNext } from '../../store/campers/selectors';

export const CatalogList = () => {
  const dispatch = useDispatch();

  const filteredCampers = useSelector(getFilteredCampers);

  const page = useSelector(pageNext);

  useEffect(() => {
    dispatch(getCamperList(page));
  }, [dispatch, page]);

  return (
    <>
      {filteredCampers.length > 0 && (
        <ul className={css.catalogList}>
          {filteredCampers.map(item => (
            <CatalogItem key={item._id} listItem={item} />
          ))}
        </ul>
      )}
    </>
  );
};
