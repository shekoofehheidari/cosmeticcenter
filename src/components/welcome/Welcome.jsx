import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gwhite py-4 sm:py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-cinzel text-transparent bg-clip-text bg-gray-500 drop-shadow-sm mb-2">
            Are You Ready for a New & Better You?
          </h1>
          <br />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-cinzel text-transparent bg-clip-text bg-gray-600 drop-shadow-sm mb-2">
            Services
          </h1>
          <p className="text-gray-800">
            See all our services through the menu ...
          </p>
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-20 blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Welcome;
