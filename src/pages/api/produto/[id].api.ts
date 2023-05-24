import { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatusCode } from 'services/infra';
import { businessProduct } from 'services/business';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return HttpStatusCode.methodNotAllowed;
  const { getProduct } = businessProduct();
  const product = req.url?.split('/').pop()!;

  const response = await getProduct(product);
  res.status(response.statusCode).json(response.body);
}
