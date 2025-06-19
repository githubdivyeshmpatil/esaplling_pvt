import React, { useEffect, useState } from 'react';
import Ac from '../components/Ac';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';

function Vdf() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 14,
      name: "LG VDS Display",
      dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
      img: "/img/vds2.png",
      price: 112000,
      cutPrice: 125000,
      offer: "10% OFF",
    },
    {
      id: 15,
      name: "LG VDS Display",
      dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
      img: "/img/vds3.png",
      price: 112000,
      cutPrice: 125000,
      offer: "10% OFF",
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
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066]">
          VDS Display Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col hover:shadow-xl transition duration-300"
            >
              <div className="w-full mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[180px] object-contain"
                />
              </div>

              <h2 className="text-base sm:text-lg font-bold text-black mb-2 font-os">
                {product.name}
              </h2>

              <ul className="text-sm text-gray-700 mb-2 list-disc list-inside space-y-1 font-robo">
                {(expandedDescriptions[product.id]
                  ? product.dis.split('|')
                  : product.dis.split('|').slice(0, 5)
                ).map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))}
              </ul>

              {product.dis.split('|').length > 5 && (
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 underline text-sm mt-1"
                >
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              )}

              <div className="mt-4 flex flex-wrap items-center text-sm font-semibold font-os">
                <span className="text-green-600">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through ml-3">₹{product.cutPrice.toLocaleString()}</span>
                <span className="text-red-600 ml-3">{product.offer}</span>
              </div>

              <div className="mt-4">
                <a
                  href="/datavds"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full font-medium transition"
                >
                  Know More
                </a>
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

export default Vdf;
