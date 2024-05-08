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
      designation:"One of the competitive prop firm is here.." ,
      name:"Rabbi akhmed" ,
      description:
        "Professional website and friendly user. Amazing challenges and very affordablel Profit Consistency rule is very good for all the traders to avoid oevertrade when you are already profit to that month..",
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

      <Link href="#">
        <p className="text-center text-base text-white underline underline-offset-4 mt-4 font-bold">
          Show Latest Reviews
        </p>
      </Link>
    </div>
  );
}
