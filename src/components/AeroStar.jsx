import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function AeroStar() {
  return (
   <>
    <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/aro.png" />
      </div>
       <section className="w-full px-4 py-10 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
  <span className="text-black">Air Monitoring – </span>
  <span className="text-blue-700">AeroStar</span>
</h2>



        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg mb-6">
          <strong>AeroStar</strong> first of its kind portable particle counter with 0.1 micron sensitivity and 1.0 CFM (28.3 LPM) flow rate using laser diode technology. Over conventional HeNe (Helium Neon) particle counters which require frequent cleaning, periodic laser tube replacement and suffer’s from low concentration limits.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          <strong>AeroStar</strong>  is designed to operate in ISO Class 1 to Class 7 cleanrooms without concerns of it degrading its environment or exceeding concentration limits. 
        </p>
        

        {/* Feature and Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Features */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">🔧 Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li> Alert – Generates alert incase of threshold exceeded</li>
              <li>Integration : BMS integration is possible and reports can be generated.</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>NABL certificates would be produced part of validation of the filters</li>
              <li>All Products and service are certified and holds a warranty certificate.</li>
              <li> ESAPLLING products are certified as per below standards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default AeroStar