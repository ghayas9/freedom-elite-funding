// pages/api/login.ts

import fs from 'fs';
import path from 'path';

const adminPath = path.resolve(process.cwd(), "admin.json");
const DEFAULT_PASSWORD = "ghayas";

function readAdminPasswordFromFile() {
  if (fs.existsSync(adminPath)) {
    const fileData = fs.readFileSync(adminPath, "utf-8");
    return JSON.parse(fileData).adminPassword;
  }
  return DEFAULT_PASSWORD;
}

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { password } = req.body;

        const currentPassword = readAdminPasswordFromFile();

        if (password === currentPassword) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ error: 'Invalid password' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handler;
