import Layout from "@/components/Layout";
import WhatPeopleSay from "@/components/WhatPeopleSay";
import Image from "next/image";
import { useRouter } from "next/router";
import { it } from "node:test";
import React from "react";

export default function Payout() {
  const router = useRouter();
  const data = [
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
  ];
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto px-2 flex flex-col items-center justify-center ">
        <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-2 mt-[78px]">
          Payout Collection
        </h2>

        <p className="lg:text-lg font-medium text-white/60 text-center">
          {`Join the winning team of traders who have received certified payouts.`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-12 ">
          {data?.map((item, index) => (
            <Image
              key={index}
              src={`/images/card-${index + 1}.png`}
              alt=""
              unoptimized
              width={0}
              height={0}
              onClick={() => router?.push("/checkout/" + item?.id)}
              className="w-full aspect-square"
            />
          ))}
        </div>
      </div>
      <WhatPeopleSay />
    </Layout>
  );
}
