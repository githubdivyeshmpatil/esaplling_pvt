import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Quality() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
     <div className="max-w-9xl">
       <BackgroundSection bgImage="/img/banner-quality.jpg" />
     </div>
     <div className="max-w-7xl mx-auto text-justify">
         <h2 className="text-3xl font-bold text-[#000066] mb-6 font-os">Quality Assurance:</h2>
         
         <p className="text-base text-gray-800 mb-6 font-robo  sm:text-base md:text-lg lg:text-lg">
           We are focused on Quality assurance and quality control parameters for all our products and services. We do conduct inspection as the process of measuring, examining, and testing to gauge one or more characteristics of a product or service in every phase of activity to ensure the Quality Assurance and Audit Functions are intact in each stage of production.
         </p>
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

export default Quality