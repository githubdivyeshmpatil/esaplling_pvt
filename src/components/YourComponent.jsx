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

  return (
    <div className=" sm:px-6 md:px-8 lg:px-10">
      {/* NAVBAR fixed, visible only on scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white text-white rounded-b-md shadow-md z-50 transition-transform duration-300 ${
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






























//  {
//         id: 2,
//         name: "ESAP32SLED (80cm)",
//         dis: "Esaplling Series 80 cm (32  inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
//         img: "/img/LED1.png",
//         price: 54999,
//         cutPrice: 79999,
//         offer: "31% OFF",
//       },
//       {
//         id: 3,
//         name: "ESAP40LED (102cm)",
//         dis: "Esaplling Series 102 cm (40  inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | HDMI x 2, USB x 2|  Earphone Jack | SuperLuma |AV IN x 2 |Turbo Sound",
//         img: "/img/LED2.png",
//         price: 48999,
//         cutPrice: 72999,
//         offer: "33% OFF",
//       },
//       {
//         id: 4,
//         name: "ESAP40SLED (102cm)",
//         dis: "Esaplling Series 102 cm (40  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
//         img: "/img/LED3.png",
//         price: 28999,
//         cutPrice: 39999,
//         offer: "28% OFF",
//       },
//       {
//         id: 5,
//         name: "ESAP42LED (106cm)",
//         dis: "Esaplling Series 106 cm (42  inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
//         img: "/img/LED4.png",
//         price: 54999,
//         cutPrice: 79999,
//         offer: "31% OFF",
//       },
//       {
//         id: 6,
//         name: "ESAP42SLED (106cm)",
//         dis: "Esaplling Series 106 cm (42  inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
//         img: "/img/LED5.png",
//         price: 48999,
//         cutPrice: 72999,
//         offer: "33% OFF",
//       },
//       {
//         id: 7,
//         name: "ESAP48LED (122cm)",
//         dis: "Esaplling Series 122 cm (48  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
//         img: "/img/LED6.png",
//         price: 28999,
//         cutPrice: 39999,
//         offer: "28% OFF",
//       },
//       {
//         id: 8,
//         name: "ESAP55SLED (140cm)",
//         dis: "Esaplling Series 140 cm (55  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
//         img: "/img/LED7.png",
//         price: 28999,
//         cutPrice: 39999,
//         offer: "28% OFF",
//       },
//     ],
//     iptv: [
//       {
//         id: 9,
//         name: "Jio IPTV Box",
//         dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
//         img: "/img/iptv1.png",
//         price: 1999,
//         cutPrice: 2999,
//         offer: "33% OFF",
//       },
//       {
//         id: 10,
//         name: "Airtel Xstream Box",
//         dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
//         img: "/img/iptv2.png",
//         price: 2499,
//         cutPrice: 3499,
//         offer: "29% OFF",
//       },
//     ],
//     interactivePanel: [
//       {
//         id: 11,
//         name: "BenQ Interactive Panel",
//         dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
//         img: "/img/intractive1.png",
//         price: 85000,
//         cutPrice: 95000,
//         offer: "11% OFF",
//       },
//       {
//         id: 12,
//         name: "Samsung Flip Board",
//         dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
//         img: "/img/intractive2.png",
//         price: 92000,
//         cutPrice: 105000,
//         offer: "12% OFF",
//       },
//       {
//         id: 13,
//         name: "BenQ Interactive Panel",
//         dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
//         img: "/img/intractive3.png",
//         price: 85000,
//         cutPrice: 95000,
//         offer: "11% OFF",
//       },
//     ],
//     vds: [
//       {
//         id: 14,
//         name: "LG VDS Display",
//         dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
//         img: "/img/vds2.png",
//         price: 112000,
//         cutPrice: 125000,
//         offer: "10% OFF",
//       },
//       {
//         id: 15,
//         name: "LG VDS Display",
//         dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
//         img: "/img/vds3.png",
//         price: 112000,
//         cutPrice: 125000,
//         offer: "10% OFF",
//       },
//     ],
//     lfd: [
//       {
//         id: 16,
//         name: 'Sony LFD 55"',
//         dis: "ProView LFD – 190 cm (75 inch) Large Format Display | Ultra HD 4K Resolution | Slim Bezel Design | HDMI x 2, USB x 2, VGA, DP | High Brightness Panel (500 nits) | 24/7 Commercial-Grade Operation | Wall Mount Ready | Anti-Glare Coating | Ideal for Digital Signage, Retail, Airports & Corporate Environments",
//         img: "/img/lfd1.jpg",
//         price: 99000,
//         cutPrice: 110000,
//         offer: "10% OFF",
//       },
//     ],
    
//    boardRoomSolution: [
//       {
//         id: 17,
//         name: "Cisco Board Room Kit",
//         dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
//         img: "/img/board1.png",
//         price: 120000,
//         cutPrice: 140000,
//         offer: "14% OFF",
//       },