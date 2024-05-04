import React from "react";
import OurChallengeTable from "./OurChallengeTable";

export default function OurChallenges() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 flex flex-col items-center justify-center">
      <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-2">
        Our Challenges
      </h2>
      <p className="lg:text-lg font-medium text-white/60 text-center md:text-left">
        {`Each of our challenges offer unique benefits: Freedom Challenges - no consistency rule and HFT - quick pass.`}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-[10px] px-2  md:p-[10px]  gap-2 md:gap-10 md:bg-white/10 rounded-lg md:rounded-full mb-10 mt-5">
        <div>
          <div className="text-primary -mb-2 md:mb-1 md:-mt-5 px-2 text-[10px] flex items-center   justify-center">
            <div className=" border border-primary rounded-full px-2 text-[10px] flex items-center gap-1 justify-center">
              <span>No Consistency Rules</span>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-full sm:py-2  bg-primary text-black "
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
            type="submit"
            className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium   w-full sm:py-2   text-white bg-white/10 md:bg-transparent "
          >
            HFT
          </button>
        </div>
      </div>
      <OurChallengeTable />
    </div>
  );
}
