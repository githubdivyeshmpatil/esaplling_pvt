import React from 'react';

function ScrollPage() {
  const images = [
    'img/tv.png', 'img/ac.png', 'img/cooler.png', 'img/laptop.png',
    'img/kichen.png', 'img/refrige.png', 'img/washing.png', 'img/water.png',
    'img/geser.png',
  ];

  const imageTexts = [
    'Televisions', 'Air Conditioners', 'Cooler', 'Laptop',
    'Kitchen Appliances', 'Refrigerators', 'Washing Machines', 'Water Purifiers',
    'Geysers',
  ];

  return (
    <div className="w-full flex justify-center mt-16 sm:mt-28 px-4">
      <div className="flex overflow-x-auto space-x-6 sm:space-x-4 scrollbar-hide">
        {images.map((src, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 text-center">
            <img
              src={src}
              alt={imageTexts[index]}
              className="w-[160px] h-[160px] sm:w-[120px] sm:h-[120px] xs:w-[90px] xs:h-[90px] object-contain"
            />
            <p className="mt-2 text-[16px] font-medium sm:text-[13px] xs:text-[12px]">
              {imageTexts[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollPage;
