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
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Air Monitoring – <span className="text-gray-800">AeroStar</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg mb-6">
          <strong>AeroStar</strong> is a first-of-its-kind <strong>portable particle counter</strong> with 
          <strong> 0.1 micron sensitivity</strong> and a <strong>1.0 CFM (28.3 LPM)</strong> flow rate, utilizing advanced 
          <strong> laser diode technology</strong>. It offers a superior alternative to traditional HeNe (Helium-Neon) 
          particle counters which often require frequent maintenance and have low concentration limits.
        </p>

        {/* Cleanroom suitability */}
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Designed to operate in <strong>ISO Class 1 to Class 7 cleanrooms</strong>, AeroStar ensures zero degradation 
          of cleanroom environments or violation of concentration limits.
        </p>

        {/* Feature and Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Features */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">🔧 Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Real-Time Alerts:</strong> Auto-alerts when thresholds are exceeded.</li>
              <li><strong>BMS Integration:</strong> Easily integrates with building systems.</li>
              <li><strong>Report Generation:</strong> Automated data logging and reports.</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>NABL Certification:</strong> Provided for filter validation.</li>
              <li><strong>Warranty:</strong> All products/services are covered.</li>
              <li><strong>Compliant with:</strong> Certified under applicable industrial standards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default AeroStar