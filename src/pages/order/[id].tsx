"use client";

import Footer from "@/components/Footer";
import FooterCheckout from "@/components/FooterCheckout";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

function Order() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/payment/" + order?.id);
    }, 15000);
  }, []);

  const orders = [
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

  const order = useMemo(() => {
    return orders?.find((o) => o.id === router?.query?.id);
  }, [router?.query?.id]);
  return (
    <div className="w-full bg-secondary">
      <Header />
      <div className="w-full flex items-center justify-center py-40">
        <div className="w-1/3 rounded-lg border border-[#FAFF00] px-3 py-3">
          <div>
            <h1 className="text-white text-sm font-medium">order Number:</h1>
            <h1 className="text-white text-xl font-semibold">
              {Math.floor(Math.random() * 9999 + 1001)}
            </h1>
            <div className="w-full border border-[#FAFF00] mt-2" />
          </div>
          <div className="mt-2">
            <h1 className="text-white text-sm font-medium">Date:</h1>
            <h1 className="text-white text-xl font-semibold">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h1>
            <div className="w-full border border-[#FAFF00] mt-2" />
          </div>
          <div className="mt-2">
            <span className="w-full flex items-center justify-between">
              <h1 className="text-white text-sm font-medium">Total Amount:</h1>
              <Image
                src="/images/bxs_copy1.png"
                alt=""
                width={21}
                height={16}
              />
            </span>
            <h1 className="text-white text-xl font-semibold">
              ${order?.price}
            </h1>
            <div className="w-full border border-[#FAFF00] mt-2" />
          </div>
          <div className="mt-2">
            <h1 className="text-white text-sm font-medium">Payment Method:</h1>
            <h1 className="text-white text-xl font-semibold">
              Crypto and other cryptocurrencuse
            </h1>
          </div>
        </div>
      </div>
      <FooterCheckout />
    </div>
  );
}

export default Order;
