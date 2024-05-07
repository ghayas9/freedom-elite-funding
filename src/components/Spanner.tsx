import React from "react";

export default function Spanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`${className} w-6 aspect-square animate-spin border-2 border-black border-t-white rounded-full`}
    />
  );
}
