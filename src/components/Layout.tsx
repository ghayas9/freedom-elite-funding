import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <div className="bg-secondary -z-20 relative">
      <div className="absolute w-[350px] aspect-square left-1/2 -translate-x-1/2 bg-[#FFE500] rounded-full -top-[250px] blur-[240px] -z-10 " />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
