import Layout from "@/components/Layout";
import CountrySelector from "@/components/selector";
import { COUNTRIES } from "../lib/countaries";
import { SelectMenuOption } from "@/lib/types";
import React, { useMemo, useState } from "react";
import Select from "react-select";
import { Eye } from "../svgs/faq";
import Header from "@/components/Header";
import FooterCheckout from "@/components/FooterCheckout";
// import countryList from 'react-select-country-list'

export default function checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<SelectMenuOption["value"]>("BE");

  return (
    <>
    <div className="bg-secondary relative z-10 px-4 md:px-0">
      <div className="absolute w-[350px] aspect-square left-1/2 -translate-x-1/2 bg-primary rounded-full -top-[250px] blur-[240px] -z-10 " />
      <Header />
      <div className="max-w-[1200px] mx-auto flex flex-col items-center mt-20 flex-col">
        <div className="w-full flex items-center justify-between px-8 py-4 bg-white border-t-4 border-[#8fae1b]">
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
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <label className=" text-gray-700 text-lg mb-2">
                  First Name
                </label>
                <input
                  className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                selectedValue={COUNTRIES.find(
                  (option) => option.value === country
                )}
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
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="street address"
                type="text"
                placeholder="House number and street name"
              />
              <input
                className="border border-gray-400 rounded w-full py-4 mt-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-lg mb-2">
               State / Country
              </label>
              <input
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Select an option"
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-lg mb-2">
               Postcode / Zip (optional)
              </label>
              <input
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-lg mb-2">
               Phone
              </label>
              <input
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-lg mb-2">
               Account username
              </label>
              <input
                className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Account username"
              />
            </div>
            <div className="mb-4">
      <label className="text-gray-700 text-lg mb-2">Create account password</label>
      <div className="relative">
        <input
          className="border border-gray-400 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-3">
        <Eye/>
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
              <p className="text-black font-medium">2 Step - Freedom Funding Challenge (100k) * 1</p>
              <p className="text-gray-400 font-medium">$499.00</p>
            </div>
         
            <div className="flex justify-between items-center w-full py-3">
              <p className="text-black font-medium">Subtotal</p>
              <p className="text-gray-400 font-medium">$499.00</p>
            </div>
            <div className="flex justify-between items-center w-full py-3">
              <p className="text-black font-medium">Freedom Funding Add-Ons - Reset(10Days)</p>
              <p className="text-gray-400 font-medium">$49.90</p>
            </div>
            <div className="flex justify-between items-center w-full py-3">
              <p className="text-black font-medium">Total</p>
              <p className="text-black font-medium">$49.90</p>
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
            <div className="bg-black rounded-lg px-6 h-[541px] py-3 mt-4">
            <p className="font-bold text-4xl mt-2">Billing Details</p>
             <button className="w-full bg-[#FAFF00] rounded-full h-[58px] font-semibold">
              Process to payment
             </button>
          </div>
          </div>
        
        </div>
      </div>
      <div className="w-full mt-5">
        <FooterCheckout/>
      </div>
  </div>
  </>
  )
}
