import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-0 text-left">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us...</h3>
          <p className="flex items-center mb-1">
            <FaMapMarkerAlt className="mr-2 text-lg" />
            <span>Address: 55 Eglinton Ave E UNIT 402, Toronto, ON M4P 1G8</span>
          </p>
          <p className="flex items-center mb-4">
            <FaPhoneAlt className="mr-2 text-sm" />
            <span>Phone: tel:+16478877605"</span>
          </p>
        </div>

        {/* Hours of Operation */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Hours Of Operation</h3>
          <p>Monday – Sunday</p>
          <p>9:30 - 8:30</p>
          <p>By Appointment</p>
          <p className="mt-3 text-sm text-gray-400">
            ***Please book your appointment before coming***
          </p>
        </div>

        {/* Social Media */}
        <div className="pt-4 flex items-center space-x-4">
          <span className="text-lg">Follow Us On:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
