import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Energymanagement() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
   <>
   <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/energy_banner.jpg" />
      </div>
       <section className="bg-white px-4 md:px-16 py-10 text-gray-800 font-sans text-justify">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Energy Management - Plumbing Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Energy Management<br />Plumbing Services:</h2>
          <p className="font-robo mb-1">• Pump selection & design, valves selection as per various manufacturer recommendation,</p>
          <p className="font-robo mb-1">• Checking the overall capacity of RO plant system, if required add/suggest necessary changes.</p>
          <p className="font-robo">• Checking the feasibility of flow rate vs pipe sizes, material and their costing.</p>
        </div>

        {/* Electrical Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Electrical Services:</h2>
          <p className="font-robo mb-1">• Study & analysis of project.</p>
          <p className="font-robo mb-1">• Check the design consideration for panel and suggest/check the distribution.</p>
          <p className="font-robo mb-1">• Study & Review of proposed BOQ, specs, drawing etc.</p>
          <p className="font-robo mb-1">• Add & design the proposed services wherever essential as per actual working condition.</p>
          <p className="font-robo mb-1">• Preparation of generalized Specification sheets for load details.</p>
          <p className="font-robo mb-1">• To prepare list of detailed Technical Queries.</p>
          <p className="font-robo mb-1">• To verify/suggest appropriate cable sizes and their unit rates.</p>
          <p className="font-robo mb-1">• Checks proposed incoming power supply and verifies its feasibility.</p>
          <p className="font-robo">• To prepare the price BOQ as per current market rate.</p>
        </div>

        {/* ENERGY AUDIT (MEP SERVICES) */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">ENERGY AUDIT (MEP SERVICES)</h2>
          <p className="font-robo mb-1">Installations: LT panels, Motors, Drives, Earthing stations, Metering Areas, Batteries, UPS, Server system</p>
          <p className="font-robo mb-1">• Operational support contracts.</p>
          <p className="font-robo mb-1">• Onsite measurement of your consumed energy</p>
          <p className="font-robo mb-1">• Discuss the equipment on site in your presence & identify potential saving.</p>
          <p className="font-robo mb-1">• Measurement and verification of results.</p>
          <p className="font-robo">• After analyzing the test reports, the recommendations for Optimization & efficiency improvement will be submitted.</p>
        </div>

        {/* Motors and drives */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Motors and Drives:</h2>
          <p className="font-robo mb-1">• Checking of Operating motors, drives, fans, blowers</p>
          <p className="font-robo mb-1">• Recommendation to preserve the life time of Motors and sensitive equipments</p>
          <p className="font-robo mb-1">• Check of failure of motors & electrical circuit Board.</p>
          <p className="font-robo mb-1">• Check of performance of all motors on site</p>
          <p className="font-robo">• After analyzing the test reports, recommendations for Optimization & efficiency improvement.</p>
        </div>

        {/* Lighting systems */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Lighting Systems:</h2>
          <p className="font-robo mb-1">• Check of energy bill, recommendation to save the energy</p>
          <p className="font-robo">• After analyzing the test reports, recommendation for Optimization & efficiency improvement analysis along with details of Energy efficient lights.</p>
        </div>

        {/* Tariff analysis */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Tariff Analysis:</h2>
          <p className="font-robo">Detailed check of last Six months or One year Electricity Bills & submitting the report with detailed analysis and recommendation for Optimization, penalty, incentives etc. Improve the power factor of system & get the incentive, avoid the penalties.</p>
        </div>

        {/* Critical safety issues */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Critical Safety Issues:</h2>
          <p className="font-robo">Critical safety issues against the installation, Distribution, operation for all Electrical installations, Recommendations for improvement will be submitted.</p>
        </div>

        {/* Maintenance contracts */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">Maintenance Contracts:</h2>
          <p className="font-robo">Verify the Maintenance contracts for AMC & suggestion for improvement from cost and performance point of view.</p>
        </div>

        {/* ARC FLASH STUDY */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-os">ARC FLASH STUDY:</h2>
          <p className="font-robo mb-1">• Onsite data collection, data analysis and documentation</p>
          <p className="font-robo mb-1">• Label preparation and installation</p>
          <p className="font-robo mb-1">• Training for impacted personnel</p>
          <p className="font-robo mb-1">• Hazard analysis is performed and reviewed by Professional Engineers</p>
          <p className="font-robo mb-1">• In-house label preparation equipment provides the ability to tailor the labels to match the clients arc Flash labelling standards</p>
          <p className="font-robo">• Deliverables include system documentation, a preliminary report, completed analysis results, labels, and a final report.</p>
        </div>
      </div>
    </section>
   </>
  )
}

export default Energymanagement