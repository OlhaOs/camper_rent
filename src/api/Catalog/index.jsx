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

// export const getSearchMovies = async query => {
//   const { data } = await instance(`/search/movie?${query}&api_key=${API_KEY}`);
//   return data.results;
// };

// export const getMovieDetails = async id => {
//   const { data } = await instance(`/movie/${id}?api_key=${API_KEY}`);
//   return data;
// };
// export const getMovieCast = async id => {
//   const { data } = await instance(`/movie/${id}/credits?api_key=${API_KEY}`);
//   return data.cast;
// };
// export const getMovieReview = async id => {
//   const { data } = await instance(`/movie/${id}/reviews?api_key=${API_KEY}`);
//   return data.results;
// };
