import { apiStock, AxiosHttpClient } from '../../api';
import { GetStock } from 'types/domain';

export const useStockAPI = () => {
  const BFFClient = AxiosHttpClient(apiStock);

  const getStockData = async (product: string) =>
    await BFFClient.request<GetStock>({ method: 'get', url: product });

  return { getStockData };
};
