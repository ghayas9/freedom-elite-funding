import { NextApiRequest, NextApiResponse } from "next";

const payments = [
  {
    id: "640a22c5-01ab-436f-b2b8-1cb6b129dc0c",
    price: "2698.11",
  },
  {
    id: "ef2ee873-bbd2-4bcb-9eeb-6b2923b5a161",
    price: "1056.88",
  },
  {
    id: "fd57d661-3657-4294-98bb-d21b49aee61a",
    price: "450.78",
  },
  {
    id: "669500e5-9148-469a-8b73-5c416185aa1b",
    price: "2167.00",
  },
  {
    id: "5b41ca5f-45c6-4272-ac13-fdde9b0421a5",
    price: "1589.45",
  },
  {
    id: "0862154f-ac72-467d-9bd1-b063eeca4652",
    price: "2800.43",
  },
  {
    id: "28a92ff0-420a-44c6-8de8-fd1dc600bbfe",
    price: "1757.94",
  },
  {
    id: "cbf2a5eb-4bc0-4a32-97bc-aa47fab2f7b8",
    price: "320.55",
  },
  {
    id: "6c6b9989-db3c-40ee-9426-0cf14f07ac49",
    price: "3056.10",
  },
  {
    title: "15,000",
    price: "104",
    id: "0f66b6a0-705a-4ad0-9ada-e0dbe3ac8fb9",
  },
  {
    title: "25,000",
    price: "149",
    id: "2545b075-a88f-4fbf-894f-d82aa79ca0df",
  },
  {
    title: "50,000",
    price: "259",
    id: "4e387751-ab69-40cb-917a-acdbad33f26e",
  },
  {
    title: "100,000",
    price: "469",
    id: "4d11f6c0-7599-4f31-9d7f-44a12c18b1ff",
  },
  {
    title: "200,000",
    price: "779",
    id: "72749b34-d6a4-479c-bbc4-94254beabd23",
  },
  {
    title: "500,000",
    price: "1399",
    id: "98782907-4a54-4598-96f3-e3a5fcc20fdf",
  },
  {
    title: "15,000",
    price: "159",
    id: "502ec166-f7bf-4dd9-8d92-c84a2b751656",
  },
  {
    title: "25,000",
    price: "269",
    id: "b23a665e-bbf9-4596-b2ef-f7a931f3765f",
  },
  {
    title: "50,000",
    price: "379",
    id: "324d5ef9-77c3-4684-b653-a51be6091882",
  },
  {
    title: "100,000",
    price: "559",
    id: "5ab52b1a-2790-42fc-9f54-763fcc952126",
  },
  {
    title: "200,000",
    price: "949",
    id: "ef7de249-d597-4f4c-92db-1db37c6c39ce",
  },
  {
    title: "500,000",
    price: "2799",
    id: "35f2c6c1-37fd-487f-8140-b4a52bfb0d6b",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.body;

    console.log(req.body)
    if (id) {
      const payment = payments.find((e) => e.id === id);
      if (payment) {
        return res.status(200).json(payment);
      }
    }

    return res.status(404).json({
      success: false,
      error: "Payment not found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err || "An error occurred while sending the email",
    });
  }
}
