"use client";

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
    let timer: NodeJS.Timeout | null = null;

    if (order?.id) {
      timer = setTimeout(() => {
        router.push("/payment/" + order.id);
      }, 1500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [order, router]);

  useEffect(() => {
    if (router?.query?.id) {
      axios({
        method: "POST",
        url: "/api/order",
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
      <div className="w-full max-w-[800px] mx-auto flex items-center justify-center gap-10 py-40 relative">
        <Image
          src="/images/orderlogo.png"
          alt=""
          width={0}
          height={0}
          className="w-40 aspect-square absolute left-0"
        />
        <div className="w-11/12 md:w-1/2 rounded-lg border border-[#FAFF00] px-3 py-3">
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
        <Image
          src="/images/orderlogo.png"
          alt=""
          width={0}
          height={0}
          className="w-40 aspect-square absolute right-0"
        />
      </div>
      <FooterCheckout />
    </div>
  );
}

export default Order;
