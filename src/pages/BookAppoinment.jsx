import React from "react";
import "../pages/pageservice/servicestyle.css";
import { motion } from "framer-motion";
import { Button } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import policyimg from "../assets/images/policy-mcc-scaled.jpg";

const BookAppoinment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open(
      "https://book.squareup.com/appointments/nsny3vnzgo2qf4/location/ZVDZB55KV1N67/services",
      "_blank"
    );
  };

  const handleImageClick = () => {
    navigate("/policy");
  };

  return (
    <div className="custom-container">
      <h1 className="custom-h1">Book An Appointment (MCC)</h1>
      <p className="custom-p">
        Thank you for choosing us. At
        <span className="font-bold"> Maria Cosmetic Center</span>, we value your
        business and time, and appreciate your cooperation with our booking and
        cancellation policy. Please read our policy before booking your
        appointment, and make sure you receive confirmation after booking.
      </p>
      <img
        src={policyimg}
        alt="Booking and Cancellation Policy"
        className="centered-image cursor-pointer w-2/6"
        onClick={handleImageClick}
      />
      <motion.div className="flex justify-center py-2">
        <Button onClick={handleClick}>Book An Appointment</Button>
      </motion.div>
    </div>
  );
};

export default BookAppoinment;
