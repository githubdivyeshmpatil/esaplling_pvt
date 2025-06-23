import React, { useEffect } from 'react';
import safetyPDF from '../assets/images/ehs.pdf'; // Adjust path as needed

function Envorment_safety() {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = safetyPDF;
    link.download = 'environment-safety.pdf'; // Optional: custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Downloading Environment Safety PDF...</h1>
      <p className="text-gray-600">If the download does not start automatically, please <a href={safetyPDF} download className="text-blue-700 underline">click here</a>.</p>
    </div>
  );
}

export default Envorment_safety;
