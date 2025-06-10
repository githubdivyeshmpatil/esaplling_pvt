import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Ventilator() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
  <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/venti.jpg" />
      </div>
      <section className="bg-white px-4 md:px-16 py-10 text-gray-800 font-robo text-justify">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 font-os">
          ICU - Ventilator "VENOMO"
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-black font-os">
          Technical Specification | Catalogue | Certification
        </h2>
        <p className="text-base sm:text-base md:text-lg lg:text-lg">
          Venomo is derived from a German word, which means Computer defined.
          As Intensive Care Unit (ICU) is always dependent on highly monitored
          and systematic data, the name itself signifies the accuracy. The same
          has been tested and affiliated with the laboratories and the product
          came into existence in the pandemic situation, saving many lives. This
          is one of the "Make in India" product initiatives by ESAPLLING.
        </p>

        {/* Table-like structure for Modes and Parameters */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div>
            <h3 className="font-os text-lg font-semibold mb-2">Ventilator Modes</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-robo">PCV (Pressure Control Ventilation)</li>
              <li className="font-robo">APCV (Assist Pressure Control Ventilation)</li>
              <li className="font-robo">PCV - SIMV</li>
              <li className="font-robo">VCV/s (Assist Volume Control Ventilation)</li>
              <li className="font-robo">VCV/SIMV</li>
              <li className="font-robo">CPAP (Continuous Positive Airway Pressure)</li>
              <li className="font-robo">CPAP/PSV (Pressure Support)</li>
              <li className="font-robo">PRVC (Pressure Regulated Volume Control)</li>
              <li className="font-robo">HFNT (High Flow Nasal Therapy)</li>
              <li className="font-robo">VCV-PSV (Volume Control with Pressure Support)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-os text-lg font-semibold mb-2">Control Parameters</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-robo">Tidal Volume: 40 to 1200 ml</li>
              <li className="font-robo">PIP: 1 to 50 CmH₂O</li>
              <li className="font-robo">CPAP: 1 to 30 CmH₂O</li>
              <li className="font-robo">Inspiratory Flow: 55 Ltr continuous, 120 Ltr Peak</li>
              <li className="font-robo">FIO₂: 21% to 100%</li>
              <li className="font-robo">Breath Rate: 10 to 60 BPM</li>
              <li className="font-robo">I TIME: 0.1 to 12 sec</li>
              <li className="font-robo">Pressure Trigger: 1 to (-)15 CmH₂O</li>
              <li className="font-robo">Pressure Support: 0 to 60 CmH₂O</li>
              <li className="font-robo">Flow Trigger: off, 1 to 20 lpm</li>
              <li className="font-robo">Peak Flow: 1 to 180 lpm</li>
            </ul>
          </div>

          <div>
            <h3 className="font-os text-lg font-semibold mb-2">Special Functions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-robo">Manual Breath</li>
              <li className="font-robo">Screen Lock</li>
              <li className="font-robo">Inspiratory Hold</li>
              <li className="font-robo">Night Mode</li>
              <li className="font-robo">Pneumatic Nebulizer</li>
              <li className="font-robo">Tidal Volume (Delivered & Exhaled)</li>
              <li className="font-robo">Minute Volume</li>
              <li className="font-robo">Peak Inspiratory Pressure (PIP)</li>
              <li className="font-robo">CPAP & MAP</li>
              <li className="font-robo">Peak Flow</li>
              <li className="font-robo">Real Time Flow</li>
              <li className="font-robo">Breathe Rate / Spontaneous Rate</li>
              <li className="font-robo">I Time, I:E Ratio, FIO₂</li>
              <li className="font-robo">Real Time Waveform: Pressure, Flow, Volume</li>
              <li className="font-robo">Loops: PV Loop, FV Loop</li>
              <li className="font-robo">Trends: up to 12 hrs</li>
              <li className="font-robo">Plateau Pressure</li>
            </ul>
          </div>
        </div>
      </div>
        {/* Download Button */}
          <div className="mt-6">
            <a
              href="/img/ESAPLLING_V.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              📄 Download Technical Specification PDF
            </a>
          </div>
        
    </section>
  </>
  )
}

export default Ventilator