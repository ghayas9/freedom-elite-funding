import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="mx-auto max-w-[1200px] flex justify-between items-center py-[16px] px-2 lg:py-4">
      <Image src="/images/logo.png" alt="logo" width={244} height={35} />
      <ul className="hidden lg:flex justify-center items-center text-white gap-x-[40px] text-[14px] ">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>Buy Challenge</li>
        <li>
          <Link href="/faq">FAQ </Link>
        </li>
        <li>Payout</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>
          <Link
            className="rounded-[16px] px-5 py-2 font-medium text-black bg-primary"
            href="#"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
