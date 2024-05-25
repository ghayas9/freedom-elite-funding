"use client";

import CountrySelector from "@/components/selector";
import { COUNTRIES } from "../../lib/countaries";
import { SelectMenuOption } from "@/lib/types";
import React, { useEffect, useMemo, useState } from "react";
import { Eye, Tick } from "../../svgs/faq";
import Header from "@/components/Header";
import FooterCheckout from "@/components/FooterCheckout";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup?.object()?.shape({
  email: yup?.string()?.required("Email is required"),
  firstname: yup?.string()?.required("First name is required"),
  country: yup?.string(),
  address: yup?.string()?.required("Address is required"),
  town: yup?.string()?.required("Town is required"),
  state: yup?.string()?.required("State is required"),
  phone: yup?.string()?.required("Phone number is required"),
  username: yup?.string()?.required("Username is required"),
  password: yup?.string()?.required("Password is required"),
  terms: yup.boolean().oneOf([true], "Terms must be accepted"),
  privacyPolicy: yup.boolean().oneOf([true], "Privacy Policy must be accepted"),
  assessment: yup.boolean().oneOf([true], "Schedule must be accepted"),
});

export default function Checkout() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [addOn, setAddOn] = useState("rest10");
  const [password, setPassword] = useState("password");
  const [add, setAdd] = useState({
    addon: "Reset(10 Days)",
    price: 49.9,
  });

  const [price, setPrice] = useState({
    price: "0",
    id: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    router.push("/order/" + router?.query?.id);
    console.log({ data });
    reset();
  };

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
  const handleAdsOnChange = (ad: any) => {
    setAddOn((prevAd) => (prevAd === ad ? "" : ad));
  };

  useEffect(() => {
    if (router?.query?.id) {
      axios({
        method: "POST",
        url: "/api/payment",
        data: {
          id: router?.query?.id,
        },
      })
        ?.then((res: any) => {
          setPrice(res?.data);
        })
        .then(() => {});
    }
  }, [router?.query]);

  return (
    <>
      <div className="bg-secondary relative z-10 px-4 md:px-0">
        <div className="absolute w-[350px] aspect-square left-1/2 -translate-x-1/2 bg-primary rounded-full -top-[250px] blur-[240px] -z-10 " />
        <Header />
        <div className="max-w-[1200px] mx-auto flex flex-col items-center mt-20">
          <div className="w-full flex items-center justify-between px-8 py-3 bg-white border-t-4 border-[#8fae1b]">
            <p>2 Step - Power Challenge (10K)” has been added to your cart</p>
            <button className="bg-gray-300 flex justify-center  items-center px-2 min-w-24 py-1 rounded font-medium text-[#515151]">
              View cart
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full grid grid-cols-6 gap-4 mt-8">
              <div className="lg:col-span-3 col-span-12">
                <div className="bg-white rounded-lg px-6 py-5">
                  <p className="font-bold text-4xl">Billing Details</p>

                  <div className="mb-4 mt-8">
                    <label className=" text-gray-700 text-lg mb-2">
                      Email Address
                    </label>
                    <input
                      className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email Address"
                      {...register("email")}
                    />
                    <p className="text-xs text-red-500">
                      {errors?.email?.message}
                    </p>
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
                        {...register("firstname")}
                      />
                      <p className="text-xs text-red-500">
                        {errors?.firstname?.message}
                      </p>
                    </div>
                    <div className="flex flex-col col-span-3">
                      <label className=" text-gray-700 text-lg mb-2">
                        Last Name <span className="text-sm">(Optional)</span>
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
                        COUNTRIES.find(
                          (option) => option.value === country
                        ) as any
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
                      {...register("address")}
                    />
                    <p className="text-xs text-red-500">
                      {errors?.address?.message}
                    </p>
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
                      {...register("town")}
                    />
                    <p className="text-xs text-red-500">
                      {errors?.town?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className=" text-gray-700 text-lg mb-2">
                      State / Country
                    </label>
                    <input
                      className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Select an option"
                      {...register("state")}
                    />
                    <p className="text-xs text-red-500">
                      {errors?.state?.message}
                    </p>
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
                      {...register("phone")}
                    />
                    <p className="text-xs text-red-500">
                      {errors?.phone?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className=" text-gray-700 text-lg mb-2">
                      Account username
                    </label>
                    <input
                      className="border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Account username"
                      {...register("username")}
                    />
                    <p className="text-xs text-red-500">
                      {errors?.username?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-700 text-lg mb-2">
                      Create account password
                    </label>
                    <div className="border border-gray-400 rounded py-2 px-2 relative">
                      <input
                        className=" text-gray-700 leading-tight focus:outline-none bg-transparent focus:shadow-outline"
                        type={password}
                        placeholder="Password"
                        {...register("password")}
                      />
                      <p className="text-xs text-red-500">
                        {errors?.password?.message}
                      </p>
                      <div
                        className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center px-3"
                        onClick={() =>
                          setPassword(
                            password === "password" ? "text" : "password"
                          )
                        }
                      >
                        <Eye />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <p className="text-white text-lg my-3">
                    Freedom Funding Add-Ons
                  </p>
                  <div className="flex gap-3 items-center mt-3">
                    <input
                      type="radio"
                      id="rest10"
                      name="rest10"
                      value="rest10"
                      checked={addOn === "rest10"}
                      onChange={() => [
                        handleAdsOnChange("rest10"),
                        setAdd({
                          addon: "Reset(10 Days)",
                          price: 49.9,
                        }),
                      ]}
                      className={`appearance-none border border-customYellow rounded-full w-3 h-3 ${
                        addOn === "rest10"
                          ? " bg-yellow-300 checked:bg-yellow-300"
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="rest10" className="font-medium text-white">
                      Reset(10 Days) ($49.90)
                    </label>
                  </div>
                  <div className="flex gap-3 items-center mt-1">
                    <input
                      type="radio"
                      id="rest20"
                      name="rest20"
                      value="rest20"
                      checked={addOn === "rest20"}
                      onChange={() => [
                        handleAdsOnChange("rest20"),
                        setAdd({
                          addon: "Reset(20 Days)",
                          price: 99.8,
                        }),
                      ]}
                      className={`appearance-none border border-customYellow rounded-full w-3 h-3 ${
                        addOn === "rest20"
                          ? " bg-yellow-300 checked:bg-yellow-300 "
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="rest20" className="font-medium text-white">
                      Reset(20 Days) ($99.80)
                    </label>
                  </div>
                  <div className="flex gap-3 items-center mt-1">
                    <input
                      type="radio"
                      id="rest30"
                      name="rest30"
                      value="rest30"
                      checked={addOn === "rest30"}
                      onChange={() => [
                        handleAdsOnChange("rest30"),
                        setAdd({
                          addon: "Reset(30 Days)",
                          price: 149.7,
                        }),
                      ]}
                      className={`appearance-none border border-customYellow rounded-full w-3 h-3 ${
                        addOn === "rest30"
                          ? " bg-yellow-300 checked:bg-yellow-300 "
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="rest30" className="font-medium text-white">
                      Reset(30 Days) ($149.70)
                    </label>
                  </div>
                  <div className="flex gap-3 items-center mt-1">
                    <input
                      type="radio"
                      id="noreset"
                      name="noreset"
                      value="noreset"
                      checked={addOn === "noreset"}
                      onChange={() => [
                        handleAdsOnChange("noreset"),
                        setAdd({
                          addon: "No Reset",
                          price: 0.0,
                        }),
                      ]}
                      className={`appearance-none border border-customYellow rounded-full w-3 h-3 ${
                        addOn === "noreset"
                          ? " bg-yellow-300 checked:bg-yellow-300 "
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="noreset" className="font-medium text-white">
                      No Reset
                    </label>
                  </div>
                  <p className="my-3 text-white text-lg">
                    Freedom Funding Add-Ons
                  </p>
                  <div className="flex gap-3 items-center mt-1">
                    <input
                      type="radio"
                      id="100%"
                      name="100%"
                      value="100%"
                      checked={addOn === "100%"}
                      onChange={() => [
                        handleAdsOnChange("100%"),
                        setAdd({
                          addon: "100%",
                          price: 149.7,
                        }),
                      ]}
                      className={`appearance-none border border-customYellow rounded-full w-3 h-3 ${
                        addOn === "100%"
                          ? " bg-yellow-300 checked:bg-yellow-300 "
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="100%" className="font-medium text-white">
                      100% ($149.70)
                    </label>
                  </div>
                  <div className="flex gap-3 items-center mt-1">
                    <input
                      type="radio"
                      id="none"
                      name="none"
                      value="none"
                      checked={addOn === "none"}
                      onChange={() => [
                        handleAdsOnChange("none"),
                        setAdd({
                          addon: "None",
                          price: 0.0,
                        }),
                      ]}
                      className={`appearance-none border border-customYellow rounded-full w-3 h-3 ${
                        addOn === "none"
                          ? " bg-yellow-300 checked:bg-yellow-300 "
                          : "bg-black"
                      }`}
                    />
                    <label htmlFor="none" className="font-medium text-white">
                      None
                    </label>
                  </div>
                </div>
              </div>

              <div className=" lg:col-span-3 col-span-12">
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
                      Freedom Funding Add-Ons - {add?.addon}
                    </p>
                    <p className="text-gray-400 font-medium">${add?.price}</p>
                  </div>
                  <div className="flex justify-between items-center w-full py-3">
                    <p className="text-black font-medium">Total</p>
                    <p className="text-black font-medium">
                      ${parseInt(price?.price || "0") + add?.price}
                    </p>
                  </div>
                </div>
                <div className="bg-white col-span-3 rounded-lg px-2 py-2 mt-8">
                  <div className="flex w-full items-center justify-between">
                    <p className="w-1/3 ml-3 mr-4 font-medium">
                      Have a coupon ?
                    </p>
                    <input
                      className="border flex flex-grow border-gray-400 rounded-lg py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className={`rounded px-4 py-1 my-1 flex items-center gap-2`}
                      >
                        <Image
                          src="/images/bitcoin-Logo.png"
                          alt=""
                          width={35}
                          height={35}
                        />
                        <h1 className="text-base text-white font-semibold">
                          Bitcoin
                        </h1>
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
                        className={`rounded px-4 py-1 flex items-center gap-2`}
                      >
                        <Image
                          src="/images/etherium.png"
                          alt=""
                          width={35}
                          height={35}
                        />
                        <h1 className="text-base font-semibold text-white">
                          Etherium
                        </h1>
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
                      <label
                        htmlFor="Tether"
                        className="font-medium text-white"
                      >
                        Crypto
                      </label>
                      <div
                        className={`rounded px-4 py-1 my-1 flex items-center gap-2`}
                      >
                        <Image
                          src="/images/tether.png"
                          alt=""
                          width={25}
                          height={25}
                        />
                        <h1 className="text-base text-white font-semibold">
                          Tether
                        </h1>
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
                        className={`rounded px-4 py-1 my-1 flex items-center gap-2`}
                      >
                        <Image
                          src="/images/litecoin-ltc-logo.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                        <h1 className="text-base text-white font-semibold">
                          Litecoin
                        </h1>
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
                          // onChange={() => handleCheckboxChange("terms")}
                          // {...register('term')}
                          {...register("terms", {
                            onChange: () => handleCheckboxChange("terms"),
                          })}
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
                    <p className="text-sm text-red-500">
                      {errors?.terms?.message}
                    </p>
                    <label className="flex items-center gap-2 py-1 opacity-80">
                      <div className="relative">
                        <input
                          className="opacity-0 absolute"
                          type="checkbox"
                          checked={checkedItems.privacyPolicy}
                          // onChange={() => handleCheckboxChange("privacyPolicy")}
                          {...register("privacyPolicy", {
                            onChange: () =>
                              handleCheckboxChange("privacyPolicy"),
                          })}
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
                    <p className="text-sm text-red-500">
                      {errors?.privacyPolicy?.message}
                    </p>
                    <label className="flex items-center gap-2 opacity-80 py-1">
                      <div className="relative">
                        <input
                          className="opacity-0 absolute"
                          type="checkbox"
                          checked={checkedItems.assessment}
                          // onChange={() => handleCheckboxChange("assessment")}
                          {...register("assessment", {
                            onChange: () => handleCheckboxChange("assessment"),
                          })}
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
                    <p className="text-sm text-red-500">
                      {errors?.assessment?.message}
                    </p>
                  </div>
                  <button
                    // onClick={() => router.push("/order/" + router?.query?.id)}
                    type="submit"
                    className="w-full bg-customYellow rounded-full h-[58px] mt-6 font-semibold"
                  >
                    Process to payment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full mt-24">
          <FooterCheckout />
        </div>
      </div>
    </>
  );
}
