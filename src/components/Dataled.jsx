import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import data from '../assets/images/data.png'

function Dataled() {
  return (
  <>
   <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>
      <div className="relative w-full">
  {/* Background Image */}
  <img
    src={data}
    alt="Background"
    className="w-full h-auto object-contain object-top z-0 relative"
  />

  {/* Overlay (Positioned absolutely on top of image) */}

  {/* Content Section */}
  <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 lg:px-20 py-10 sm:py-20">
    <div className="max-w-xl text-white">
     

    
    </div>
  </div>
</div>
  </>
  )
}

export default Dataled