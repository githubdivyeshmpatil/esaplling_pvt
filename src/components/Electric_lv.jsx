import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Electric_lv() {
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/electrical.jpg" />
      </div>
      
      <section className="bg-white px-4 md:px-16 py-10 text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto space-y-10 text-justify">

          {/* Electrical Works - Residential */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 font-os leading-snug">
              Electrical & LV<br />
              Electrical Works (Residential):
            </h2>
            {[
              "Design and issue of drawings and layouts for Internal, External, street light, D.G. sets as also special schemes for Auto Controls, Modern Designs of Metering Panels and improved quality of power distribution system.",
              "Preparation of Bill of Quantities and Technical Specifications, if necessary.",
              "Co-ordination with architects for a better design.",
              "Assisting you in procurement of major materials, call of quotations, tender, recommendations, and inspection of the same after they are procured, at site.",
              "Check typical slabs before casting for all electrical works.",
              "Cross check existing design drawings and work done at site, based on discussion and requirement redesign the internal electrical layout.",
              "Attending co-ordination meetings with other service consultants, Architects, Site Project Managers as per call.",
              "Testing and issue of Acceptance for occupation and charging of power supply."
            ].map((item, index) => (
              <p key={index} className="font-robo mb-1 text-justify text-sm md:text-base">• {item}</p>
            ))}
          </div>

          {/* Electrical Works - Commercial */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 font-os leading-snug">
              Electrical Works (Commercial):
            </h2>
            {[
              "Design of the complete Electrical Distribution System (HT & LT).",
              "Electric Lighting & Power Installation, including Lighting Fittings.",
              "Lighting Protection Services",
              "External Lighting & Landscaping.",
              "Detailing of power system for fire designing or any other electrical utility required & necessary for the project apart from the above mentioned works",
              "Integration of all related required electrical services.",
              "Integration of all related required electrical services for building management services, including CCTV, DATA & telecommunication Services",
              "Preparation of design base report.",
              "Call of Quotations / Tender, if necessary.",
              "Assisting in finalization of agencies of contract, procurement of major materials, call of quotations, tender, recommendations & inspection of the same after they are procured, at site.",
              "Checking of sample Installations.",
              "Attending co – ordination meetings with other service consultants, architects, site project managers as per call.",
              "Inspection of work at different stages, certification of bills of contracts, if required.",
              "Design of Internal flat or building electrical services."
            ].map((item, index) => (
              <p key={index} className="font-robo mb-1 text-justify text-sm md:text-base">• {item}</p>
            ))}
          </div>

          {/* L.V. Works */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 font-os leading-snug">L.V. Works:</h2>
            {[
              "Design of UPS,",
              "Security Services,",
              "Telephone System,",
              "Access Control System,",
              "Fire Alarm System."
            ].map((item, index) => (
              <p key={index} className="font-robo mb-1 text-justify text-sm md:text-base">• {item}</p>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Electric_lv
