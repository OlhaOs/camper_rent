import { combineReducers } from 'redux';
import { campersReducer } from './campers/slice';
import { filtersReducer } from './filters/slice';

export const reducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
});
