import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { filename } = req.query;
  const filePath = path.join(process.cwd(), 'public','uploads', filename as any);

  

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.setHeader('Content-Type', 'image/jpeg');
    fs.createReadStream(filePath).pipe(res);
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
