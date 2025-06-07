import React from "react";
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

const Footer = () => {
  return (
    <footer
      className="relative bg-[#000066] bg-cover bg-center bg-no-repeat text-white pt-12 pb-4 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/footer_newbg.png')` }}
    >
      <div className="container mx-auto">
        <div className="flex items-center space-x-1 mb-8">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
          />
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">
              About Us
            </h3>
            <ul className="space-y-2 font-robo">
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vison" className="hover:text-gray-300">
                  Vision Mission
                </Link>
              </li>
              <li>
                <Link to="/acquisition" className="hover:text-gray-300">
                  Acquisition
                </Link>
              </li>
              <li>
                <Link to="/certification" className="hover:text-gray-300">
                  Certification
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-gray-300">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/managment" className="hover:text-gray-300">
                  Management
                </Link>
              </li>
              <li>
                <Link to="/recognition" className="hover:text-gray-300">
                  Recognition
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="hover:text-gray-300">
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Facility
                </Link>
              </li>
            </ul>
          </div>

          {/* Consumer Electronics */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">
              Consumer Electronics
            </h3>
            <ul className="space-y-2 font-robo">
              <li>
                <Link
                  to="/consumer-electronics/led"
                  className="hover:text-gray-300"
                >
                  LED TV
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-electronics/split-ac"
                  className="hover:text-gray-300"
                >
                  Air Conditioner
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-electronics/washing"
                  className="hover:text-gray-300"
                >
                  Washing Machine
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-electronics/new-desert"
                  className="hover:text-gray-300"
                >
                  Cooler
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-electronics/refrigerators"
                  className="hover:text-gray-300"
                >
                  Refrigerator
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-electronics/geysers"
                  className="hover:text-gray-300"
                >
                  Geysers
                </Link>
              </li>
            </ul>
          </div>

          {/* Auto Air Conditioning */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">
              Auto Air Conditioning
            </h3>
            <ul className="space-y-2 font-robo">
              <li>
                <Link
                  to="/automotive/autoaircondition"
                  className="hover:text-gray-300"
                >
                  Coach Airconditioning
                </Link>
              </li>
              <li>
                <Link
                  to="/automotive/autoaircondition"
                  className="hover:text-gray-300"
                >
                  Bus
                </Link>
              </li>
              <li>
                <Link
                  to="/automotive/autoaircondition"
                  className="hover:text-gray-300"
                >
                  Truck Chiller
                </Link>
              </li>
              <li>
                <Link
                  to="/automotive/autoaircondition"
                  className="hover:text-gray-300"
                >
                  Frost on the Wheels
                </Link>
              </li>
              <li>
                <Link
                  to="/automotive/autoaircondition"
                  className="hover:text-gray-300"
                >
                  Cabin AirConditioning
                </Link>
              </li>
              <li>
                <Link
                  to="/automotive/autoaircondition"
                  className="hover:text-gray-300"
                >
                  DC Airconditioning
                </Link>
              </li>
            </ul>
          </div>

          {/* HVAC */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">
              HVAC
            </h3>
            <ul className="space-y-2 font-robo">
              <li>
                <Link
                  to="/heating/server_airconditioning"
                  className="hover:text-gray-300"
                >
                  Server Airconditioning
                </Link>
              </li>
              <li>
                <Link
                  to="/heating/elavator_airconditionning"
                  className="hover:text-gray-300"
                >
                  Elevator Airconditioning
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-electronics/chiller"
                  className="hover:text-gray-300"
                >
                  Chiller
                </Link>
              </li>
              <li>
                <Link to="/hvac/dehumidifier" className="hover:text-gray-300">
                  Dehumidifier
                </Link>
              </li>
              <li>
                <Link to="/hvac/airhandling" className="hover:text-gray-300">
                  Air Handling Unit
                </Link>
              </li>
              <li>
                <Link to="/hvac/ventilation" className="hover:text-gray-300">
                  Ventilation System
                </Link>
              </li>
              <li>
                <Link to="/hvac/evaporative" className="hover:text-gray-300">
                  Evaporative Cooler
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Industrial Water Chiller
                </Link>
              </li>
              <li>
                <Link
                  to="/hvac/aircontamination_pro"
                  className="hover:text-gray-300"
                >
                  Air Contamination Protection
                </Link>
              </li>
              <li>
                <Link to="/hvac/hvac_om" className="hover:text-gray-300">
                  HVAC O & M
                </Link>
              </li>
            </ul>
          </div>

          {/* HVAC O & M */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">
              HVAC O & M
            </h3>
            <ul className="space-y-2 font-robo">
              <li>
                <Link
                  to="/services/energymanagment"
                  className="hover:text-gray-300"
                >
                  Energy Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/eletrical_and_lv"
                  className="hover:text-gray-300"
                >
                  Electrical and LV
                </Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="hover:text-gray-300">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fireprotection"
                  className="hover:text-gray-300"
                >
                  Fire Protection
                </Link>
              </li>
              <li>
                <Link to="/hvac/hvac_om" className="hover:text-gray-300">
                  O & M
                </Link>
              </li>
            </ul>
          </div>

          {/* Harness */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">
              Harness
            </h3>
            <ul className="space-y-2 font-robo">
              <li>
                <Link
                  to="/automotive/automotive_page"
                  className="hover:text-gray-300"
                >
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  to="/services/eletrical_and_lv"
                  className="hover:text-gray-300"
                >
                  Multi purpose AC DC
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Generator & Transmission
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Consumer Electronics & Telecom
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Power System
                </Link>
              </li>
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
