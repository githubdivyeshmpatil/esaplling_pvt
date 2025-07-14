import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import CardGrid from './CardGrid'

function Ventilation() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <Navbar />
   
       <div
        className="w-full min-h-screen bg-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/ventilation.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      <section className="max-w-4xl mx-auto px-6 py-10 text-gray-800 text-justify">
      <h1 className="text-4xl font-bold mb-6 font-os">Ventilation</h1>
      
      <p className="mb-4 leading-relaxed font-robo">
        The air we breathe and the indoor climate of our homes, offices, and buildings have a profound impact on our well-being and productivity. Heating, Ventilation, and Air Conditioning (HVAC) systems play a crucial yet often overlooked role in maintaining these environments. These systems are the silent guardians that ensure our indoor spaces remain comfortable, healthy, and energy-efficient, regardless of the weather outside.
      </p>
      
      <p className="mb-4 leading-relaxed font-robo">
        HVAC systems comprise complex networks of heating, cooling, and ventilation components designed to balance indoor comfort with energy efficiency. Beyond regulating temperature, they control humidity, improve air quality, and maintain proper air circulation. In this exploration of HVAC, we uncover the vital role these systems play in our daily lives.
      </p>
      
      <p className="mb-4 leading-relaxed font-robo">
        From cutting-edge technologies that enable precise temperature control to sustainable practices that minimize energy consumption, HVAC innovation continues to advance rapidly. Moreover, the importance of HVAC extends beyond technical performance. It also encompasses environmental and ethical considerations. Energy-efficient HVAC systems not only reduce operational costs but are also essential in combating climate change by lowering carbon emissions and minimizing environmental impact.
      </p>
    </section>
    <CardGrid/>
   </>
  )
}

export default Ventilation