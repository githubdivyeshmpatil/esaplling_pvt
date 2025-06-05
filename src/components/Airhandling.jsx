import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Airhandling() {
  return (
   <>
     <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/airhandling.jpg" />
      </div>
         <div className="container mx-auto px-4 py-10">
      <div className="space-y-6 text-black text-justify font-robo">
        <h2 className="text-3xl font-bold font-os">Air Handling Unit</h2>

        <p>
          An Air Handling Unit (AHU) conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. A typical air handler is a large metal box containing a blower, heating and/or cooling elements, filter racks or chambers, sound attenuators, and dampers.
        </p>

        <p>
          Air handlers connect to ductwork that distributes the conditioned air throughout the building and returns it to the AHU. AHUs can alternately be set up to discharge (supply) and admit (return) air directly to and from the space served without ductwork.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The units are assembled from a wide range of standard sections.</li>
          <li>Hard fastness between panels and frame ensures good air tightness.</li>
          <li>The spiroduct can be connected directly to the sections for easy installation.</li>
          <li>The AHUs have excellent acoustic and thermal insulation.</li>
          <li>Units are available in both galvanized and stainless steel options.</li>
          <li>Delivered with wave breakers and water traps.</li>
          <li>The fan and motor are mounted on vibration dampers with flexible connections.</li>
        </ul>
      </div>
    </div>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="flex justify-center items-center">
    <img src="/img/handling1.jpg" alt="Image 1" class="rounded-lg shadow-md w-96 h-auto" />
  </div>
  <div class="flex justify-center items-center">
    <img src="/img/handling2.jpg" alt="Image 2" class="rounded-lg shadow-md w-96 h-auto" />
  </div>
</div>


   </>
  )
}

export default Airhandling