import Image from "next/image";

const FooterCheckout = () => {
  return (
    <div className="max-w-[1200px] pb-5 mx-auto">
      <div className="border-customYellow border rounded-2xl w-full p-6">
        <Image src="/images/logo.png" alt="logo" width={244} height={35} />
        <div className="flex justify-between mt-4">
          <div className="w-1/4 flex flex-col">
            <p className="text-gray-700">
              Freedom Elite Funding stands as a testament to the convergence of
              cutting-edge technologies. By harmonizing Ethereum Virtual Machine
              (EVM) compatibility with the Cosmos SDK, we offer a platform.
            </p>
            <div className="flex mt-2 gap-4">
              <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/linkedin.png"
                  alt=""
                  width={30}
                  height={30}
                />
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
                <Image
                  src="/images/twitter.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </span>
              <span className="w-9 aspect-square rounded-lg bg-[#FAFF00] flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/facebook.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          <div className="w-1/4  flex flex-col items-center">
            <p className="text-white text-center">Company</p>
            <div className=" flex flex-col items-start">
              <p className="text-gray-700 py-[2px]  mt-4 text-sm">Challenges</p>
              <p className="text-gray-700 py-[2px] flex text-sm">FAQs</p>
              <p className="text-gray-700  py-[2px] text-sm">Affiliates</p>
              <p className="text-gray-700  py-[2px] text-sm">Contact Us</p>
            </div>
          </div>
          <div className="w-1/4  flex flex-col items-center">
            <p className="text-white text-center">Resources</p>
            <div className=" flex flex-col items-start">
              <p className="text-gray-700 py-[2px]  mt-4 text-sm">
                Documentation
              </p>
              <p className="text-gray-700 py-[2px] flex text-sm">
                For Developers
              </p>
              <p className="text-gray-700  py-[2px] text-sm">Whitepaper</p>
              <p className="text-gray-700  py-[2px] text-sm">Github</p>
            </div>
          </div>
          <div className="w-1/4  flex flex-col items-center">
            <p className="text-white text-center">Legal</p>
            <div className=" flex flex-col items-start">
              <p className="text-gray-700 py-[2px]  mt-4 text-sm">
                Privacy Policy
              </p>
              <p className="text-gray-700 py-[2px] flex text-sm">
                Terms of Use
              </p>
            </div>
          </div>
        </div>
        <div className="border-b opacity-50 w-full border-customYellow mt-5"></div>
        <div className="flex w-full justify-between mt-4">
          <p className="text-gray-700 text-sm">
            Copyright @2024 Freedom Elite Funding
          </p>
          <p className="text-gray-700 text-sm">Privacy - Trams - startup</p>
        </div>
      </div>
    </div>
  );
};
export default FooterCheckout;
