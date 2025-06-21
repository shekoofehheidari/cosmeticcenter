import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imggiftcard from "../assets/images/gift-card.jpg";

const GiftCard = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid-cols-1 md:grid-cols-2 gap-8 flex items-center">
        <h1 className="leading-loose font-bold text-m md:text-l text-center md:text-left">
          Choose a Maria Cosmetic Center digital E gift card online. <br />
          Personalize it and instantly send it to friends and family!
        </h1>

        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link to="https://squareup.com/gift/8XPNZYF27AWK8/order">
            <img src={imggiftcard} alt="Gift Card" style={{ width: 400 }} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GiftCard;
