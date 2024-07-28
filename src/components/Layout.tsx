import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode | null;
}

export default function Layout({ children }: Props) {
  return (
    <>
    <div className="bg-secondary relative px-4 md:px-0">
      <div className="absolute w-full aspect-square left-1/2 -translate-x-1/2 bg-primary rounded-full -top-[250px] blur-[240px] -z-10 " />
      <Header />
      {children}
    </div>
    <Footer />
    </>
  )
}
