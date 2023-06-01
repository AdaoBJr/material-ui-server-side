import { GetStock } from 'bff/types';
import { HttpResponse } from 'bff/core';

export interface ProdutoStock {
  getProdutoId(produto: string): Promise<HttpResponse<GetStock>>;
  postProduto(produto: string): Promise<HttpResponse<GetStock>>; //atualizar retorno
  updateProduto(produto: string): Promise<HttpResponse<GetStock>>; //atualizar retorno
  deleteProduto(produto: string): Promise<HttpResponse<GetStock>>; //atualizar retorno
}
