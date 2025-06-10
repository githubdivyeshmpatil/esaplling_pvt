import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Thermometer() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/venti.jpg" />
      </div>

      <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-10 px-4 md:px-16 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold font-os mb-4">Infra Red Thermometer</h2>
            <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed text-base sm:text-base md:text-lg lg:text-lg">
              ESAPLLING's infrared thermometer infers temperature from a portion of the thermal radiation sometimes called black-body radiation emitted by the object being measured.
              These infrared sensor measure the heat from the forehead which is highly accurate.
            </p>
            <p className="font-robo text-justify text-gray-700 mb-6 leading-relaxed text-base sm:text-base md:text-lg lg:text-lg">
              In the intricate tapestry of life on Earth, few elements are as essential as oxygen...
            </p>
            <p className="text-base text-gray-800 mb-6 font-robo">
              We are focused on Quality assurance and quality control parameters...
            </p>
            <p className="mb-4 leading-relaxed font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
              We strive to provide quality products at an affordable price...
            </p>
            <ul className="list-disc list-inside space-y-2 text-base font-robo text-gray-700">
              <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo">To study and analyze basic data...</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo">To prepare transmission line from specified water source...</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src="/img/thermomiter.png" alt="Infrared Thermometer" className="w-full max-w-sm rounded-xl shadow-lg" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Thermometer;
