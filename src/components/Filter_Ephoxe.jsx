import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import EphoxSpecificationpdf from './EphoxSpecificationpdf'

function Filter_Ephoxe() {
  return (
   <>
    <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/Ephox.png" />
      </div>
      <EphoxSpecificationpdf/>
   </>
  )
}

export default Filter_Ephoxe