import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Hello
 *     responses:
 *       200:
 *         description: produto world
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json('Helloo Galera!');
}
