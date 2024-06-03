import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const walletPath = path.resolve(process.cwd(), 'wallet.json');
const ADMIN_PASSWORD = 'ghayas';

let wallets: any[] = [];
if (fs.existsSync(walletPath)) {
    const fileData = fs.readFileSync(walletPath, 'utf-8');
    wallets = JSON.parse(fileData);
}

function saveWalletsToFile(wallets: any) {
    fs.writeFileSync(walletPath, JSON.stringify(wallets, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            return res.status(200).json(wallets);
        } else if (req.method === 'POST') {
            const { password, id, wallet } = req.body;

            if (password !== ADMIN_PASSWORD) {
                return res.status(403).json({
                    success: false,
                    error: 'Unauthorized',
                });
            }

            const walletIndex = wallets.findIndex((w: any) => w.id === id);

            if (walletIndex === -1) {
                return res.status(404).json({
                    success: false,
                    error: 'Wallet not found',
                });
            }

            wallets[walletIndex].wallet = wallet;
            saveWalletsToFile(wallets);

            return res.status(200).json({
                success: true,
                wallet: wallets[walletIndex],
            });
        }

        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    } catch (err: any) {
        res.status(500).json({
            success: false,
            error: err.message || 'An error occurred while processing the request',
        });
    }
}
