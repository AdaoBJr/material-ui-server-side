import { NextApiRequest, NextApiResponse } from 'next';
import { produtoService } from 'backend/services'

export const getProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoResult | ApiError> // ajustar retorno
) => {
  try {
    const {
      body,
    } = req;

    const response = await produtoService.getProduto({
      ...JSON.parse(body),
    });

    res.status(200).send(response);
  } catch (e) {
    if (e instanceof ApiError) { // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Get Produto`);
    }
  }
}

export const postProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<PostProdutoResult | ApiError> // ajustar retorno
) => {
  try {
    const {
      body,
    } = req;

    const response = await produtoService.postProduto({
      ...JSON.parse(body),
    });

    res.status(200).send(response);
  } catch (e) {
    if (e instanceof ApiError) { // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Post Produto`);
    }
  }
}

export const updateProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<UpdateProdutoResult | ApiError> // ajustar retorno
) => {
  try {
    const {
      body,
    } = req;

    const response = await produtoService.updateProduto({
      ...JSON.parse(body),
    });

    res.status(200).send(response);
  } catch (e) {
    if (e instanceof ApiError) { // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Update Produto`);
    }
  }
}

export const deleteProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<DeleteProdutoResult | ApiError> // ajustar retorno
) => {
  try {
    const {
      body,
    } = req;

    const response = await produtoService.deleteProduto({
      ...JSON.parse(body),
    });

    res.status(200).send(response);
  } catch (e) {
    if (e instanceof ApiError) { // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Delete Produto`);
    }
  }
}