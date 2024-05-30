// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Arrow, Telegram } from "../svgs/home";
import Link from "next/link";
import WhatPeopleSay from "@/components/WhatPeopleSay";
import OurChallenges from "@/components/OurChallenges";
import JoinTelegram from "@/components/JoinTelegram";
import { useCountUp } from "react-countup";
import EightCap from "@/components/EightCap";

export default function Index() {
  const indicatorRef = useRef(null);
  const countriesRef = useRef(null);
  const twentyRef = useRef(null);
  const sevenRef = useRef(null);
  const fundedRef = useRef(null);
 
  const [isVisible, setIsVisible] = React.useState(false);

  const { countUp: indicatorCount, start: startIndicator } = useCountUp({
    start: 1300,
    end: 2000,
    duration: 1,
    ref: indicatorRef,
    startOnMount: false,
  });

  const { countUp: countriesCount, start: startCountries } = useCountUp({
    start: 0,
    end: 140,
    duration: 1.5,
    ref: countriesRef,
    startOnMount: false,
  });

  const { countUp: tewntyCount, start: startTwenty } = useCountUp({
    start: 0,
    end: 20,
    duration: 2,
    ref: twentyRef,
    startOnMount: false,
  });
  const { countUp: sevenCount, start: startSeven } = useCountUp({
    start: 0,
    end: 7,
    duration: 2,
    ref: sevenRef,
    startOnMount: false,
  });
  const { countUp: fundedCount, start: startFunded } = useCountUp({
    start: 0,
    end: 30,
    duration: 2,
    ref: fundedRef,
    startOnMount: false,
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTopIndicator = indicatorRef?.current?.offsetTop;
      const offsetTopCountries = countriesRef?.current?.offsetTop;
      const offsetTwenty = tewntyCount?.current?.offsetTop;
      const offsetSeven = sevenCount?.current?.offsetTop;
      const offsetFunded = fundedCount?.current?.offsetTop;
      const sectionHeight = window.innerHeight;

      if (
        scrollTop > offsetTopIndicator - sectionHeight &&
        scrollTop < offsetTopIndicator
      ) {
        setIsVisible(true);
      } else if (
        scrollTop > offsetTopCountries - sectionHeight &&
        scrollTop < offsetTopCountries
      ) {
        setIsVisible(true);
      } else if (
        scrollTop > offsetTwenty - sectionHeight &&
        scrollTop < offsetTwenty
      ) {
        setIsVisible(true);
      }
       else if (
        scrollTop > offsetFunded - sectionHeight &&
        scrollTop < offsetFunded
      ) {
        setIsVisible(true);
      }
      else if (
        scrollTop > offsetSeven - sectionHeight &&
        scrollTop < offsetSeven
      ) {
        setIsVisible(true);
      }
      else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startIndicator();
      startCountries();
      startTwenty();
      startSeven()
      startFunded()
    }
  }, [isVisible, startIndicator, startCountries, startTwenty,startSeven,startFunded]);

  return (
    <Layout>
      <div className="max-w-[1200px] grid mx-auto grid-cols-1 md:grid-cols-2 px-2 mt-16 p-10 gap-y-5  lg:py-20">
        <div className="w-full gap-5 flex flex-col justify-center ">
          <h1 className="text-2xl lg:text-5xl font-bold text-white p-0 m-0">
            We focus your freedom,
            <br />
            Keep your dream alive
          </h1>
          <p className="text-lg font-normal text-white/60 ">{`Our HFT-prop firm is unique: we're the only one offering a challenge refund fee on your second payout, with the first payout guaranteed within 14 days.`}</p>

          <div className="flex items-center gap-2 lg:gap-5 text-[16px] font-semibold">
            <Link
              href="/buy-challenges"
              className="flex items-center justify-center px-[12px] py-[10px] gap-2  bg-primary rounded-[30px]"
            >
              <Arrow />
              Buy Challenges
            </Link>
            <a
              className="flex items-center justify-center px-[12px] py-[10px] gap-2  bg-primary rounded-[30px]"
              href="https://t.me/freedomelitefunding"
              target="_blank"
            >
              <Telegram />
              Telegram
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end items-start">
          <Image
            src="/images/dashboard.png"
            width={0}
            height={0}
            alt="hero-image"
            unoptimized
            priority
            quality={100}
            className="w-full md:w-11/12 aspect-[531/332]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-1 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2  ">
          <div className="md:border-r-[1px]  border-primary p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white  text-lg md:text-3xl font-semibold">
              <div ref={indicatorRef}>{indicatorCount} </div>
              </h1>
              <p className="text-[#9C9C9C] md:text-sm lg:text-lg text-nowrap font-normal">
                Free custom indicator
              </p>
            </div>
          </div>
          <div className="md:border-r-[1px]  border-primary  p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white  text-lg md:text-3xl font-semibold">
              <span ref={countriesRef}>{countriesCount}</span>+
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
                <span ref={twentyRef}>{tewntyCount}</span> / <span ref={sevenRef}>{sevenCount}</span>
              </h1>
              <p className="text-[#9C9C9C]  tex md:text-sm lg:text-lg font-normal">
                24/7 funded customer support
              </p>
            </div>
          </div>
          <div className="md:border-l-[1px]  border-primary p-4 md:pr-4 w-full md:w-1/2">
            <div className="m-4 md:text-left text-center">
              <h1 className="text-white text-lg md:text-3xl font-semibold">
                <span ref={fundedRef}>{fundedCount}</span><span>M</span> +
              </h1>
              <p className="text-[#9C9C9C] md:text-sm lg:text-lg font-normal">
                Total funded Allocation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-20 px-2 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10">
          <div className="flex items-start justify-center h-full">
            <div className=" p-[2px] rounded-[25px] border-tb-g h-full">
              <div className="rounded-[25px]  justify-center items-start">
                <div className="lg:w-full w-[294px] flex flex-col-reverse justify-center items-center">
                  <Image
                    className="  w-[116px] h-[102px] "
                    src="/images/Group-1.png"
                    alt=""
                    width={0}
                    height={0}
                  />
                  <div className="w-full px-2">
                    <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                      <span className="text-primary">
                        Refund 
                        Challenge
                      </span> <br />
                      Fees on Your Second Payout
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center h-full">
            <div className=" p-[2px] rounded-[25px] border-bt-g h-full">
              <div className="rounded-[25px]  justify-center items-start">
                <div className="lg:w-full w-[294px] flex flex-col justify-start items-center gap-5">
                  <Image
                    className="  w-[116px] h-[102px] "
                    src="/images/Group-2.png"
                    alt=""
                    width={0}
                    height={0}
                  />
                  <div className="w-full px-2">
                    <h2 className="text-white text-center text-[24px] md:text-[28px] font-semibold">
                      Guaranteed Payout Within 14days
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center h-full">
            <div className=" p-[2px] rounded-[25px] border-tb-g h-full">
              <div className="rounded-[25px]  justify-center items-start">
                <div className="lg:w-full w-[294px] flex flex-col-reverse justify-center items-center gap-5">
                  <Image
                    className="  w-[116px] h-[102px] "
                    src="/images/Group-3.png"
                    alt=""
                    width={0}
                    height={0}
                  />
                  <div className="w-full px-2">
                    <h2 className="text-white text-[24px] text-center md:text-[28px] font-semibold">
                      <span className="text-primary"> HFT </span> AND
                      <span className="text-primary"> EA </span> ALLOWED
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center h-full">
            <div className=" p-[2px] rounded-[25px] border-bt-g h-full">
              <div className="rounded-[25px]  justify-center items-start">
                <div className="lg:w-full w-[294px] flex flex-col justify-start items-center gap-5">
                  <Image
                    className="  w-[116px] h-[102px] "
                    src="/images/Group-4.png"
                    alt=""
                    width={0}
                    height={0}
                  />
                  <div className="w-full px-2">
                    <h2 className="text-white text-center text-[24px] md:text-[28px] font-semibold">
                      Enjoy Zero Brokerage Fees on Forex and Indices Trading
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurChallenges />
      <WhatPeopleSay />
      <div className="max-w-[1200px]  mx-auto  flex flex-col md:flex-row justify-between items-center gap-10 mb-10 px-2 relative overflow-hidden lg:py-8 xl:py-10">
        <div className=" space-y-4 w-fit md:w-1/2  text-center md:text-left">
          <span className="text-lg text-white/60 font-medium ">
            The Platform we use.
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-white text-transparent bg-clip-text">
            MetaTrader 4 <br /> Trusted and Reliable
          </h2>
          <div className=" flex justify-center items-center gap-4">
            <Image width={20} height={20} src="/images/Vector-new.png" alt="mark" />
            <p className="text-white text-sm text-left lg:text-base font-medium ">
              Get a superior trading edge by utilizing a familiar platform. It
              offers intuitive features that empower swift decision-making.
            </p>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <Image width={20} height={20} src="/images/Vector-new.png" alt="mark" />
            <p className="text-white text-sm text-left lg:text-base font-medium ">
              Exclusive access to a renowned and trusted platform reserved for
              select firms..
            </p>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <Image width={20} height={20} src="/images/Vector-new.png" alt="mark" />
            <p className="text-white text-sm text-left lg:text-base font-medium ">
              Seize opportunities with speed and precision on this intuitive and
              user-friendly platform designed to facilitate swift action.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            width={0}
            height={0}
            src="/images/mobile.png"
            alt=""
            className="w-full scale-150 "
          />
        </div>
      </div>
      <EightCap/>
      <JoinTelegram />
    </Layout>
  );
}
