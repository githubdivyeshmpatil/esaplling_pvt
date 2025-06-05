import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Plantsetup() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
 <>
  <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/plant.png" />
      </div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-os font-semibold mb-6 text-gray-900">
        PSA Oxygen Plant
      </h1>

      <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed">
        In the intricate tapestry of life on Earth, few elements are as
        essential as oxygen. It is the very breath of life, the element that
        sustains not only human existence but also that of countless other
        organisms. As our world evolves, the demand for this life-sustaining gas
        continues to rise, and this is where the remarkable world of oxygen
        plants comes into focus. Oxygen plants, also known as oxygen generation
        units or oxygen production facilities, are the unsung heroes of modern
        healthcare, industry, and emergency services. These facilities are
        responsible for the extraction, purification, and distribution of
        oxygen to meet the ever-growing needs of society. From supporting
        critical medical procedures to enabling industrial processes and
        emergency response, oxygen plants are the silent pillars of our
        infrastructure.
      </p>

      <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed">
        As we embark on this exploration of oxygen plants, we venture into the
        heart of a technology that plays a pivotal role in preserving and
        enhancing human life. We will delve into the science behind oxygen
        production, understanding how air, a seemingly abundant resource, can
        be transformed into the life-sustaining gas that fills our lungs.
        Furthermore, this journey will lead us to understand the broader
        implications of oxygen plant technology. In the face of global
        challenges, such as the COVID-19 pandemic, the importance of a robust
        oxygen supply has come into stark focus. We will explore the critical
        role oxygen plants play in times of crisis, their impact on healthcare
        systems, and the measures taken to ensure their reliability and
        accessibility.
      </p>

      <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed">
        Join us as we navigate the fascinating world of oxygen plants, where the
        quest to harness this vital element is not merely a matter of science
        and engineering, but a lifeline that connects us all. Together, we will
        uncover the ingenuity, dedication, and far-reaching implications of
        this life-supporting technology, gaining a newfound appreciation for the
        breath of life itself.
      </p>

      <h2 className="text-2xl sm:text-3xl font-os font-semibold mt-12 mb-6 text-gray-900">
        Model
      </h2>
      <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed">
        100 / 200 / 500 / 1000 / 2000 LPM
      </p>

      <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed">
        Pressure swing adsorption (PSA) oxygen generating plants are a source of
        medical-grade oxygen. Through the Pressure Swing Adsorption (PSA)
        technology and adsorption media developed in-house, the atmospheric air
        is separated into its components nitrogen and oxygen. Subsequently,
        oxygen is available for further use in quantities of 0.5 – 2,000.00
        Nm³/h and purities of 90 – 95%.
      </p>

      <h2 className="text-2xl sm:text-3xl font-os font-semibold mt-12 mb-6 text-gray-900">
        Technical Specifications
      </h2>

      <ul className="font-robo text-gray-700 list-disc list-inside space-y-2 leading-relaxed">
        <li>Oxygen purity: 93% (+/-) 2 %</li>
        <li>Inlet air pressure: 7.5 kg/cm²g</li>
        <li>Outlet gas pressure: 5 kg/cm²g</li>
        <li>
          Dry Compressed Air Requirement @ 7.5 kg/cm²g & 40°C: 582 Nm³/hr. (393
          CFM)
        </li>
        <li>
          Installed Power Required for Air Compressor 415 V 3 Ph. 50 Hz: 75 kW
          (57 HP)
        </li>
        <li>Average Power Consumption for Air Compressor: 57 KWH</li>
        <li>Dew point (Atm.): (-) 50°C</li>
        <li>Outlet gas temperature: Ambient</li>
        <li>Type: PSA Generator Plant</li>
        <li>Duty: Continuous & Fully Automatic Skid mounted</li>
      </ul>

      <p className="font-robo text-justify text-gray-700 mt-12 leading-relaxed">
        For Institutional Orders Please email{" "}
        <a
          href="mailto:sales@esaplling.com"
          className="text-blue-600 underline"
        >
          sales@esaplling.com
        </a>
      </p>
    </div>
      {/* Centered responsive image below content */}
      <div className="mt-12 flex justify-center">
        <img
          src="/img/industryanduse.png"
          alt="PSA Oxygen Plant"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-lg shadow-md object-contain"
        />
      </div>
 </>
  )
}

export default Plantsetup