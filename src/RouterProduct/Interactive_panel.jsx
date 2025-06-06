import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function Interactive_panel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
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
      <div className="w-full">
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066]">
          Interactive Panel Products
        </h1>

        {/* ✅ Responsive grid: 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map(product => (
            <div key={product.id} className="p-3 sm:p-4 bg-white rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="w-full mb-3 overflow-hidden rounded">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[150px] sm:h-[180px] object-contain"
                />
              </div>

              <h2 className="text-sm sm:text-base font-semibold font-os">{product.name}</h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-2 text-justify font-robo leading-snug">
                {expandedDescriptions[product.id]
                  ? product.dis
                  : `${product.dis.slice(0, 80)}...`}
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 ml-1 underline text-xs"
                >
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-between text-xs sm:text-sm font-os">
                <span className="text-green-600 font-bold">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through ml-2">
                  ₹{product.cutPrice.toLocaleString()}
                </span>
                <span className="text-red-500 ml-2 font-medium">{product.offer}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Ac />
        </div>
      </div>
    </>
  );
}

export default Interactive_panel;
