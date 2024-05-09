import FooterCheckout from "@/components/FooterCheckout";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Payment() {
  const router = useRouter();
  const [time, setTime] = useState(900);
  const [isCopied, setIsCopied] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      router.reload();
    }
  }, [time, router]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(index);
        setTimeout(() => setIsCopied(0), 1000);
      })
      .catch((error) => {});
  };
  return (
    <div className="bg-secondary">
      <Header />
      <div className="max-w-[450px] lg:w-1/3 mx-auto bg-white rounded overflow-hidden mt-12 pb-6">
        <h1 className="w-full bg-primary text-center font-semibold text-[16px] py-2">
          Complete process within {minutes}:{seconds < 10 ? "0" : ""}
          {seconds} minutes
        </h1>
        <Image
          className="w-8/12 aspect-square mx-auto"
          src="/images/tether.png"
          alt=""
          width={0}
          height={0}
        />
        <div className="w-6/12 mx-auto flex items-start gap-2">
        <Image
            className="aspect-square"
            src="/images/notification.png"
            alt=""
            width={18}
            height={18}
          />
          <p className="text-[12px] font-normal">
          If  this QR is not populating your wallet, please use this one.
          </p>
        </div>

        <div className="flex items-center bg-[#EDEDED] px-4 py-2 rounded relative w-11/12 mx-auto my-2">
          <Image
            alt=""
            src="/images/Tether_Logo.png"
            className=""
            width={100}
            height={26}
          />
          <Image
            alt=""
            src="/images/drop.png"
            width={24}
            height={18}
            onClick={() => {}}
            className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer`}
          />
        </div>

        <div className="flex items-start gap-2 w-11/12 mx-auto">
          <Image
            className="aspect-square"
            src="/images/notification.png"
            alt=""
            width={18}
            height={18}
          />
          <p className="text-[14px] font-semibold">
            You have selected to use USDT (TRC20) tokens. Please ensure you are
            using USDT (TRC20) token or your payment will be lost.
          </p>
        </div>
      </div>
      <div className="max-w-[450px] lg:w-1/3 mx-auto bg-white rounded overflow-hidden mt-5 px-8 py-4 mb-12">
        <h1 className="w-full font-normal text-[14px]">
          Set your wallet TX fee to at I post:
        </h1>
        <div className="mt-2">
          <h1 className="text-[20px] font-semibold ">Amount</h1>
          <div className="w-full flex justify-between bg-[#EDEDED] px-4 py-2 rounded relative">
            548.16 ETH (ERC20)
            <Image
              alt=""
              src="/images/bxs_copy.png"
              width={24}
              height={18}
              onClick={() => copyToClipboard("548.16 ETH (ERC20)", 1)}
              className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer ${
                isCopied == 1 ? "opacity-50" : ""
              }`}
            />
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-[20px] font-semibold ">Address</h1>
          <div className="w-full flex justify-between bg-[#EDEDED] px-4 py-2 rounded relative">
            TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg
            <Image
              alt=""
              src="/images/bxs_copy.png"
              width={24}
              height={18}
              onClick={() =>
                copyToClipboard("TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg", 2)
              }
              className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer ${
                isCopied === 2 ? "opacity-50" : ""
              }`}
            />
          </div>
        </div>
        <h1 className="w-full font-normal text-[14px] mt-2">
          Expected time to confirm: Less than 30 seconds
        </h1>
      </div>
      <div className="bg-black py-12">
        <FooterCheckout />
      </div>
    </div>
  );
}
