import React, { useEffect } from 'react';
import Ac from '../components/Ac';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';
import Imagecompo from '../components/Imagecompo';

function Refrigarator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "ESAPREF430",
      img: "/img/fridge1.png",
      dimensions: "780x740x1780",
      capacity: "430 Litre",
    },
    {
      id: 2,
      name: "ESAPREF430",
      img: "/img/fridge2.png",
      dimensions: "750x760x1780",
      capacity: "430 Litre",
    },
    {
      id: 3,
      name: "ESAPREF225",
      img: "/img/fridge3.png",
      dimensions: "565X675X1620",
      capacity: "225 Litre",
    },
    {
      id: 4,
      name: "ESAPREF225",
      img: "/img/fridge4.png",
      dimensions: "550X645X1545",
      capacity: "225 Litre",
    },
    {
      id: 5,
      name: "ESAPREF220",
      img: "/img/fridge5.png",
      dimensions: "540X665X1300",
      capacity: "220 Litre",
    },
    {
      id: 6,
      name: "ESAPREF240",
      img: "/img/fridge6.png",
      dimensions: "540X665X1300",
      capacity: "240 Litre",
    },
    {
      id: 7,
      name: "ESAPREF170",
      img: "/img/fridge7.png",
      dimensions: "540X665X975",
      capacity: "170 Litre",
    },
    {
      id: 8,
      name: "ESAPREF100",
      img: "/img/fridge8.png",
      dimensions: "455X510X845",
      capacity: "100 Litre",
    },
  ];

  return (
    <>
      <Navbar />
      <BackgroundSection bgImage="/img/Fridge_banner.jpeg" />
      <Ac />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center font-os">
          Refrigerator Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              {/* Show Imagecompo above every 4th product (excluding first) */}
              {index % 4 === 0 && index !== 0 && (
                <div className="col-span-full">
                  <Imagecompo />
                </div>
              )}

              {/* Product Card */}
              <div className="p-4 bg-white rounded shadow hover:shadow-md transition duration-300 text-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="mx-auto max-h-60 object-contain mb-4"
                />
                <h2 className="text-blue-700 font-semibold font-os text-sm">{product.name}</h2>
                <div className="mt-2 text-xs text-gray-800 font-robo">
                  <p><strong>Dimensions</strong>: {product.dimensions}</p>
                  <p><strong>Capacity</strong>: {product.capacity}</p>
                </div>
              </div>

              {/* Compare All button after every 4th product */}
              {(index + 1) % 4 === 0 && (
                <div className="col-span-full flex justify-center mt-4">
                  <a
                    href="/fridgespecs"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-os"
                  >
                    Compare All
                  </a>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <Ac />
      </div>
    </>
  );
}

export default Refrigarator;
