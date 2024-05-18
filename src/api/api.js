import axios from 'axios';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
};
export const instance = axios.create({
  baseURL: 'https://66434e4c6c6a656587067ed9.mockapi.io/api',
  https: config,
});
