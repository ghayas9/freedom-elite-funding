import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'order.json');

let orders: any[] = [];
if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    orders = JSON.parse(fileData);
}

const wallets = [
    {
        id: "430efdcd-be00-4e5f-af2a-29ef7572dc50",
        desc: "You have selected to use USDT (TRC20) tokens. Please ensure you are using the USDT (TRC20) token or your payment will be lost.",
        image: "/images/qr.png",
        name: "Tether",
        wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
        icon: "/images/tether-usdt.png",
    },
    {
        id: "58713051-edd0-4b43-8168-0ff999d2a951",
        desc: "You have selected to use BITCOIN. Please ensure you are using the BITCOIN or your payment will be lost.",
        image: "/images/qr.png",
        name: "Bitcoin",
        wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
        icon: "/images/Bitcoin-usdt.png",
    },
    {
        id: "41b83df3-bc0a-432d-8a87-72daa12438a6",
        desc: "You have selected to use ETH (ERC20) tokens. Please ensure you are using the ETH (ERC20) token or your payment will be lost.",
        image: "/images/qr.png",
        name: "Ethereum",
        wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
        icon: "/images/ethereum-usdt.png",
    },
    {
        id: "fb506b12-dde6-4513-b987-eade02aa2c4d",
        desc: "You have selected to use LITECOIN (LTC) tokens. Please ensure you are using the LITECOIN (LTC)token or your payment will be lost.",
        image: "/images/qr.png",
        name: "Litecoin",
        wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
        icon: "/images/litecoin-ltc-logo.png",
    },
];

function saveOrdersToFile(orders: any) {
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { price, walletId, id } = req.body;

        if (id) {
            const order = orders.find((e: any) => e.id === id);
            if (order) {
                return res.status(200).json(order);
            } else {
                return res.status(404).json({
                    success: false,
                    error: "Payment not found",
                });
            }
        }

        const wallet = wallets.find((e: any) => e.id === walletId);

        if (!wallet) {
            return res.status(400).json({
                success: false,
                error: "Invalid wallet ID",
            });
        }

        const order = {
            price,
            walletId,
            id: uuidv4(),
            wallet: wallet,
        };
        orders.push(order);

        // Save the orders to the file
        saveOrdersToFile(orders);

        return res.status(200).json({
            success: true,
            order
        });
    } catch (err:any) {
        res.status(500).json({
            success: false,
            error: err.message || "An error occurred while processing the order",
        });
    }
}
