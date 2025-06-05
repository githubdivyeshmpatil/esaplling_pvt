import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ScrollPage() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    'img/tv.png', 'img/ac.png', 'img/cooler.png',
    'img/kichen.png', 'img/refrige.png', 'img/washing.png',
    'img/geser.png',
  ];

  const imageTexts = [
    'televisions', 'air-conditioners', 'cooler',
    'kitchen-appliances', 'refrigerators', 'washing',
    'geysers',
  ];

  return (
    <div className="w-full flex justify-center mt-16 sm:mt-28 px-4">
      <div className="flex overflow-x-auto space-x-6 sm:space-x-4 scrollbar-hide">
        {images.map((src, index) => (
          <Link
            key={index}
            to={`/products/${imageTexts[index]}`}
            className="flex flex-col items-center flex-shrink-0 text-center"
          >
            <img
              src={src}
              alt={imageTexts[index]}
              className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] object-contain"
            />
            <p className="mt-1 sm:mt-2 text-[12px] sm:text-[13px] md:text-[16px] font-medium capitalize">
              {imageTexts[index].replace(/-/g, ' ')}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ScrollPage;
