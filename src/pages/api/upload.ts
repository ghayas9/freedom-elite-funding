import type { NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'public/uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = upload.single('file');

const runMiddleware = (req:any, res:any, fn:any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result:any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req?.method} Not Allowed`);
  }

  try {
    await runMiddleware(req as any, res as any, uploadMiddleware);
    const imageUrl = `/uploads/${req?.file?.filename}`;
    res.status(200).json({ url: imageUrl });
  } catch (error:any) {
    res.status(500).json({ error: `Something went wrong! ${error?.message}` });
  }
}
