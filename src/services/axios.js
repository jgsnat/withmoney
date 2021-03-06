import axios from 'axios';
import { catchInvalidToken } from '../utils/parse';

const newAxios = axios.create({
  baseURL: `${process.env.MYMONEY_API}api/v1/`,
  headers: {
    Authorization: {
      toString() {
        return `Bearer ${localStorage.getItem('token')}`;
      },
    },
  },
});


const fetch = method => (...args) => catchInvalidToken(newAxios[method](...args));

export default {
  get: fetch('get'),
  post: fetch('post'),
  put: fetch('put'),
  delete: fetch('delete'),
};
