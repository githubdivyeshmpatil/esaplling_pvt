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
            Certified Manufacturing Excellence
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-robo text-justify">
            <span className="font-semibold font-os text-black">ESAPLLING</span> holds a complete range of state-of-the-art facilities along with compliance certification for the manufacturing of goods in the{" "}
            <span className="font-medium">Automobile</span>,{" "}
            <span className="font-medium">Electronics</span>,{" "}
            <span className="font-medium">Medical Equipment</span>, and{" "}
            <span className="font-medium">Healthcare</span> domains.
          </p>
          <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed text-justify">
            We are certified by the world’s leading quality assurance and certification authorities and affiliated bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="w-full">
            <img
              src="/img/autoharness1.png"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full">
            <img
              src="/img/autoharness2.png"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full">
            <img
              src="/img/autoharness3.png"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full">
            <img
              src="/img/autoharness4.png"
              alt="Image 4"
              className="w-full h-auto object-cover rounded-lg shadow-md"
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

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 font-os">Best Practices for Wire Harness Design</h2>

        <p className="text-gray-700 text-base sm:text-lg mb-4 font-robo text-justify">
          For a harness to function properly in its physical environment, the equipment must adhere to a range of best practices:
          wire harness design. Identify potential problems posed by the physical environment, such as electrical interference,
          heat and cold, moisture, radiation, and more. Engineers must design harnesses with environmental damage over time.
        </p>

        <p className="text-gray-700 text-base sm:text-lg font-robo text-justify">
          Correct routing facilitates optimal wire interaction. There may be multiple routing options, but consideration must be
          given to environmental exposure, length and cost, difficulty of routing, and stress. Considering all these aspects we design the harness.
        </p>

        <div className="w-full">
          <img
            src="/img/autoharness5.png"
            alt="Achievement 1"
            className="w-full h-auto"
          />
        </div>
      </section>
     
    </>
  )
}

export default Automotive_page
