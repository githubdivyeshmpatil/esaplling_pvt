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
      <div className="max-w-9xl mx-auto">
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Interactive Panel Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="p-4 hover:shadow-lg transition bg-white rounded">
              <div className="w-full mb-4 overflow-hidden rounded bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-contain"
                  style={{ maxHeight: '220px' }}
                />
              </div>
              <h2 className="text-lg font-os">{product.name}</h2>
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
                <span className="text-lg text-green-600">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through ml-2">₹{product.cutPrice.toLocaleString()}</span>
                <span className="text-red-500 ml-2">{product.offer}</span>
              </div>
            </div>
          ))}
        </div>
        <Ac />
      </div>
    </>
  );
}

export default Interactive_panel;
