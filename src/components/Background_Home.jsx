import React, { useEffect, useState } from 'react';
import home1 from '../assets/images/home_bg1.jpeg';
import home2 from '../assets/images/home_bg2.jpeg';
import home3 from '../assets/images/home_bg3.jpeg';
import home4 from '../assets/images/home_bg4.jpeg';
import home5 from '../assets/images/home_bg5.jpeg';

const images = [home1, home2, home3, home4, home5];

function Background_Home() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('forward');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'forward') {
          if (prevIndex === images.length - 1) {
            setDirection('backward');
            return prevIndex - 1;
          }
          return prevIndex + 1;
        } else {
          if (prevIndex === 0) {
            setDirection('forward');
            return prevIndex + 1;
          }
          return prevIndex - 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full h-auto sm:h-auto md:h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain md:object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Background_Home;
