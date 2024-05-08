import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const SENDER_EMAIL = "Support@freedomelitefunding.com";
const PASSWORD = "Freedom0123@"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { first,last, email, message } = req.body;

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      debug: true,
      connectionTimeout: 10000,
    });

    const mailOptions = {
      from: SENDER_EMAIL,
      to: [
        "ghayasudin999@gmail.com",
        "jashiforlife@gmail.com",
        "support@freedomelitefunding.com"
      ],
      subject: `Mail from ${first + " "+ last} | ${email}`,
      text: message,
    };

    await transport.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Email has been sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err || "An error occurred while sending the email",
    });
  }
}
