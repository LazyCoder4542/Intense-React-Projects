import React from "react";
import { twMerge } from "tailwind-merge";
function Glow1() {
  return (
    <div className="flex glow w-[80%] rotate-45 blur-[100px] top-10">
      <div className="bg-clr-1 w-[50%]"></div>
      <div className="bg-clr-2 w-[50%]"></div>
    </div>
  );
}

function Glow2() {
  return (
    <div className="opacity-[18%] glow w-[100%] blur-[100px]">
      <div className="bg-clr-1 w-[60%] m-auto rounded-full"></div>
    </div>
  );
}

function Glow3() {
  return (
    <div className="opacity-[80%] glow w-[100%] scale-x-150 h-16 bottom-0">
      <div className="w-[100%] m-auto from-[rgba(15,8,24,0.69)] to-[#0F0818] bg-gradient-to-b"></div>
    </div>
  );
}

export { Glow1, Glow2, Glow3 };
