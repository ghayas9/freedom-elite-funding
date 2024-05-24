import { Telegram } from "@/svgs/home";
import Image from "next/image";
import React from "react";

export default function JoinTelegram() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center px-2 pb-4 md:pb-8 bg-center bg-no-repeat">
      <div className="flex items-center justify-center lg:px-10 py-4 md:px-40  bg-cover">
        <div className="w-[285px] h-[220px] mb-10">
          <Image
            width={0}
            height={0}
            className="w-full"
            src="/images/telegram-3.png"
            alt="discordIcon"
          />
        </div>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold text-white text-center md:text-left">
        Join us on Telegram
      </h2>
      <p className="lg:text-lg my-3 lg:my-6 font-medium text-white/60 text-center md:text-left">
        Become a citizen of our Telegram community, where traders connect,
        learn, and thrive together.
      </p>
      <div className="flex items-center gap-2 sm:gap-5">
        <a
          //   type="submit"
          className="flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium text-black bg-primary  "
          href="https://t.me/freedomelitefunding"
          target="_blank"
        >
          <Telegram />
          Join Now
        </a>
      </div>
    </div>
  );
}
