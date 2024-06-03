import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'order.json');
const ADMIN_PASSWORD = 'ghayas';

let orders: any[] = [];
if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    orders = JSON.parse(fileData);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
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
