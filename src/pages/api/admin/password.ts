import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const adminPath = path.resolve(process.cwd(), "admin.json");
const DEFAULT_PASSWORD = "ghayas";

function readAdminPasswordFromFile() {
  if (fs.existsSync(adminPath)) {
    const fileData = fs.readFileSync(adminPath, "utf-8");
    return JSON.parse(fileData).adminPassword;
  }
  return DEFAULT_PASSWORD;
}

function saveAdminPasswordToFile(password: string) {
  const adminData = { adminPassword: password };
  fs.writeFileSync(adminPath, JSON.stringify(adminData, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const currentPassword = readAdminPasswordFromFile();

    if (req.method === "POST") {
      const { oldPassword, newPassword } = req.body;

      if (oldPassword !== currentPassword) {
        return res.status(403).json({
          success: false,
          error: "Current password is incorrect",
        });
      }

      if (!newPassword || newPassword.length < 6) {
        return res.status(400).json({
          success: false,
          error: "New password must be at least 6 characters long",
        });
      }

      saveAdminPasswordToFile(newPassword);

      return res.status(200).json({
        success: true,
        message: "Password updated successfully",
      });
    }

    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message || "An error occurred while processing the request",
    });
  }
}
