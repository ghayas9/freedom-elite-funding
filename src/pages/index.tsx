import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Arrow, Telegram } from "../svgs/home";
import Link from "next/link";
import WhatPeopleSay from "@/components/WhatPeopleSay";
import OurChallenges from "@/components/OurChallenges";
import JoinTelegram from "@/components/JoinTelegram";

export default function Index() {
  return (
    <Layout>
      <div className="max-w-[1200px] grid mx-auto grid-cols-1 md:grid-cols-2 px-2 gap-y-5  lg:py-20">
        <div className="w-full gap-5 flex flex-col justify-center ">
          <h1 className="text-2xl lg:text-5xl font-bold text-white p-0 m-0">
            We focus your freedom,
            <br />
            Keep your dream alive
          </h1>
          <p className="text-lg font-normal text-white/60 ">{`Our HFT-prop firm is unique: we're the only one offering a challenge refund fee on your second payout, with the first payout guaranteed within 14 days.`}</p>

          <div className="flex items-center gap-2 lg:gap-5 text-[16px] font-semibold">
            <Link
              href="#"
              className="flex items-center justify-center px-[12px] py-[10px] gap-2  bg-primary rounded-[30px]"
            >
              <Arrow />
              Buy Challenges
            </Link>
            <Link
              className="flex items-center justify-center px-[12px] py-[10px] gap-2  bg-primary rounded-[30px]"
              href=""
            >
              <Telegram />
              Telegram
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-end items-start">
          <Image
            src="/images/dashboard.png"
            width={0}
            height={0}
            alt="hero-image"
            unoptimized
            className="w-full md:w-11/12 aspect-[531/332]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2  ">
          <div className="md:border-r-[1px]  border-primary p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white  text-lg md:text-3xl font-semibold">
                <span>2000</span>
              </h1>
              <p className="text-[#9C9C9C] md:text-sm lg:text-lg text-nowrap font-normal">
                Free custom indicator
              </p>
            </div>
          </div>
          <div className="md:border-r-[1px]  border-primary  p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white  text-lg md:text-3xl font-semibold">
                <span>140</span>+
              </h1>
              <p className="text-[#9C9C9C] md:text-sm lg:text-lg font-normal">
                Total no of countries
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:border-none  w-full md:w-1/2">
          <div className="p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white  text-lg md:text-3xl font-semibold">
                <span>24</span> / <span>7</span>
              </h1>
              <p className="text-[#9C9C9C]  tex md:text-sm lg:text-lg font-normal">
                24/7 funded customer support
              </p>
            </div>
          </div>
          <div className="md:border-l-[1px]  border-primary p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white text-lg md:text-3xl font-semibold">
                <span>30M</span>+
              </h1>
              <p className="text-[#9C9C9C] md:text-sm lg:text-lg font-normal">
                Total funded Allocation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-4 lg:py-20 px-2 lg:mt-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col-reverse items-center border-tb-g rounded-3xl p-2">
            <Image
              width={0}
              height={0}
              className="w-[145px] aspect-square"
              src="/images/Group-1.png"
              alt=""
            />
            <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
              <span className="text-primary">Refund Challenge</span> Fees on
              Your Second Payout
            </h2>
          </div>
          <div className="flex flex-col items-center border-bt-g rounded-3xl p-2">
            <Image
              width={0}
              height={0}
              className="w-[145px] aspect-square"
              src="/images/Group-2.png"
              alt=""
            />
            <h2 className="text-white text-[24px] text-center md:text-[28px] font-semibold">
              Guaranteed Payout Within 14days
            </h2>
          </div>
          <div className="flex flex-col-reverse items-center justify-end border-tb-g rounded-3xl px-2">
            <Image
              width={0}
              height={0}
              className="w-[145px] aspect-square"
              src="/images/Group-3.png"
              alt=""
            />
            <h2 className="text-white text-[24px] text-center md:text-[28px] font-semibold">
              <span className="text-primary">HFT</span> ALLOWED
              <span className="text-primary"> AND</span>
            </h2>
          </div>
          <div className="flex flex-col items-center border-bt-g rounded-3xl px-2">
            <Image
              width={0}
              height={0}
              className="w-[145px] aspect-square"
              src="/images/Group-4.png"
              alt=""
            />
            <h2 className="text-white text-[24px] text-center md:text-[28px] font-semibold">
              Enjoy Zero Brokerage Fees on Forex and Indices Trading
            </h2>
          </div>
        </div>
      </div>
      <OurChallenges />
      <WhatPeopleSay />
      <JoinTelegram />
    </Layout>
  );
}
