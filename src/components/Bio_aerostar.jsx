import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Bio_aerostar() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/AeroStar.png" />
      </div>
      
      <section className="w-full bg-white py-10 px-4 md:px-16 text-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-semibold font-os mb-6 text-blue-700">Air Monitoring "AeroStar"</h2>

          {/* Description */}
          <p className="text-base font-robo text-justify mb-4">
            AeroStar, first of its kind portable particle counter with 0.1 micron sensitivity and 1.0 CFM (28.3 LPM) flow rate using laser diode technology. Over conventional HeNe (Helium Neon) particle counters which require frequent cleaning, periodic laser tube replacement and suffer from low concentration limits.
          </p>

          <p className="text-base font-robo text-justify mb-4">
            AeroStar is designed to operate in ISO Class 1 to Class 7 cleanrooms without concerns of it degrading its environment or exceeding concentration limits.
          </p>

          {/* Features */}
          <h3 className="text-2xl font-os text-blue-600 mt-6 mb-2">Features :</h3>
          <ul className="list-disc list-inside font-robo text-base mb-6 text-justify">
            <li>Alert – Generates alert in case of threshold exceeded</li>
            <li>Integration – BMS integration is possible and reports can be generated</li>
          </ul>

          {/* Certification */}
          <h3 className="text-2xl font-os text-blue-600 mt-6 mb-2">Certification:</h3>
          <ul className="list-disc list-inside font-robo text-base text-justify">
            <li>NABL certificates would be produced as part of validation of the filters</li>
            <li>All products and services are certified and hold a warranty certificate</li>
            <li>ESAPLLING products are certified as per the applicable standards</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Bio_aerostar;
