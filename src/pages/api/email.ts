import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const SENDER_EMAIL = process.env.SENDER_EMAIL
  const PASSWORD = process.env.PASSWORD

  console.log(SENDER_EMAIL,PASSWORD)

  const { first, last, email, message } = req.body;

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
      to: ["jashiforlife@gmail.com", "support@freedomelitefunding.com"],
      subject: `Mail from ${first + " " + last} | ${email}`,
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
