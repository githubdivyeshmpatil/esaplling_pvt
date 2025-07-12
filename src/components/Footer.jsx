import React, { useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGoogle,
  FaPinterest,
  FaVimeoV,
  FaSnapchatGhost,
  FaSkype,
  FaAndroid,
  FaDribbble,
  FaTumblr,
  FaWifi,
  FaVine,
  FaFoursquare,
  FaStumbleupon,
  FaDiscord,
  FaYCombinator,
  
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { motion, useInView } from "framer-motion";

// Animation variants for staggered links
const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07 + 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Footer = () => {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <footer
      className="relative bg-[#000066] bg-cover bg-center bg-no-repeat text-white pt-12 pb-4 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/footer_newbg.png')` }}
      ref={footerRef}
    >
      <div className="container mx-auto">
        <div className="flex items-center space-x-1 mb-8">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-robo">
              About Us
            </h3>
            <ul className="space-y-2 font-robo">
              {[
                { to: "/about", label: "About Us" },
                { to: "/vison", label: "Vision Mission" },
                { to: "/acquisition", label: "Acquisition" },
                { to: "/certification", label: "Certification" },
                { to: "/quality", label: "Quality Assurance" },
                { to: "/managment", label: "Management" },
                { to: "/recognition", label: "Recognition" },
                { to: "/corporate", label: "Corporate" },
                { to: "#", label: "Facility" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={linkVariants}
                >
                  <Link to={item.to} className="hover:text-gray-300">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Consumer Electronics */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-robo">
              Consumer Electronics
            </h3>
            <ul className="space-y-2 font-robo">
              {[
                { to: "/consumer-electronics/led", label: "LED TV" },
                { to: "/consumer-electronics/split-ac", label: "Air Conditioner" },
                { to: "/consumer-electronics/washing", label: "Washing Machine" },
                { to: "/consumer-electronics/new-desert", label: "Cooler" },
                { to: "/consumer-electronics/refrigerators", label: "Refrigerator" },
                { to: "/consumer-electronics/geysers", label: "Geysers" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    className="hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Auto Air Conditioning */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-robo">
              Auto Air Conditioning
            </h3>
            <ul className="space-y-2 font-robo">
              {[
                { to: "/automotive/autoaircondition", label: "Coach Airconditioning" },
                { to: "/automotive/autoaircondition", label: "Bus" },
                { to: "/automotive/autoaircondition", label: "Truck Chiller" },
                { to: "/automotive/autoaircondition", label: "Frost on the Wheels" },
                { to: "/automotive/autoaircondition", label: "Cabin AirConditioning" },
                { to: "/automotive/autoaircondition", label: "DC Airconditioning" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    className="hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* HVAC */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-robo">
              HVAC
            </h3>
            <ul className="space-y-2 font-robo">
              {[
                { to: "/heating/server_airconditioning", label: "Server Airconditioning" },
                { to: "/heating/elavator_airconditionning", label: "Elevator Airconditioning" },
                { to: "/consumer-electronics/chiller", label: "Chiller" },
                { to: "/hvac/dehumidifier", label: "Dehumidifier" },
                { to: "/hvac/airhandling", label: "Air Handling Unit" },
                { to: "/hvac/ventilation", label: "Ventilation System" },
                { to: "/hvac/evaporative", label: "Evaporative Cooler" },
                { to: "#", label: "Industrial Water Chiller" },
                { to: "/hvac/aircontamination_pro", label: "Air Contamination Protection" },
                { to: "/hvac/hvac_om", label: "HVAC O & M" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    className="hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* HVAC O & M */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-robo">
              HVAC O & M
            </h3>
            <ul className="space-y-2 font-robo">
              {[
                { to: "/services/energymanagment", label: "Energy Management" },
                { to: "/services/eletrical_and_lv", label: "Electrical and LV" },
                { to: "/services/plumbing", label: "Plumbing" },
                { to: "/services/fireprotection", label: "Fire Protection" },
                { to: "/hvac/hvac_om", label: "O & M" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    className="hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Harness */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-robo">
              Harness
            </h3>
            <ul className="space-y-2 font-robo">
              {[
                { to: "/automotive/automotive_page", label: "Automotive" },
                { to: "/services/eletrical_and_lv", label: "Multi purpose AC DC" },
                { to: "/automotive/automotive_page", label: "Generator & Transmission" },
                { to: "/automotive/automotive_page", label: "Consumer Electronics & Telecom" },
                { to: "/automotive/automotive_page", label: "Power System" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    className="hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 gap-4 sm:gap-0 text-center sm:text-left">
          <div className="text-gray-400 text-sm order-2 sm:order-1">
            esaplling© 2025 All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 order-1 sm:order-2">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaGoogle />
            </a>
             <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaDiscord />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaPinterest />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaVimeoV />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaSnapchatGhost />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaSkype />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaAndroid />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaDribbble />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTumblr />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaWifi />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaVine />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFoursquare />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaStumbleupon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaDiscord />
            </a>
             <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaYCombinator />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
