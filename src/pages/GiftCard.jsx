import React from "react";
import imggiftcard from "../assets/images/gift-card.jpg";
import { Link } from 'react-router-dom';

const GiftCard = () => {
  return (
    <div className="container mx-auto px-4 py-36">
      <div className="grid-cols-1 md:grid-cols-2 gap-8 flex items-center">
        <h1 className="leading-loose font-bold ">
          Choose a Maria Cosmetic Center digital E gift card online. <br />
          Personalize it and instantly send it to friends and family!
        </h1>
        <div className="flex justify-center">

          <Link to="https://squareup.com/gift/8XPNZYF27AWK8/order">
            <img src={imggiftcard} alt="Gift Card" style={{ width: 500 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
