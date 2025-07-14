import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Automotive_page() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/automotive.png" />
      </div>

      <section className="w-full bg-white py-10 px-4 md:px-16 text-justify">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-os">
Wiring Harness:
          </h2>
           {/* Right Side YouTube Video with background */}
          <div className="w-full h-64 md:h-96 bg-gray-100 p-2 rounded-lg shadow-md">
            <iframe
              className="w-full h-full rounded-md"
  src="https://www.youtube.com/embed/F39c6piDRQA"

              title="Split AC System Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-robo text-justify">
            <span className="font-semibold font-os text-black">ESAPLLING</span> holds a complete range of state-of-the-art facilities along with compliance certification for the manufacturing of goods in the{" "}
            <span className="font-medium">Automobile</span>,{" "}
            <span className="font-medium">Electronics</span>,{" "}
            <span className="font-medium">Medical Equipment</span>, and{" "}
            <span className="font-medium">Healthcare</span> domains.
          </p>
          <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed text-justify font-robo">
            We are certified by the world's leading quality assurance and certification authorities and affiliated bodies.
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
  <div className="flex justify-center">
    <img
      src="/img/autoharness1.png"
      alt="Image 1"
      className="w-[280px] h-[200px] object-contain rounded-lg "
    />
  </div>
  <div className="flex justify-center">
    <img
      src="/img/autoharness2.png"
      alt="Image 2"
      className="w-[280px] h-[200px] object-contain rounded-lg "
    />
  </div>
  <div className="flex justify-center">
    <img
      src="/img/autoharness3.png"
      alt="Image 3"
      className="w-[280px] h-[200px] object-contain rounded-lg "
    />
  </div>
  <div className="flex justify-center">
    <img
      src="/img/autoharness4.png"
      alt="Image 4"
      className="w-[280px] h-[200px] object-contain rounded-lg "
    />
  </div>
</div>

      </section>

     <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-justify">
  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-os">OEM Wiring Harness</h1>

  <p className="text-gray-700 text-base sm:text-lg mb-6 font-robo text-justify">
    Developing an automotive electrical distribution system: wiring system design as providing the critical
    foundation for the growth in automotive electronics systems and functionality. In that installment we looked at how
    to develop a set of system diagrams into a specific vehicle architecture, taking into account the complexity of a modern vehicle.
  </p>

  

  {/* Single Image */}
 

  {/* Two Images in One Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <img
    src="/img/autoharness5.png"
      alt="Harness Detail 1"
      className="w-full h-auto rounded"
    />
    <img
      src="/img/project.jpg"
      alt="Harness Detail 2"
      className="w-full h-auto rounded"
    />
  </div>
</section>

    </>
  )
}

export default Automotive_page
