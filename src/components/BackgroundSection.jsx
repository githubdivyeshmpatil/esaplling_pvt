import React from "react";

const BackgroundSection = ({ bgImage, children }) => {
  return (
    <div
      className="w-full 
                 h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px] 
                 bg-contain bg-no-repeat bg-center flex items-center justify-center mt-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pt-10 sm:pt-16 md:pt-20 lg:pt-24">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;
