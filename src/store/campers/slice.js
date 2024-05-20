import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCamperList } from '../../api/operation';

export const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    camper: null,
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCamperList.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCamperList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.campers = payload;
      })
      .addCase(getCamperList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCamperById.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.camper = payload;
      })
      .addCase(getCamperById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { setPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
