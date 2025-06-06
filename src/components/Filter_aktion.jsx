import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function Filter_aktion() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/Aktion_banner.png" />
      </div>

      {/* Heading Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-os">Air Filter "Aktion"</h1>
          <p className="text-lg md:text-xl text-gray-600 font-robo">Technical Specification | Catalogue | Certification</p>
        </div>

        {/* Description */}
        <div className="bg-gray-100 p-6 md:p-10 rounded-xl shadow-md text-gray-800 font-robo space-y-4">
          <p>
            <strong className="font-os text-black">Aktion</strong> is a powerful air purification technology that disinfects the air by emitting UV rays using Ultra Violet Germicidal Irradiation technology by emitting UV rays in the range of 254 nm (UV-C band). Designed and developed by ESAPLLING, these rays disrupt the DNA of the micro-organisms, preventing them from reproducing, and thereby killing germicides.
          </p>
          <p>
            Several options are available for its implementation in projects, such as standalone units, on coil, in-duct or in-room.
          </p>

          {/* Features Heading */}
          <h2 className="text-xl font-semibold mt-6 mb-4 font-os">Specifications & Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Control Infection</li>
            <li>Cost Effective</li>
            <li>Ready to Use</li>
            <li>Saves Energy</li>
            <li>Proven Technology</li>
            <li>Designed in accordance with ASHRAE recommendation for COVID</li>
            <li>Ultraviolet Air and Surface Treatment standards</li>
            <li>Ultra Violet Germicidal Irradiation</li>
            <li>Dual lamp & dual ended lamp holder for enhanced safety and vibration protection</li>
            <li>Inbuilt electronic type ballast with life rated for more than 15000 starts</li>
            <li>Automatically regulate the UV Lamps when the airflow is detected</li>
            <li>Laboratories</li>
            <li>Food & Beverage Industry</li>
            <li>Clean Room Applications</li>
            <li>Offices</li>
          </ul>
        </div>
      </section>

      {/* Document Downloads */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-os">
          Aktion Air Filter Documents
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Technical Specification */}
          <a
            href="/img/AKTION_SPEC.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg shadow-md transition"
          >
            📄 Technical Specification
          </a>

          {/* Catalogue */}
          <a
            href="/img/AKTION_CATALOGUE.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg shadow-md transition"
          >
            📘 Catalogue
          </a>

          {/* Certification */}
          <a
            href="/img/AKTION_CERTIFICATE.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg shadow-md transition"
          >
            ✅ Certification
          </a>
        </div>
      </section>
    </>
  );
}

export default Filter_aktion;
