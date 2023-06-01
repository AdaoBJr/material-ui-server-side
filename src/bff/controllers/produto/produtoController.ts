import { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from 'bff/core';
import { GetProdutoIdResult } from 'bff/types';
import { produtoService } from 'bff/services';

export const getProdutoId = async (
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoIdResult | ApiError>
) => {
  try {
    const { query } = req;
    const produto = query.id as string;

    const response = await produtoService.getProdutoId(produto);

    res.status(200).json(response);
  } catch (e) {
    if (e instanceof ApiError) {
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Get Produto`);
    }
  }
};

export const postProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoIdResult | ApiError> // ajustar retorno
) => {
  try {
    const { body } = req;

    const response = await produtoService.postProduto({
      ...JSON.parse(body),
    });

    res.status(200).json(response);
  } catch (e) {
    if (e instanceof ApiError) {
      // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Post Produto`);
    }
  }
};

export const updateProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoIdResult | ApiError> // ajustar retorno
) => {
  try {
    const { body } = req;

    const response = await produtoService.updateProduto({
      ...JSON.parse(body),
    });

    res.status(200).json(response);
  } catch (e) {
    if (e instanceof ApiError) {
      // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Update Produto`);
    }
  }
};

export const deleteProduto = async (
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoIdResult | ApiError> // ajustar retorno
) => {
  try {
    const { body } = req;

    const response = await produtoService.deleteProduto({
      ...JSON.parse(body),
    });

    res.status(200).json(response);
  } catch (e) {
    if (e instanceof ApiError) {
      // ajustar erro
      res.status(e.status).send(e);
    } else {
      throw new Error(`Unexpected error: Delete Produto`);
    }
  }
};
