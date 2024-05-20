import { combineReducers } from 'redux';
import { campersReducer } from './campers/slice';
import { filtersReducer } from './filters/slice';
import { favoritesReducer } from './favorites/slice';

export const reducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: favoritesReducer,
});
