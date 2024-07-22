import Image from "next/image";
import { useRouter } from "next/router";

const EightCap = () => {
  const router = useRouter();
  return (
    <div className="max-w-[1200px] mx-auto flex  justify-between items-center gap-x-16 px-2">
      <div className=" w-full  flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="relative w-full lg:w-3/4 h-[250px] border-primary/60  border rounded-lg">
            <Image
              src="/images/eightcap.jpg"
              alt="Eightcap"
                width={250}
                height={130}
                objectFit="cover"
              
            />
            <div className=" px-6 justify-start items-start flex flex-col text-white rounded-lg">
              <p className="font-medium text-sm mb-2 mt-1">
                Certified Challenges with Taurex
              </p>
              <p className="text-[8px] text-gray-500 mt-2 w-[95%]">
                The Challenges offered by Freedom Funding are Certified
                Challenges with Zenfinex Global Limited. Freedom Funding is
                referred to Zenfinex Global only and Zenfinex Global administers
                the Challenges and handles all payments and payouts. Trading
                platform access for Challenges is facilitated by Zenfinex Global
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right flex flex-col justify-between">
          <span className="text-base lg:text-lg text-white/60 font-medium ">
            The Broker we use..
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">
            Taurex
          </h2>
          <p className="text-white text-sm  text-left md:text-right  md::text-base font-medium">
            Taurex, powered by Zenfinex Global Limited, offers a regulated
            trading environment with swift execution, tight spreads, and more.
            Overseen by the Financial Services Authority (FSA) of Seychelles
            (SD092), Zenfinex Global ensures a secure and reliable trading
            experience for your peace of mind
          </p>
          <div className=" flex justify-start items-start md:justify-end md:items-end">
            <button
              type="button"
              onClick={() => router.push("/buy-challenges")}
              className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black  bg-primary "
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
              Buy Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightCap;
