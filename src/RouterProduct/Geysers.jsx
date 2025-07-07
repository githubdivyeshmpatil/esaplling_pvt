import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';
import Ac from '../components/Ac';

function Geysers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "SCHNELL",
      img: "/img/gyser1.png",
      specs: [
        { label: "Capacity", value: "8 Kg" },
        { label: "Dimensions", value: "900x530x995" },
        { label: "Warranty", value: "1 year" },
        { label: "Color", value: "White" },
        { label: "Voltage", value: "230 V" },
        { label: "Max Rated Pressure", value: "5–10 Bar" },
        { label: "Star Rating", value: "★★★★★" },
        { label: "Fequency", value: "50 Hz AC" },
        { label: "Power Input", value: "4500 W" },
      ],
    },
    {
      id: 2,
      name: "JUMBO",
      img: "/img/gyser2.png",
      specs: [
        { label: "Capacity", value: "15 Ltr - 30 Ltr" },
        { label: "Warranty", value: "1 year" },
        { label: "Color", value: "White" },
        { label: "Voltage", value: "230 V" },
        { label: "Max Rated Pressure", value: "5–10 Bar" },
        { label: "Star Rating", value: "★★★★★" },
        { label: "Fequency", value: "50 Hz AC" },
        { label: "Power Input", value: "4500 W" },
      ],
    },
    {
      id: 3,
      name: "SPRERO",
      img: "/img/gyser3.png",
      specs: [
        { label: "Capacity", value: "6 Ltr - 60 Ltr" },
        { label: "Warranty", value: "1 year" },
        { label: "Color", value: "White" },
        { label: "Voltage", value: "230 V" },
        { label: "Max Rated Pressure", value: "5–10 Bar" },
        { label: "Star Rating", value: "★★★★★" },
        { label: "Fequency", value: "50 Hz AC" },
        { label: "Power Input", value: "4500 W" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <BackgroundSection bgImage="/img/gyser_banner.png" />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center font-os">Geysers Specifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img src={product.img} alt={product.name} className="h-48 mx-auto mb-3 object-contain" />
              <p className="text-blue-800 font-bold">{product.name}</p>
              <div className="mt-4 text-left inline-block">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between gap-4 mb-1">
                    <span className="font-semibold">{spec.label}</span>
                    <span className={spec.label === "Star Rating" ? "text-yellow-500" : ""}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Ac />
      </div>
    </>
  );
}

export default Geysers;
