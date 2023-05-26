import { GetProduct } from 'types/domain';
import { HttpStatusCode, useStockAPI } from 'services/infra';

export const productBusiness = () => {
  const { getStockData } = useStockAPI();

  interface ReturnGetProduct {
    body: GetProduct;
    statusCode: HttpStatusCode;
  }

  const getProduct = async (product: string): Promise<ReturnGetProduct> => {
    const response = await getStockData(product);

    //lógica para encontrar o produto.
    const selectedProduct = response.body.results[0];

    const body: GetProduct = {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };

    return {
      body,
      statusCode: response.statusCode,
    };
  };

  return {
    getProduct,
  };
};
