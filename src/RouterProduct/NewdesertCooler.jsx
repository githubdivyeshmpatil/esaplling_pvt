import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function NewdesertCooler() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
      id: 1,
      name: "Cool Plus",
      dis: "Esaplling Cool Plus is a 50-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 2,
      name: "Cool X",
      dis: "Esaplling Cool Plus is a 35-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler2.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 3,
      name: "Cyclone",
      dis: "Esaplling Cyclone is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler3.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 4,
      name: "Extreme",
      dis: "Esaplling Extreme is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler4.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 5,
      name: "Storm",
      dis: "Esaplling Storm is a 25-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler5.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 6,
      name: "Windy",
      dis: "Esaplling Windy is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler6.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 7,
      name: "Turbo",
      dis: "Esaplling Turbo is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler7.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 8,
      name: "Smarty",
      dis: "Esaplling Turbo is a 35-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
      img: "/img/bigcooler8.png",
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
      <BackgroundSection bgImage="/img/coolerbanner.jpg" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Desert Cooler Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Content above */}
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 text-justify mb-4">
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
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-lg font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through ml-2">₹{product.cutPrice.toLocaleString()}</span>
                <span className="text-red-500 font-semibold ml-2">{product.offer}</span>
              </div>

              {/* Image below */}
              <div className="w-full overflow-hidden rounded bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-contain"
                  style={{ maxHeight: '220px' }}
                />
              </div>
            </div>
          ))}
        </div>
        <Ac />
      </div>
    </>
  );
}

export default NewdesertCooler;
