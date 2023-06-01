import { GetProduct } from 'backend/types';
import { HttpStatusCode, stockAPI } from 'backend/core';

interface ReturnGetProduct {
  body: GetProduct;
  statusCode: HttpStatusCode;
}

export class ProdutoService {
  async getProduto(product: string): Promise<ReturnGetProduct> {
    const response = await stockAPI.getStockData(product);

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
  }

  async postProduto(product: string): Promise<ReturnGetProduct> {
    const response = await stockAPI.getStockData(product);//aqui tem q ser post

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
  }

  async updateProduto(product: string): Promise<ReturnGetProduct> {
    const response = await stockAPI.getStockData(product);//aqui tem q ser update

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
  }

  async deleteProduto(product: string): Promise<ReturnGetProduct> {
    const response = await stockAPI.getStockData(product);//aqui tem q ser delete

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
  }
}