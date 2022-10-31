import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:7542/2.0/',
  withCredentials: true,
});
