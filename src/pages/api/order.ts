import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const orderPath = path.resolve(process.cwd(), 'order.json');
const walletPath = path.resolve(process.cwd(), 'wallet.json');

function readOrdersFromFile() {
    if (fs.existsSync(orderPath)) {
        const fileData = fs.readFileSync(orderPath, 'utf-8');
        return JSON.parse(fileData);
    }
    return [];
}

function readWalletsFromFile() {
    if (fs.existsSync(walletPath)) {
        const fileData = fs.readFileSync(walletPath, 'utf-8');
        return JSON.parse(fileData);
    }
    return [];
}

function saveOrdersToFile(orders: any) {
    fs.writeFileSync(orderPath, JSON.stringify(orders, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const orders = readOrdersFromFile();
        const wallets = readWalletsFromFile();

        const { price, walletId, id, ...moreDetail } = req.body;

        if (id) {
            const order = orders.find((e: any) => e.id === id);
            if (order) {
                return res.status(200).json(order);
            } else {
                return res.status(404).json({
                    success: false,
                    error: 'Payment not found',
                });
            }
        }

        const wallet = wallets.find((e: any) => e.id === walletId);

        if (!wallet) {
            return res.status(400).json({
                success: false,
                error: 'Invalid wallet ID',
            });
        }

        const order = {
            ...moreDetail,
            price,
            walletId,
            id: uuidv4(),
            wallet: wallet,
        };
        orders.push(order);

        saveOrdersToFile(orders);

        return res.status(200).json({
            success: true,
            order,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            error: err.message || 'An error occurred while processing the order',
        });
    }
}
