import { useEffect, useState } from "react";
import { ArrowIcon } from "@/svgs/faq";
import Image from "next/image";
import Layout from "@/components/Layout";
import Faq from "@/data/faq";
import { useRouter } from "next/router";

interface Faqs {
  question: string;
  answer: string;
}

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<Faqs[]>([]);

  useEffect(() => {
    setData(Faq({ key: router?.query?.tab?.toString() || "" }));
  }, [router?.query?.tab]);

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id: any) => {
    console.log(id);
    setOpenId(openId === id ? null : id);
  };

  const tabs = [
    {
      name: "Rules",
      key: "rules",
    },
    {
      name: "Promotions & Fees",
      key: "promotion",
    },
    {
      name: "Challenge Details",
      key: "challenge",
    },
    {
      name: "Freedom Challenge Rules",
      key: "freedom",
    },
    {
      name: "HFT",
      key: "hft",
    },
  ];

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto relative">
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
          <div className="flex absolute right-0 top-10">
            <Image
              src="/images/faqImage.png"
              alt=""
              width={0}
              height={0}
              className="w-[260px] "
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-wrap justify-center py-[10px] px-2 md:p-[10px] w-fit gap-2 xl:gap-6 sm:bg-white/10 rounded-full mb-2 mt-12">
            {tabs?.slice(0, 3)?.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => router.push(`/faq?tab=${item?.key}`)}
                className={`flex justify-center items-center rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium w-fit    ${
                  router?.query?.tab == item?.key ||
                  (index === 0 && !router?.query?.tab)
                    ? "bg-primary text-black"
                    : "bg-white/10 text-white"
                } `}
              >
                {item?.name}
              </button>
            ))}

            {/* <button
              type="submit"
              className="flex justify-center items-center rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-fit  text-white bg-white/10  "
            >
              Promotions & Fees
            </button>
            <button
              type="submit"
              className="flex justify-center items-center  rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium  w-fit  text-white bg-white/10  "
            >
              Challenge Details
            </button> */}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center py-[10px] px-2 md:p-[10px] w-fit gap-2 xl:gap-6 sm:bg-white/10 rounded-full mb-2 mt-4">
            {tabs?.slice(3)?.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => router.push(`/faq?tab=${item?.key}`)}
                className={`flex justify-center items-center rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium w-fit    ${
                  router?.query?.tab == item?.key
                    ? "bg-primary text-black"
                    : "bg-white/10 text-white"
                } `}
              >
                {item?.name}
              </button>
            ))}
            {/* <button
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
            </button> */}
          </div>
        </div>
        <div className="p-[1px] rounded-lg w-full">
          {data.map((faq, index) => (
            <div
              key={index}
              className="p-[1px] rounded-lg justify-center my-5 items-center flex w-full  border-tb-g"
            >
              <div className="rounded-lg justify-center items-start flex w-full">
                <div className="w-full">
                  <div
                    className="w-full flex border border-white/5 rounded-lg justify-between items-center  text-white px-4 py-2 backdrop-blur-lg shadow-xl bg-gradient-to-r from-primary/20 to-black/60"
                    onClick={() => handleToggle(index)}
                  >
                    <p className="text-xl">{faq.question}</p>
                    <ArrowIcon />
                  </div>
                  <div
                    className={`w-full flex flex-col border justify-start border-white/5 rounded-lg border-white bg-opacity-60 text-white px-4 py-2 backdrop-blur-lg shadow-xl transition-all duration-1000 ease-in-out  ${
                      openId === index ? "" : "hidden"
                    }`}
                  >
                    <div className="p-5">{faq.answer}</div>
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
