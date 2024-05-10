import Footer from "@/components/Footer";
import FooterCheckout from "@/components/FooterCheckout";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Order() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/payment");
    }, 15000);
  }, []);
  return (
    <div className="w-full bg-secondary">
      <Header />
      <div className="w-full flex items-center justify-center py-40">
        <div className="w-1/3 rounded-lg border border-[#FAFF00] px-3 py-3">
          <div>
            <h1 className="text-white text-sm font-medium">order Number:</h1>
            <h1 className="text-white text-xl font-semibold">7410</h1>
            <div className="w-full border border-[#FAFF00] mt-2" />
          </div>
          <div className="mt-2">
            <h1 className="text-white text-sm font-medium">Date:</h1>
            <h1 className="text-white text-xl font-semibold">May 01, 2024</h1>
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
            <h1 className="text-white text-xl font-semibold">$548.16</h1>
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
