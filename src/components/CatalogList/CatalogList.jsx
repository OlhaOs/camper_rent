import { CatalogItem } from '../CatalogItem/CatalogItem';
import css from './CatalogList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamperList } from '../../api/operation';
import { getFilteredCampers } from '../../store/selectors';

export const CatalogList = () => {
  const dispatch = useDispatch();

  const filteredCampers = useSelector(getFilteredCampers);

  useEffect(() => {
    dispatch(getCamperList());
  }, [dispatch]);

  console.log('first', filteredCampers);
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
