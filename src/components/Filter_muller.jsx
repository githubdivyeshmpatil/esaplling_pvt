import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function Filter_muller() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/muller.png" />
      </div>

      {/* Heading and Description Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-os">
            Air Filter "Air Muller (Split, Cassette, Fan Coil Unit)"
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-robo">
            Technical Specification | Catalogue | Certification
          </p>
        </div>

        {/* Description Content */}
        <div className="bg-gray-100 p-6 md:p-10 rounded-xl shadow-md text-gray-800 font-robo space-y-4">
          <p>
            <strong className="font-os text-black">Muller</strong> – The Central Air Muller are the Cleaner Series
            which offers very low airflow resistance with high filtration efficiency on PM 2.5 & bio-aerosols. The units are effective in reducing high concentration of airborne dust ranging from 0.1 - 10.0 µm in size.
          </p>
          <p>
            They provide up to high filtration efficiency on PM2.5 by cleaning the air through the principles of impingement, polarization and agglomeration. The air cleaners can integrate with a wide range of air conditioning units to centrally capture and kill airborne contaminants. The filtration system includes advanced controls for ease of installation and maintenance.
          </p>

          {/* Features */}
          <h2 className="text-xl font-semibold mt-6 mb-4 font-os">Specifications & Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>High efficiency filtration system with very low airflow resistance.</li>
            <li>Equivalent to MERV-11 efficiency in recirculating system.</li>
            <li>Meets LEED standard for IEQ Credit 5.1 requirement.</li>
            <li>Green Product Certified by IGBC.</li>
            <li>Complies US EPA acceptable limit of Ozone (within 0.05ppm levels).</li>
            <li>Complete air quality improvement (Dust particles, microbial, chemical gases reduction).</li>
            <li>Designed in accordance with ASHRAE recommendation for SARS-CoV-2 (COVID-19) protection.</li>
            <li>Kill rate of micro-organisms, tested in accordance with ASTM E2149 standards.</li>
            <li>High dust collection efficiency: at pressure drop of less than 0.20” wg @ 2.5 m/s.</li>
            <li>Tested in accordance with ASHRAE 52.2 2017 and ISO 16890 standards.</li>
            <li>Tested according to AHAM AC-1 and GB/T 18801 Annex C.</li>
            <li>Interlocks with AHU through a pneumatic sensor.</li>
            <li>Built on trap and kill technology system.</li>
            <li>Includes cleanable type filters having a long life resulting in an efficiency up to 99.88%.</li>
          </ul>
        </div>
      </section>

      {/* Document Download Buttons */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-os">
          Air Muller Filter Documents
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Technical Specification */}
          <a
            href="/img/MULLER_SPEC.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg shadow-md transition"
          >
            📄 Technical Specification
          </a>

          {/* Catalogue */}
          <a
            href="/img/MULLER_CATALOGUE.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg shadow-md transition"
          >
            📘 Catalogue
          </a>

          {/* Certification */}
          <a
            href="/img/MULLER_CERTIFICATE.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg shadow-md transition"
          >
            ✅ Certification
          </a>
        </div>
      </section>
       <div className="container mx-auto px-4 py-8">
       <img
         src="/img/certification2.png"
         alt="Sample"
         className="w-1/2 h-auto rounded-lg shadow-md mx-auto"
       />
     </div>
    </>
  );
}

export default Filter_muller;
