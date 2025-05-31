import React from "react";

const backgrounds = {
  televisions: "/img/AE1.png",
  "air-conditioners": "/img/ac_banner2.jpg",
  cooler: "/img/coolerbanner.jpg",
  
  kitchen: "/img/bg-kitchen.jpg",
   geysers:"/img/gyser_banner.png",
   washing:"/img/washing_banner.png",
   refrigerators:"/img/Fridge_banner.jpeg"
  // Add more mappings as needed
};

const Background = ({ category }) => {
  const imageUrl = backgrounds[category] || "/img/default-bg.jpg";

  return (
    <div
      className="w-full h-60 sm:h-72 md:h-80 lg:h-[22rem] bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Optional overlay or text can go here */}
    </div>
  );
};

export default Background;
