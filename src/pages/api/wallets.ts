import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const walletPath = path.resolve(process.cwd(), "wallet.json");
const adminPath = path.resolve(process.cwd(), "admin.json");
// const ADMIN_PASSWORD = "ghayas";

function readWalletsFromFile() {
  if (fs.existsSync(walletPath)) {
    const fileData = fs.readFileSync(walletPath, "utf-8");
    return JSON.parse(fileData);
  }
  return [];
}

function readAdminPasswordFromFile() {
  if (fs.existsSync(adminPath)) {
    const fileData = fs.readFileSync(adminPath, "utf-8");
    return JSON.parse(fileData)?.adminPassword;
  }
  return "ghayas";
}

function saveWalletsToFile(wallets: any) {
  fs.writeFileSync(walletPath, JSON.stringify(wallets, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const wallets = readWalletsFromFile();
    const ADMIN_PASSWORD = readAdminPasswordFromFile();

    if (req.method === "GET") {
      return res.status(200).json(wallets);
    } else if (req.method === "POST") {
      const { password, id, wallet, imageUrl } = req.body;

      if (password !== ADMIN_PASSWORD) {
        return res.status(403).json({
          success: false,
          error: "Unauthorized",
        });
      }

      const walletIndex = wallets.findIndex((w: any) => w.id === id);

      if (walletIndex === -1) {
        return res.status(404).json({
          success: false,
          error: "Wallet not found",
        });
      }

      wallets[walletIndex].wallet = wallet;
      if (imageUrl) {
        wallets[walletIndex].image = imageUrl;
      }
      saveWalletsToFile(wallets);

      return res.status(200).json({
        success: true,
        wallet: wallets[walletIndex],
      });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message || "An error occurred while processing the request",
    });
  }
}
