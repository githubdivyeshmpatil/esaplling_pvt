import React from 'react';
import royalAc from '../assets/images/ro.png'; // ✅ Replace with actual Royal Series image path

const FixedSpeedRoyalACRow = () => {
  const acProducts = [
    {
      id: 1,
      name: 'Esaplling 1 Ton Royal Series AC',
      model: 'ESPS3INCM12E001',
      tonnage: '1 Ton',
      rating: '3 Star',
      image: royalAc,
    },
    {
      id: 2,
      name: 'Esaplling 1.5 Ton Royal Series AC',
      model: 'ESPS3INCM18E001',
      tonnage: '1.5 Ton',
      rating: '3 Star',
      image: royalAc,
    },
    {
      id: 3,
      name: 'Esaplling 2 Ton Royal Series AC',
      model: 'ESPS3INCM24E001',
      tonnage: '2 Ton',
      rating: '3 Star',
      image: royalAc,
    },
  ];

  return (
    <div className="px-4 py-10">
      <h2 className="text-left text-xl font-semibold text-black mb-8">
        Fixed Speed (Royal Series):
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {acProducts.map((ac) => (
          <div key={ac.id} className="flex flex-col items-center text-center">
            <img
              src={ac.image}
              alt={ac.model}
              className="w-full max-w-md rounded-md shadow-md"
            />
            <h3 className="mt-4 font-semibold text-blue-900 text-lg">{ac.model}</h3>
            <p className="text-sm mt-1 text-gray-700">{ac.name}</p>
            <p className="text-sm mt-1">
              <strong>Tonnage:</strong> {ac.tonnage}
            </p>
            <p className="text-sm">
              <strong>Star Rating:</strong> {ac.rating}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedSpeedRoyalACRow;
