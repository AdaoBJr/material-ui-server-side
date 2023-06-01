import { GetStock } from 'backend/types';
import { HttpClient } from 'backend/core';

export class StockAPI {
  constructor(private httpClient: HttpClient) {}

  async getStockData(product: string){
    return await this.httpClient.request<GetStock>({ method: 'get', url: product });
  };

};
