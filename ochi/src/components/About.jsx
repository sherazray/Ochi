import React from "react";
import { motion } from "framer-motion";
import HomePage from '../assets/images/HomePage.jpg'; // Adjust the path to your image


const About = () => {
  return (
    <motion.div
    data-scroll
    data-scroll-section
    data-scroll-speed=".2"
    initial={{ opacity: 0, y: 100 }} // Start off-screen and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up to position
        transition={{ duration: 0.6 }} // Duration of the animation
    
    className="w-full py-28  bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black">
      {/* Animated Header */}
      <h1
        
        className='font-["Neue_Montreal"] text-[4.5vw] px-14 leading-[4.5vw] tracking-tight'
      >
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-full flex px-14 pt-10 mt-20 border-t-[1px] border-[#93a066]">
        <div className="w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up to position
            transition={{ duration: 0.6, delay: 0.2 }} // Duration and delay of the animation
            className="text-6xl pb-8"
          >
            Our approach:
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up to position
            transition={{ duration: 0.6, delay: 0.4 }} // Duration and delay of the animation
            className="flex items-center gap-10 px-5 py-4 bg-zinc-900 rounded-full text-white"
          >
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 0.6, delay: 0.6 }} // Duration and delay of the animation
          className="w-1/2 -mt-4 h-[70vh] rounded-2xl "
        >
          <img className=" rounded-xl" src={HomePage} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
