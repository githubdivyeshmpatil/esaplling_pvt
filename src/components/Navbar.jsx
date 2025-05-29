import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent md:bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-gray-500">HOME</Link></li>
          <li><Link to="/consumer-Electronics" className="hover:text-gray-500">Consumer Electronics</Link></li>
          <li><Link to="/" className="hover:text-gray-500">HVAC</Link></li>
          <li><Link to="/about-us" className="hover:text-gray-500">Automotive</Link></li>
          <li><Link to="/services" className="hover:text-gray-500">Biomedical</Link></li>
          <li><Link to="/shop" className="hover:text-gray-500">OEM</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Services</Link></li>
          <li><Link to="/" className="hover:text-gray-500">Innovation</Link></li>
          <li><Link to="/about-us" className="hover:text-gray-500">News</Link></li>
          <li><Link to="/services" className="hover:text-gray-500">Investor</Link></li>
          <li><Link to="/shop" className="hover:text-gray-500">Support</Link></li>
          <li><Link to="/shop" className="hover:text-gray-500">Street</Link></li>

          {/* Language Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-gray-500">
              <span>Select language</span>
              <ChevronDown size={16} />
            </div>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-md min-w-[120px]">
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">English</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Hindi</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Spanish</Link></li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <button
            className="text-black"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <ul className="p-4 space-y-4 text-sm font-medium text-gray-700">
          <li><Link to="/" className="hover:text-gray-500">HOME</Link></li>
          <li><Link to="/consumer-Electronics" className="hover:text-gray-500">Consumer Electronics</Link></li>
          <li><Link to="/" className="hover:text-gray-500">Consumer Electronics</Link></li>
          <li><Link to="/" className="hover:text-gray-500">HVAC</Link></li>
          <li><Link to="/about-us" className="hover:text-gray-500">Automotive</Link></li>
          <li><Link to="/services" className="hover:text-gray-500">Biomedical</Link></li>
          <li><Link to="/shop" className="hover:text-gray-500">OEM</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Services</Link></li>
          <li><Link to="/" className="hover:text-gray-500">Innovation</Link></li>
          <li><Link to="/about-us" className="hover:text-gray-500">News</Link></li>
          <li><Link to="/services" className="hover:text-gray-500">Investor</Link></li>
          <li><Link to="/shop" className="hover:text-gray-500">Support</Link></li>
          <li><Link to="/shop" className="hover:text-gray-500">Street</Link></li>

          {/* Mobile Language Options */}
          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">Select Language</p>
            <ul className="space-y-2 mt-2">
              <li><Link to="#" className="hover:text-gray-500">English</Link></li>
              <li><Link to="#" className="hover:text-gray-500">Hindi</Link></li>
              <li><Link to="#" className="hover:text-gray-500">Spanish</Link></li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}
