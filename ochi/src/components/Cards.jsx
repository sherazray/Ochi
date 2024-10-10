import React from "react";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-14">
      {/* First Card Container */}
      <motion.div
        whileHover={{ scale: 0.95 }} // Smooth shrinking on hover
        transition={{ duration: 0.4 }} // Smooth transition effect
        className="cardcontainer h-[60vh] w-1/2"
      >
        <div className="card rounded-xl w-full h-full flex items-center justify-center bg-[#004D43] relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo"
          />
         
        </div>
      </motion.div>

      {/* Second Card Container (2 Cards inside) */}
      <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
        {/* First Card in the second container */}
        <motion.div
          whileHover={{ scale: 0.95 }} // Smooth shrinking on hover
          transition={{ duration: 0.4 }} // Smooth transition effect
          className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#62827e]"
        >
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo"
          />
         
        </motion.div>

        {/* Second Card in the second container */}
        <motion.div
          whileHover={{ scale: 0.95 }} // Smooth shrinking on hover
          transition={{ duration: 0.4 }} // Smooth transition effect
          className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#62827e]"
        >
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
