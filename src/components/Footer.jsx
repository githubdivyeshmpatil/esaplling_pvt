import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGoogle ,FaPinterest,FaVimeoV,FaSnapchatGhost,FaSkype ,FaAndroid , FaDribbble ,FaTumblr,FaWifi} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    
<footer
  className="relative bg-[#000066] bg-cover bg-center bg-no-repeat text-white pt-12 pb-4 px-4 sm:px-6 lg:px-8"
  style={{ backgroundImage: `url('/img/footer_newbg.png')` }} // change to your image path
>      <div className="container mx-auto">
        <div className="flex items-center space-x-1 mb-8">
          <img src={logo} alt="Logo" className="h-20 w-20 sm:h-24 sm:w-24 object-contain" />
        </div>

        {/* Responsive grid columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">About Us</h3>
            <ul className="space-y-2 font-robo">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/vison" className="hover:text-gray-300">Vision Mission</a></li>
              <li><a href="/acquisition" className="hover:text-gray-300">Acquisition</a></li>
              <li><a href="/certification" className="hover:text-gray-300">Certification</a></li>
              <li><a href="/quality" className="hover:text-gray-300">Quality Assurance</a></li>
              <li><a href="/managment" className="hover:text-gray-300">Management</a></li>
              <li><a href="/recognition" className="hover:text-gray-300">Recognition</a></li>
              <li><a href="/corporate" className="hover:text-gray-300">Corporate</a></li>
              <li><a href="#" className="hover:text-gray-300">Facility</a></li>
            </ul>
          </div>

          {/* Consumer Electronics Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">Consumer Electronics</h3>
            <ul className="space-y-2 font-robo">
              <li><a href="/consumer-electronics/led" className="hover:text-gray-300">LED TV</a></li>
              <li><a href="/consumer-electronics/split-ac" className="hover:text-gray-300">Air Conditioner</a></li>
              <li><a href="/consumer-electronics/washing" className="hover:text-gray-300">Washing Machine</a></li>
              <li><a href="/consumer-electronics/new-desert" className="hover:text-gray-300">Cooler</a></li>
              <li><a href="/consumer-electronics/refrigerators" className="hover:text-gray-300">Refrigerator</a></li>
              <li><a href="/consumer-electronics/geysers" className="hover:text-gray-300">Geysers</a></li>
            </ul>
          </div>

          {/* Auto Air Conditioning Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">Auto Air Conditioning</h3>
            <ul className="space-y-2 font-robo">
              <li><a href="#" className="hover:text-gray-300">Coach Airconditioning</a></li>
              <li><a href="#" className="hover:text-gray-300">Bus</a></li>
              <li><a href="#" className="hover:text-gray-300">Truck Chiller</a></li>
              <li><a href="#" className="hover:text-gray-300">Frost on the Wheels</a></li>
              <li><a href="#" className="hover:text-gray-300">Cabin AirConditioning</a></li>
              <li><a href="#" className="hover:text-gray-300">DC Airconditioning</a></li>
            </ul>
          </div>

          {/* HVAC Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">HVAC</h3>
            <ul className="space-y-2 font-robo">
              <li><a href="#" className="hover:text-gray-300">Server Airconditioning</a></li>
              <li><a href="#" className="hover:text-gray-300">Elevator Airconditioning</a></li>
              <li><a href="#" className="hover:text-gray-300">Chiller</a></li>
              <li><a href="#" className="hover:text-gray-300">Dehumidifier</a></li>
              <li><a href="#" className="hover:text-gray-300">Air Handling Unit</a></li>
              <li><a href="#" className="hover:text-gray-300">Ventilation System</a></li>
              <li><a href="#" className="hover:text-gray-300">Evaporative Cooler</a></li>
              <li><a href="#" className="hover:text-gray-300">Industrial Water Chiller</a></li>
              <li><a href="#" className="hover:text-gray-300">Air Contamination Protection</a></li>
              <li><a href="#" className="hover:text-gray-300">HVAC O & M</a></li>
            </ul>
          </div>

          {/* HVAC O & M Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">HVAC O & M</h3>
            <ul className="space-y-2 font-robo">
              <li><a href="#" className="hover:text-gray-300">Energy Management</a></li>
              <li><a href="#" className="hover:text-gray-300">Electrical and LV</a></li>
              <li><a href="#" className="hover:text-gray-300">Plumbing</a></li>
              <li><a href="#" className="hover:text-gray-300">Fire Protection</a></li>
              <li><a href="#" className="hover:text-gray-300">O & M</a></li>
            </ul>
          </div>

          {/* Harness Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 uppercase font-os">Harness</h3>
            <ul className="space-y-2 font-robo">
              <li><a href="#" className="hover:text-gray-300">Automotive</a></li>
              <li><a href="#" className="hover:text-gray-300">Multi purpose AC DC</a></li>
              <li><a href="#" className="hover:text-gray-300">Generator & Transmission</a></li>
              <li><a href="#" className="hover:text-gray-300">Consumer Electronics & Telecom</a></li>
              <li><a href="#" className="hover:text-gray-300">Power System</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
<div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 gap-4 sm:gap-0 text-center sm:text-left">
  <div className="text-gray-400 text-sm order-2 sm:order-1">
    esaplling© 2025 All Rights Reserved
  </div>
  <div className="flex flex-wrap justify-center sm:justify-end gap-4 order-1 sm:order-2">
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
     <a href="#" className="text-gray-400 hover:text-white text-xl">  <FaGoogle /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl">      <FaPinterest />
</a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaVimeoV /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"> <FaSnapchatGhost /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaSkype /></a>
     <a href="#" className="text-gray-400 hover:text-white text-xl"> <FaAndroid /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"> <FaDribbble /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTumblr /></a>
    <a href="#" className="text-gray-400 hover:text-white text-xl"> <FaWifi /></a>

    
    {/* Repeat icons if needed, but ideally avoid redundancy */}
  </div>
</div></div>

    </footer>
  );
};

export default Footer;
