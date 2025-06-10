import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Dehumidifier() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
 <>
  <Navbar />
     <div className="max-w-9xl">
       <BackgroundSection bgImage="/img/dehumidifier.jpg" />
     </div>
        <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Column - Image */}
        <div>
          <img
            src="/img/humidifier1.png" // update this path
            alt="Dehumidifier"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-4 text-justify text-black font-robo">
          <h2 className="text-3xl md:text-4xl font-bold font-os">Dehumidifier</h2>
          <p className="text-base sm:text-lg">
            A dehumidifier performs the important function of extracting humidity in the form of vapour from the air as well as keeping the surrounding air cool. The only manual effort that needs to be done is to empty the pan when it is full of condensed water. A dehumidifier is generally a household appliance which reduces the level of humidity in the air, usually for health or comfort reasons, or to eliminate musty odour. Large dehumidifiers are also used in commercial buildings such as indoor ice rinks to control the humidity level.
          </p>
          <p className="text-base sm:text-lg">
            This type of dehumidifier differs from a standard air conditioner in which the evaporator and the condenser are placed in the same air path. A standard air conditioner transfers heat energy out of the room because its condenser coil releases heat outside.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li>The dehumidification process is the inverse of adding to the room with an evaporative cooler, and instead releases heat.</li>
            <li>Therefore, an in-room dehumidifier will always warm the room and reduce the relative humidity.</li>
            <li>As well as reducing the humidity more directly, by condensing and removing water.</li>
          </ul>
          <h3 className="text-xl font-semibold font-os">Esaplling Dehumidifier</h3>
          <p className="text-base sm:text-lg">
            In fact, the level of moisture/humidity in the home is crucial to achieve a healthy home environment. Too little moisture in the home can cause dryness of the nose and respiratory systems, while too much moisture in the home contributes to numerous health impacts, health hazards, and structural home damages.
          </p>
          <p className="text-base sm:text-lg">
            Asthma, allergies, and other respiratory illnesses are the main health impacts to children and other residents of homes with excessive moisture. It also causes or contributes to other hazards to human health such as mold, cockroaches, dust mites, and peeling off lead paint etc.
          </p>
        </div>

      </div>
    </div>
 </>
  )
}

export default Dehumidifier