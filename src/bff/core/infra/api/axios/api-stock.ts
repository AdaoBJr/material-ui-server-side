import axios from 'axios';
import { getEnv } from 'environment';

const env = getEnv();
export const apiStock = axios.create({
  baseURL: '//algum lugar',
  // headers: {
  //   client_id: env.URL_ESTOQUE,
  // },
});
