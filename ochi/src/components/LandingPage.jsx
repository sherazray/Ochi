import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import MainAfter from "../assets/images/MainAfter.jpg"; // Adjust the path to your image

const LandingPage = () => {
  return (
    <div
      data-scroll
      sata-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-6 "
    >
      <div className="textstructure  mt-24 px-12 py-3">
        {["We Create", "eye-opening", "presentaions"].map((item, index) => {
          return (
            <div className="masker ">
              <div className=" w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.74, 0, 0.24, 1], duration: 1 }}
                  >
                    <img
                      className="mr-2 w-[8vw] rounded-md  h-[5.5vw] relative -top-[1.2vw]   bg-[#004D43] "
                      src={MainAfter}
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className=" mb-[1.8vw] uppercase text-[7.5vw] font-semibold leading-[.7] tracking-tighter font-['Founders_Grotesk_X-Condensed ']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-16 pb-3 flex justify-between items-center py-3 px-12">
        {[
          "For Public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className={`text-md font-light  tracking-tight leading-none ${
              index === 1 && "ml-40"
            } `}
          >
            {item}
          </p>
        ))}

<div className="start flex items-center gap-2">
  <div className="px-3 py-1 border-[1.5px] border-zinc-400 font-light text-md uppercase rounded-full transition-colors duration-300 ease-in-out hover:bg-slate-300 hover:text-zinc-900">
    Start the project
  </div>
  <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400 rounded-full transition-colors duration-300 ease-in-out hover:bg-slate-300 hover:text-zinc-900">
    <span className="rotate-[45deg]">
      <FaArrowUpLong />
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default LandingPage;
