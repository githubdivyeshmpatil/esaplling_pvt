import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import Ac from './Ac'

function Autoaircondition() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/banner_auto.png" />
      </div>

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-6 font-os">
            Automobile Air Conditioning System
          </h1>

          <p className="text-gray-700 text-lg mb-8 font-robo text-justify">
           Automobile air conditioning systems cool the occupants of a vehicle in hot weather. Automotive air conditioning is the process by which the air is cooled and cleaned, the humidity lowered and the air circulated. The quantity and quality of the air is also controlled. Under ideal conditions the air-conditioning system can be expected to accomplish all these tasks at the same time.
The air-conditioning system in modern vehicles is designed to lower the temperature to therefore assess the system’s performance. The manifold and hand valves allow the system to be purged of refrigerant, evacuated of air and moisture, and recharged with new refrigerant. Most modern gauge sets use two gauges, but some airconditioning systems that use a pressure control regulator for the evaporator may require a second low-pressure gauge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Cooling & Cleaning</h2>
              <p className="text-white font-robo text-base sm:text-base md:text-base lg:text-base">
                The system cools the incoming air and removes dust and other pollutants,
                improving the comfort and health of vehicle occupants.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Humidity Control</h2>
              <p className="text-white font-robo text-base sm:text-base md:text-base lg:text-base">
                Reduces moisture content in the air, preventing fogging and improving overall comfort.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Air Circulation</h2>
              <p className="text-white font-robo text-base sm:text-base md:text-base lg:text-base">
                Circulates air within the cabin to maintain consistent temperature and quality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Performance Assessment</h2>
              <p className="text-white font-robo text-base sm:text-base md:text-base lg:text-base">
                Uses manifold and hand valves to purge refrigerant, remove moisture, and recharge the system.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Gauge Monitoring</h2>
              <p className="text-white font-robo text-base sm:text-base md:text-base lg:text-base">
                Modern systems use two or more gauges for pressure monitoring and precise control.
              </p>
            </div>
          </div>
        </div>
          <Ac />
          <h3 class="text-center text-lg text-blue-500 font-semibold">
Automobile Air Conditioning System Comming Soon...
</h3>

      </div>
      
    </>
  )
}

export default Autoaircondition
