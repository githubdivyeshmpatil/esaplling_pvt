import React, { useEffect, useState } from 'react';
import Ac from '../components/Ac';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';

function Vdf() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
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
          VDS Display Products
        </h1>

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

export default Vdf;
