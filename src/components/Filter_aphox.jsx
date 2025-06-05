import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import EphoxSpecificationpdf from './EphoxSpecificationpdf'

function Filter_aphox() {
  return (
   <>
    <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/filter_aphox.png" />
      </div>
       <EphoxSpecificationpdf/>
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

export default Filter_aphox