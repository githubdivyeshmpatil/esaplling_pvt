import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import home_ab from "../assets/images/home_ab.png"

import { useTranslation } from 'react-i18next';
import ctmri from '../assets/images/ctmri.png'
import t1 from "../assets/images/nav_led.png";
import t2 from "../assets/images/nav2.png";
import t3 from "../assets/images/nav4.png";
import t4 from "../assets/images/nav6.png";
import t5 from "../assets/images/nav5.png";
import T6 from "../assets/images/nav3.png";
import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useRef } from "react";


export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, amount: 0.2 });

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
  name: t("home"),
  link: "/",
  dropdown: {
    title: t("home_menu"),
    columns: [
      {
        items: [
          { name: t("know_us"), link: "" },
          { name: t("about_us"), link: "/about" },
          { name: t("vision_mission"), link: "/vison" },
          { name: t("acquisition"), link: "/acquisition" },
          { name: t("certification"), link: "/certification" },
          { name: t("quality_assurance"), link: "/quality" },
          { name: t("management"), link: "/managment" },
          { name: t("recognition"), link: "/recognition" },
          { name: t("corporate"), link: "/corporate" },
          { name: t("facility"), link: "/" },
          { name: t("industry"), link: "/" },
          { name: t("expansions"), link: "/" },
          { name: t("collaboration"), link: "/" },
        ],
      },
    ],
  },
}
,
    {
      name: t("Consumer Electronics"),
      link: "/",
      dropdown: {
        title: "ESAPLLING® Electronics",
        columns: [
          {
            title: "televisions",
            titleImage: t1,
            items: [
               { name: t("led"), link: "/consumer-electronics/led" },
                { name: t("LED 65"), link: "/consumer-electronics/led" },
                 { name: ("LED 75-85"), link: "/consumer-electronics/led" },
                { name: ("Small Appliances"), link: "/consumer-electronics/small_appliances" },

            ],
          },
          {
            title: t("air conditioners"),
            titleImage: t2,
            items: [
              { name: t("Air Conditioner"), link: "/consumer-electronics/split-ac" },
                 { name: t("Cassate"), link: "/consumer-electronics/split-ac" },
    { name: t("Vrf"), link: "/consumer-electronics/vrf" },
        { name: t("Elavator Ac"), link: "/consumer-electronics/chiller" },
    { name: t("chiller"), link: "/consumer-electronics/chiller" },
            ],
          },
          {
            title: "cooler",
            titleImage: t3,
            items: [
              { name: t("Evaporative cooler"), link: "/consumer-electronics/cooler" },
    { name: t("New_desert"), link: "/consumer-electronics/cooler" },
        { name: t("Personal Cooler"), link: "/consumer-electronics/cooler" },
                { name: t("Commercial Cooler"), link: "/consumer-electronics/cooler" },


            ],
          },
          {
            title: "refrigerators",
            titleImage: t4,
            items: [
                 { name: t("Refrigerators"), link: "/consumer-electronics/refrigerators" },
                                  { name: t("Visi Cooler"), link: "/consumer-electronics/visicooler" },

            ],
          },
          {
            title: "washing",
            titleImage: t5,
            items: [{ name: t("washing Machine"), link: "/consumer-electronics/washing" },
              { name: t("Automatic washing Machine"), link: "/consumer-electronics/washing" },
            ],
          },
          {
            title: "geysers",
            titleImage: T6,
            items: [ { name: t("Insta Geyser - 2L"), link: "/consumer-electronics/geysers" },
              { name: t("Geyser 5L-25L "), link: "/consumer-electronics/geysers" },
               { name: t("Commerical Geyser 100L-500L "), link: "/consumer-electronics/geysers" },
            ],
            
          },
        ],
      },
    },
    {
      name: "HVAC",
      link: "/",
      dropdown: {
        title: "ESAPLLING® HVAC",
        titleLink: "/hvac",
        columns: [
          {
            title: "Product",
            titleLink: "/hvac/product",
            items: [
              { name: "New Ac Product", link: "/" },
              { name: "Solar", link: "/" },
              { name: "Elavator", link: "/" },
              { name: "Air Monitor - Aero Star", link: "/hvac/aerostar" },
            ],
          },
          {
            title: "HVAC",
            titleLink: "/hvac/new_hvac",
            items: [
              { name: "Chiler", link: "/hvac/chillerDis" },
              { name: "Dehumidifier", link: "/hvac/dehumidifier" },
              { name: "Air Handling Unit", link: "/hvac/airhandling" },
              { name: "Ventilation System", link: "/hvac/ventilation" },
              { name: "Evaporative Cooler", link: "/hvac/evaporative" },
              {
                name: "Industrial Water Chiller",
                link: "/",
              },
              {
                name: "Air Contamination Protection",
                link: "/hvac/aircontamination_pro",
              },

              { name: "HVAC O & M", link: "/hvac/hvac_om" },
            ],
          },
          {
            title: "Heating",
            titleLink: "/hvac/heating",
            items: [
              {
                name: "Server Airconditioning",
                link: "/heating/server_airconditioning",
              },
              {
                name: "Elavator Airconditioning",
                link: "/heating/elavator_airconditionning",
              },
            ],
          },
          {
            title: "Vantilation",
            titleLink: "/hvac/heating",
            items: [
              {
                name: " Industrial Vantilation",
                link: "/hvac/ventilation",
              },
              {
                name: " Tunnel Vantilation",
                link: "/",
              },
              {
                name: " Critical Vantilation",
                link: "/",
              },
            ],
          },
          {
            title: "Filter",
            titleLink: "/filter/filter_ephox",
            items: [
              { name: "Filter Ephox", link: "/filter/filter_ephox" },
              { name: "Filter Afox", link: "/filter/filter_aphox" },
              { name: "Filter Aktion", link: "/filter/filter_aktion" },
              { name: "Filter Air Muller", link: "/filter/filter_muller" },
            ],
          },
        ],
      },
    },
    {
      name: "Automotive",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Automotive",
        columns: [
          {
            title: "Product",
            items: [
              { name: "New Ac Product", link: "/" },
              { name: "Solar", link: "/" },

              {
                name: "Elavator",
                link: "/",
              },
              { name: "Pedostal", link: "/" },
            ],
          },
          {
            title: "Harness",
            titleLink: "/automotive/automotive_page",
            items: [
              { name: "Automotive", link: "/automotive/automotive_page" },
              {
                name: "Multi purpose AC DC",
                link: "/automotive/automotive_page",
              },
              { name: "Generator & Transmission", link: "/" },
              { name: "Consumer Electronics & Telecom", link: "/" },
              { name: "Power System", link: "/" },
            ],
          },
          {
            title: "Auto Air Conditioning",
              titleLink: "/automotive/autoaircondition",
            items: [
              {
                name: "Coach Airconditioning",
                link: "/automotive/autoaircondition",
              },
              {
                name: "Bus",
                link: "/",
              },
              { name: "Trcuk Chiller", link: "/" },
              { name: "Frost on the Wheels", link: "/" },
              { name: "Cabin Airconditioning", link: "/" },
              { name: "DC Airconditioning", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Biomedical",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Biomedical",
        columns: [
          {
            title: "Life Science devices",
            items: [
              { name: "CT Scan", link: "/biomedical/ct_scan" },
              { name: "MRI", link: "/" },
            ],
          },
          {
            title: "Life Science ",
            items: [
              {
                name: "Masks-Breath Safe",
                link: "/biomedical/mask_breathsafe",
              },
              { name: "Ventilator", link: "/biomedical/ventilator" },
              { name: "Patient Montior", link: "/" },
              { name: "E-ECG", link: "/" },
              { name: "Thermometer", link: "/biomedical/thermometer" },
              { name: "Air Monitor-Aero Star", link: "/biomedical/aerostar" },
            ],
          },
          {
            title: "Healthcare Solution",
            items: [
              { name: "Diagnosis", link: "/" },
              { name: "Simulation", link: "/" },
              { name: "Robotics", link: "/" },
              { name: "Skill Development", link: "/" },
              { name: "OR Solution", link: "/" },
            ],
          },
          {
            title: "Rent a device",
            items: [{ name: "Rent a device", link: "/" }],
          },
        ],
      },
    },
    {
      name: "OEM",
      link: "/",
      dropdown: {
        title: "ESAPLLING® OEM",
        columns: [
          {
            title: "Products",
            items: [
              { name: "LED TV", link: "/" },
              { name: "Appliances", link: "/" },
              { name: "Harness", link: "/automotive/automotive_page" },
              { name: "Cooler", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Intractive Panal",
      link: "https://esaplling-panel.vercel.app/",
      dropdown: {
        title: "ESAPLLING® OEM",
        columns: [
          
        ],
      },
    },
    {
      name: "Services",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Services",
        columns: [
          {
            title: "Featured",
            items: [
              { name: "Turnkey Project", link: "/" },
              { name: "Airconditioning Ventilation System", link: "/" },
              { name: "Operation & Maintainance", link: "/" },
            ],
          },
          {
            title: "HVAC O & M",
            items: [
              { name: "Energy Managment", link: "/services/energymanagment" },
              { name: "Electrical and LV", link: "/services/eletrical_and_lv" },
              { name: "Plumbing", link: "/services/plumbing" },
              { name: "Fire Protection", link: "/services/fireprotection" },
              { name: "O & M", link: "/hvac/hvac_om" },
            ],
          },
          {
            title: "Design Build Operate Transfer",
            items: [
              { name: "HVAC Industry", link: "/" },
              { name: "HVAC Office and Shopping", link: "/" },
              { name: "Industrial Ventilation", link: "/" },
            ],
          },
          {
            title: "Accessories & Spare",
            items: [
              { name: "HAVC", link: "/hvac/new_hvac" },
              { name: "Aircondtioning", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Innovation",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Innovation",
        columns: [
          {
            items: [
              { name: "Plant Setup", link: "/innovation/plant_setup" },
              { name: "PSA Oxygen Plant", link: "/" },
              {
                name: "Cryogenic oxygen plant - Refill Center",
                link: "/",
              },
            ],
          },
          {
            items: [
              { name: "Modular Setup", link: "/" },
              { name: "Medical Gas Pipeline System", link: "/" },
              { name: "Laboratory Setup", link: "/" },
            ],
          },
          {
            items: [
              { name: "All Accessories", link: "/" },
              { name: "Service Support", link: "/" },
              { name: "Biomedical Engineer Support", link: "/" },
              { name: "Spare", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "News",
      link: "/",
      dropdown: {
        title: "ESAPLLING® News",
        columns: [
          {
            items: [
              { name: "Blog", link: "/news/blog" },
              { name: "2020", link: "/" },
              { name: "2019", link: "/" },
              { name: "Quaterly Review", link: "/" },
            ],
          },
          {
            items: [
              { name: "Market Research", link: "/" },
              { name: "White Paper", link: "/" },
              { name: "Celebrating Works", link: "/" },
              { name: "Skill Development - News", link: "/" },
            ],
          },
          {
            items: [
              { name: "Dealer Network", link: "/" },
              { name: "Service Network", link: "/" },
              { name: "Dealer meet", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Investor",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Investor",
        columns: [
          {
            title: "Investor",
            items: [{ name: "Report", link: "/" }],
          },
        ],
      },
    },
    {
      name: "Support",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Support",
        columns: [
          {
            title: "Support",
            items: [
              { name: "Request For Dealership", link: "/" },
              { name: "Request for SSD", link: "/" },
              { name: "Register Your Product", link: "/" },
              { name: "Product Insureance", link: "/" },
              { name: "Register Product", link: "/" },
              { name: "Esaplling Community", link: "/" },
              { name: "Warrenty", link: "/" },
              { name: "Extended Warrenty", link: "/" },
              { name: "Spare Service", link: "/" },
              { name: "Escalate", link: "/" },
              { name: "Employee", link: "/" },
            ],
          },
          {
            items: [
              { name: "Sales", link: "/" },
              { name: "Raise a Ticket", link: "/" },
            ],
          },
          {
            items: [
              { name: "Service", link: "/" },
              { name: "Track Your Service", link: "/" },
              { name: "Track Your Dispatch", link: "/" },
            ],
          },
          {
            items: [
              { name: "Spare", link: "/" },
              { name: "Raise a Replacement under warrenty", link: "/" },
              { name: "Order a Spare", link: "/" },
            ],
          },
          {
            items: [
              { name: "Environment,health and Safety", link: "/support/envorment_helth_guide" },
              { name: "Environment,health and Safety Guide", link: "/support/envorment_helth_guide" },
              { name: "Dresscode-Guide", link: "/" },
              { name: "Ethics and Compliances Guideline", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Career",
      link: "/",
      dropdown: {
        title: "ESAPLLING® career",
        columns: [
          {
            title: "Career",
            items: [
              { name: "career-Portls", link: "/carrier" },
              { name: "Campus Connect", link: "/carrier" },
              { name: "New Releases", link: "/carrier" },
              { name: "Placement Drive", link: "/carrier" },
            ],
          },
          {
            items: [
              { name: "Innovation Center", link: "/carrier" },
              { name: "Summer Training", link: "/carrier" },
              { name: "Apperentship", link: "/carrier" },
              { name: "Project", link: "/carrier" },
            ],
          },
          {
            items: [
              { name: "Employee", link: "/carrier" },
              { name: "Self Gromming", link: "/carrier" },
              { name: "Business Ethics", link: "/carrier" },
              { name: "Learning Center", link: "/carrier" },
              { name: "Sales & Service Training", link: "/carrier" },
              { name: "Awards and Recongnization", link: "/carrier" },
              { name: "HR Connect", link: "/carrier" },
              { name: "Grevences", link: "/carrier" },
            ],
          },
           {
            items: [
              { name: "CSR", link: "/carrier" },
              
            ],
          },
          {
            items: [
              { name: "Magazine", link: "/carrier" },
              
            ],
          },
          {
            items: [
              { name: "Awards and Recognization", link: "/carrier" },
              
            ],
          },
        ],
      },
    },
  ];

  // Function to get grid columns class based on count & item name
  const getGridColsClass = (count, itemName) => {
    if (
      itemName === t("Consumer Electronics") ||
      itemName === "HVAC" ||
      itemName === "Automotive" ||
      itemName === "Biomedical" ||
      itemName === "Services" ||
      itemName === "Innovation" ||
      itemName === "Innovation" ||
      itemName === "Support" ||
      itemName === "Career"
    ) {
      return "grid-cols-6";
    }

    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      default:
        return "grid-cols-1";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent md:bg-white"
      }`}
    >
    <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 flex justify-between items-center h-28 sm:h-32 md:h-36  lg:h-40">
        <div className="flex items-center  sm:-mt-3 md:-mt-4 lg:-mt-5" style={{ transform: 'scale(1.2)' }}>
          <img 
            src={logo} 
            alt="Logo" 
            className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-28 lg:h-20 xl:w-32 xl:h-24 2xl:w-36 2xl:h-28 object-contain" 
          />
        </div>
        <ul className="hidden lg:flex   items-center space-x-2 xl:space-x-4 text-xs xl:text-sm 2xl:text-base font-robo">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setActiveDropdown(index);
              }}
              onMouseLeave={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
            >
              <Link to={item.link} className={`hover:text-blue-900 py-1 xl:py-2 pb-4 block text-xs xl:text-sm 2xl:text-base font-robo whitespace-nowrap ${activeDropdown === index ? "text-blue-900 font-bold" : ""}`}>
                {item.name}
              </Link>

              {item.dropdown ? (
                <>
                  {/* Invisible bridge */}
                  <div 
                    className={`absolute top-full left-0 w-full h-8 bg-transparent ${
                      activeDropdown === index ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setActiveDropdown(index);
                    }}
                    onMouseLeave={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 150);
                    }}
                  />
                  {/* Dropdown content for all nav items */}
                  <div
                    className={`fixed left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50 mt-8 ${
                      activeDropdown === index ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setActiveDropdown(index);
                    }}
                    onMouseLeave={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 150);
                    }}
                  >
                    <div className="max-w-7xl mx-auto py-4 px-6 flex items-start gap-8">
                      {/* Optional: Logo on the left for home/biomedical, etc. */}
                      {item.name === t("home") && (
                        <div className="flex-shrink-0 flex flex-col items-center justify-center" style={{minWidth: '180px'}}>
                          <img src={home_ab} alt="Logo" className="h-64 w-64 object-contain mb-2" />
                        </div>
                      )}
                      {item.name === "Biomedical" && (
                        <div className="flex-shrink-0 flex flex-col items-center justify-center" style={{minWidth: '180px'}}>
                          <img src={ctmri} alt="Biomedical Logo" className="h-96 w-96 object-contain mb-2" />
                        </div>
                      )}
                      {/* Links grid on the right for all dropdowns */}
                      {item.name === t("home") ? (
                        <div className="grid grid-cols-4 gap-x-10 gap-y-2 flex-1">
                          {item.dropdown.columns[0].items.map((subItem, subIndex) => (
                            !subItem.isContact ? (
                              <Link key={subIndex} to={subItem.link} className="text-gray-600 hover:text-gray-900 font-robo text-sm">
                                {subItem.name}
                              </Link>
                            ) : null
                          ))}
                        </div>
                      ) : (
                        <div className={`grid ${getGridColsClass(item.dropdown.columns.length, item.name)} gap-8 flex-1`}>
                          {item.dropdown.columns.map((column, colIndex) => (
                            <div key={colIndex}>
                              {/* If column has a title, render as a link if first item has a link */}
                              {column.title ? (
                                column.titleLink ? (
                                  <Link to={column.titleLink} className="font-medium mb-1 text-lg text-blue-700 hover:underline block">
                                    {column.title}
                                  </Link>
                                ) : (
                                  <div className="mb-3">
                                    {column.titleImage ? (
                                      <img 
                                        src={column.titleImage} 
                                        alt={column.title} 
                                        className="h-12 w-auto object-contain mb-2"
                                      />
                                    ) : (
                                      <h4 className="font-os text-lg">{column.title}</h4>
                                    )}
                                  </div>
                                )
                              ) : null}
                              <ul className="space-y-2">
                                {column.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      to={subItem.link}
                                      className="text-gray-600 hover:text-gray-900 font-robo text-sm"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : null}
            </li>
          ))}

          <li className="relative group cursor-pointer">
         

          </li>
        </ul>

        <div className="lg:hidden pr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-lg w-72 sm:w-80`}
      >
        <div className="flex justify-between items-center p-3 border-b">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-12 h-8 sm:w-16 sm:h-12 object-contain" 
          />
          <button className="text-black" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-3 space-y-1 text-sm font-robo text-black overflow-y-auto h-[calc(100%-80px)]">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2">
              <Link
                to={item.link}
                className="hover:text-blue-600 py-2 block font-robo text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="mt-2">
                  <h3 className="text-sm sm:text-base font-semibold mb-2 text-blue-700">{item.dropdown.title}</h3>
                  <div className="space-y-3">
                    {item.dropdown.columns.map((column, colIndex) => (
                      <div key={colIndex}>
                        {column.title && (
                          <h4 className="font-medium mb-2 text-blue-600 text-xs sm:text-sm">
                            {column.titleLink ? (
                              <Link to={column.titleLink} onClick={() => setIsOpen(false)}>
                                {column.title}
                              </Link>
                            ) : (
                              column.title
                            )}
                          </h4>
                        )}
                        <ul className="pl-2 space-y-1">
                          {column.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.link}
                                className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm font-robo block py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          
        </ul>
      </div>
    </nav>
  );
}
