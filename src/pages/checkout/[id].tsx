"use client";

import Layout from "@/components/Layout";
import CountrySelector from "@/components/selector";
import { COUNTRIES } from "../../lib/countaries";
import { SelectMenuOption } from "@/lib/types";
import React, { useMemo, useState } from "react";
import Select from "react-select";
import { Eye, Tick } from "../../svgs/faq";
import Header from "@/components/Header";
import FooterCheckout from "@/components/FooterCheckout";
import Image from "next/image";
import { useRouter } from "next/router";
// import countryList from 'react-select-country-list'

export default function Checkout() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<SelectMenuOption["value"]>("BE");
  const [checkedItems, setCheckedItems] = useState({
    terms: false,
    privacyPolicy: false,
    assessment: false,
  });

  const handleCheckboxChange = (
    key: "terms" | "privacyPolicy" | "assessment"
  ) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Bitcoin");

  const handlePaymentMethodChange = (method: any) => {
    setSelectedPaymentMethod((prevMethod) =>
      prevMethod === method ? "" : method
    );
  };

  const payout = [
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

  const price = useMemo(() => {
    return payout?.find((e) => e?.id === router?.query?.id);
  }, []);

  return (
    <>
      <div className="bg-secondary relative z-10 px-4 md:px-0">
        <div className="absolute w-[350px] aspect-square left-1/2 -translate-x-1/2 bg-primary rounded-full -top-[250px] blur-[240px] -z-10 " />
        <Header />
        <div className="max-w-[1200px] mx-auto flex flex-col items-center mt-20">
          <div className="w-full flex items-center justify-between px-8 py-3 bg-white border-t-4 border-[#8fae1b]">
            <p>2 Step - Power Challenge (10K)” has been added to your cart</p>
            <button className="bg-gray-300 flex justify-center  items-center px-2 py-1 rounded font-medium text-[#515151]">
              View cart
            </button>
          </div>
          <div className="w-full grid grid-cols-6 gap-4 mt-8">
            <div className="bg-white col-span-3 rounded-lg px-6 py-5">
              <p className="font-bold text-4xl">Billing Details</p>
              <div className="mb-4 mt-8">
                <label className=" text-gray-700 text-lg mb-2">
                  Email Address
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4 w-full grid grid-cols-6 gap-6">
                <div className="flex flex-col col-span-3">
                  <label className=" text-gray-700 text-lg mb-2">
                    First Name
                  </label>
                  <input
                    className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col col-span-3">
                  <label className=" text-gray-700 text-lg mb-2">
                    First Name
                  </label>
                  <input
                    className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">
                  Company Name (optional)
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">
                  Country / Region
                </label>
                <CountrySelector
                  id={"country-selector"}
                  open={isOpen}
                  onToggle={() => setIsOpen(!isOpen)}
                  onChange={setCountry}
                  selectedValue={
                    COUNTRIES.find((option) => option.value === country) as any
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className=" text-gray-700 text-lg mb-2"
                  htmlFor="street address"
                >
                  Street Address
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="street address"
                  type="text"
                  placeholder="House number and street name"
                />
                <input
                  className="border border-gray-400 rounded w-full py-3 mt-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="street address"
                  type="text"
                  placeholder="Apartment,suite,unit,etc.(optional)"
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">
                  Town / City
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">
                  State / Country
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Select an option"
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">
                  Postcode / Zip (optional)
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">Phone</label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg mb-2">
                  Account username
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Account username"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-lg mb-2">
                  Create account password
                </label>
                <div className="relative">
                  <input
                    className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-3">
                    <Eye />
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-span-3">
              <div className="bg-white rounded-lg px-6 h-[354px] py-5">
                <p className="font-bold text-4xl mt-2">Billing Details</p>
                <div className="flex justify-between items-center w-full mt-4 py-3">
                  <p className="text-black font-medium">Product</p>
                  <p className="text-black font-medium">Subtotal</p>
                </div>
                <div className="flex justify-between items-center w-full py-3">
                  <p className="text-black font-medium">
                    2 Step - Freedom Funding Challenge (100k) * 1
                  </p>
                  <p className="text-gray-400 font-medium">${price?.price}</p>
                </div>

                <div className="flex justify-between items-center w-full py-3">
                  <p className="text-black font-medium">Subtotal</p>
                  <p className="text-gray-400 font-medium">${price?.price}</p>
                </div>
                <div className="flex justify-between items-center w-full py-3">
                  <p className="text-black font-medium">
                    Freedom Funding Add-Ons - Reset(10Days)
                  </p>
                  <p className="text-gray-400 font-medium">${price?.price}</p>
                </div>
                <div className="flex justify-between items-center w-full py-3">
                  <p className="text-black font-medium">Total</p>
                  <p className="text-black font-medium">${price?.price}</p>
                </div>
              </div>
              <div className="bg-white col-span-3 rounded-lg px-2 py-2 mt-8">
                <div className="flex w-full items-center">
                  <p className="w-1/3 ml-3 mr-4 font-medium">Have a coupon ?</p>
                  <input
                    className="border w-1/2 border-gray-400 rounded-lg w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter a coupon"
                  />
                </div>
              </div>
              <div className="bg-black rounded-lg p-6 mt-4">
                <div
                  className={` w-full rounded my-2 border border-customYellow ${
                    selectedPaymentMethod === "Bitcoin"
                      ? " bg-blue-500 border-none"
                      : "border border-customYellow"
                  }`}
                >
                  <div className="flex ml-4 gap-3 items-center">
                    <input
                      type="radio"
                      id="cryptoBitcoin"
                      name="paymentMethod"
                      value="Bitcoin"
                      checked={selectedPaymentMethod === "Bitcoin"}
                      onChange={() => handlePaymentMethodChange("Bitcoin")}
                      className={`appearance-none border border-customYellow rounded-full w-2 h-2 ${
                        selectedPaymentMethod === "Bitcoin"
                          ? " bg-yellow-300 checked:bg-yellow-300"
                          : "bg-black"
                      }`}
                    />
                    <label
                      htmlFor="cryptoBitcoin"
                      className="font-medium text-white"
                    >
                      Crypto
                    </label>
                    <div
                      className={`rounded px-4 py-1 my-1 ${
                        selectedPaymentMethod === "Bitcoin" ? "bg-white" : ""
                      }`}
                    >
                      <Image
                        src="/images/bitcoin.png"
                        alt=""
                        width={100}
                        height={15}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-2 ml-6 text-sm text-gray-200">
                  Pay without any restriction
                </div>
                <div
                  className={` w-full rounded my-2 border border-customYellow ${
                    selectedPaymentMethod === "Ethereum"
                      ? " bg-blue-500 border-none"
                      : "border border-customYellow"
                  }`}
                >
                  <div className="flex gap-3 ml-4 items-center">
                    <input
                      type="radio"
                      id="cryptoEthereum"
                      name="paymentMethod"
                      value="Ethereum"
                      checked={selectedPaymentMethod === "Ethereum"}
                      onChange={() => handlePaymentMethodChange("Ethereum")}
                      className={`appearance-none border border-customYellow rounded-full w-2 h-2 ${
                        selectedPaymentMethod === "Ethereum"
                          ? " bg-yellow-300 checked:bg-yellow-300 "
                          : "bg-black"
                      }`}
                    />
                    <label
                      htmlFor="cryptoEthereum"
                      className="font-medium text-white"
                    >
                      Crypto
                    </label>
                    <div
                      className={`rounded px-4 py-1 my-1 ${
                        selectedPaymentMethod === "Ethereum" ? "bg-white" : ""
                      }`}
                    >
                      <Image
                        src="/images/ethereum.png"
                        alt=""
                        width={100}
                        height={15}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={` w-full rounded border my-2 border-customYellow ${
                    selectedPaymentMethod === "Tether"
                      ? " bg-blue-500 border-none"
                      : "border border-customYellow"
                  }`}
                >
                  <div className="flex gap-3 ml-4 items-center">
                    <input
                      type="radio"
                      id="Tether"
                      name="paymentMethod"
                      value="Tether"
                      checked={selectedPaymentMethod === "Tether"}
                      onChange={() => handlePaymentMethodChange("Tether")}
                      className={`appearance-none border border-customYellow rounded-full w-2 h-2 ${
                        selectedPaymentMethod === "Tether"
                          ? " bg-yellow-300 checked:bg-yellow-300"
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="Tether" className="font-medium text-white">
                      Crypto
                    </label>
                    <div
                      className={`rounded px-4 py-1 my-1 ${
                        selectedPaymentMethod === "Tether" ? "bg-white" : ""
                      }`}
                    >
                      <Image
                        src="/images/Tether_logo.png"
                        alt=""
                        width={85}
                        height={15}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={` w-full rounded border border-customYellow ${
                    selectedPaymentMethod === "Litecoin"
                      ? " bg-blue-500 border-none"
                      : "border border-customYellow"
                  }`}
                >
                  <div className="flex gap-3 ml-4 items-center">
                    <input
                      type="radio"
                      id="cryptoLitecoin"
                      name="paymentMethod"
                      value="Litecoin"
                      checked={selectedPaymentMethod === "Litecoin"}
                      onChange={() => handlePaymentMethodChange("Litecoin")}
                      className={`appearance-none border border-customYellow rounded-full w-2 h-2 ${
                        selectedPaymentMethod === "Litecoin"
                          ? " bg-yellow-300 checked:bg-yellow-300"
                          : "bg-black"
                      }`}
                    />
                    <label
                      htmlFor="cryptoLitecoin"
                      className="font-medium text-white"
                    >
                      Crypto
                    </label>
                    <div
                      className={`rounded px-4 py-1 my-1 ${
                        selectedPaymentMethod === "Litecoin" ? "bg-white" : ""
                      }`}
                    >
                      <Image
                        src="/images/litecoin.png"
                        alt=""
                        width={100}
                        height={15}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex mt-6 flex-col">
                  <label className="flex items-center gap-2 opacity-80 py-1">
                    <div className="relative">
                      <input
                        className="opacity-0 absolute"
                        type="checkbox"
                        checked={checkedItems.terms}
                        onChange={() => handleCheckboxChange("terms")}
                      />
                      <div className="border-2 border-customYellow w-3 h-3 flex items-center justify-center">
                        {checkedItems.terms && <Tick />}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                      I have read and agree to the
                      <span className="text-customYellow ml-1">
                        terms and conditions *
                      </span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2 py-1 opacity-80">
                    <div className="relative">
                      <input
                        className="opacity-0 absolute"
                        type="checkbox"
                        checked={checkedItems.privacyPolicy}
                        onChange={() => handleCheckboxChange("privacyPolicy")}
                      />
                      <div className="border-2 border-customYellow w-3 h-3 flex items-center justify-center">
                        {checkedItems.privacyPolicy && <Tick />}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                      I have read and agree to the website
                      <span className="text-customYellow ml-1">
                        privacy policy *
                      </span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2 opacity-80 py-1">
                    <div className="relative">
                      <input
                        className="opacity-0 absolute"
                        type="checkbox"
                        checked={checkedItems.assessment}
                        onChange={() => handleCheckboxChange("assessment")}
                      />
                      <div className="border-2 border-customYellow w-3 h-3 flex items-center justify-center">
                        {checkedItems.assessment && <Tick />}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                      I have read and agree to the
                      <span className="text-customYellow ml-1">
                        schedule of assessment *
                      </span>
                    </div>
                  </label>
                </div>
                <button
                  onClick={() => router.push("/order/" + router?.query?.id)}
                  className="w-full bg-customYellow rounded-full h-[58px] mt-6 font-semibold"
                >
                  Process to payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <FooterCheckout />
        </div>
      </div>
    </>
  );
}
