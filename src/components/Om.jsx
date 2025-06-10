import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Om() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
     <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/om.jpg" />
      </div>
       <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-os">
        MEETING ALL YOUR OPERATION MAINTENANCE NEEDS IN TIME AND ON YOUR BUDGET
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-blue-700 font-os">
        HIGH QUALITY AND PROFESSIONAL SERVICES
      </h2>

      <div className="text-base md:text-lg text-justify space-y-4 leading-relaxed text-gray-800 font-robo">
        <p className="text-base sm:text-base md:text-lg lg:text-lg">
          Experience Of Repair
        </p>
        <p className="text-base sm:text-base md:text-lg lg:text-lg">
          Generally, water and sanitation projects experience their most serious problems with operation and maintenance and with cost recovery aspects. Hundreds of projects around the world demonstrate how the newly built infrastructure deteriorates after the project's termination.
        </p>
      </div>
    </div>
<div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl w-full px-4 mb-10">
    <img src="/img/om1.jpg" alt="Image 1" className="w-full h-auto object-cover rounded" />
    <img src="/img/om2.jpg" alt="Image 2" className="w-full h-auto object-cover rounded" />
    <img src="/img/om3.jpg" alt="Image 3" className="w-full h-auto object-cover rounded" />
    <img src="/img/om4.jpg" alt="Image 4" className="w-full h-auto object-cover rounded" />
  </div>
</div>
   <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 max-w-6xl mx-auto">
      {/* Left side - Text content */}
      <div className="md:w-1/2 text-black">
        <h2 className="text-3xl font-bold mb-4 font-os">Expert Service By Best Technicians</h2>
        <p className="mb-4 leading-relaxed font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
          We strive to provide quality products at an affordable price to support our customers every day operations. We value our customers and working partnerships to ensure they receive the full benefit of their PhySep supported equipment. We are dedicated to providing professional experienced technical and maintenance support to maximize productivity and optimize plant operations and processes.
        </p>

        <h3 className="text-2xl font-semibold mb-3 font-os">Question</h3>

        <h4 className="text-xl font-semibold mb-2 font-os">Highest Standard Of Repair</h4>
        <p className="leading-relaxed font-robo text-justify text-base sm:text-base md:text-lg lg:text-lg">
          Lack of operation and maintenance strategies to maintain building energy system performance leads to increased energy use and less healthy buildings. The first step towards improved practices to take advantage of potential energy savings is to identify the O&M practices routinely performed in buildings. Understanding O&M baseline practice have two major benefits. First, baseline is the benchmark from which to measure the success of improvements in O&M practices.
        </p>
      </div>

      {/* Right side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/img/question.jpg" 
          alt="Expert Technician" 
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
   </>
  )
}

export default Om