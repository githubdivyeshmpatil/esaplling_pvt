import React, { useEffect } from 'react'

function EphoxSpecificationpdf() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-os">Air Filter "Ephox"</h1>
        <p className="text-lg md:text-xl text-gray-600 font-robo">Technical Specification | Catalogue | Certification</p>
       
      </div>

      <div className="bg-gray-100 p-6 md:p-10 rounded-xl shadow-md">
        <p className="text-gray-800 mb-4">
          <strong className='text-black font-os' >Ephox</strong>, is a filter powered by ESAPLLING with Oxidation, technically defined as the losing or the giving up of an electron...
        </p>
        <p className="text-gray-800 mb-4">
          Ephox is a hybrid active air purification technology that produces a family of highly Reactive Oxygen Species...
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4 font-os">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 font-robo">
          <li>Highly effective against Microbes (Bacteria, Virus, Mold, Allergens)</li>
          <li>VOCs & Gasses (Formaldehyde, etc.)</li>
          <li>Particles (Dust, Dander, Pollen)</li>
          <li>E-smog (Static Electrical Charge)</li>
          <li>Odor (Malodor, Pets, Rotten Food, etc.)</li>
          <li>Higher absorption of O₂ by the lungs</li>
          <li>Improved Breathing</li>
          <li>Reduction in Cross Contamination</li>
          <li>Enhanced Texture, Elasticity & Moisture content of the skin</li>
          <li>Saves Energy</li>
          <li>Hybrid Technology</li>
          <li>Active Air Purification System</li>
          <li>Life of minimum 18,000 hours</li>
          <li>UL, CSA, EN, CE, ROHS Certified</li>
          <li>EMSL Tested</li>
        </ul>
      </div>
       <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-os">
        Ephox Air Filter Documents
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {/* Technical Specification */}
        <a
          href="/img/ESAPLLING_FILTER.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg shadow-md transition"
        >
          📄 Technical Specification
        </a>

        {/* Catalogue */}
        <a
          href="/img/ESAPLLING_FILTERC.pdf"
          download
          className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg shadow-md transition"
        >
          📘 Catalogue
        </a>

        {/* Certification */}
        <a
          href="/img/ESAPLLING_FILTERC.pdf"
          download
          className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg shadow-md transition"
        >
          ✅ Certification
        </a>
      </div>
    </section>
    </section>
  )
}

export default EphoxSpecificationpdf