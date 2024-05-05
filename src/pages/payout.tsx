import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

export default function payout() {
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto px-2 flex flex-col items-center justify-center ">
        <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-2 mt-[78px]">
          Payout Collection
        </h2>
    
        <p className="lg:text-lg font-medium text-white/60 text-center">
          {`Join the winning team of traders who have received certified payouts.`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-12 ">
          {Array.from({ length: 9 })?.map((_, index) => (
            <Image
              key={index}
              src={`/images/card-${index + 1}.png`}
              alt=""
              unoptimized
              width={0}
              height={0}
              className="w-full aspect-square"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
