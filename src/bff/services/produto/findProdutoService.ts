import { StockProvider } from 'bff/infra';
import { GetProdutoIdResult } from 'bff/types/response';

class FindProdutoService {
  constructor(private stockProvider: StockProvider) {}

  async execute(product: string): Promise<GetProdutoIdResult> {
    //adicionar DTO
    const stock = await this.stockProvider.getProdutoId(product);
    // const verification = await this.verificationProvider.getProdutoId(product);//exemplo outro provider

    //lógica para encontrar o produto.
    const selectedProduct = stock.body.results[0];

    return {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };
  }
}

export { FindProdutoService };
