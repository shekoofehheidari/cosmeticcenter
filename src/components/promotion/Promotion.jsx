import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgpromotion from "../../assets/images/ptomotion.jpg";
import imggiftcard from "../../assets/images/gift-card.jpg";

const Promotion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // New motion variant: Fade In + Scale
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center bg-white gap-8 p-6 max-w-5xl mx-auto"
    >
      {/* Promotion Card */}
      <motion.div
        className="md:w-1/2 w-full bg-white rounded-lg overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInScale}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        whileHover={{
          scale: 1.05,
          rotate: 1,
        }}
      >
        <img
          src={imgpromotion}
          alt="Promotion"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Gift Card */}
      <motion.div
        className="md:w-1/2 w-full bg-white rounded-lg overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInScale}
        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
        whileHover={{
          scale: 1.08,
          rotate: -1,
        }}
      >
        <img
          src={imggiftcard}
          alt="Gift Card"
          className="rounded-lg w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Promotion;
