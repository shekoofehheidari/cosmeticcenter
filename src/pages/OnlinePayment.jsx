import React from "react";
import "../pages/pageservice/servicestyle.css";
import "./pageservice/servicestyle.css";
import { Link } from "react-router-dom";

import paypal from "../assets/images/Pay-Now.png";
import paymethods from "../assets/images/paymethods.jpg";
import checkoutqrcode from "../assets/images/checkout-link-qr-code.png";

const OnlinePayment = () => {
  return (
    <div className="px-4 py-8 max-w-3xl mx-auto text-left">
      <h1 className="text-2xl font-bold mb-4 text-rose-400 pt-16">
        Online Payment
      </h1>
      <p className="custom-p">
        Cosmetic Procedure Payment Methods Accepted at Maria Cosmetic Center.
        Cosmetic procedures are elective, they are not covered by either private
        insurance or provincial health care. To help you manage the expense, we
        accept a variety of convenient payment methods.
      </p>
      <lu>
        <li>Major credit cards and prepaid credit cards (Visa, MasterCard)</li>
        <li>Some debit cards that can be processed as credit</li>
        <li>Interac | e-Transfer (m.cosmetic.center@gmail.com)</li>
        <li> PayPal</li>
        <li>Pay Online</li>
        <li>Cash</li>
      </lu>
      <img
        src={paymethods}
        alt="Payment Methods"
        className="centered-image w-4/12"
      />
      <Link to="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f134695141fc8&mfid=1748957369758_f134695141fc8#/checkout/openButton">
        <img
          src={paypal}
          alt="Paypal payment"
          className="centered-image w-3/12"
        />
      </Link>
      <Link to="https://checkout.square.site/merchant/8XPNZYF27AWK8/checkout/XFMXDUYBXB3OROXNTTDYVXHL">
        <img
          src={checkoutqrcode}
          alt="checkout-link-qr-code"
          className="centered-image w-2/12"
        />
      </Link>
    </div>
  );
};

export default OnlinePayment;
