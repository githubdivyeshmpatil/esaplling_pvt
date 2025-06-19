import React from 'react';
import be from '/img/av.jpg'; 

const ACResponsiveBanner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
      <img
        src={be}
        alt="AC Banner"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute
       flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Welcome to Esaplling Air Conditioners</h1>
        <p className="mt-2 text-sm md:text-lg">Explore our powerful and efficient range of cooling solutions</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
          Know More
        </button>
      </div>
    </div>
  );
};

export default ACResponsiveBanner;
