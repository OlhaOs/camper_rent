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

      //   const keys = [
      //     ...Object.keys(camper).map(key => key.toLowerCase()),
      //     ...Object.keys(camper.details).map(key => key.toLowerCase()),
      //   ];

      const keys = Object.keys(camper.details).map(key => key.toLowerCase());
      const equipmentMatches = equipment.every(item =>
        keys.includes(item.toLowerCase())
      );
      //   const equipmentMatches = equipment.every(item => {
      //     const lowerCaseItem = item.toLowerCase();
      //     console.log('lowerCaseItem', lowerCaseItem);
      //     if (keys.includes(lowerCaseItem)) {
      //       const camperValue = camper[lowerCaseItem];
      //       console.log('camperValue', camperValue);
      //       const detailsValue = camper.details[lowerCaseItem];
      //       console.log('detailsValue', detailsValue);
      //       return (
      //         (camperValue !== 0 && camperValue !== false) ||
      //         (detailsValue !== 0 && detailsValue !== false)
      //       );
      //     }
      //     return false;
      //   });

      return locationMatches && typeMatches && equipmentMatches;
    });
  }
);
