import React from 'react';
import sampleImage from '../assets/images/blue.png'; 

function Imagecompo() {
  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <img
        src={sampleImage}
        alt="Responsive"
        className="w-full max-w-md object-cover rounded-xl shadow-lg" 
      />
    </div>
  );
}

export default Imagecompo;
