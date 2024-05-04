import { useState } from "react";
import { ArrowIcon } from "@/svgs/faq";
import Image from "next/image";
import Layout from "@/components/Layout";
const faqData = [
  {
    id: 1,
    question: "How is drawdown calculated?",
    answer:
      "Daily Drawdown:\n\nThe daily drawdown is calculated as 4% or 5% (depending on the challenge) of your start of day balance. This calculation must include any floating losses, swaps and commission rates. This limit will be reset at midnight as per the server time.\n\nMax Drawdown:\n\nThe max drawdown on the Power Challenge is 10% of your initial account balance. The max drawdown on the Liberty & HFT Challenge is 8% of your initial account balance. It is important to note that the max drawdown limit does not reset like the daily drawdown limit.",
  },
  {
    id: 2,
    question: "How is drawdown calculated?",
    answer:
      "The daily drawdown is calculated as 4% or 5% (depending on the challenge) of your start of day balance",
  },
  {
    id: 3,
    question: "How is drawdown calculated?",
    answer:
      "The daily drawdown is calculated as 4% or 5% (depending on the challenge) of your start of day balance",
  },
];
export default function Home() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id: any) => {
    console.log(id)
    setOpenId(openId === id ? null : id);
  };
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full flex justify-between text-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold mb-[15px] mt-[78px] text-center">
              Frequently Asked Questions
            </h2>
            <p className="lg:text-lg font-medium text-white/60 text-center  md:w-[684px] w-full mb-[84px]">
              Explore Frequently Asked Questions and Get the Answers You Need!
              <br />
            </p>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/images/faqImage.png"
              alt=""
              width={0}
              height={0}
              className="w-[260px] lg:w-[320px] xl:w-[400px]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-wrap justify-center py-[10px] px-2 md:p-[10px] w-fit gap-2 xl:gap-6 md:bg-white/10 rounded-lg xl:rounded-full mb-2 mt-12">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium w-fit  bg-white/10 text-white "
            >
              Rules
            </button>
            <button
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-fit  text-white bg-white/10  "
            >
              Promotions & Fees
            </button>
            <button
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-fit  text-white bg-white/10  "
            >
              Challenge Details
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center py-[10px] px-2 md:p-[10px] w-fit gap-2 xl:gap-6 md:bg-white/10 rounded-lg xl:rounded-full mb-2 mt-4">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium w-fit  bg-white/10 text-white "
            >
              Freedom Challenge Rules
            </button>
            <button
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-fit  text-white bg-white/10  "
            >
              HFT
            </button>
          </div>
        </div>
        <div className="p-[1px] rounded-lg bg-primary-bg-color w-full">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="p-[1px] rounded-lg justify-center my-5 items-center flex w-full bg-gradient-1"
            >
              <div className="rounded-lg justify-center items-start flex bg-primary-bg-color w-full">
                <div className="w-full">
                  <div
                    className="w-full flex border border-white/5 rounded-lg justify-between items-center  bg-gradient-4 text-white px-4 py-2 backdrop-blur-lg shadow-xl"
                    // style={{
                    //   background:
                    //     "linear-gradient(#000, #000)",
                    // }}
                    onClick={() => handleToggle(faq?.id)}
                  >
                    <p className="text-xl">{faq.question}</p>
                    <ArrowIcon />
                  </div>
                  <div
                    className={`w-full flex flex-col border justify-start border-white/5 rounded-lg border-white bg-opacity-60 text-white px-4 py-2 backdrop-blur-lg shadow-xl ${
                      openId === faq.id ? "" : "hidden"
                    }`}
                  >
                    <div className="p-5">{faq.answer}</div>
                    <p>
                      <a className="text-sm text-green-400"></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
