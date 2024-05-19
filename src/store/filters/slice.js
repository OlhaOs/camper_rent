import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locationQuery: '',
  type: '',
  equipment: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    findCampers(state, { payload }) {
      state.locationQuery = payload;
    },
    typeCampers(state, { payload }) {
      state.type = payload;
    },
    toggleEquipment(state, { payload }) {
      const index = state.equipment.indexOf(payload);
      if (index === -1) {
        state.equipment.push(payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    resetFilters(state) {
      state.locationQuery = initialState.locationQuery;
      state.type = initialState.type;
      state.equipment = initialState.equipment;
    },
  },
});
export const { findCampers, typeCampers, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
