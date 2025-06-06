
import React, { useEffect, useState } from 'react';
import Ac from '../components/Ac';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';

function Refrigarator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "ESAPLLING ESAPREF430",
      dis: "ESAPLLING 430 Litre Refrigerator (Model: ESAPREF430) with 780x740x1780 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 2,
      name: "ESAPLLING ESAPREF430",
      dis: "ESAPLLING 430 Litre Refrigerator (Model: ESAPREF430) with 750x760x1780 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge2.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 3,
      name: "ESAPLLING ESAPREF225",
      dis: "ESAPLLING 225 Litre Refrigerator (Model: ESAPREF225) with 565X675X1620 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge3.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 4,
      name: "ESAPLLING ESAPREF225",
      dis: "ESAPLLING 225 Litre Refrigerator (Model: ESAPREF225) with 550X645X1545 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge4.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 5,
      name: "ESAPLLING ESAPREF220",
      dis: "ESAPLLING 220 Litre Refrigerator (Model: ESAPREF220) with 540X665X1300 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge5.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 6,
      name: "ESAPLLING ESAPREF240",
      dis: "ESAPLLING 240 Litre Refrigerator (Model: ESAPREF240) with 540X665X1300 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge6.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 7,
      name: "ESAPLLING ESAPREF170",
      dis: "ESAPLLING 170 Litre Refrigerator (Model: ESAPREF170) with 540X665X975 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge7.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 8,
      name: "ESAPLLING ESAPREF100",
      dis: "ESAPLLING 100 Litre and 50 Litre Refrigerator (Model: ESAPREF100) with 455X510X845 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge8.png",
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
      <BackgroundSection bgImage="/img/Fridge_banner.jpeg" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center font-os">
          Refrigerator Products
        </h1>

        {/* 2 products per row on all screen sizes */}
        <div className="grid grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="w-full mb-4 overflow-hidden rounded bg-white flex justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-48 w-auto object-contain"
                />
              </div>

              <h2 className="text-lg font-os font-semibold mb-1">{product.name}</h2>

              <p
                className="text-sm text-gray-600 mt-1 text-justify font-robo flex-grow"
                id={`desc-${product.id}`}
              >
                {expandedDescriptions[product.id]
                  ? product.dis
                  : `${product.dis.slice(0, 80)}...`}
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 ml-1 underline cursor-pointer"
                  aria-expanded={expandedDescriptions[product.id] ? 'true' : 'false'}
                  aria-controls={`desc-${product.id}`}
                >
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              </p>

              <div className="flex items-center justify-between mt-4 text-sm font-os">
                <span className="text-lg text-green-600 font-semibold">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ₹{product.cutPrice.toLocaleString()}
                </span>
                <span className="text-red-500 ml-2 font-semibold">{product.offer}</span>
              </div>
            </div>
          ))}
        </div>

        <Ac />
      </div>
    </>
  );
}

export default Refrigarator;
