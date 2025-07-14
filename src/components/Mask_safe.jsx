import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

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
          <p className="mb-4 text-gray-700 font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
            <span className="font-semibold">Specification:</span> Model : N95 4210 / 4210V || N95 6200 / 6200V || N95 9210 / 9210V ||3Ply
          </p>

          {/* Original Paragraph */}
          <p className="mb-4 font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
            Breath Safe an ESAPLLING brand, Intent of the initiative is in the interest of National and #fightaginstCOVID-19 pandamic. This product can be used in various industry applications.
          </p>

          <p className="mb-4 font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
            An N95 respirator is a respiratory protective device designed to achieve a very close facial fit and very efficient filtration of airborne particles. Note that the edges of the respirator are designed to form a seal around the nose and mouth. Surgical N95 Respirators are commonly used in healthcare settings and are a subset of N95 Filtering Facepiece Respirators (FFRs), often referred to as N95s.
          </p>

          <p className="mb-4 font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
            The similarities among surgical masks and surgical N95s are: They are tested for fluid resistance, filtration efficiency (particulate filtration efficiency and bacterial filtration efficiency), flammability and biocompatibility. They should not be shared or reused.
          </p>

          <p className="mb-4 font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
            Hygiene face masks are recommended for use in any situation where protection of the respiratory system is required. The WHO guidance recommends FFP2 or FFP3 masks during outbreaks of infections such as SARS, Avian Flu and Coronavirus.
          </p>

          {/* Application List */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 font-os text-justify">
              These Masks are generally Used in
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 font-robo text-justify">
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Pharmaceuticals:</span> Material handling, Protection aginst COVID-19
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Agriculture:</span> Pesticides, Grain dust, Pollen Dust, Insecticides handling
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Construction :</span> Sanding, Drilling, Cutting, Carpentry
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Ceramics:</span> Material handling, Moulding, Raw material storage
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Mining :</span> Drilling, Material handling
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Textiles:</span> Spinning, Weaving
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg">
                <span className="font-semibold">Food & Beverages:</span> Food processing and raw material handling
              </li>
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
  );
}

export default Mask_safe;
