import React, { useState } from "react";

export default function OurChallengeTable() {
  const [selected, setSelected] = useState("$10,000");
  const data = [
    {
      price: "$10,000",
    },
    {
      price: "$25,000",
    },
    {
      price: "$50,000",
    },
    {
      price: "$100,000",
    },
    {
      price: "$200,000",
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
                <div className="grid gap-4  md:grid-cols-5 md:py-[10px] px-2  md:p-[10px] max-w-[814px] w-full  rounded-full  ">
                  {data?.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-full sm:py-2   ${
                        selected === item?.price
                          ? "text-black bg-primary"
                          : "text-white bg-white/10"
                      } `}
                      onClick={() =>setSelected(item.price)}
                    >
                      $10,000
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="w-full">
                  <div className="text-center md:text-left ">
                    <h3 className="text-3xl font-semibold mt-5 mb-3">
                      2 Step - Power Challenge
                    </h3>
                    <span className="text-4xl text-primary/60 font-semibold ">
                      {selected}
                    </span>
                  </div>
                  <div className="w-full overflow-x-auto md:overflow-x-hidden py-10">
                    <div className="min-w-[165%] md:min-w-[100%]">
                      <div className="h-5 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5"></div>
                        <div className=" grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5 ">
                          <div className="border-x border-t border-primary/60 w-full rounded-t-2xl"></div>
                          <div className=""></div>
                          <div className="border-x border-t border-primary/60 w-full rounded-t-2xl"></div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 "></div>
                        <div className=" grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5 ">
                          <div className="border-x border-b border-primary/60 flex items-center justify-center">
                            Phase 1
                          </div>
                          <div className=" flex items-center justify-center">
                            Phase 2
                          </div>
                          <div className="border-x border-b border-primary/60 flex items-center justify-center">
                            Funded
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Max Daily Drawdown
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60 ">
                            5%
                          </div>
                          <div className="flex items-center justify-center">
                            5%
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            5%
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Max Drawdown
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            10%
                          </div>
                          <div className="flex items-center justify-center">
                            10%
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            10%
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Profit Target
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            10%
                          </div>
                          <div className="flex items-center justify-center">
                            5%
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            -
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Max Trading Days
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            Unlimited
                          </div>
                          <div className="flex items-center justify-center">
                            Unlimited
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            -
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Consistency Rule
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            No
                          </div>
                          <div className="flex items-center justify-center">
                            No
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            Yes
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Min Trading Days
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            5
                          </div>
                          <div className="flex items-center justify-center">
                            5
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            5
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Leverage
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            1:50
                          </div>
                          <div className="flex items-center justify-center">
                            1:50
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            1:50
                          </div>
                        </div>
                      </div>
                      <div className="min-h-12 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                          Profit Split
                        </div>
                        <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                          <div className="flex items-center justify-center border-x border-primary/60">
                            -
                          </div>
                          <div className="flex items-center justify-center">
                            -
                          </div>
                          <div className="flex items-center justify-center border-x border-primary/60">
                            Up to 100%
                          </div>
                        </div>
                      </div>
                      <div className="h-5 flex">
                        <div className="w-2/5 md:w-1/3 lg:w-2/5"></div>
                        <div className=" grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5 ">
                          <div className="border-x border-b border-primary/60 w-full rounded-b-2xl"></div>
                          <div className=""></div>
                          <div className="border-x border-b border-primary/60 w-full rounded-b-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-10">
                    <a
                      type="submit"
                      className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black  bg-primary "
                      href=""
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
                      Buy Challenge - 104$
                    </a>
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
