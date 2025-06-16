import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import ImageRow from './ImageRow'

function Smallappillinace() {
  return (
   <>
   <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/Mixy.png" />
      </div>
      <ImageRow/>
   </>
  )
}

export default Smallappillinace