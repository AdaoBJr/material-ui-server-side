import { GetStock } from 'bff/types';
import { ProdutoStock } from '../types';
import { HttpClient, HttpResponse } from 'bff/core';

class ProdutoStockProvider implements ProdutoStock {
  constructor(private httpClient: HttpClient) {}

  async getProdutoId(produto: string): Promise<HttpResponse<GetStock>> {
    return await this.httpClient.request<GetStock>({ method: 'get', url: produto });
  }
  async postProduto(produto: string): Promise<HttpResponse<GetStock>> {
    return await this.httpClient.request<GetStock>({ method: 'get', url: produto });
  }
  async updateProduto(produto: string): Promise<HttpResponse<GetStock>> {
    return await this.httpClient.request<GetStock>({ method: 'get', url: produto });
  }
  async deleteProduto(produto: string): Promise<HttpResponse<GetStock>> {
    return await this.httpClient.request<GetStock>({ method: 'get', url: produto });
  }
}

export { ProdutoStockProvider };
