import { GetStock } from 'bff/types';
import { HttpClient } from '../protocols';

export class StockAPI {
  constructor(private httpClient: HttpClient) {}

  async getStockData(product: string) {
    return await this.httpClient.request<GetStock>({ method: 'get', url: product });
  }
}
