import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Logo() {
  const router = useRouter();
  return (
    <div onClick={() => router?.push("/")} className="flex items-center gap-1">
      <Image
        className="rounded-full"
        src="/images/logo.png"
        alt="logo"
        width={30}
        height={30}
      />
      <h1 className="uppercase whitespace-nowrap text-primary">
        freedom <span className="text-white">elite</span> funding
      </h1>
    </div>
  );
}
