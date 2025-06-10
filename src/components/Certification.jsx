import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Certification() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
   <>
     <Navbar />
     <div className="max-w-9xl">
       <BackgroundSection bgImage="/img/certi.png" />
     </div>

     <section className="bg-white py-10 px-4 sm:px-8 lg:px-16">
       <div className="max-w-7xl mx-auto text-justify">
         <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-6 font-os">Certification</h2>
         
         <p className="text-base sm:text-lg text-gray-800 mb-6 font-robo">
           ESAPLLING holds a complete range of state-of-the-art facilities along with compliance certifications for the manufacturing of goods in the Automobile, Electronics, Medical Equipment, and Healthcare domains. We are certified by the world's leading quality assurance and certification authorities and affiliated bodies.
         </p>

         <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm sm:text-base font-robo">
           <li><strong className="text-black font-semibold font-os">ISO 9001:</strong> 2015 Quality Management System</li>
           <li><strong className="text-black font-semibold font-os">ISO 4500:</strong> 2018 Occupational Health and Safety Management System</li>
           <li><strong className="text-black font-semibold font-os">ROHS Compliance:</strong> Directive (20/95/EC) of the European Parliament and Commission Decision 2005/618/EC on the restriction of use of certain Hazardous Substances [Lead (Pb), Mercury (Hg), Cadmium (Cd), Hexavalent Chromium (Cr6+), Polybrominated biphenyls (PBBs) and Polybrominated Diphenyl ethers (PBDEs)] in Electrical and Electronic Equipments.</li>
           <li><strong className="text-black font-semibold font-os">CE:</strong> Complies with the requirements of the Council Directive on 93/42/EEC Medical Devices Directive (MDD), 98/79/EC Medical Devices: In Vitro Diagnostic (IVD) Manufacture.</li>
           <li><strong className="text-black font-semibold font-os">IATF 16949:</strong> 2016</li>
           <li><strong className="text-black font-semibold font-os">Goods Manufacturing Practice</strong></li>
           <li><strong className="text-black font-semibold font-os">BIS</strong></li>
           <li><strong className="text-black font-semibold font-os">CE:</strong> The certification body has performed an audit of the above product quality system covering the design, manufacture, and final inspection of the certified product. The quality system has been assessed, approved, and is subject to continuous surveillance according to the Council Directive on 89/686/EEC Personal Protective Equipment (PPE), Machinery Directive 2006/42/EC by Regulation (EU) No 167/2013.</li>
           <li><strong className="text-black font-semibold font-os">US FDA</strong></li>
         </ul>
       </div>
     </section>

     <div className="container mx-auto px-4 py-8">
       <img
         src="/img/ESAPLLING_Certificate.png"
         alt="Sample"
         className="w-full h-auto rounded-lg shadow-md"
       />
     </div>

     <div className="container mx-auto px-4 py-8">
       <img
         src="/img/certification2.png"
         alt="Sample"
         className="w-1/2 h-auto rounded-lg shadow-md mx-auto"
       />
     </div>
   </>
  )
}

export default Certification
