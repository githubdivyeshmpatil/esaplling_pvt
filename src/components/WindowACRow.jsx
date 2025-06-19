import React from 'react';
import win from '../assets/images/win.png'

const WindowACRow = () => {
  const acProducts = [
  {
    id: 1,
    model: 'ESAPS3W1E001',
    tonnage: '1 Ton',
    rating: '3 Star',
    image: win, // ✅ use the imported image directly
  },
  {
    id: 2,
    model: 'ESAPS3W15E001',
    tonnage: '1.5 Ton',
    rating: '3 Star',
    image: win,
  },
  {
    id: 3,
    model: 'ESAPS5W15E001',
    tonnage: '1.5 Ton',
    rating: '5 Star',
    image: win,
  },
];


  return (
    <div className="px-4 py-10">
      <h2 className="text-center text-xl font-semibold text-blue-900 mb-8">THE NEW RANGE OF ACs:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {acProducts.map((ac) => (
          <div key={ac.id} className="flex flex-col items-center text-center">
            <img src={ac.image} alt={ac.model} className="w-full max-w-xs rounded-md shadow-md" />
            <h3 className="mt-4 font-semibold text-blue-900">{ac.model}</h3>
            <p className="text-sm mt-1"><strong>Tonnage:</strong> {ac.tonnage}</p>
            <p className="text-sm"><strong>Star Rating:</strong> {ac.rating}</p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WindowACRow;
