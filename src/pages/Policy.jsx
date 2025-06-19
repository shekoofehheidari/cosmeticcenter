import React from "react";
import "../pages/pageservice/servicestyle.css";
import { motion } from "framer-motion";
import { Button } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const Policy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book-appointment");
  };

  return (
    <div className="custom-container">
      <h1 className="custom-h1">Maria Cosmetic Center Policy (MCC)</h1>
      <p className="custom-p">
        At <span className="font-bold">Maria Cosmetic Center</span>, we value
        your business and time, and appreciate your cooperation with our booking
        and cancellation policy. Your appointments and well-being are very
        important to us. We understand that sometimes, unexpected delays can
        occur, making schedule adjustments. If you need to cancel your
        appointment, we respectfully request at least 24 hour notice.
      </p>
      <h2 className="custom-h2">Our Policy</h2>
      <p className="custom-p">
        Appointments and needs may differ from patient to patient. Appointments
        are also in high demand, and your advanced notice will allow another
        patient access to that appointment time. Our policy is designed in order
        to ensure that we can enable our services to be delivered in a timely
        manner and consequently respect your time. We will kindly ask for a
        $50.00 refundable deposit in order to confirm your appointment, upon
        each appointment scheduling. A cancellation is considered late when the
        appointment is cancelled less than 24 hours before the appointed time. A
        no-show is when a patient misses an appointment without cancelling. In
        either case, we will charge the patient a $50 missed appointment fee.
        This means that the deposit will not be used against the appointment
        fee. If you are more than 24 hours late for your service, we may not be
        able to accommodate you. In this case, the same cancellation fee will
        apply. We will do our very best to reschedule your service for another
        time that is convenient to you. At time of rescheduling, we will again
        require a credit card payment for the appointment deposit to hold your
        appointment. As we value your time and in-clinic experience, ensuring a
        timely schedule is our consequent priority. Please note that late
        arrivals of 5 minutes+ will result in deducting time from your session.
        We may only be able to serve you for certain area(s) or we will have to
        reschedule your appointment. No cancellation/ late fee will apply if you
        arrive late. Please keep in mind that coming consistently not only helps
        us to provide <span className="font-bold"> timely</span> service to our
        clients, but it also ensures you receive the{" "}
        <span className="font-bold"> best results possible </span>best results
        possible. We thank you in advance for your understanding and
        cooperation.
      </p>
      <h2 className="custom-h2">How to Cancel your appointment</h2>
      <p className="custom-p">
        Appointments and needs may differ from patient to patient. Appointments
        are also in high demand, and your advanced notice will allow another
        patient access to that appointment time. Our policy is designed in order
        to ensure that we can enable our services to be delivered in a timely
        manner and consequently respect your time. We will kindly ask for a
        $50.00 refundable deposit in order to confirm your appointment, upon
        each appointment scheduling. If you need to cancel your appointment,
        please call us at <span className="font-bold"> (647) 887-7605</span>{" "}
        between the business hours (Mon – Sun 09:00-21:00) or leave us a text
        message at the same number. You can also kindly email us at{" "}
        <span className="font-bold"> M.COSMETIC.CENTER@GMAIL.COM</span>
        If necessary, you may leave a detailed voicemail.
      </p>

      {/* appoinment button */}
      <motion.div className="flex mt-6 justify-center py-6">
        <Button onClick={handleClick}>Book An Appointment</Button>
      </motion.div>
    </div>
  );
};

export default Policy;
