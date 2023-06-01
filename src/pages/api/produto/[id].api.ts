import { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from 'bff/core';
import { HttpStatusCode } from 'bff/infra';
import { GetProdutoIdResult } from 'bff/types';
import { deleteProduto, getProdutoId, postProduto, updateProduto } from 'bff/controllers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await requestHandler(req, res);
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.status).send(error);
    } else {
      throw new Error(`Unexpected error: Get Pagamentos`);
    }
  }
}

async function requestHandler(
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoIdResult | ApiError>
) {
  switch (req.method) {
    case 'GET':
      return getProdutoId(req, res); //função vinda do controller
    case 'POST':
      return postProduto(req, res); //função vinda do controller
    case 'PUT':
      return updateProduto(req, res); //função vinda do controller
    case 'DELETE':
      return deleteProduto(req, res); //função vinda do controller
    default:
      return HttpStatusCode.methodNotAllowed;
  }
}
