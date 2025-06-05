import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-re.png";
import { useTranslation } from 'react-i18next';


export default function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", link: "/" },
    {
      name: "Consumer Electronics",
      link: "/",
      dropdown: {
        title: "ESAPLLING® Electronics",
        columns: [
          {
            title: "televisions",
            items: [
              { name: "LED", link: "/consumer-electronics/led" },
              { name: "IPTV", link: "/consumer-electronics/iptv" },
              {
                name: "Interactive Panel",
                link: "/consumer-electronics/interactive-panel",
              },
              {
                name: "Video Display System",
                link: "/consumer-electronics/video-display-system",
              },
              {
                name: "Large Format Display",
                link: "/consumer-electronics/large-format-display",
              },
              {
                name: "Board Room Solution",
                link: "/consumer-electronics/board-room-solution",
              },
            ],
          },
          {
            title: "air conditioners",
            items: [
              { name: "Split AC", link: "/consumer-electronics/split-ac" },
              { name: "VRF", link: "/consumer-electronics/vrf" },
              { name: "CHILLER", link: "/consumer-electronics/chiller" },
            ],
          },
          {
            title: "cooler",
            items: [
              { name: "Cooler", link: "/consumer-electronics/cooler" },
              { name: "New Desert", link: "/consumer-electronics/new-desert" },
            ],
          },
          {
            title: "refrigerators",
            items: [
              {
                name: "Refrigerators",
                link: "/consumer-electronics/refrigerators",
              },
            ],
          },
          {
            title: "washing",
            items: [{ name: "Washing", link: "/consumer-electronics/washing" }],
          },
          {
            title: "geysers",
            items: [{ name: "Geysers", link: "/consumer-electronics/geysers" }],
          },
        ],
      },
    },
    {
      name: "HVAC",
      link: "/",
      dropdown: {
        title: "HVAC",
        columns: [
          {
            title: "Product",
            items: [
              { name: "New Ac Product", link: "/chiller" },
              { name: "Solar", link: "/server-airconditioning" },
              { name: "Elavator", link: "/server-airconditioning" },
              { name: "Aero-Star", link: "/server-airconditioning" },
            ],
          },
          {
            title: "HVAC",
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
        title: "Automotive",
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
        title: "Biomedical",
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
        title: "OEM",
        columns: [
          {
            title: "Products",
            items: [
              { name: "LED TV", link: "/" },
              { name: "Appliances", link: "/" },
              { name: "Harness", link: "/" },
              { name: "Cooler", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Services",
      link: "/",
      dropdown: {
        title: "Services",
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
              { name: "HAVC", link: "/" },
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
        title: "Innovation",
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
        title: "News",
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
        title: "Investor",
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
        title: "Support",
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
              { name: "Environment,health and Safety", link: "/" },
              { name: "Environment,health and Safety Guide", link: "/" },
              { name: "Dresscode-Guide", link: "/" },
              { name: "Ethics and Compliances Guideline", link: "/" },
            ],
          },
        ],
      },
    },
    {
      name: "Carrier",
      link: "/",
      dropdown: {
        title: "ESAPLLING® carrier",
        columns: [
          {
            title: "carrier",
            items: [
              { name: "Carrier-Portls", link: "/carrier" },
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
  // Function to get grid columns class based on count & item name
  const getGridColsClass = (count, itemName) => {
    if (
      itemName === "Consumer Electronics" ||
      itemName === "HVAC" ||
      itemName === "Automotive" ||
      itemName === "Biomedical" ||
      itemName === "Services" ||
      itemName === "Innovation" ||
      itemName === "Innovation" ||
      itemName === "Support" ||
      itemName === "Carrier"
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex justify-between items-center h-20">
        <div className="flex items-center mt-[-12px]">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium font-robo">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link to={item.link} className="hover:text-gray-500 py-2 block">
                {item.name}
              </Link>

              {item.dropdown && (
                <div
                  className={`fixed left-0 w-full bg-white  shadow-lg border-t border-gray-200 transition-opacity duration-300 ease-in-out transform origin-top ${
                    activeDropdown === index
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-5 pointer-events-none"
                  }`}
                >
                  <div className="max-w-7xl mx-auto py-4 px-6">
                    <h3 className="text-lg font-bold mb-4 font-os">
                      {item.dropdown.title}
                    </h3>
                    <div
                      className={`grid ${getGridColsClass(
                        item.dropdown.columns.length,
                        item.name
                      )} gap-8`}
                    >
                      {item.dropdown.columns.map((column, colIndex) => (
                        <div key={colIndex}>
                          <h4 className="  mb-3 font-os">{column.title}</h4>
                          <ul className="space-y-2">
                            {column.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.link}
                                  className="text-gray-600 hover:text-gray-900 font-robo"
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
                </div>
              )}
            </li>
          ))}

          <li className="relative group cursor-pointer">
            <select
      onChange={(e) => changeLanguage(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
    </select>
          </li>
        </ul>

        <div className="md:hidden pr-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg w-64`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <button className="text-black" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="p-4 space-y-2 text-sm font-medium text-black overflow-y-auto h-[calc(100%-60px)]">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2 font-os ">
              <Link
                to={item.link}
                className="hover:text-gray-500 py-2 block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>

              {item.dropdown && (
                <div className="pl-4 py-2">
                  <h4 className="font-semibold mb-2">{item.dropdown.title}</h4>
                  {item.dropdown.columns.map((column, colIndex) => (
                    <div key={colIndex} className="mb-3">
                      <h5 className="font-medium mb-1">{column.title}</h5>
                      <ul className="pl-2 space-y-1">
                        {column.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.link}
                              className="text-gray-600 hover:text-gray-900 text-sm"
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
              )}
            </li>
          ))}

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">Select Language</p>
            <ul className="space-y-2 mt-2">
              <li>
                <Link to="#" className="hover:text-gray-500">
                  English
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500">
                  Hindi
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500">
                  Spanish
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}
