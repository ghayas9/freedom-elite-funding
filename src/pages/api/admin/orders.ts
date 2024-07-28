import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// const filePath = path.resolve(process.cwd(), 'order.json');
const orderPath = path.resolve(process.cwd(), 'order.json');
const adminPath = path.resolve(process.cwd(), "admin.json");
// const ADMIN_PASSWORD = 'ghayas';

// let orders: any[] = [];
// if (fs.existsSync(filePath)) {
//     const fileData = fs.readFileSync(filePath, 'utf-8');
//     orders = JSON.parse(fileData);
// }

function readOrdersFromFile() {
    if (fs.existsSync(orderPath)) {
        const fileData = fs.readFileSync(orderPath, 'utf-8');
        return JSON.parse(fileData);
    }
    return [];
}

function readAdminPasswordFromFile() {
    if (fs.existsSync(adminPath)) {
      const fileData = fs.readFileSync(adminPath, "utf-8");
      return JSON.parse(fileData).adminPassword;
    }
    return "ghayas";
  }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const ADMIN_PASSWORD = readAdminPasswordFromFile();
        const orders = readOrdersFromFile();
        if (req.method === 'POST') {
            const { password } = req.body;

            if (password !== ADMIN_PASSWORD) {
                return res.status(403).json({
                    success: false,
                    error: 'Unauthorized',
                });
            }

            return res.status(200).json(orders);
        }

        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    } catch (err: any) {
        res.status(500).json({
            success: false,
            error: err.message || 'An error occurred while fetching orders',
        });
    }
}
