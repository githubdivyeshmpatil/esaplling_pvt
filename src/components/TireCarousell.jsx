// TireCarousel.jsx
import React from "react";
import "./TireCarousell.css"; // For animation
import a1 from '../assets/images/a1.png';
import a2 from '../assets/images/a2.png';
import a3 from '../assets/images/a3.png';
import a4 from '../assets/images/a4.png';
import a5 from '../assets/images/a5.png';
import a18 from '../assets/images/a18.png';
import a6 from '../assets/images/a6.png';
import a7 from '../assets/images/a7.png';
import a8 from '../assets/images/a8.png';
import a23 from '../assets/images/a23.png';
import a10 from '../assets/images/a10.png';
import a11 from '../assets/images/a11.png';
import a12 from '../assets/images/a12.png';
import a13 from '../assets/images/a13.png';
import a14 from '../assets/images/a14.png';
// import a15 from '../assets/images/a15.png';
import a16 from '../assets/images/a16.png';
import a17 from '../assets/images/a17.png';



const images = [
  { src: a1,  },
  { src: a2, },
  { src: a3, },
    { src: a4, },
  { src: a5, },
  { src: a6, },
  { src: a7, },
  { src: a8, },
  { src: a23, },
  { src: a10, },
  { src: a11, },
  { src: a12, },
  { src: a13, },
  { src: a14, },
  // { src: a15, },
  { src: a16, },
  { src: a17, },
  { src: a18, },

 
];
const TireCarousell = () => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex gap-8 animate-marquee w-max">
        {[...images, ...images].map((item, index) => (
          <div key={index} className="flex flex-col items-center min-w-[160px]">
            <img
              src={item.src}
              alt={item.title}
              className="w-40 h-40 object-contain p-1" // ⬅️ updated
            />
            <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TireCarousell;
