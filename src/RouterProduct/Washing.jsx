import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';
// import { Link } from 'react-router-dom'; // Optional if routing is added

function Washing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "ESAPSATM1WM8000",
      capacity: "8 Kg",
      dimensions: "900x530x995",
      img: "/img/washing1.png",
    },
    {
      id: 2,
      name: "ESAPSATM6WM8000",
      capacity: "8 Kg",
      dimensions: "900x535x990",
      img: "/img/washing2.png",
    },
    {
      id: 3,
      name: "ESAPSATMWM6800",
      capacity: "6.8 Kg",
      dimensions: "840x510x965",
      img: "/img/washing3.png",
    },
    {
      id: 4,
      name: "ESAPSATM7WM8000",
      capacity: "8 Kg",
      dimensions: "830x530x950",
      img: "/img/washing4.png",
    },
    {
      id: 5,
      name: "ESAPSATM8WM7000",
      capacity: "7 Kg",
      dimensions: "830x530x950",
      img: "/img/washing5.png",
    },
    {
      id: 6,
      name: "ESAPSATM4WM8000",
      capacity: "8 Kg",
      dimensions: "900x530x1015",
      img: "/img/washing6.png",
    },
    {
      id: 7,
      name: "ESAPSATM5WM7000",
      capacity: "7 Kg",
      dimensions: "830x530x950",
      img: "/img/washing7.png",
    },
    {
      id: 8,
      name: "ESAPSATM4WM7000",
      capacity: "8 Kg",
      dimensions: "830x530x950",
      img: "/img/washing8.png",
    },
  ];

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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300 text-center flex flex-col justify-between"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[150px] sm:h-[180px] object-contain mb-4"
              />
              <h2 className="text-base font-semibold text-[#000066]">{product.name}</h2>

              <div className="mt-2 text-sm text-black font-medium">
                <p><span className="font-semibold">Capacity</span>: {product.capacity}</p>
                <p><span className="font-semibold">Dimensions</span>: {product.dimensions}</p>
              </div>

       <button
  className="mt-4 inline-block bg-[#000066] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000044] transition"
  onClick={() => {
    // You can show alert if still needed
    alert(`Know more about ${product.name}`);
    window.location.href = '/consumer-electronics/washingdata';
  }}
>
  Know More
</button>
              {/* For routing instead of alert, use this: */}
              {/* <Link
                to={`/washing/${product.id}`}
                className="mt-4 block bg-[#000066] text-white px-4 py-2 rounded-md text-sm text-center hover:bg-[#000044]"
              >
                Know More
              </Link> */}
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
 