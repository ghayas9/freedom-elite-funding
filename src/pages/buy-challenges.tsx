import JoinTelegram from "@/components/JoinTelegram";
import Layout from "@/components/Layout";
import OurChallengeTable from "@/components/OurChallengeTable";
import WhatPeopleSay from "@/components/WhatPeopleSay";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState(0);
  return (
    <Layout>
      <Head>
      <title>Choose Your Trading Challenge: Get Funded with Our Prop Firm</title>
        <meta
          name="description"
          content="Explore our Forex trading challenges and high-frequency trading opportunities at Freedom Elite Funding. Join our trading prop firm and use our exclusive HFT coupon to save on your challenge!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Buy Challenges",
              url: "https://freedomelitefunding.com/buy-challenges",
              description:
                "Explore our Forex trading challenges and high-frequency trading opportunities.",
            }),
          }}
        />
      </Head>

      <div className="max-w-[1200px] mx-auto mb-24 px-2 ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold mb-[15px] mt-[78px]">
            Our Challenges
          </h2>
          <p className="lg:text-lg font-medium text-white/60 text-center  md:w-[684px] w-full mb-[84px]">
            {`Explore our challenges and pick the one that suits your trading style best! Whether you're new to the game or a seasoned pro, we've got options to help you level up your skills. Take a look and choose your challenge! `}
            <br />
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  gap-14 ">
          <div className="flex items-center justify-center ">
            <div className=" p-[2px]  rounded-[25px] border-tb-g ">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                      <Image
                        className="mt-[-160px] mb-[8px]  w-24 md:w-fit"
                        src="/images/one.png"
                        alt=""
                        width={0}
                        height={0}
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-primary">Choose </span>Your
                          Challenge
                        </h2>
                        <p className="text-[#9F9F9F]">
                          Choose your preferred challenge and register for
                          evaluation and receive your login instantly.
                        </p>
                        <p className="text-primary underline underline-offset-4"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className=" p-[2px]  rounded-[25px] border-tb-g ">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                      <Image
                        className="mt-[-160px] mb-[8px]  w-24 md:w-fit"
                        src="/images/two.png"
                        alt=""
                        width={0}
                        height={0}
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-primary">Prove </span>Your
                          Skills
                        </h2>
                        <p className="text-[#9F9F9F]">
                          Prove your skills by passing all our trading
                          objectives shown in the dashboard. Once you have
                          completed this you will receive your funded account.
                        </p>
                        <p className="text-primary underline underline-offset-4"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center ">
            <div className=" p-[2px]  rounded-[25px] border-tb-g w-1/2 md:w-auto">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                      <Image
                        className="mt-[-160px] mb-[8px]  w-24 md:w-fit"
                        src="/images/three.png"
                        alt=""
                        width={0}
                        height={0}
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-primary">Start </span>Earning
                        </h2>
                        <p className="text-[#9F9F9F]">
                          Once you have passed your evaluation you will receive
                          your funded account and be able to withdraw up to 90%
                          of profits and join our scaling plan.
                        </p>
                        <p className="text-primary underline underline-offset-4"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-2 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 py-[10px] px-2  md:p-[10px]  gap-2 md:gap-10 md:bg-white/10 rounded-lg md:rounded-full mb-10 mt-5">
          <div>
            <div className=" text-primary -mb-2 md:mb-1 md:-mt-5 px-2 text-[10px] flex items-center justify-center">
              <div className=" border border-primary rounded-full px-2 text-[10px] flex items-center gap-1 justify-center">
                <span>No Consistency Rules</span>
              </div>
            </div>
            <button
              // type="submit"
              onClick={() => setSelected(0)}
              className={`flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-full sm:py-2  ${
                selected === 0 ? "bg-primary text-black " : "text-white"
              }  `}
            >
              Freedom Challenges
            </button>
          </div>
          <div>
            <div className="text-primary -mb-2 md:mb-1 md:-mt-5 px-2 text-[10px] flex items-center  justify-center">
              <div className=" border  border-primary rounded-full px-2 text-[10px] flex items-center gap-1 justify-center">
                <span>Pass it Fast</span>
              </div>
            </div>
            <button
              // type="submit"
              onClick={() => setSelected(1)}
              className={`flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium   w-full sm:py-2  ${
                selected === 1 ? "bg-primary text-black" : "text-white"
              }`}
            >
              HFT
            </button>
          </div>
        </div>
        <OurChallengeTable selected={selected} />
      </div>

      <WhatPeopleSay />
      <JoinTelegram />
    </Layout>
  );
}
