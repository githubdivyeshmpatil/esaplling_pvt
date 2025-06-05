import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import go from '../assets/images/logo.png'


function YourComponent({ category, categoryData, isTelevision, formatSubCategoryName, logo }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" sm:px-6 md:px-8 lg:px-10">
      {/* NAVBAR fixed, visible only on scroll */}
      <nav
        className={`fixed top-0  left-0 right-0 flex items-center justify-between px-4 py-3 bg-white text-white rounded-b-md shadow-md z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Back Button */}
        <Link
          to="/consumer-Electronics"
          className="flex items-center text-white underline text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
            className="w-6 h-6 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Logo */}
        <img src={go} alt="Brand Logo" className="h-8 sm:h-10 object-contain" />
      </nav>

    </div>
  );
}

export default YourComponent;

















