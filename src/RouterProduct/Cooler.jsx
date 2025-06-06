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
      dis: "Esaplling 25 Litre Room/Personal Air Cooler (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 2,
      name: "Tower",
      dis: "Esaplling 40 Litre Room/Personal Air Cooler (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 3,
      name: "Tower",
      dis: "Esaplling 80 Litre Room/Personal Air Cooler (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 4,
      name: "Thunder",
      dis: "Esaplling 63 Litre Room/Personal Air Cooler (White, Polar)",
      img: "/img/cooler4.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 5,
      name: "Curvy",
      dis: "Esaplling 63 Litre Room/Personal Air Cooler (White, Polar)",
      img: "/img/cooler1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 6,
      name: "Ultima",
      dis: "Esaplling 63 Litre Room/Personal Air Cooler (White, Polar)",
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
      <div className="w-full">
        <BackgroundSection bgImage="/img/coolerbanner.jpg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066]">
          Air Cooler Products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="w-full mb-4 overflow-hidden rounded">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[150px] sm:h-[180px] object-contain"
                />
              </div>

              <h2 className="text-base sm:text-lg font-os font-semibold">{product.name}</h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-2 text-justify font-robo leading-relaxed">
                {expandedDescriptions[product.id]
                  ? product.dis
                  : `${product.dis.slice(0, 80)}...`}
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 ml-1 underline cursor-pointer text-xs sm:text-sm"
                >
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              </p>

              <div className="mt-3 flex items-center justify-between text-xs sm:text-sm font-os space-x-2">
  <span className="text-green-600 font-bold">
    ₹{product.price.toLocaleString()}
  </span>
  <span className="text-gray-400 line-through">
    ₹{product.cutPrice.toLocaleString()}
  </span>
  <span className="text-red-500 font-medium">{product.offer}</span>
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

export default Cooler;
