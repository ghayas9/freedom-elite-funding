import Link from "next/link";
import React from "react";

export default function WhatPeopleSay() {
  return (
    <div className=" pb-8 md:pb-4 px-2">
      <h2 className=" bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-center text-xl sm:text-5xl font-bold mb-8">
        <span className="text-white/60 text-lg">Testimonials</span> <br />
        What People Say?
      </h2>
      <Link href="#">
        <p className="text-center text-base text-white underline underline-offset-4 mt-4 font-bold">
          Show Latest Reviews
        </p>
      </Link>
    </div>
  );
}
