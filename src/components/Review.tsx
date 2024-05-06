import Image from "next/image";
import React from "react";

export default function Review() {
  return (
    <div className="mr-10 sm:flex flex-col w-[300px] h-[350px] md:w-[380px] md:h-[300px] px-3 py-8 bg-[#2E2E2E] backdrop-blur-[6.150000095367432px] rounded-[25px] border border-white border-opacity-10">
      <div className="divide-y divide-primary">
        <div className="justify-between items-center flex mb-4">
          <h2 className="text-slate-50 text-lg font-bold">Omor Faruq</h2>
          <div className="flex gap-x-2 ">
            {Array.from({ length: 5 })?.map((_, index) => (
              <Image
                key={index}
                src="/images/Star.png"
                alt=""
                width={15}
                height={15}
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-white text-base font-semibold mt-4 mb-4">
        Trusted and reliable prop firm
      </div>
      <div className="text-stone-300 text-base">
        The absolute draw down system they have is amazing for beginners as it
        gives lots of room for errors. Use this prop firm when first trying to
        pass and get used to beating these challenges.
      </div>
    </div>
  );
}
