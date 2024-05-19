import { instance } from '../api';

export const getCamperList = async page => {
  const { data } = await instance(`/homepage?page=${page}&limit=4`);
  return data;
};

export const getCamperById = async id => {
  try {
    const { data } = await instance(`/homepage/${id}`);
    return data;
  } catch (error) {
    console.error('Error while fetching camper data by ID:', error);
    throw error;
  }
};

