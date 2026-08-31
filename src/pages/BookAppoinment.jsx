import React, { useEffect, useRef, useState } from "react";
import "../pages/pageservice/servicestyle.css";
import { motion } from "framer-motion";
import { Button } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import policyimg from "../assets/images/policy-mcc-scaled.jpg";

const BookAppoinment = () => {
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
  const bookingRef = useRef(null);

  const handleImageClick = () => {
    navigate("/policy");
  };

  const handleBookingClick = () => {
    setShowBooking(true);
  };

  useEffect(() => {
    if (!showBooking || !bookingRef.current) return;

    // Store the current ref value
    const bookingContainer = bookingRef.current;

    // Clear previous widget if necessary
    bookingContainer.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://square.site/appointments/buyer/widget/nsny3vnzgo2qf4/ZVDZB55KV1N67.js";

    script.async = true;

    bookingContainer.appendChild(script);

    return () => {
      bookingContainer.innerHTML = "";
    };
  }, [showBooking]);

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

      {!showBooking && (
        <motion.div
          className="flex justify-center py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button onClick={handleBookingClick}>Book An Appointment</Button>
        </motion.div>
      )}

      {showBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full py-6"
        >
          <div ref={bookingRef} />
        </motion.div>
      )}
    </div>
  );
};

export default BookAppoinment;
