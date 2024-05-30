import Image from "next/image";
import React from "react";

export default function Review({ name, designation, description }: any) {
  return (
    <div className="mr-10 sm:flex flex-col w-[300px] h-[390px] md:w-[450px] md:h-[300px] px-3 py-8 bg-[#2E2E2E] backdrop-blur-[6.150000095367432px] rounded-[25px] border border-white border-opacity-10">
      <div className="divide-y divide-primary">
        <div className="justify-between items-start flex mb-4">
          <h2 className="text-slate-50 text-lg font-bold max-w-1/2 text-wrap ">{name}</h2>
          <div className="flex gap-x-2 !min-w-28">
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
        {designation}
      </div>
      <div className="text-stone-300 text-base">{description}</div>
    </div>
  );
}
