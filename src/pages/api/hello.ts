// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Types: https://nextjs.org/docs/basic-features/typescript#api-routes

import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  name: string;
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
): void => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default handler;
