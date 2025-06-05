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
        <p>
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
              <li>PCV (Pressure Control Ventilation)</li>
              <li>APCV (Assist Pressure Control Ventilation)</li>
              <li>PCV - SIMV</li>
              <li>VCV/s (Assist Volume Control Ventilation)</li>
              <li>VCV/SIMV</li>
              <li>CPAP (Continuous Positive Airway Pressure)</li>
              <li>CPAP/PSV (Pressure Support)</li>
              <li>PRVC (Pressure Regulated Volume Control)</li>
              <li>HFNT (High Flow Nasal Therapy)</li>
              <li>VCV-PSV (Volume Control with Pressure Support)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-os text-lg font-semibold mb-2">Control Parameters</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Tidal Volume: 40 to 1200 ml</li>
              <li>PIP: 1 to 50 CmH₂O</li>
              <li>CPAP: 1 to 30 CmH₂O</li>
              <li>Inspiratory Flow: 55 Ltr continuous, 120 Ltr Peak</li>
              <li>FIO₂: 21% to 100%</li>
              <li>Breath Rate: 10 to 60 BPM</li>
              <li>I TIME: 0.1 to 12 sec</li>
              <li>Pressure Trigger: 1 to (-)15 CmH₂O</li>
              <li>Pressure Support: 0 to 60 CmH₂O</li>
              <li>Flow Trigger: off, 1 to 20 lpm</li>
              <li>Peak Flow: 1 to 180 lpm</li>
            </ul>
          </div>

          <div>
            <h3 className="font-os text-lg font-semibold mb-2">Special Functions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Manual Breath</li>
              <li>Screen Lock</li>
              <li>Inspiratory Hold</li>
              <li>Night Mode</li>
              <li>Pneumatic Nebulizer</li>
              <li>Tidal Volume (Delivered & Exhaled)</li>
              <li>Minute Volume</li>
              <li>Peak Inspiratory Pressure (PIP)</li>
              <li>CPAP & MAP</li>
              <li>Peak Flow</li>
              <li>Real Time Flow</li>
              <li>Breathe Rate / Spontaneous Rate</li>
              <li>I Time, I:E Ratio, FIO₂</li>
              <li>Real Time Waveform: Pressure, Flow, Volume</li>
              <li>Loops: PV Loop, FV Loop</li>
              <li>Trends: up to 12 hrs</li>
              <li>Plateau Pressure</li>
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