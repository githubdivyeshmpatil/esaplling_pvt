import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function LEDPage() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
      id: 1,
      name: "ESAP65S4KLED (165cm)",
      dis: "Esaplling Series 165 cm (65 inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/tv1.jpg",
      price: 34999,
      cutPrice: 69999,
      offer: "50% OFF",
    },
    {
      id: 2,
      name: "ESAP32SLED (80cm)",
      dis: "Esaplling Series 80 cm (32 inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/LED1.png",
      price: 54999,
      cutPrice: 79999,
      offer: "31% OFF",
    },
    {
      id: 3,
      name: "ESAP40LED (102cm)",
      dis: "Esaplling Series 102 cm (40 inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | HDMI x 2, USB x 2 | Earphone Jack | SuperLuma | AV IN x 2 | Turbo Sound",
      img: "/img/LED2.png",
      price: 48999,
      cutPrice: 72999,
      offer: "33% OFF",
    },
    {
      id: 4,
      name: "ESAP40SLED (102cm)",
      dis: "Esaplling Series 102 cm (40 inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/LED3.png",
      price: 28999,
      cutPrice: 39999,
      offer: "28% OFF",
    },
    {
      id: 5,
      name: "ESAP42LED (106cm)",
      dis: "Esaplling Series 106 cm (42 inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/LED4.png",
      price: 54999,
      cutPrice: 79999,
      offer: "31% OFF",
    },
    {
      id: 6,
      name: "ESAP42SLED (106cm)",
      dis: "Esaplling Series 106 cm (42 inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/LED5.png",
      price: 48999,
      cutPrice: 72999,
      offer: "33% OFF",
    },
    {
      id: 7,
      name: "ESAP48LED (122cm)",
      dis: "Esaplling Series 122 cm (48 inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/LED6.png",
      price: 28999,
      cutPrice: 39999,
      offer: "28% OFF",
    },
    {
      id: 8,
      name: "ESAP55SLED (140cm)",
      dis: "Esaplling Series 140 cm (55 inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity | HDMI x 2, USB x 3, SD Card Slot | Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
      img: "/img/LED7.png",
      price: 28999,
      cutPrice: 39999,
      offer: "28% OFF",
    },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleReadMore = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-9xl mx-auto">
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">LED Products</h1>

        {/* ✅ Grid layout for product cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="p-4 hover:shadow-lg transition bg-white rounded">
              {/* ✅ Updated image block */}
              <div className="w-full mb-4 overflow-hidden rounded bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-contain"
                  style={{ maxHeight: '220px' }}
                />
              </div>

              <h2 className="text-lg  font-os">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1 text-justify font-robo">
                {expandedDescriptions[product.id]
                  ? product.dis
                  : `${product.dis.slice(0, 80)}...`}
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 ml-1 underline cursor-pointer"
                >
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              </p>

              <div className="flex items-center justify-between mt-2 text-sm font-os">
                <span className="text-lg  text-green-600">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through ml-2">₹{product.cutPrice.toLocaleString()}</span>
                <span className="text-red-500  ml-2">{product.offer}</span>
              </div>
            </div>
          ))}
        </div>

        <Ac />
      </div>
    </>
  );
}

export default LEDPage;
