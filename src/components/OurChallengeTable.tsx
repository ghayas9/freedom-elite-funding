import { useRouter } from "next/router";
import React, { useState } from "react";

export default function OurChallengeTable({ selected }: { selected: number }) {
  const [sub, setSub] = useState(0);

  const router = useRouter();

  const challenges = [
    {
      name: "Freedom Challenges",
      subTitle:'2 Step - Freedom challenge',
      prices: [
        {
          title: "15,000",
          price: 104,
          id: "0f66b6a0-705a-4ad0-9ada-e0dbe3ac8fb9",
        },
        {
          title: "25,000",
          price: 149,
          id: "2545b075-a88f-4fbf-894f-d82aa79ca0df",
        },
        {
          title: "50,000",
          price: 259,
          id: "4e387751-ab69-40cb-917a-acdbad33f26e",
        },
        {
          title: "100,000",
          price: 469,
          id: "4d11f6c0-7599-4f31-9d7f-44a12c18b1ff",
        },
        {
          title: "200,000",
          price: 779,
          id: "72749b34-d6a4-479c-bbc4-94254beabd23",
        },
        {
          title: "500,000",
          price: 1399,
          id: "98782907-4a54-4598-96f3-e3a5fcc20fdf",
        },
      ],
      phaseHeader: ["phase 1", "phase 2", "funded"],
      phases: [
        {
          maxDailyDrawdown: "5%",
          maxDrawdown: "14%",
          profitTarget: "6%",
          maxTradingDays: "unlimited",
          consistencyRules: "No",
          minTradingDays: 0,
          leverage: "01:50",
          profitSplit: "-",
          refundFees: "-",
        },
        {
          maxDailyDrawdown: "5%",
          maxDrawdown: "14%",
          profitTarget: "6%",
          maxTradingDays: "unlimited",
          consistencyRules: "No",
          minTradingDays: 0,
          leverage: "01:50",
          profitSplit: "-",
          refundFees: "-",
        },
        {
          maxDailyDrawdown: "5%",
          maxDrawdown: "14%",
          profitTarget: "-",
          maxTradingDays: "unlimited",
          consistencyRules: "no",
          minTradingDays: 0,
          leverage: "01:50",
          profitSplit: "upto 95%",
          refundFees: "-",
        },
      ],
    },
    {
      name: "HFT",
      subTitle:'HFT - FAST PASSING',
      prices: [
        {
          title: "15,000",
          price: 159,
          id: "502ec166-f7bf-4dd9-8d92-c84a2b751656",
        },
        {
          title: "25,000",
          price: 269,
          id: "b23a665e-bbf9-4596-b2ef-f7a931f3765f",
        },
        {
          title: "50,000",
          price: 379,
          id: "324d5ef9-77c3-4684-b653-a51be6091882",
        },
        {
          title: "100,000",
          price: 559,
          id: "5ab52b1a-2790-42fc-9f54-763fcc952126",
        },
        {
          title: "200,000",
          price: 949,
          id: "ef7de249-d597-4f4c-92db-1db37c6c39ce",
        },
        {
          title: "500,000",
          price: 2799,
          id: "35f2c6c1-37fd-487f-8140-b4a52bfb0d6b",
        },
      ],
      phaseHeader: ["phase 1", "funded"],
      phases: [
        {
          maxDailyDrawdown: "5%",
          maxDrawdown: "14%",
          profitTarget: "6%",
          maxTradingDays: "unlimited",
          consistencyRules: "yes",
          minTradingDays: 0,
          leverage: "01:50",
          profitSplit: "-",
          refundFees: "-",
        },
        {
          maxDailyDrawdown: "5%",
          maxDrawdown: "14%",
          profitTarget: "-",
          maxTradingDays: "unlimited",
          consistencyRules: "yes",
          minTradingDays: 0,
          leverage: "01:50",
          profitSplit: "upto 95%",
          refundFees: "yes",
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
      <div className=" p-[1px]  rounded-[25px] w-full border-tb-g ">
        <div className="p-[1px]  rounded-[25px] bg-primary-bg-color w-full">
          {/* style="background-image: linear-gradient(rgba(20, 241, 148, 0.2), rgb(23, 23, 23));" */}
          <div className="p-[2px]  rounded-[25px]  justify-center items-center flex w-full">
            <div className="bg-primary-bg-color text-white rounded-[25px] text-center p-2 md:p-10 w-full divide-y divide-primary/60 space-y-5">
              <div className="flex items-center justify-center ">
                <div className="grid gap-4  md:grid-cols-6 md:py-[10px] px-2  md:p-[10px] max-w-[814px] w-full  rounded-full  ">
                  {challenges[selected]?.prices?.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-full sm:py-2   ${
                        sub === index
                          ? "text-black bg-primary"
                          : "text-white bg-white/10"
                      } `}
                      onClick={() => setSub(index)}
                    >
                      ${item?.title}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="w-full">
                  <div className="text-center md:text-left ">
                    <h3 className="text-3xl font-semibold mt-5 mb-3">
                    {challenges[selected]?.subTitle}
                    </h3>
                    <span className="text-4xl text-primary/60 font-semibold ">
                      ${challenges[selected]?.prices[sub]?.title}
                    </span>
                  </div>
                  <div className="w-full overflow-x-auto md:overflow-x-hidden py-10">
                    <div className="min-w-[165%] md:min-w-[100%]">
                      <div className="h-5 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5"></div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          <div className="border-x border-t border-primary/60 w-full rounded-t-2xl"></div>
                          <div className=""></div>
                          {selected === 0 ? (
                            <div className="border-x border-t border-primary/60 w-full rounded-t-2xl"></div>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 "></div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phaseHeader?.map(
                            (item, index) => (
                              <div
                                key={index}
                                className={`capitalize  border-primary/60 flex items-center justify-center ${
                                  index % 2 === 0
                                    ? " border-b border-x"
                                    : "text-white"
                                }`}
                              >
                                {item}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Max Daily Drawdown
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? "border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.maxDailyDrawdown}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Max Drawdown
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.maxDrawdown}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Profit Target
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.profitTarget}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Max Trading Days
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.maxTradingDays}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Consistency Rule
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.consistencyRules}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Min Trading Days
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.minTradingDays}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Leverage
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.leverage}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Profit Split
                        </div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          {challenges[selected]?.phases?.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-center ${
                                index % 2 === 0
                                  ? " border-x border-primary/60"
                                  : ""
                              }`}
                            >
                              {item?.profitSplit}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-5 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5"></div>
                        <div
                          className={
                            " grid  w-3/5 md:w-2/3 lg:w-3/5 " +
                            (selected ? "grid-cols-2" : "grid-cols-3")
                          }
                        >
                          <div className="border-x border-b border-primary/60 w-full rounded-b-2xl"></div>
                          <div className=""></div>
                          {selected === 0 ? (
                            <div className="border-x border-b border-primary/60 w-full rounded-b-2xl"></div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-10">
                    <button
                      type="button"
                      className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black  bg-primary "
                      onClick={() => {
                        router?.push(
                          `checkout/${challenges[selected]?.prices[sub]?.id}`
                        );
                      }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 font-medium"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                      </svg>
                      Buy Challenge - {challenges[selected]?.prices[sub]?.price}
                      $
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
