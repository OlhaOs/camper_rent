import { createSelector } from 'reselect';
import { selectCampers } from './campers/selectors';

const locationQuery = state => state.filters.locationQuery;
const type = state => state.filters.type;
const equipment = state => state.filters.equipment;

export const getFilteredCampers = createSelector(
  [selectCampers, locationQuery, type, equipment],
  (campers, locationQuery, type, equipment) => {
    return campers.filter(camper => {
      const locationMatches = camper.location
        .toLowerCase()
        .includes(locationQuery.toLowerCase());

      const typeMatches = camper.form
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(type.toLowerCase().replace(/\s+/g, ''));

      const equipmentMatches = equipment.every(item => {
        if (camper.details.hasOwnProperty(item)) {
          const detailValue = camper.details[item];
          return detailValue !== 0 && detailValue !== '';
        } else if (camper.transmission === item) {
          const camperValue = camper[item];
          return camperValue !== 0 && camperValue !== '';
        }
        return false;
      });

      return locationMatches && typeMatches && equipmentMatches;
    });
  }
);
