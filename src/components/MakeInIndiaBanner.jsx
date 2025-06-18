import React, { useEffect } from "react";
import makeInIndiaImage from '../assets/images/makere.png'

const MakeInIndiaBanner = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8"> {/* Reduced py-8 to py-4 */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8"> {/* Slightly reduced gap */}
        {/* Image on left */}
        <div className="w-full md:w-1/3 lg:w-2/5">
          <img 
            src={makeInIndiaImage} 
            alt="Make in India Initiative"
            className="w-full h-48 md:h-56 lg:h-64 object-cover" // fixed height
          />
        </div>

        {/* Text content on right */}
      <div className="w-full md:w-2/3 lg:w-3/5">
  <p className="text-base sm:text-base md:text-base lg:text-base text-black font-medium leading-relaxed text-justify font-robo">
    We are part of the Make in India initiative of the government of India and we leverage the Indian manufacturing ecosystem for our clients and offer them distinct competitive advantage to win in the global marketplace.
  </p>
</div>

      </div>
    </div>
  );
};

export default MakeInIndiaBanner;
