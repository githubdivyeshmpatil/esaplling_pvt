import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Plumbing() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/plumbing.jpg" />
      </div>

      <section className="w-full bg-white py-10 px-4 md:px-16 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900 font-os">Plumbing & Public Health Services</h2>

            {/* Water Supply */}
            <h3 className="text-2xl font-semibold text-black mb-2 font-os">Water Supply:</h3>
            <ul className="list-disc list-inside space-y-2 text-base font-robo text-gray-700">
              <li className="text-base sm:text-base md:text-lg lg:text-lg">To study and analyze basic data with respect to water requirement, consumption and storage including fire fighting needs with due consideration to existing / future plans.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">To prepare transmission line from specified water source to storage facilities.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Analyze water quality and determine need of water treatment.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">If necessary design water treatment Capacity, with inlet & outlet parameter facilities depending upon water source.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Determine underground / overhead storage facilities.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Preparation of tender drawings and tender document. Releasing the same to the various contractors.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Design water distribution pipelines from storage tanks to various water consumption centers and / or Hydro pneumatic system.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Determine fire fighting water requirements and work out suitable storage.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Prepare bill of quantities for water supply components/piping.</li>
            </ul>

            {/* Storm Water / Rain Water Harvesting */}
            <h3 className="text-2xl font-semibold text-black mt-8 mb-2 font-os">Storm Water / Rain Water Harvesting:</h3>
            <ul className="list-disc list-inside space-y-2 text-base font-robo text-gray-700">
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Study existing contour plan and determine economical alignment for storm water drainage system.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Collect data with respect to total rainfall, rainfall intensity, contributing area etc.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">To prepare drawing of identified alignments for execution purpose.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">To prepare drawings for appurtenances like inlet drain, chambers/ man holes etc.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Design / prepare storm water harvesting system for roof top as well as area drainage.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Prepare bill of quantities.</li>
            </ul>

            {/* Drainage/Sanitation */}
            <h3 className="text-2xl font-semibold text-black mt-8 mb-2 font-os">Drainage / Sanitation:</h3>
            <ul className="list-disc list-inside space-y-2 text-base font-robo text-gray-700">
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Study existing contour plan and decide tentative pipeline alignment for sewage.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Study alignment survey details at site and prepare relevant drawings for laying sewer.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Prepare detailed specifications for piping system.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Prepare drawings for other work like manhole, flushing tank and bathroom/toilet/drawings etc.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Prepare bill of quantities.</li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">Work out cost estimates for drainage system.</li>
            </ul>
          </div>

          {/* Fire Fighting with Image on Right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-black mb-4 font-os">Fire Fighting:</h3>
              <ul className="list-disc list-inside space-y-2 text-base font-robo text-gray-700">
                <li className="text-base sm:text-base md:text-lg lg:text-lg">To design and prepare base drawings for firefighting facilities: underground & overhead tanks, wet riser/downcomer, hydrants, hose boxes, sprinklers, pumps (main, booster, jockey), pipe sizing, alarm system etc., based on fire Provisional N.O.C.</li>
                <li className="text-base sm:text-base md:text-lg lg:text-lg">To provide technical specifications for all site works.</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2">
              <img
                src="/img/fierprotection1.png"
                alt="Fire Fighting System Diagram"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Plumbing
