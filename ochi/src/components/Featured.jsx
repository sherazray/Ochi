import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]; // Animations for both cards

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-16">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>

      <div className="px-14">
        <div className="w-full flex gap-10 mt-8">
          {/* First Card (FYDE) */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            whileHover={{ scale: 0.95 }} // Shrink card smoothly on hover
            transition={{ ease: "easeOut", duration: 0.4 }} // Smooth transition
            className="cardcontainer relative w-full h-[85vh] max-w-[45%]" // Limit width to 45% for both cards
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-semibold leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.06,
                  }}
                  className="inline-block -translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="FYDE Project"
              />
            </div>
          </motion.div>

          {/* Second Card (VISE) */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            whileHover={{ scale: 0.95 }} // Shrink card smoothly on hover
            transition={{ ease: "easeOut", duration: 0.4 }} // Smooth transition
            className="cardcontainer relative w-full h-[85vh] max-w-[45%]" // Limit width to 45% for both cards
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-semibold leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.06,
                  }}
                  className="inline-block -translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt="VISE Project"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
