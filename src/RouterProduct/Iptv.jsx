import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function Iptv() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
      id: 9,
      name: "Jio IPTV Box",
      dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
      img: "/img/iptv1.png",
      price: 1999,
      cutPrice: 2999,
      offer: "33% OFF",
    },
    {
      id: 10,
      name: "Airtel Xstream Box",
      dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
      img: "/img/iptv2.png",
      price: 2499,
      cutPrice: 3499,
      offer: "29% OFF",
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
      <div className="max-w-9xl mx-auto">
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">IPTV Products</h1>

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

export default Iptv;
