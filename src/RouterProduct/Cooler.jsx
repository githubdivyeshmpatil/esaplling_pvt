import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';
import { Link } from 'react-router-dom';


function Cooler() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Tower Plus',
      capacity: '80 Litre',
      img: "/img/cooler1.png",
    },
    {
      id: 2,
      name: 'Tower',
      capacity: '40 Litre',
      img: "/img/cooler1.png",
    },
    {
      id: 3,
      name: 'Tower Personnel',
      capacity: '25 Litre',
      img: "/img/cooler1.png",
    },
    {
      id: 4,
      name: 'Thunder',
      capacity: '63 Litre',
      img: '/img/coolert1.png',
    },
    {
      id: 5,
      name: 'Elegance Plus',
      capacity: '63 Litre',
      img: '/img/coolert2.png',
    },
    {
      id: 7,
      name: 'Cool Plus',
      capacity: '50 Litre',
      img: '/img/cool_plus.png',
    },
    {
      id: 8,
      name: 'Cool X',
      capacity: '35 Litre',
      img: '/img/cool_plus1.png',
    },
    {
      id: 9,
      name: 'Cyclone',
      capacity: '30 Litre',
      img: '/img/cool_plus3.png',
    },
    {
      id: 10,
      name: 'Extreme',
      capacity: '30 Litre',
      img: '/img/cool_plus4.png',
    },
    {
      id: 11,
      name: 'Storm',
      capacity: '25 Litre',
      img: '/img/cool_plus5.png',
    },
    {
      id: 12,
      name: 'Windy',
      capacity: '30 Litre',
      img: '/img/windy11.png',
    },
    {
      id: 13,
      name: 'Turbo',
      capacity: '30 Litre',
      img: '/img/windy12.png',
    },
    {
      id: 14,
      name: 'Smarty',
      capacity: '35 Litre',
      img: '/img/windy13.png',
    },
  ];

  // Split products into groups of 3
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  return (
    <>
      <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/coolerbanner.jpg" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066]">
          THE NEW RANGE OF COOLERS:
        </h1>

        {groupedProducts.map((group, index) => (
          <div key={index} className="mb-12">
            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {group.map((product) => (
                <div
                  key={product.id}
                  className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-700 text-sm">
                    Capacity: <span className="font-bold">{product.capacity}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Compare button under every 3 products */}
            <div className="flex justify-center mt-6">
               <Link
  to="/coolerspecifications"
  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
>
  Compare All
</Link>
            </div>
          </div>
        ))}

        {/* Compare All button at bottom */}
        <div className="flex justify-center mt-10">
         <Link
  to="/coolerspecifications"
  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
>
  Compare All
</Link>
        </div>

        <div className="mt-20">
          <Ac />
        </div>
      </div>
    </>
  );
}

export default Cooler;
