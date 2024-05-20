import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66434e4c6c6a656587067ed9.mockapi.io/api';

export const getCamperList = createAsyncThunk(
  'campers/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/homepage?page=${page}&limit=4`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/campersId',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/homepage/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
