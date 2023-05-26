import { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatusCode } from 'services/infra';
import { productBusiness } from 'services/business';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return HttpStatusCode.methodNotAllowed;
  const { getProduct } = productBusiness();
  // const product = req.url?.split('/').pop()!;
  const product = req.query.id as string;

  const response = await getProduct(product);
  res.status(response.statusCode).json(response.body);
}
