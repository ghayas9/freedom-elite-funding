import Image from 'next/image'
import React from 'react'

export default function test() {
  return (
    <div className="max-w-[1200px] mx-auto py-20 px-2 mt-10 lg:mt-0">
        <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-5">
          <div className="flex items-center justify-center ">
            {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
            <div
              className=" p-[2px]  rounded-[25px] border-tb-g "
              // style={{
              //   backgroundImage:
              //     "linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23))",
              // }}
            >
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                {/* style="background-image: linear-gradient(rgba(20, 241, 148, 0.2), rgb(23, 23, 23));" */}
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex ">
                    <div className="xl:w-[271px] xl:h-[283px] lg:w-[200px] lg:h-[240px] w-[294px] pt-[100px] pb-[49px] flex flex-col-reverse justify-start items-center gap-5 ">
                      <Image
                        width={0}
                        height={0}
                        className="mt-[-150px] mb-[28px] w-[116px] h-[102px] "
                        src="https://sureleveragefunding.com/assets/retry-DVBZpuir.png"
                        alt=""
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-[#14F194]">Free Reset</span> in
                          funded stage <br />
                          <span className="text-[#14F194]  "></span>
                        </h2>
                        <p className="text-[#9F9F9F]"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-40 ">
            {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
            <div className="flex items-center justify-center ">
              <div className=" p-[2px]  rounded-[25px] ">
                <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                  <div className="xl:w-[271px] xl:h-[283px] lg:w-[200px] lg:h-[240px] w-[294px] pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5">
                    <Image
                      width={0}
                      height={0}
                      className="mt-[-150px] mb-[28px]  w-[116px] h-[102px] "
                      src="https://sureleveragefunding.com/assets/drawdown-Dqbqbdn3.png"
                      alt=""
                    />
                    <div className="text-center">
                      <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                        Keep up to 100% The Profits You Earn <br />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
            <div className=" p-[2px]  rounded-[25px] ">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                {/* style="background-image: linear-gradient(rgba(20, 241, 148, 0.2), rgb(23, 23, 23));" */}
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="xl:w-[271px] xl:h-[283px] lg:w-[200px] lg:h-[240px] w-[294px] pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 ">
                      <Image
                        width={0}
                        height={0}
                        className="mt-[-150px] mb-[28px] w-[116px] h-[102px] "
                        src="https://sureleveragefunding.com/assets/eaHift-C2NSrWNR.png"
                        alt=""
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-[#14F194]">{`EA's`}</span> And{" "}
                          <br />
                          <span className="text-[#14F194]  ">HFT Allowed</span>
                        </h2>
                        <p className="text-[#9F9F9F]"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-40">
            <div className="flex items-center justify-center ">
              {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
              <div className=" p-[2px]  rounded-[25px] ">
                <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                  <div className="xl:w-[271px] xl:h-[283px] lg:w-[200px] lg:h-[240px] w-[294px] pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5">
                    <Image
                      width={0}
                      height={0}
                      className="mt-[-150px] mb-[28px]  w-[116px] h-[102px] "
                      src="https://sureleveragefunding.com/assets/target-Xg_G68Eg.png"
                      alt=""
                    />
                    <div className="text-center">
                      <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                        Lowest Profit Targets In The Industry <br />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
