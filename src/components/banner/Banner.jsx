import React from "react";
import { motion } from "framer-motion";
import { Button } from "../buttons/Button";
import "./banner.css";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 2 } },
};

const Banner = () => {
  const handleClick = () => {
    const element = document.getElementById("price-list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Element with ID 'price-list' not found.");
    }
  };

  return (
    <div className="bannerimage min-h-screen flex items-center px-4 sm:px-8 md:px-16 pb-16">
      <motion.div
        className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 items-start text-left w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Heading 1 */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-3xl text-rose-500"
          variants={textVariants}
        >
         Welcome to
        </motion.h1>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-rose-400 pt-6"
          variants={textVariants}
        >
          M a r i a
        </motion.h1>

        {/* Subheading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl text-rose-400 pb-12 pt-0"
          variants={textVariants}
        >
          Cosmetic&nbsp;&nbsp;Center
        </motion.h1>

        {/* Button */}
        <Button onClick={handleClick}>Book An appoinment</Button>
      </motion.div>
    </div>
  );
};

export default Banner;
