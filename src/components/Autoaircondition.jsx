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
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-6 font-os">
            Automobile Air Conditioning System
          </h1>

          <p className="text-gray-700 text-lg mb-8 text-center font-robo">
            Automotive air conditioning cools and cleans the air inside a vehicle, reduces humidity,
            and maintains a comfortable environment. The system also manages air quality and quantity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Cooling & Cleaning</h2>
              <p className="text-white font-robo">
                The system cools the incoming air and removes dust and other pollutants,
                improving the comfort and health of vehicle occupants.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Humidity Control</h2>
              <p className="text-white font-robo">
                Reduces moisture content in the air, preventing fogging and improving overall comfort.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Air Circulation</h2>
              <p className="text-white font-robo">
                Circulates air within the cabin to maintain consistent temperature and quality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Performance Assessment</h2>
              <p className="text-white font-robo">
                Uses manifold and hand valves to purge refrigerant, remove moisture, and recharge the system.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-blue-500 shadow-md rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-black mb-2 font-os">Gauge Monitoring</h2>
              <p className="text-white font-robo">
                Modern systems use two or more gauges for pressure monitoring and precise control.
              </p>
            </div>
          </div>
        </div>
          <Ac />
      </div>
      
    </>
  )
}

export default Autoaircondition
