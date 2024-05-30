import Image from "next/image";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const FooterCheckout = () => {
  return (
    <div className="max-w-[1200px] pb-5 mx-auto">
      <div className="border-customYellow border rounded-2xl w-full p-6">
        <Image src="/images/logo.png" alt="logo" width={244} height={35} />
        <div className="flex flex-wrap justify-between mt-4 gap-y-4">
          <div className="w-full lg:w-1/4 flex flex-col order-1">
            <p className="text-white/50">
              Freedom Elite Funding stands as a testament to the convergence of
              cutting-edge technologies. By harmonizing Ethereum Virtual Machine
              (EVM) compatibility with the Cosmos SDK, we offer a platform.
            </p>
            <div className="lg:grid grid-cols-4 mt-2 gap-12 lg:gap-2 hidden ">
              <a
                href="https://t.me/freedomelitefunding"
                target="_blank"
                className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer"
              >
                <FaTelegramPlane className="text-xl text-gray-900" />
              </a>
              <a
                href="https://www.instagram.com/freedomelitefunding?igsh=ejJ5cWc3OTBncjV6
                "
                target="_blank"
                className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer"
              >
                <FaInstagram className="text-xl text-gray-900" />
              </a>

              {/* <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/twitter.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </span> */}
              {/* <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/facebook.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </span> */}
            </div>
          </div>
          <div className="w-1/2 lg:w-1/4  flex flex-col items-start md:items-center order-3">
            <p className="text-white text-center">Company</p>
            <div className=" flex flex-col items-start">
              <p className="text-white/50 py-[2px]  mt-4 text-sm">Challenges</p>
              <p className="text-white/50 py-[2px] flex text-sm">FAQs</p>
              <p className="text-white/50  py-[2px] text-sm">Affiliates</p>
              <p className="text-white/50  py-[2px] text-sm">Contact Us</p>
            </div>
          </div>
          <div className="w-1/2 lg:w-1/4  flex flex-col items-center order-4">
            <p className="text-white text-center">Resources</p>
            <div className=" flex flex-col items-start">
              <p className="text-white/50 py-[2px]  mt-4 text-sm">
                Documentation
              </p>
              <p className="text-white/50 py-[2px] flex text-sm">
                For Developers
              </p>
              <p className="text-white/50  py-[2px] text-sm">Whitepaper</p>
              <p className="text-white/50  py-[2px] text-sm">Github</p>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-2 gap-12 lg:gap-2 order-6 lg:hidden">
            <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
              <Image src="/images/linkedin.png" alt="" width={30} height={30} />
            </span>
            <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
              <Image
                src="/images/instagram.png"
                alt="instagram"
                width={30}
                height={30}
              />
            </span>
            <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
              <Image src="/images/twitter.png" alt="" width={30} height={30} />
            </span>
            <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
              <Image src="/images/facebook.png" alt="" width={30} height={30} />
            </span>
          </div>
          <div className="w-full lg:w-1/4  flex flex-col items-center order-5">
            <p className="text-white text-center">Legal</p>
            <div className=" flex flex-col items-center lg:items-start">
              <p className="text-white/50 py-[2px]  mt-4 text-sm">
                Privacy Policy
              </p>
              <p className="text-white/50 py-[2px] flex text-sm">
                Terms of Use
              </p>
            </div>
          </div>
        </div>
        <div className="border-b opacity-50 w-full border-customYellow mt-5"></div>
        <div className="flex w-full justify-between mt-4">
          <p className="text-white/50 text-sm">
            Copyright @2024 Freedom Elite Funding
          </p>
          <p className="text-white/50 text-sm">Privacy - Trams - startup</p>
        </div>
      </div>
    </div>
  );
};
export default FooterCheckout;
