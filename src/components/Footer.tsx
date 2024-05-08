import Link from "next/link";
import { Facebook, Instagram, TikTok, Twitter } from "../svgs/faq";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-[#000000] px-2">
      <div className="max-w-[1200px] mx-auto pt-16 ">
        <div className="py-5">
          <div className="flex flex-col gap-10 md:gap-5 lg:flex-row justify-between lg:items-center text-white ">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  className="object-cover"
                  src="/images/logo.png"
                  width={244} height={35}
                  unoptimized
                  alt=""
                />
              </Link>
            </div>
            <div className="">
              <ul className="flex flex-row gap-5 flex-wrap">
                <li>
                  <Link className="text-white" href="/buy-challenges">
                    <span>Buy Challenges</span>
                  </Link>
                </li>
                <li>
                  <Link
                    aria-current="page"
                    className="text-white active"
                    href="/faq"
                  >
                    <span>Faq</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white" href="/payout">
                    <span>Payout</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white" href="/about">
                    <span>Our Team</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white" href="#">
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white" href="/contact-us">
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>
        <div>
          <p className=" text-[#BCBCBC] text-sm lg:text-base py-5 lg:py-10">
            {`All information published and distributed by Freedom Funding, a corporation based in the Cayman Islands and its affiliates (collectively referred to as the "Company"), is intended solely as general information. None of the content provided by the Company is meant to be construed as Investment advice, nor does it constitute an offer or solicitation to buy or sell securities, companies, or funds. The use of information found on Freedom Elite's websites carries inherent risks, and individuals assume full responsibility for any use or misuse thereof. Freedom Elite bears no responsibility or liability for such usage. Furthermore, the content herein does not constitute a solicitation or offer to trade futures, options, or foreign exchange (fx), Past performance does not guarantee future results. It's important to note that hypothetical or simulated performance results have inherent limitations. Unlike actual trading records, simulated results do not reflect real trading activities. Additionally, because simulated trades are not executed, results may over or undercompensate for certain market factors such as liquidity. Simulated trading programs are also designed with the benefit of hindsight, which may impact their accuracy. Freedom Elite makes no representation that any trading account will achieve similar profits or losses as those illustrated.`}
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between text-white text-sm md:text-base xl:text-lg items-center py-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <a href="#">
              <h2 className=" underline underline-offset-4">
                <span className="cursor-pointer">Terms &amp; Conditions</span>
              </h2>
            </a>
            <a href="#">
              <h2 className=" underline underline-offset-4 ">
                <span className="cursor-pointer">Privacy Policy</span>
              </h2>
            </a>
            <a href="#">
              <h2 className=" underline underline-offset-4">
                <span className="cursor-pointer">Schedule of Assesssment</span>
              </h2>
            </a>
            <a href="#">
              <h2 className=" underline underline-offset-4  lg:mr-8 ">
                <span className="cursor-pointer">Refund Policy</span>
              </h2>
            </a>
          </div>
          <span>©2024 All Right Reserved, Freedom Elite</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
