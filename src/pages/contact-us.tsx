import JoinTelegram from "@/components/JoinTelegram";
import Layout from "@/components/Layout";
import Spanner from "@/components/Spanner";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState({
    email: "",
    first: "",
    last: "",
    message: "",
  });

  const onChange = (e: any) => {
    setValue((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = (await axios({
        method: "POST",
        url: "/api/email",
        data: value,
        headers: {
          "Content-Type": "application/json",
        },
      })) as { success: boolean; message: string };
      toast.success(response?.message || "Email has been sent successfully");
      setValue({
        email: "",
        first: "",
        last: "",
        message: "",
      });
    } catch (err) {
      toast.error("something went wrong please try again later");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <Head>
        <title>Get in Touch with Freedom Elite Funding: Your Go-To Forex Prop Firm</title>
        <meta
          name="description"
          content="Have questions about our funded prop firm or high-frequency trading opportunities? Contact Freedom Elite Funding today! Our team is here to assist you in your trading journey."
        />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h2 className="bg-gradient-to-r from-primary to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold mb-[15px] mt-[78px]">
          Contact Us
        </h2>
        <p className="lg:text-lg font-medium text-white/60 text-center  md:w-[684px] w-full mb-[84px]">
          Feel free to drop us a message with any questions <br />
          or remarks you may have!
        </p>
      </div>

      {/* from */}
      <div className="flex items-center justify-center px-2 ">
        <div className=" p-[2px]  rounded-[25px] border-tb-g">
          <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
            <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
              <div className="rounded-[25px]  justify-start items-start  flex bg-primary-bg-color ">
                <div className="lg:w-[636px] lg:h-[676px] w-fit h-fit pt-9   px-5 ">
                  <form onSubmit={onSubmit}>
                    <div className="grid md:grid-cols-2 gap-7">
                      <div>
                        <label
                          htmlFor="name"
                          className=" text-white font-medium pl-2"
                        >
                          First Name <span className="text-primary">*</span>
                        </label>
                        <div className="w-full rounded-lg mt-2">
                          <input
                            id="first"
                            name="first"
                            type="text"
                            onChange={onChange}
                            value={value?.first}
                            placeholder="First Name"
                            className="text-white p-3 w-full focus:outline-none rounded-lg bg-[#2E2E2E]  "
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className=" text-white font-medium pl-2"
                        >
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <div className="w-full rounded-lg mt-2">
                          <input
                            id="last"
                            name="last"
                            type="text"
                            onChange={onChange}
                            value={value?.last}
                            placeholder="Last Name"
                            className="text-white p-3 w-full focus:outline-none rounded-lg bg-[#2E2E2E]  "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <label
                        htmlFor="name"
                        className=" text-white font-medium pl-2 "
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <div className="w-full rounded-lg mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={value?.email}
                          onChange={onChange}
                          placeholder="Email"
                          className="text-white p-3  focus:outline-none rounded-lg bg-[#2E2E2E] w-full "
                        />
                      </div>
                    </div>
                    <div className="mt-8 mb-10">
                      <label
                        htmlFor="name"
                        className=" text-white font-medium pl-2 "
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <div className="w-full rounded-lg mt-2">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="message"
                          rows={10}
                          onChange={onChange}
                          value={value?.message}
                          className="text-white p-3  focus:outline-none rounded-lg bg-[#2E2E2E] w-full "
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-center">
                      <button
                        type="submit"
                        disabled={
                          !value?.first ||
                          !value?.email ||
                          !value?.message ||
                          loading
                        }
                        className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black bg-primary w-1/2 disabled:bg-opacity-60 cursor-pointer "
                      >
                        {loading ? <Spanner /> : "Contact Us"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* from */}

      <div className="max-w-[1200px] mx-auto py-24 px-2 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div className="flex items-center justify-center ">
            {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
            <div className=" p-[2px]  rounded-[25px] border-tb-g ">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                {/* style="background-image: linear-gradient(rgba(20, 241, 148, 0.2), rgb(23, 23, 23));" */}
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                      <Image
                        className="mt-[-150px] mb-[8px]  w-24 md:w-fit"
                        src="/images/brain.png"
                        alt=""
                        width={0}
                        height={0}
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-primary">Knowledge Base</span>
                        </h2>
                        <p className="text-[#9F9F9F]">
                          Our support services have an extensive knowledge-base
                          to assist you
                        </p>
                        <p className="text-primary underline underline-offset-4"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            {/* style="background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgb(23, 23, 23));" */}
            <div className=" p-[2px]  rounded-[25px] border-tb-g">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                      <Image
                        className="mt-[-150px] mb-[8px]  w-24 md:w-fit"
                        src="/images/phone.png"
                        alt=""
                        width={0}
                        height={0}
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-primary">Contact Support</span>
                        </h2>
                        <p className="text-[#9F9F9F]">
                          Contact our support team at
                        </p>
                        <p className="text-primary underline underline-offset-4">
                          support@freedomfund.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className=" p-[2px]  rounded-[25px] border-tb-g">
              <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
                <div className="p-[2px]  rounded-[25px]  justify-center items-center flex ">
                  <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
                    <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                      <Image
                        className="mt-[-150px] mb-[8px]  w-24 md:w-fit"
                        src="/images/message.png"
                        alt=""
                        width={0}
                        height={0}
                      />
                      <div className="text-center">
                        <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                          <span className="text-primary">ChatBot</span>
                        </h2>
                        <p className="text-[#9F9F9F]">
                          Ask our chatbot for instant responses to your queries.
                        </p>
                        <p className="text-primary underline underline-offset-4"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinTelegram />
    </Layout>
  );
}
