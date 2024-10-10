import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="overflow-hidden w-full py-28 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] "
    >
      <div className="text border-t-[1px] border-b-[1px] mt-6 border-zinc-200  flex whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: "10" }}
          className="text-[22vw] leading-none  font-['Founders_Grotesk_X-Condensed ']  uppercase tracking-tighter    pb-1 -mt-[3vw] pr-10 font-bold"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: "10" }}
          className="text-[22vw] leading-none  font-['Founders_Grotesk_X-Condensed ']  uppercase tracking-tighter pb-1 -mt-[3vw] pr-10  font-bold"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
