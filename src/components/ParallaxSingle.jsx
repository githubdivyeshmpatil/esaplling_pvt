import React from 'react';
import ctmriImg from '../assets/images/paralex3.jpg'


function ParallaxSingle() {
  return (
    <div
      className="h-68 bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: `url(${ctmriImg})` }}
      >
     
     
    </div>
  );
}

export default ParallaxSingle;
