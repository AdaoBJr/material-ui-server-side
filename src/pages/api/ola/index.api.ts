import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/ola:
 *   get:
 *     description: ola
 *     responses:
 *       200:
 *         description: ola world
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json('Helloo Galera!');
}
