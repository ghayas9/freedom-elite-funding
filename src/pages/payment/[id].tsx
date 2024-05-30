import FooterCheckout from "@/components/FooterCheckout";
import Header from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

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

  const [order, setOrder] = useState<any>({});
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

  console.log(order);
  return (
    <div className="bg-secondary">
      <Header />
      <div className="max-w-[450px] w-11/12 lg:w-1/3 mx-auto bg-white rounded mt-12 pb-6">
        <h1 className="w-full bg-primary text-center font-semibold text-[16px] py-2">
          Complete process within {minutes}:{seconds < 10 ? "0" : ""}
          {seconds} minutes
        </h1>
        <Image
          className="w-3/6 md:w-8/12 aspect-square mx-auto"
          src={order?.wallet?.image}
          alt=""
          width={0}
          height={0}
        />
        <div className="w-full mx-auto flex items-start justify-center gap-2">
          <Image
            className="w-5 aspect-square"
            src={order?.wallet?.icon}
            alt=""
            width={0}
            height={0}
          />
          <p className="text-[12px] font-normal w-[260px]">
            If this QR is not populating your wallet, please use this one.
          </p>
        </div>

        {/* <div
          className="flex items-center justify-between bg-[#EDEDED] px-4 py-2 rounded relative w-11/12 mx-auto my-2 cursor-pointer mt-8"
          onClick={handleClick}
        >
          <Image
            src={selectedImage?.image}
            alt=""
            width={0}
            height={0}
            className="h-8 w-auto"
          />

          <Image
            src="/images/vector.png"
            alt=""
            width={0}
            height={0}
            className={`w-3 ${
              showdropdown
                ? "rotate-180 transition-all duration-300 ease-in-out"
                : ""
            }`}
          />
          {showdropdown && (
            <div
              className={`bg-[#EDEDED] w-full shadow-lg rounded-bl-lg rounded-br-lg absolute top-11 left-0 px-4 py-3 flex flex-col justify-center`}
            >
              {dropdown?.map((e, index) => (
                <span
                  key={index}
                  className="hover:bg-white cursor-pointer block px-3 py-1"
                  onClick={() => handleItemClick(e)}
                >
                  <Image
                    src={e?.image}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[60px] h-5 mb-2"
                  />
                </span>
              ))}
            </div>
          )}
        </div> */}

        <div className="flex items-start gap-2 w-11/12 mx-auto mt-4">
          <Image
            className="aspect-square"
            src="/images/notification.png"
            alt=""
            width={18}
            height={18}
          />
          <p className="text-[14px] font-semibold">{order?.wallet?.desc}</p>
        </div>
      </div>
      <div className="max-w-[450px] lg:w-1/3 mx-auto bg-white rounded overflow-hidden mt-5 px-8 py-4 mb-12">
        <h1 className="w-full font-normal text-[14px]">
          Set your wallet TX fee to at I post:
        </h1>
        <div className="mt-2">
          <h1 className="text-[20px] font-semibold ">Amount</h1>
          <div className="w-full flex justify-between bg-[#EDEDED] px-4 py-2 rounded relative">
            {order?.price} {order?.wallet?.method}
            <Image
              alt=""
              src="/images/bxs_copy.png"
              width={24}
              height={18}
              onClick={() => copyToClipboard(`${order?.price} ${order?.wallet?.method}}`, 1)}
              className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer ${
                isCopied == 1 ? "opacity-50" : ""
              }`}
            />
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-[20px] font-semibold ">Address</h1>
          <div className="w-full flex justify-between bg-[#EDEDED] px-4 py-2 rounded relative">
            {order?.wallet?.wallet}
            <Image
              alt=""
              src="/images/bxs_copy.png"
              width={24}
              height={18}
              onClick={() => copyToClipboard(order?.wallet?.wallet, 2)}
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
