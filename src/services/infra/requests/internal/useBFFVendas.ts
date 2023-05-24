import { apiBFF, AxiosHttpClient } from '../../api';
import { GetProduct } from 'types/domain';

export const useBFFVendas = () => {
  const BFFClient = AxiosHttpClient(apiBFF);

  const getProductData = async (product: string) =>
    await BFFClient.request<GetProduct>({
      method: 'get',
      url: `/produto/${product}`,
    });

  return { getProductData };
};
