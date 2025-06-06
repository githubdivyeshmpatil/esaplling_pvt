import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function Washing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "ESAPSATM1WM8000",
      dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM1WM8000) with compact 900x530x995 mm design for efficient home laundry.",
      img: "/img/washing1.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 2,
      name: "ESAPSATM6WM8000",
      dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM6WM8000) with compact 900x535x990 mm design for efficient home laundry.",
      img: "/img/washing2.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 3,
      name: "ESAPSATMWM6800",
      dis: "ESAPLLING 6.8 Kg Top Load Washing Machine (Model: ESAPSATMWM6800) with compact 840x510x965 mm design for efficient home laundry.",
      img: "/img/washing3.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 4,
      name: "ESAPSATM7WM8000",
      dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM7WM8000) with compact 830X530x950 mm design for efficient home laundry.",
      img: "/img/washing4.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 5,
      name: "ESAPSATM8WM7000",
      dis: "ESAPLLING 7 Kg Top Load Washing Machine (Model: ESAPSATM8WM7000) with compact 830X530x950 mm design for efficient home laundry.",
      img: "/img/washing5.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 6,
      name: "ESAPSATM4WM8000",
      dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM4WM8000) with compact 900x530x1015 mm design for efficient home laundry.",
      img: "/img/washing6.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 7,
      name: "ESAPSATM5WM7000",
      dis: "ESAPLLING 7 Kg Top Load Washing Machine (Model: ESAPSATM5WM7000) with compact 830X530x950 mm design for efficient home laundry.",
      img: "/img/washing7.png",
      price: 15000,
      cutPrice: 18000,
      offer: "17% OFF",
    },
    {
      id: 8,
      name: "ESAPSATM4WM7000",
      dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM4WM7000) with compact 830X530x950 mm design for efficient home laundry.",
      img: "/img/washing8.png",
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
        <BackgroundSection bgImage="/img/washing_banner.png" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066] font-os">
          Washing Machines
        </h1>

        {/* Responsive grid: 2 columns mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="w-full mb-3 overflow-hidden rounded-md">
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

export default Washing;
