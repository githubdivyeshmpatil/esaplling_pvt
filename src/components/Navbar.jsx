// import { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../assets/images/logo.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 p-2 shadow-md transition-all duration-300 ${
//         isScrolled ? "bg-white" : "bg-transparent md:bg-white"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center relative text-[#000000] text-md">
//         {/* Logo */}
//         <div className="flex items-center space-x-1">
//           <img src={logo} alt="Logo" className="h-24 w-24 object-contain" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-12 absolute left-1/2 transform -translate-x-1/2 ml-4">
//           <li><a href="/" className="hover:text-gray-400 font-poppins">HOME</a></li>
//           <li><a href="/" className="hover:text-gray-400">Consumer Electronics</a></li>
//           <li><a href="/" className="hover:text-gray-400">HVAC</a></li>
//           <li><a href="/about-us" className="hover:text-gray-400">Automotive</a></li>
//           <li><a href="/services" className="hover:text-gray-400">Biomedical</a></li>
//           <li><a href="/shop" className="hover:text-gray-400">OEM</a></li>
//           <li><a href="/contact" className="hover:text-gray-400">Services</a></li>
//           <li><a href="/" className="hover:text-gray-400">Innvoation</a></li>
//           <li><a href="/about-us" className="hover:text-gray-400">News</a></li>
//           <li><a href="/services" className="hover:text-gray-400">Investor</a></li>
//           <li><a href="/shop" className="hover:text-gray-400">Support</a></li>
//          <li><a href="/shop" className="hover:text-gray-400">Street</a></li>


//           {/* Street with Language Dropdown */}
//           <li className="relative group">
//             <div className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
//               <a href="/contact">Select language</a>
//               <ChevronDown size={16} />
//             </div>
//             <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded-md min-w-[120px] z-50">
//               <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a></li>
//               <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Hindi</a></li>
//               <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Spanish</a></li>
//             </ul>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
//             {isOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>
//       </div>

//       {/* Sidebar for Mobile */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden p-5`}
//       >
//         <button
//           className="text-white text-xl mb-5 focus:outline-none"
//           onClick={() => setIsOpen(false)}
//         >
//           <X size={30} />
//         </button>

//         <ul className="space-y-4 text-lg text-white">
//           <li><a href="/" className="hover:text-gray-400">HOME</a></li>
//           <li><a href="/about-us" className="hover:text-gray-400">ABOUT-US</a></li>
//           <li><a href="/services" className="hover:text-gray-400">SERVICES</a></li>
//           <li><a href="/shop" className="hover:text-gray-400">SHOP</a></li>
//           <li><a href="/contact" className="hover:text-gray-400">CONTACT</a></li>
//           <li className="hover:text-gray-400">Street</li>
//           <div className="ml-4 text-sm space-y-2">
//             <li><a href="#" className="text-white hover:text-gray-400">English</a></li>
//             <li><a href="#" className="text-white hover:text-gray-400">Hindi</a></li>
//             <li><a href="#" className="text-white hover:text-gray-400">Spanish</a></li>
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// }











import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../assets/images/logo.png'

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
          <li><a href="/" className="hover:text-gray-500">HOME</a></li>
          <li><a href="/" className="hover:text-gray-500">Consumer Electronics</a></li>
          <li><a href="/" className="hover:text-gray-500">HVAC</a></li>
          <li><a href="/about-us" className="hover:text-gray-500">Automotive</a></li>
          <li><a href="/services" className="hover:text-gray-500">Biomedical</a></li>
          <li><a href="/shop" className="hover:text-gray-500">OEM</a></li>
          <li><a href="/contact" className="hover:text-gray-500">Services</a></li>
          <li><a href="/" className="hover:text-gray-500">Innovation</a></li>
          <li><a href="/about-us" className="hover:text-gray-500">News</a></li>
          <li><a href="/services" className="hover:text-gray-500">Investor</a></li>
          <li><a href="/shop" className="hover:text-gray-500">Support</a></li>
          <li><a href="/shop" className="hover:text-gray-500">Street</a></li>

          {/* Language Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-gray-500">
              <span>Select language</span>
              <ChevronDown size={16} />
            </div>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-md min-w-[120px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Hindi</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Spanish</a></li>
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
        className={`fixed top-0 left-0 h-full w-64 bg-[#1e3a8a] z-40 transform ${
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
          <li><a href="/" className="hover:text-gray-500">HOME</a></li>
          <li><a href="/" className="hover:text-gray-500">Consumer Electronics</a></li>
          <li><a href="/" className="hover:text-gray-500">HVAC</a></li>
          <li><a href="/about-us" className="hover:text-gray-500">Automotive</a></li>
          <li><a href="/services" className="hover:text-gray-500">Biomedical</a></li>
          <li><a href="/shop" className="hover:text-gray-500">OEM</a></li>
          <li><a href="/contact" className="hover:text-gray-500">Services</a></li>
          <li><a href="/" className="hover:text-gray-500">Innovation</a></li>
          <li><a href="/about-us" className="hover:text-gray-500">News</a></li>
          <li><a href="/services" className="hover:text-gray-500">Investor</a></li>
          <li><a href="/shop" className="hover:text-gray-500">Support</a></li>
          <li><a href="/shop" className="hover:text-gray-500">Street</a></li>

          {/* Mobile Language Options */}
          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">Select Language</p>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:text-gray-500">English</a></li>
              <li><a href="#" className="hover:text-gray-500">Hindi</a></li>
              <li><a href="#" className="hover:text-gray-500">Spanish</a></li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}
