import { StockProvider } from 'bff/infra';
import { ProdutoDTO } from 'bff/types/dto';
import { GetProdutoIdResult } from 'bff/types/response';

class FindProdutoService {
  constructor(private stockProvider: StockProvider) {}

  async execute({ produto }: ProdutoDTO): Promise<GetProdutoIdResult> {
    const stock = await this.stockProvider.getProdutoId(produto);
    // const verification = await this.verificationProvider.getProdutoId(product);//exemplo outro provider

    //lógica para encontrar o produto.
    const selectedProduct = stock.body.results[0]; // oportunidade para camada de mapper

    return {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    };
  }
}

export { FindProdutoService };
