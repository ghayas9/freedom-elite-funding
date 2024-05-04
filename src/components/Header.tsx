import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mx-auto max-w-[1200px] flex justify-between items-center py-[16px] px-2 lg:py-4">
        <Image src="/images/logo.png" alt="logo" width={244} height={35} />
        <div
          className={`  ${open ? "lef-0" : "-left-[100%]"} flex flex-col lg:flex-row absolute lg:justify-end lg:relative lg:top-0 lg:bg-transparent lg:p-0 bg-black w-full gap-4 p-4 left-0 top-16 lg:items-center text-white gap-x-[40px] text-[14px] transition-all duration-700 ease-in `}
        >
          <Link href="/">Home </Link>
          <Link href="/">Buy Challenge </Link>
          <Link href="/faq">FAQ </Link>
          <Link href="/payout">Payout</Link>
          <Link href="/payout">About us</Link>
          <Link href="/payout">Contact us</Link>
          <Link
            className="rounded-[16px] px-5 py-2 font-medium text-black bg-primary"
            href="#"
          >
            Login
          </Link>
        </div>

        <div
          className="lg:hidden flex justify-end  w-1/2"
          onClick={() => setOpen(!open)}
        >
          <svg
            stroke="white"
            fill="white"
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
      </div>
      {/* <div
        className={` absolute  ${
          open ? "left-0 w-full" : "-left-[100%]"
        }  flex flex-col gap-4 p-4 bg-black text-white gap-x-[40px] text-[14px] transition-all duration-700  `}
      >
        <Link href="/">Home </Link>
        Buy Challenge
        <Link href="/faq">FAQ </Link>
        <Link href="/payout">Payout</Link>
        <Link href="/payout">About us</Link>
        <Link href="/payout">Contact us</Link>
        <Link
          className="rounded-[16px] px-5 py-2 font-medium text-black bg-primary"
          href="#"
        >
          Login
        </Link>
      </div> */}
    </>
  );
}
