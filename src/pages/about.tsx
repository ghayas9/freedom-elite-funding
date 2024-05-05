import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

export default function about() {
  const users = [
    {
      designation: "CHIEF EXECUTIVE OFFICER",
      name: "Thomas William",
      image: "/images/team-1.png",
      description:
        "Thomas William, boasting more than seven years of trading expertise, exhibits a profound enthusiasm for financial markets. With an extensive background spanning over five years in the brokerage sector, he has collaborated with prominent brokers within the CFD domain. Furthermore, Thomas has made significant strides in the cryptocurrency mining industry, establishing operational facilities and offering smart contract loans. This strategic approach has bolstered liquidity and provided essential capital for various blockchain enterprises.",
    },
    {
      designation: "CHIEF FINANCIAL OFFICER",
      name: "Oliver Belle",
      image: "/images/team-2.png",
      description:
        "Our CFO, Oliver Belle, brings to the table over two decades of comprehensive expertise in finance, accounting, and investment. With a distinguished career as a proficient CFD trader across proprietary firms and brokerages, Oliver has consistently earned acclaim on various leaderboards. His deep understanding of risk management proves invaluable at Sure Leverage Funding, where he spearheads capital management initiatives and strategic investment allocations, playing a pivotal role in our firm's success",
    },
    {
      designation: "HEAD OF PUBLIC RELATIONS",
      name: "John Jacob",
      image: "/images/team-3.png",
      description:
        "John Jacob, our Head of Public Relations, acts as the eloquent spokesperson for a significant portion of our content. He maintains a steadfast dedication to staying abreast of trading practices and trends. His main objective revolves around establishing rapport with individual traders, nurturing confidence, and encouraging interaction within our community.",
    },
    {
      designation: "CHIEF MARKETING OFFICER",
      name: "Grace Marie",
      image: "/images/team-4.png",
      description:
        "Grace Marie, our Chief Marketing Officer, is the mastermind behind our content creation. With extensive expertise in the social media realm, she brings valuable insights and innovation to our marketing strategies. Known for her unparalleled work ethic, Grace tirelessly manages relationships with affiliates and ensures seamless collaboration with our company. She infuses Sure Leverage Funding with creativity, employing her artistic flair to craft captivating social graphics and manage all aspects of marketing, from editing to execution.",
    },
  ];
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto px-2 flex flex-col items-center justify-center ">
        <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-2 mt-[78px]">
          About Us
        </h2>

        <p className="lg:text-lg font-medium text-white/60 text-center">
          {`Meet our leadership team, each proficient in essential domains. Feel `}
          <br />
          {`confident knowing you're in capable hands with seasoned experts. `}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto pb-12">
        {users?.map((item, index) => (
          <div
            key={index}
            className={`pt-16 sm:pt-36  overflow-hidden px-1  ${
              index % 2 == 1 ? "flex flex-col items-end" : ""
            } `}
          >
            <div className="!relative lg:w-5/6 rounded-xl  about-border-all lg:min-h-[340px]  md:p-5 pt-24 pb-5 px-2">
              <div
                className={`w-full ${
                  index % 2 == 1 ? "text-right flex flex-col items-end" : ""
                }`}
              >
                <h2 className="text-[#9F9F9F] md:font-medium md:text-base mb-5">
                  {item?.designation}
                </h2>
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  {item?.name}
                </span>
                <p className="text-[#9F9F9F] md:text-base md:font-medium mt-6 lg:max-w-[580px]">
                  {item?.description}
                </p>
              </div>
              <div
                className={`absolute w-56 p-[68px]  -top-24  sm:w-96 lg:w-[450px] !aspect-square  sm:-top-48  lg:-top-[70px] ${
                  index % 2 == 1
                    ? "-left-10 sm:-left-0 md:-left-16 lg:-left-60 "
                    : "-right-10 sm:-right-0 md:-right-16 lg:-right-60"
                } `}
              >
                <Image
                  className={` w-full aspect-square `}
                  src={item?.image}
                  alt="team image "
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
