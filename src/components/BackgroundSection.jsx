import React from "react";

const BackgroundSection = ({ bgImage, children }) => {
  return (
    <div
      className="w-full h-64 sm:h-96 bg-cover bg-center mt-18 flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundSection;
