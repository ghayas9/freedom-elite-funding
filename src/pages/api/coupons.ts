import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const couponPath = path.resolve(process.cwd(), 'coupons.json');
const ADMIN_PASSWORD = 'ghayas';

let coupons: any[] = [];
if (fs.existsSync(couponPath)) {
    const fileData = fs.readFileSync(couponPath, 'utf-8');
    coupons = JSON.parse(fileData);
}

function saveCouponsToFile(coupons: any) {
    fs.writeFileSync(couponPath, JSON.stringify(coupons, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            // Return all coupons
            return res.status(200).json(coupons);
        } else if (req.method === 'POST') {
            const { password, action, id, code, discount } = req.body;

            if (action === 'apply') {
                // Apply coupon
                const coupon = coupons.find(coupon => coupon.code === code);
                if (!coupon) {
                    return res.status(404).json({
                        success: false,
                        error: 'Coupon not found',
                    });
                }
                return res.status(200).json({
                    success: true,
                    coupon: coupon,
                });
            }

            if (password !== ADMIN_PASSWORD) {
                return res.status(403).json({
                    success: false,
                    error: 'Unauthorized',
                });
            }

            if (action === 'add') {
                // Add new coupon
                if (coupons.find(coupon => coupon.code === code)) {
                    return res.status(400).json({
                        success: false,
                        error: 'Coupon with the same code already exists',
                    });
                }
                const newCoupon = { id: uuidv4(), code, discount };
                coupons.push(newCoupon);
                saveCouponsToFile(coupons);

                return res.status(201).json({
                    success: true,
                    coupon: newCoupon,
                });
            } else if (action === 'update') {
                // Update existing coupon
                const couponIndex = coupons.findIndex(coupon => coupon.id === id);
                if (couponIndex === -1) {
                    return res.status(404).json({
                        success: false,
                        error: 'Coupon not found',
                    });
                }
                if (coupons.find(coupon => coupon.code === code && coupon.id !== id)) {
                    return res.status(400).json({
                        success: false,
                        error: 'Coupon with the same code already exists',
                    });
                }
                coupons[couponIndex] = { id, code, discount };
                saveCouponsToFile(coupons);

                return res.status(200).json({
                    success: true,
                    coupon: coupons[couponIndex],
                });
            } else if (action === 'delete') {
                // Delete existing coupon
                const couponIndex = coupons.findIndex(coupon => coupon.id === id);
                if (couponIndex === -1) {
                    return res.status(404).json({
                        success: false,
                        error: 'Coupon not found',
                    });
                }
                coupons.splice(couponIndex, 1);
                saveCouponsToFile(coupons);

                return res.status(200).json({
                    success: true,
                    message: 'Coupon deleted successfully',
                });
            }

            return res.status(400).json({
                success: false,
                error: 'Invalid action',
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
