import { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from 'bff/core';
import { HttpStatusCode } from 'bff/core';
import { GetProdutoIdResult } from 'bff/types/response';
import { findProdutoController } from 'bff/controllers';

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
  res: NextApiResponse<GetProdutoIdResult | void | ApiError>
) {
  switch (req.method) {
    case 'GET':
      return findProdutoController.handler(req, res); //função vinda do controller
    default:
      return HttpStatusCode.methodNotAllowed;
  }
}
