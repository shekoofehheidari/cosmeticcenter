import React from "react";
import { motion } from "framer-motion";
import { Button } from "../buttons/Button"; // ✅ Adjust if your actual path is different
import pricelistpfd from "../../assets/pdf/PRICE-LIST-FEB-202555.pdf";
import "./banner.css";

// Animation configurations
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
  // 🔗 Open booking link
  const handleClick = () => {
    window.open(
      "https://book.squareup.com/appointments/nsny3vnzgo2qf4/location/ZVDZB55KV1N67/services",
      "_blank"
    );
  };

  // 📄 Open price list PDF
  const openPdf = () => {
    window.open(pricelistpfd, "_blank");
  };

  return (
    <div className="bannerimage min-h-screen flex items-center px-4 sm:px-6 md:px-16 pb-16">
      <motion.div
        className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 items-start text-left w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-3xl text-rose-500"
          variants={textVariants}
        >
          Welcome to
        </motion.h1>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-rose-400"
          variants={textVariants}
        >
          M a r i a
        </motion.h1>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-400 pb-12 pt-0"
          variants={textVariants}
        >
          Cosmetic&nbsp;Center
        </motion.h1>

        <Button onClick={handleClick}>Book An Appointment</Button>
        <Button onClick={openPdf}>Price List</Button>
      </motion.div>
    </div>
  );
};

export default Banner;
