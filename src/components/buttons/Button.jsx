import { motion } from "framer-motion";
import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      className={`w-full sm:w-auto px-6 py-2 text-base sm:text-lg font-bold 
                  bg-blue-500 text-white hover:bg-white hover:text-blue-500 
                  hover:border-2 hover:border-blue-500 rounded-xl shadow-lg 
                  transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
