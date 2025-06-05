import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Mask_safe() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/mask.png" />
      </div>

      <section className="bg-white px-4 md:px-16 py-10 text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 font-os text-justify">
            N95 / N95 V - Respirator
          </h2>

          {/* Model Info */}
          <p className="mb-4 text-gray-700 font-robo text-justify">
            <span className="font-semibold">Specification:</span> Model : N95 4210 / 4210V || N95 6200 / 6200V || N95 9210 / 9210V || 3Ply
          </p>

          {/* Intro */}
          <p className="mb-4 font-robo text-justify">
            <span className="font-semibold">Breath Safe</span>, an <span className="font-semibold">ESAPLLING</span> brand, intends to support the national effort and #fightagainstCOVID-19 pandemic. This product serves multiple industrial applications.
          </p>

          {/* Description */}
          <p className="mb-4 font-robo text-justify">
            An N95 respirator is a protective device designed for a tight facial fit and highly efficient airborne particle filtration. The respirator's edges form a seal around the nose and mouth. Surgical N95 respirators, a subset of N95 Filtering Facepiece Respirators (FFRs), are commonly used in healthcare environments.
          </p>

          {/* Mask Testing Info */}
          <p className="mb-4 font-robo text-justify">
            Surgical masks and N95s are tested for fluid resistance, particulate and bacterial filtration efficiency, flammability, and biocompatibility. These masks should not be shared or reused.
          </p>

          {/* WHO Recommendations */}
          <p className="mb-4 font-robo text-justify">
            WHO recommends FFP2 or FFP3 masks during infectious outbreaks like SARS, Avian Flu, and COVID-19.
          </p>

          {/* Application List */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 font-os text-justify">
              These Masks are Generally Used in:
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 font-robo text-justify">
              <li><span className="font-semibold">Pharmaceuticals:</span> Material handling, protection against COVID-19</li>
              <li><span className="font-semibold">Agriculture:</span> Pesticides, grain dust, pollen, insecticide handling</li>
              <li><span className="font-semibold">Construction:</span> Sanding, drilling, cutting, carpentry</li>
              <li><span className="font-semibold">Ceramics:</span> Material handling, molding, raw material storage</li>
              <li><span className="font-semibold">Mining:</span> Drilling, material handling</li>
              <li><span className="font-semibold">Textiles:</span> Spinning, weaving</li>
              <li><span className="font-semibold">Food & Beverages:</span> Food processing and raw material handling</li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="mt-6">
            <a
              href="/img/ESAP_BREATH_SAFE.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              📄 Download Technical Specification PDF
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mask_safe
