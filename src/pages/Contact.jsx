import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/buttons/Button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-start">
      {/* ───── Page Header ───── */}
      <header className="bg-white shadow-sm w-full">
        <div className="max-w-6xl mx-auto px-4 py-6 text-left">
          <h1 className="text-3xl font-semibold text-gray-900">Contact</h1>
        </div>
      </header>

      {/* ───── Info Boxes ───── */}
      <section className="w-full max-w-6xl px-4 py-16 pl-40 pr-16 ">
        <div className="flex flex-col md:flex-row gap-6 justify-start">
          {/* Phone */}
          <div className="flex-1 bg-rose-400 border border-rose-500 rounded-md px-6 py-4 shadow-sm text-left">
            <Phone className="text-white mb-1" />
            <p className="text-lg font-bold text-white">+1 (647) 887 7605</p>
          </div>

          {/* Email */}
          <div className="flex-1 bg-rose-400 border border-rose-300 rounded-md px-6 py-4 shadow-sm text-left">
            <Mail className="text-white mb-1" />
            <p className="text-lg font-bold text-white">
              m.cosmetic.center@gmail.com
            </p>
          </div>

          {/* Address */}
          <div className="flex-1 bg-rose-400 border border-rose-300 rounded-md px-6 py-4 shadow-sm text-left">
            <MapPin className="text-white mb-1" />
            <p className="text-lg font-bold text-white">
              55 Eglinton Ave E UNIT 402, Toronto, ON M4P 1G8
            </p>
          </div>
        </div>
      </section>

      {/* ───── Contact Form ───── */}
      <section className="w-full px-4 md:px-24 pb-16">
        <h1 className="text-left pl-4 md:pl-16 text-2xl font-medium text-rose-500 mb-4">
          Leave us a message...
        </h1>
        <div className="max-w-6xl mx-auto pl-4 md:pl-16 pr-4 md:pr-16">
          <form className="bg-white border border-rose-500 rounded-md px-6 py-4 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* First Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="firstName"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="lastName"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="message"
              >
                Message…
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-right">
              <motion.div className="mt-6 inline-block">
                <Button onClick={() => console.log("Form submitted")}>
                  Send
                </Button>
              </motion.div>
            </div>
          </form>

          {/* ───── Google Map ───── */}
          <div className="mt-12 text-left">
            <h1 className="text-2xl font-medium text-rose-500 mb-4">
              Our Location
            </h1>
            <div className="w-full h-64 md:h-96">
              <iframe
                title="Maria Cosmetic Center Map"
                src="https://www.google.com/maps?q=Maria%20Cosmetic%20Center%2C%2055%20Eglinton%20Ave%20E%20UNIT%20402%2C%20Toronto%2C%20ON%20M4P%201G8%2C%20Canada&output=embed"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0 rounded-md shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
