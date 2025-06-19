import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgpromotion from "../../assets/images/ptomotion.jpg";
import imggiftcard from "../../assets/images/gift-card.jpg";

const Promotion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center bg-white gap-8 p-6 max-w-5xl mx-auto"
    >
      <motion.div
        className="md:w-1/2 w-full bg-white border rounded-lg overflow-hidden shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={imgpromotion}
          alt="Promotion"
          className="rounded-lg w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2 w-80% bg-white border rounded-lg overflow-hidden shadow transition-transform duration-300 hover:scale-120 hover:shadow-lg"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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
