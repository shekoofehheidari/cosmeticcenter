import { motion } from "framer-motion";
import React from "react";
import { ArrowRight } from "lucide-react";

export const CircleButton = ({ className = "", icon = <ArrowRight size={16} />, ...props }) => {
  return (
    <motion.button
      className={`w-10 h-10 rounded-full border bg-blue-500 
                  hover:border-blue-500 hover:text-blue-500
                  flex items-center justify-center text-white 
                  hover:bg-transparent transition-colors duration-300 
                  ${className}`}
      whileHover={{ rotate: 360, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {icon}
    </motion.button>
  );
};
