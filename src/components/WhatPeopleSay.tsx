import Link from "next/link";
import React from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";

export default function WhatPeopleSay() {
  const data = [
    {
      designation: "Trusted and reliable prop firm",
      name: "Omor Faruq",
      description:
        "The absolute draw down system they have is amazing for beginners as it gives lots of room for errors. Use this prop firm when first trying to pass and get used to beating these challenges.",
    },
    {
      designation: "An amazing prop firm that stands out...",
      name: "Jannatul SR",
      description:
        "An Amazing proop that stands out from thw rest. Freedom Elite Funding offers trader friendly DD, No time limit on all their challenge phases which is top notch. And also pochet friendly challenge cost.",
    },
    {
      designation: "One of the competitive prop firm is here..",
      name: "Rabbi akhmed",
      description:
        "Professional website and friendly user. Amazing challenges and very affordablel Profit Consistency rule is very good for all the traders to avoid oevertrade when you are already profit to that month..",
    },
    {
      designation: "Affordable price - I bought with 50% discount",
      name: "Henrylarsen",
      description:
        "Everything is smoother with Freedom elite funding so far. Affordable price, No delay occured for account review after passing phase 1&2, KYC verification and getting my funded account. I didn't had my first withdrawal yet (just got my master account) and great firm!!! Fully recommend",
    },
    {
      designation: "transparent from day one",
      name: "Alexis landers",
      description:
        "Company has been transparent from day one! Even when they lost their meta quotes license the CEO responded literally I messaged him and he responded and then provided us with a few other options other then mt4! I got my payout in 2 days!! Love freedom elite",
    },
    {
      designation: "Quick payout within 24hours",
      name: "Rezik Yusuf",
      description:
        "I got 2 payouts so far, the first took 2-3 days and the 2nd payout took less than one hour which is crazy. I have tried many propfirms and there has always been a catch like slippage or high commissions but with freedom elite i have had zero negative issues so far. This is my honest",
    },
  ];
  return (
    <div className=" pb-8 md:pb-4 px-2">
      <h2 className=" bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-center text-xl sm:text-5xl font-bold mb-8">
        <span className="text-white/60 text-lg">Testimonials</span> <br />
        What People Say?
      </h2>

      <div className="w-full my-12">
        <Marquee>
          {data?.map((item, index) => (
            <Review
              key={index}
              name={item?.name}
              designation={item?.designation}
              description={item?.description}
            />
          ))}
        </Marquee>
      </div>

      {/* <Link href="#">
        <p className="text-center text-base text-white underline underline-offset-4 mt-4 font-bold">
          Show Latest Reviews
        </p>
      </Link> */}
      <div
        className="trustpilot-widget justify-center items-center flex"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="66913400f462e383527992c6"
        data-style-height="52px"
        data-style-width="100%"
      >
        <a
          href="https://www.trustpilot.com/review/freedomelitefunding.com"
          target="_blank"
          rel="noopener"
          className="text-center text-base text-white underline underline-offset-4 mt-4 font-bold w-full"
        >
          Show Latest Reviews
        </a>
      </div>
    </div>
  );
}
