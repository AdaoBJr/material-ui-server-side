import { produtoStockProvider } from 'bff/infra';
import { apiErrorHandler } from 'bff/core';
import { GetProdutoIdResult } from 'bff/types';

export class ProdutoService {
  async getProdutoId(product: string): Promise<GetProdutoIdResult> {
    const response = await produtoStockProvider
      .getProdutoId(product)
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      });

    //lógica para encontrar o produto.
    const selectedProduct = response.body.results[0];

    return {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };
  }

  async postProduto(product: string): Promise<GetProdutoIdResult> {
    const response = await produtoStockProvider.postProduto(product).catch((response) => {
      throw apiErrorHandler(response.statusCode);
    }); //aqui tem q ser post

    //lógica para encontrar o produto.
    const selectedProduct = response.body.results[0];

    return {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };
  }

  async updateProduto(product: string): Promise<GetProdutoIdResult> {
    const response = await produtoStockProvider
      .updateProduto(product)
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      }); //aqui tem q ser update

    //lógica para encontrar o produto.
    const selectedProduct = response.body.results[0];

    return {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };
  }

  async deleteProduto(product: string): Promise<GetProdutoIdResult> {
    const response = await produtoStockProvider
      .deleteProduto(product)
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      }); //aqui tem q ser delete

    //lógica para encontrar o produto.
    const selectedProduct = response.body.results[0];

    return {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };
  }
}
