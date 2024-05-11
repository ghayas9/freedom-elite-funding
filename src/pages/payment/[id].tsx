import FooterCheckout from "@/components/FooterCheckout";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

export default function Payment() {
  const router = useRouter();
  const [time, setTime] = useState(900);
  const [isCopied, setIsCopied] = useState(0);
  const [showdropdown, setShowDropdown] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: "/images/Tether_Logo.png",
    name: "Tether",
    wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
    icon: "",
  });

  const handleClick = () => {
    setShowDropdown(!showdropdown);
  };

  const handleItemClick = (image: any) => {
    setSelectedImage(image);
    setShowDropdown(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      router.reload();
    }
  }, [time, router]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(index);
        setTimeout(() => setIsCopied(0), 1000);
      })
      .catch((error) => {});
  };

  const dropdown = [
    {
      image: "/images/Tether_Logo1.png",
      name: "Tether",
      wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
      icon: "",
    },
    {
      image: "/images/bitcoin.webp",
      name: "Bitcoin",
      wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
      icon: "",
    },
    {
      image: "/images/ethereum.png",
      name: "Ethereum",
      wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
      icon: "",
    },
    {
      image: "/images/litecoin.png",
      name: "Litecoin",
      wallet: "TjrQ0qi3rQetpCZ4Q1E7n4UYWjh3H1Hsg",
      icon: "",
    },
  ];

  const payments = [
    {
      id: "640a22c5-01ab-436f-b2b8-1cb6b129dc0c",
      price: "2698.11",
    },
    {
      id: "ef2ee873-bbd2-4bcb-9eeb-6b2923b5a161",
      price: "1056.88",
    },
    {
      id: "fd57d661-3657-4294-98bb-d21b49aee61a",
      price: "450.78",
    },
    {
      id: "669500e5-9148-469a-8b73-5c416185aa1b",
      price: "2167.00",
    },
    {
      id: "5b41ca5f-45c6-4272-ac13-fdde9b0421a5",
      price: "1589.45",
    },
    {
      id: "0862154f-ac72-467d-9bd1-b063eeca4652",
      price: "2800.43",
    },
    {
      id: "28a92ff0-420a-44c6-8de8-fd1dc600bbfe",
      price: "1757.94",
    },
    {
      id: "cbf2a5eb-4bc0-4a32-97bc-aa47fab2f7b8",
      price: "320.55",
    },
    {
      id: "6c6b9989-db3c-40ee-9426-0cf14f07ac49",
      price: "3056.10",
    },
  ];

  const payment = useMemo(() => {
    return payments.find((payment) => payment.id === router.query.id);
  }, []);
  return (
    <div className="bg-secondary">
      <Header />
      <div className="max-w-[450px] lg:w-1/3 mx-auto bg-white rounded mt-12 pb-6">
        <h1 className="w-full bg-primary text-center font-semibold text-[16px] py-2">
          Complete process within {minutes}:{seconds < 10 ? "0" : ""}
          {seconds} minutes
        </h1>
        <Image
          className="w-8/12 aspect-square mx-auto"
          src="/images/tether.png"
          alt=""
          width={0}
          height={0}
        />
        <div className="w-full mx-auto flex items-start justify-center gap-2">
          <Image
            className="w-8 h-6"
            src={selectedImage?.icon}
            alt=""
            width={0}
            height={0}
          />
          <p className="text-[12px] font-normal w-[260px]">
            If this QR is not populating your wallet, please use this one.
          </p>
        </div>

        <div
          className="flex items-center justify-between bg-[#EDEDED] px-4 py-2 rounded relative w-11/12 mx-auto my-2 cursor-pointer mt-8"
          onClick={handleClick}
        >
          <Image
            src={selectedImage?.image}
            alt=""
            width={0}
            height={0}
            className="h-8 w-auto"
          />

          <Image
            src="/images/vector.png"
            alt=""
            width={0}
            height={0}
            className={`w-3 ${
              showdropdown
                ? "rotate-180 transition-all duration-300 ease-in-out"
                : ""
            }`}
          />
          {showdropdown && (
            <div
              className={`bg-[#EDEDED] w-full shadow-lg rounded-bl-lg rounded-br-lg absolute top-11 left-0 px-4 py-3 flex flex-col justify-center`}
            >
              {dropdown?.map((e, index) => (
                <span
                  key={index}
                  className="hover:bg-white cursor-pointer block px-3 py-1"
                  onClick={() => handleItemClick(e)}
                >
                  <Image
                    src={e?.image}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[60px] h-5 mb-2"
                  />
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 w-11/12 mx-auto">
          <Image
            className="aspect-square"
            src="/images/notification.png"
            alt=""
            width={18}
            height={18}
          />
          <p className="text-[14px] font-semibold">
            You have selected to use USDT (TRC20) tokens. Please ensure you are
            using USDT (TRC20) token or your payment will be lost.
          </p>
        </div>
      </div>
      <div className="max-w-[450px] lg:w-1/3 mx-auto bg-white rounded overflow-hidden mt-5 px-8 py-4 mb-12">
        <h1 className="w-full font-normal text-[14px]">
          Set your wallet TX fee to at I post:
        </h1>
        <div className="mt-2">
          <h1 className="text-[20px] font-semibold ">Amount</h1>
          <div className="w-full flex justify-between bg-[#EDEDED] px-4 py-2 rounded relative">
            {payment?.price} ETH (ERC20)
            <Image
              alt=""
              src="/images/bxs_copy.png"
              width={24}
              height={18}
              onClick={() =>
                copyToClipboard(`${payment?.price} ETH (ERC20)`, 1)
              }
              className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer ${
                isCopied == 1 ? "opacity-50" : ""
              }`}
            />
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-[20px] font-semibold ">Address</h1>
          <div className="w-full flex justify-between bg-[#EDEDED] px-4 py-2 rounded relative">
            {selectedImage?.wallet}
            <Image
              alt=""
              src="/images/bxs_copy.png"
              width={24}
              height={18}
              onClick={() => copyToClipboard(selectedImage?.wallet, 2)}
              className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer ${
                isCopied === 2 ? "opacity-50" : ""
              }`}
            />
          </div>
        </div>
        <h1 className="w-full font-normal text-[14px] mt-2">
          Expected time to confirm: Less than 30 seconds
        </h1>
      </div>
      <div className="bg-black py-12">
        <FooterCheckout />
      </div>
    </div>
  );
}
