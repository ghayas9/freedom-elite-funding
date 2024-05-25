"use client";

import Footer from "@/components/Footer";
import FooterCheckout from "@/components/FooterCheckout";
import Header from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

function Order() {
  const router = useRouter();
  const [order, setOrder] = useState<any>({});

  useEffect(() => {
    setTimeout(() => {
      router.push("/payment/" + order?.id);
    }, 15000);
  }, []);

  useEffect(() => {
    if (router?.query?.id) {
      axios({
        method: "POST",
        url: "/api/payment",
        data: {
          id: router?.query?.id,
        },
      })
        ?.then((res: any) => {
          setOrder(res?.data);
        })
        .then(() => {});
    }
  }, [router?.query]);

  return (
    <div className="w-full bg-secondary">
      <Header />
      <div className="w-full flex items-center justify-center py-40">
        <div className="w-11/12 md:w-1/3 rounded-lg border border-[#FAFF00] px-3 py-3">
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
