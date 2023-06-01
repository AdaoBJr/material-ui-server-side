import { StockAPI } from './stockAPI';
import { AxiosHttpClient, apiStock } from '../api';

const axiosClient = new AxiosHttpClient(apiStock);
const stockAPI = new StockAPI(axiosClient);

export { stockAPI };
