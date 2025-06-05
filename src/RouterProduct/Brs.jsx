import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function Brs() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
      id: 17,
      name: "Cisco Board Room Kit",
      dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
      img: "/img/board1.png",
      price: 120000,
      cutPrice: 140000,
      offer: "14% OFF",
    },
    {
      id: 18,
      name: "Poly Studio X50",
      dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
      img: "/img/board2.png",
      price: 135000,
      cutPrice: 155000,
      offer: "13% OFF",
    },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleReadMore = (id) => {
    setExpandedDescriptions(prev => ({
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
        <h1 className="text-3xl font-bold mb-8 text-center">Board Room Solution</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="p-4 hover:shadow-lg transition bg-white rounded-lg">
              <div className="w-full mb-4 overflow-hidden rounded bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-contain"
                  style={{ maxHeight: '220px' }}
                />
              </div>
              <h2 className="text-lg font-os font-semibold">{product.name}</h2>
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

export default Brs;
