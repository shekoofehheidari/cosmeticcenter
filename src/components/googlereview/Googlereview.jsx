import React from "react";
import { Button } from "../buttons/Button";
import { motion } from "framer-motion";

const Googlereview = () => {
  const handleClick = () => {
    window.open("https://g.page/your-google-review-link", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="bg-white rounded-xl p-6 shadow-md border">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Hey Dear Client!
          </p>
          <p className="text-base text-gray-700 mb-4">
            Positive reviews from amazing clients like you help others feel confident about choosing Skin Care too. Could you spare 60 seconds to leave us a review? Your feedback means the world to us!
          </p>
          <Button onClick={handleClick} className="mb-0">
            Review us on Google now ...
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Googlereview;
