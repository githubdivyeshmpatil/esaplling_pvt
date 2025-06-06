import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function Sliptac() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
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
        <BackgroundSection bgImage="/img/newac.jpg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066]">
          Split AC Products
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
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

export default Sliptac;
