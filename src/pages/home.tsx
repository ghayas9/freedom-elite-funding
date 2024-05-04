import Image from "next/image";
import Link from "next/link";
import React from "react";

// style="background-image: url(&quot;/assets/Ellipse%201-DJ8XrYQt.png&quot;); background-size: 1800px 1200px;"
export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[#171717] relative -z-20">
      <div className="absolute w-[350px] aspect-square left-1/2 -translate-x-1/2 bg-[#FFE500] rounded-full -top-[250px] blur-[240px] -z-10 " />
      <div className="max-w-[1200px] mx-auto flex justify-between items-center text-white py-2 px-2 lg:py-4 bg-transparent">
        <div className=" w-1/2 lg:w-fit">
          <Link href="/">
            <Image
                className="w-[120px] h-[27px] md:w-[180px] md:h-[41px]"
              src="/images/logo.png"
              alt="sure-leverage"
              width={0}
              height={0}
            />
          </Link>
        </div>
        <div className="lg:hidden flex justify-end  w-1/2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path>
          </svg>
        </div>
        <div className="">
          {/* <ul className="flex flex-col gap-5 lg:gap-5 lg:flex-row absolute lg:static transition-all duration-700 ease-in mt-12 lg:mt-0 pt-2  px-2 pb-5 lg:pb-0 left-[-1000px] w-full">
            <li>
              <a className="text-white" href="/buyChallenges">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="text-white" href="/faq">
                <span>Buy Challenge</span>
              </a>
            </li>
            <li>
              <a className="text-white" href="/payouts">
                <span>FAQ</span>
              </a>
            </li>
            <li>
              <a className="text-white" href="/about-us">
                <span>Payout</span>
              </a>
            </li>
            <li>
              <a className="text-white" href="/blog">
                <span>About us</span>
              </a>
            </li>
            <li>
              <a className="text-white" href="/contact">
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a
                type="submit"
                className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black bg-white lg:hidden "
                href="https://trader.sureleveragefunding.com/my-account/"
              >
                Login
              </a>
            </li>
          </ul> */}
        </div>
        {/* <a
          type="submit"
          className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black bg-white hidden lg:block "
          href="https://trader.sureleveragefunding.com/my-account/"
        >
          Login
        </a> */}
      </div>
      {/* style="background-image: url(&quot;/assets/bg-TdFhhKLf.png&quot;); background-size: 800px 650px;" */}
      <div className="max-w-[1200px] mx-auto  flex flex-col md:flex-row justify-between items-center gap-10 p-10 md:py-16 lg:py-32 px-2 bg-no-repeat bg-right-top">
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-normal">
            {/* Minimise Risk, <br />
            <span className="text-[#14F194]">Free Reset.</span> */}
            We focus your freedom,
            <br />
            Keep your dream alive
          </h2>
          <p className="lg:text-lg my-3 lg:my-6 font-medium  text-white/60">
            The only prop firm offering a free funded reset upon failure, with
            the added benefit of keeping up to 100% of your profits.
          </p>
          <div className="flex items-center gap-5">
            {/* style="background-color: rgb(20, 241, 148);" */}
            <a
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black text-nowrap "
              href="/buyChallenges"
            >
              Buy Challenges
            </a>
            <a
              type="submit"
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black bg-white "
              href="https://discord.com/invite/EfAkCKM6Qv"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="w-5 h-5 font-medium"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
              </svg>
              Discord
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className="md:w-[480px] md:h-[345] lg:w-[600px] lg:h-[400px]"
            src="/images/dashboard.png"
            alt="bannerImage"
            height={0}
            width={0}
          />
        </div>
        {/* <div className="lg:hidden">
          <img src="/assets/DashboardMobile-DKd31Y0o.png" alt="bannerImage" />
        </div> */}
      </div>
    </div>
  );
}
