import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import YourComponent from "../components/YourComponent";
import Ac from "../components/Ac";

// Product data with subcategories under televisions
const productsData = {
  televisions: {
    LED: [
      {
        id: 1,
        name: "ESAP65S4KLED (165cm)",
        dis: "Esaplling Series 165 cm (65  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/tv1.jpg",
        price: 34999,
        cutPrice: 69999,
        offer: "50% OFF",
      },
      {
        id: 2,
        name: "ESAP32SLED (80cm)",
        dis: "Esaplling Series 80 cm (32  inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED1.png",
        price: 54999,
        cutPrice: 79999,
        offer: "31% OFF",
      },
      {
        id: 3,
        name: "ESAP40LED (102cm)",
        dis: "Esaplling Series 102 cm (40  inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | HDMI x 2, USB x 2|  Earphone Jack | SuperLuma |AV IN x 2 |Turbo Sound",
        img: "/img/LED2.png",
        price: 48999,
        cutPrice: 72999,
        offer: "33% OFF",
      },
      {
        id: 4,
        name: "ESAP40SLED (102cm)",
        dis: "Esaplling Series 102 cm (40  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED3.png",
        price: 28999,
        cutPrice: 39999,
        offer: "28% OFF",
      },
      {
        id: 5,
        name: "ESAP42LED (106cm)",
        dis: "Esaplling Series 106 cm (42  inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED4.png",
        price: 54999,
        cutPrice: 79999,
        offer: "31% OFF",
      },
      {
        id: 6,
        name: "ESAP42SLED (106cm)",
        dis: "Esaplling Series 106 cm (42  inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED5.png",
        price: 48999,
        cutPrice: 72999,
        offer: "33% OFF",
      },
      {
        id: 7,
        name: "ESAP48LED (122cm)",
        dis: "Esaplling Series 122 cm (48  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED6.png",
        price: 28999,
        cutPrice: 39999,
        offer: "28% OFF",
      },
      {
        id: 8,
        name: "ESAP55SLED (140cm)",
        dis: "Esaplling Series 140 cm (55  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED7.png",
        price: 28999,
        cutPrice: 39999,
        offer: "28% OFF",
      },
    ],
    iptv: [
      {
        id: 9,
        name: "Jio IPTV Box",
        dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
        img: "/img/iptv1.png",
        price: 1999,
        cutPrice: 2999,
        offer: "33% OFF",
      },
      {
        id: 10,
        name: "Airtel Xstream Box",
        dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
        img: "/img/iptv2.png",
        price: 2499,
        cutPrice: 3499,
        offer: "29% OFF",
      },
    ],
    interactivePanel: [
      {
        id: 11,
        name: "BenQ Interactive Panel",
        dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
        img: "/img/intractive1.png",
        price: 85000,
        cutPrice: 95000,
        offer: "11% OFF",
      },
      {
        id: 12,
        name: "Samsung Flip Board",
        dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
        img: "/img/intractive2.png",
        price: 92000,
        cutPrice: 105000,
        offer: "12% OFF",
      },
      {
        id: 13,
        name: "BenQ Interactive Panel",
        dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
        img: "/img/intractive3.png",
        price: 85000,
        cutPrice: 95000,
        offer: "11% OFF",
      },
    ],
    vds: [
      {
        id: 14,
        name: "LG VDS Display",
        dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
        img: "/img/vds2.png",
        price: 112000,
        cutPrice: 125000,
        offer: "10% OFF",
      },
      {
        id: 15,
        name: "LG VDS Display",
        dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
        img: "/img/vds3.png",
        price: 112000,
        cutPrice: 125000,
        offer: "10% OFF",
      },
    ],
    lfd: [
      {
        id: 16,
        name: 'Sony LFD 55"',
        dis: "ProView LFD – 190 cm (75 inch) Large Format Display | Ultra HD 4K Resolution | Slim Bezel Design | HDMI x 2, USB x 2, VGA, DP | High Brightness Panel (500 nits) | 24/7 Commercial-Grade Operation | Wall Mount Ready | Anti-Glare Coating | Ideal for Digital Signage, Retail, Airports & Corporate Environments",
        img: "/img/lfd1.jpg",
        price: 99000,
        cutPrice: 110000,
        offer: "10% OFF",
      },
    ],
    
   boardRoomSolution: [
      {
        id: 17,
        name: "Cisco Board Room Kit",
        dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
        img: "/img/board1.png",
        price: 120000,
        cutPrice: 140000,
        offer: "14% OFF",
      },
      {
        id: 18,
        name: "Poly Studio X50",
        dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
        img: "/img/board2.png",
        price: 135000,
        cutPrice: 155000,
        offer: "13% OFF",
      },
    ],
  },
 "air-conditioners": {
    splitAC: [
      {
        id: 1,
        name: "ESPS3M12E003",
        dis: "Esaplling 2025 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC1.png",
        price: 35000,
        cutPrice: 42000,
        offer: "15% OFF",
      },
      {
        id: 2,
        name: "ESPS3M12E002",
        dis: "Esaplling Floral Series 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC2.png",
        price: 28000,
        cutPrice: 35000,
        offer: "20% OFF",
      },
       {
        id: 3,
        name: "ESPS3M12E001",
        dis: "Esaplling Standard Series 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC3.png",
        price: 28000,
        cutPrice: 35000,
        offer: "20% OFF",
      },
        {
        id: 4,
        name: "ESPS3INCM12E001",
        dis: "Esaplling Royal Series 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC4.png",
        price: 28000,
        cutPrice: 35000,
        offer: "20% OFF",
      },
    ],
    VRF: [
      {
        id: 1,
        name: "ESAPS3W1E001",
        dis: "Esaplling ESAPS3W1E001 – 2025 1.0 Ton 3 Star Window AC – Copper Condenser, White",
        img: "/img/window.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
        id: 2,
        name: " ESP4PR0C1001",
        dis: "Esaplling ESP4PR0C1001 – 2025 VRF Air Conditioning System (3 Ton to 30 Ton) – High Efficiency, Copper Condenser, White",
        img: "/img/vrf.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 3,
        name: " ESP4PR0C1001",
        dis: "Esaplling ESP4PR0C1001 – 2025 VRF Air Conditioning System (3 Ton to 30 Ton) – High Efficiency, Copper Condenser, White",
        img: "/img/vrf2.jpg",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
    ],
     CHILLER: [
      {
        id: 1,
        name: "ESAPS3W1E001",
        dis: "The Esaplling Industrial Chiller is designed to deliver powerful and efficient cooling performance for commercial and industrial applications. With a simple yet robust structure, this chiller system is built for long-term reliability, reduced energy consumption, and easy maintenance.",
          img: "/img/chiller.jpg",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
     
    ],
  },
  cooler: [
    {
      id: 1,
      name: "Bajaj Cooler",
      dis: "Compact and powerful cooler for home use.",
      img: "img/cooler1.png",
    },
    {
      id: 2,
      name: "Havells Cooler",
      dis: "High airflow cooler with durable design.",
      img: "img/chiller.jpg",
    },
  ],
  laptop: [
    {
      id: 1,
      name: "Dell Inspiron",
      dis: "Powerful laptop for everyday use.",
      img: "img/laptop1.png",
    },
    {
      id: 2,
      name: "MacBook Pro",
      dis: "High performance laptop for professionals.",
      img: "img/laptop2.png",
    },
  ],
  "kitchen-appliances": [
    {
      id: 1,
      name: "Philips Mixer Grinder",
      dis: "Efficient mixer grinder with multiple jars.",
      img: "img/kitchen1.png",
    },
    {
      id: 2,
      name: "Butterfly Toaster",
      dis: "Durable toaster with adjustable browning.",
      img: "img/kitchen2.png",
    },
  ],
  refrigerators: [
    {
      id: 1,
      name: "Whirlpool Fridge",
      dis: "Spacious and energy efficient refrigerator.",
      img: "img/refrige1.png",
    },
    {
      id: 2,
      name: "LG Fridge",
      dis: "Smart refrigerator with inverter technology.",
      img: "img/refrige2.png",
    },
  ],
  "washing-machines": [
    {
      id: 1,
      name: "Bosch Washing Machine",
      dis: "Top loading washing machine with quick wash.",
      img: "img/washing1.png",
    },
    {
      id: 2,
      name: "Samsung Washing Machine",
      dis: "Front load with smart features.",
      img: "img/washing2.png",
    },
  ],
  "water-purifiers": [
    {
      id: 1,
      name: "Kent Water Purifier",
      dis: "Removes impurities for pure drinking water.",
      img: "img/water1.png",
    },
    {
      id: 2,
      name: "Aquaguard Purifier",
      dis: "Advanced purification technology.",
      img: "img/water2.png",
    },
  ],
  geysers: [
    {
      id: 1,
      name: "AO Smith Geyser",
      dis: "Instant water heating with safety features.",
      img: "img/geser1.png",
    },
    {
      id: 2,
      name: "Bajaj Geyser",
      dis: "Durable geyser with energy saving mode.",
      img: "img/geser2.png",
    },
  ],
};

// 🔧 Updated function with full forms
const formatSubCategoryName = (str) => {
  const mapping = {
    LED: "LED",
    iptv: "IPTV",
    interactivePanel: "Interactive Panel",
    vds: "Video Display System",
    lfd: "Large Format Display",
     splitAC: "Split AC",
    windowAC: "Window AC",
    CHILLER: "CHILLER"
  };

  if (mapping[str]) return mapping[str];

  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};

// ProductCard component
const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const maxLength = 100;

  const description = product.dis || "";
  const shouldTruncate = description.length > maxLength;
  const displayedDescription = expanded
    ? description
    : description.slice(0, maxLength);

  return (
    <div className="p-3 sm:p-4 rounded-lg bg-white ">
      <div className="aspect-[4/3] mb-2">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain rounded"
        />
      </div>
      <h2 className="font-medium text-sm sm:text-base leading-snug line-clamp-2">
        {product.name}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-black mt-1 cursor-pointer text-justify">
          {displayedDescription}
          {shouldTruncate && !expanded && "..."}
          {shouldTruncate && (
            <button
              onClick={toggleExpanded}
              className="text-blue-600 ml-1 underline text-xs sm:text-sm"
              aria-label={expanded ? "Read less" : "Read more"}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      )}
      <div className="mt-2 flex items-center flex-wrap gap-2">
        {product.price && (
          <span className="text-green-600 font-semibold text-sm sm:text-base">
            ₹{product.price.toLocaleString()}
          </span>
        )}
        {product.cutPrice && (
          <span className="text-gray-500 line-through text-sm sm:text-base">
            ₹{product.cutPrice.toLocaleString()}
          </span>
        )}
        {product.offer && (
          <span className="text-red-500 font-semibold text-xs sm:text-sm">
            {product.offer}
          </span>
        )}
      </div>
    </div>
  );
};

// Main ProductPage component
function ProductPage() {
   
  const { category } = useParams();
  const categoryData = productsData[category];

  // Check if categoryData is object with subcategories (like televisions, air-conditioners)
  const isSubCategoryObject =
    categoryData &&
    !Array.isArray(categoryData) &&
    Object.values(categoryData).every((val) => Array.isArray(val));

  return (
    <div className="pt-20 px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      {/* Your Navbar component */}
      <YourComponent />

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold capitalize mb-6">
        {category.replace(/-/g, " ")}
      </h1>

      {/* Product Grid Rendering */}
      {categoryData ? (
        isSubCategoryObject ? (
          Object.entries(categoryData).map(([subCategory, products]) => (
            <div key={subCategory} className="mb-10">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {formatSubCategoryName(subCategory)}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))
        ) : Array.isArray(categoryData) && categoryData.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryData.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base">No products found for this category.</p>
        )
      ) : (
        <p className="text-sm sm:text-base">Category not found.</p>
      )}
      <Ac Ac="Esaplling"/>
    </div>
    
  );
}

export default ProductPage;

