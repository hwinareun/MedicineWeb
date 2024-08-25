import axios from 'axios';
import { getToken } from '../utils/localStorage';

const BASE_URL =
  'https://port-0-medicinewebserver-m09u7f4n5bd7cb6a.sel4.cloudtype.app';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: getToken() ? `Bearer ${getToken()}` : '',
  },
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
