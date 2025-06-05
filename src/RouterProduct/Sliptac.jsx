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
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/newac.jpg" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Split AC Products</h1>
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

export default Sliptac;
