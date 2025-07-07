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
  
    </div>
  );
};

export default ACResponsiveBanner;
