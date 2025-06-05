import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function Cooler() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
      id: 1,
      name: "Tower Personnel",
      dis: "Esaplling 25 Litre Room/Personal Air Cooler  (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 2,
      name: "Tower",
      dis: "Esaplling 40 Litre Room/Personal Air Cooler  (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 3,
      name: "Tower",
      dis: "Esaplling 80 Litre Room/Personal Air Cooler  (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 4,
      name: "Thunder",
      dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
      img: "/img/cooler4.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 5,
      name: "Curvy",
      dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 6,
      name: "Ultima",
      dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
      img: "/img/cooler6.png",
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
        <h1 className="text-3xl font-bold mb-8 text-center">Air Cooler Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="p-4 bg-white rounded hover:shadow-lg transition-shadow"
            >
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

export default Cooler;
