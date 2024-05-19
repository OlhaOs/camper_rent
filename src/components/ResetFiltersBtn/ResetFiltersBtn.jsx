import { useDispatch } from 'react-redux';
import css from './ResetFiltersBtn.module.css';
import { resetFilters } from '../../store/filters/slice';

export const ResetFiltersBtn = () => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <button
      type='button'
      className={css.searchBtn}
      onClick={handleResetFilters}
    >
      Reset filters
    </button>
  );
};
