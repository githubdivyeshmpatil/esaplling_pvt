import React, { useEffect, useState } from 'react';
import Ac from '../components/Ac'; // ensure path sahi hai
import Navbar from '../components/Navbar'; // ensure path sahi hai
import BackgroundSection from '../components/BackgroundSection'; // ensure path sahi hai

function Geysers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "SCHNELL",
      dis: "Esaplling | Capacity: 8 Kg | Dimensions: 900×530×995 mm | Warranty: 1 Year | Color: White | Voltage: 230V | Max Rated Pressure: 5–10 Bar | Frequency: 50 Hz AC | Power Input: 4500W",
      img: "/img/gyser1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 2,
      name: "JUMBO",
      dis: "Esaplling JUMBO | Capacity: 15–30 Ltr | Warranty: 1 Year | Color: White | Voltage: 230V | Max Rated Pressure: 5–10 Bar | Frequency: 50 Hz AC | Power Input: 4500W",
      img: "/img/gyser2.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 3,
      name: "SPRERO",
      dis: "Esaplling SPRERO | Capacity: 6–60 Ltr | Warranty: 1 Year | Color: White | Voltage: 230V | Max Rated Pressure: 5–10 Bar | Frequency: 50 Hz AC | Power Input: 4500W",
      img: "/img/gyser3.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
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
      <BackgroundSection bgImage="/img/gyser_banner.png" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center font-os">Geysers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="text-lg font-os">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1 text-justify font-robo">
                {expandedDescriptions[product.id]
                  ? product.dis
                  : `${product.dis.slice(0, 80)}...`}
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 ml-1 underline cursor-pointer"
                >
                  {expandedDescriptions[product.id] ? "Read less" : "Read more"}
                </button>
              </p>
              <div className="flex flex-wrap items-center justify-between mt-3 text-sm font-os">
                <span className="text-lg font-bold text-green-600">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ₹{product.cutPrice.toLocaleString()}
                </span>
                <span className="text-red-500 font-semibold ml-2">
                  {product.offer}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Ac />
      </div>
    </>
  );
}

export default Geysers;
