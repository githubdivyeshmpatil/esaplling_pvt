import React, { useEffect, useState } from 'react';
import Ac from '../components/Ac';
import Navbar from '../components/Navbar';
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
      <BackgroundSection bgImage="/img/washing_banner.png" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center font-os">Washing Machines</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-all">
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
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              </p>
              <div className="flex flex-wrap items-center justify-between mt-3 text-sm font-os">
                <span className="text-lg font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through ml-2">₹{product.cutPrice.toLocaleString()}</span>
                <span className="text-red-500 font-semibold ml-2">{product.offer}</span>
              </div>
            </div>
          ))}
        </div>
        <Ac />
      </div>
    </>
  );
}

export default Washing;
