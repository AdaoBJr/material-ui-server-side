import { apiStock } from '../axios';
import { AxiosHttpClient } from 'bff/core';
import { ProdutoStockProvider } from './produtoStockProvider';

const axiosClient = new AxiosHttpClient(apiStock);
const produtoStockProvider = new ProdutoStockProvider(axiosClient);

export { produtoStockProvider };
