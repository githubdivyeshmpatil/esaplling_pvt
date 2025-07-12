import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BackgroundSection from '../components/BackgroundSection'
import { useTranslation } from 'react-i18next'
import sir1 from '../assets/images/sir1.jpg'
import roadmap from '../assets/images/roadmap.jpg'


function Vison() {
   const { t } = useTranslation();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
<div className="relative w-full">
  {/* Background Image */}
  <img
    src={bg2}
    alt="Background"
    className="w-full h-auto object-contain object-top z-0 relative"
  />

  {/* Overlay (Positioned absolutely on top of image) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

  {/* Content Section */}
  <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 lg:px-20 py-10 sm:py-20">
    <div className="max-w-xl text-white">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="block">Future of Collaboration</span>
        <span className="block">and Conferencing Solution</span>
      </h1>

      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
        Easy display for every room type
      </p>

      <button
        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Know More
      </button>
    </div>
  </div>
</div>        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto text-justify">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000066] mb-6 text-center font-os">
             At a Glance:

            </h2>
            <div className="text-black text-md sm:text-lg space-y-6 font-robo">
              <p className="text-base sm:text-base md:text-lg lg:text-lg">
                ESAPLLING, a leading firm that optimizes technology and solutions through electronics things to be part of everyone's Life, Company’s major focus on Consumer Electronics (LED, AC, Cooler, washing Machine manufacturing and HVAC Turnkey solution designing build and O & M. Establishing landmark of success in major critical sectors.

 

ESAPLLING, started it's biomedical vertical in the pandamic 2020 to support the world with innovation and production of Biomedical and personal protective equipments.

 

Esaplling specializes in providing quality consumer electronic products at an affordable price targeting affordable income group. While the company has experienced significant growth and success since its inception, their philosophy remains the same. They work with their clients to deliver quality products at competitive prices, meeting their required specifications, timelines, and budget. They attribute their own success to the success of their customers’ products they have delivered. Established resources, extensive industry knowledge and strong supplier relationships enable Esaplling to deliver quality products for clients. They are able to provide a cost effective solution for most electronics manufacturing requirements in India – they are available to discuss your specific needs through multiple modes of communication.

 

Implementing electronic solution in domestic Engineering industries, corporate and retail businesses, is a challenge on account of various factors, which Esaplling has successfully achieved by adopting customer centric approach rather than traditional product centric approach. They are first one who have offered highest ever warranty period in all product category to enrich customer satisfaction to next level, they do have PAN India service network and toll free access to address service issues if any.
              </p>
            </div>
          </div>
        </section>
      </div>
    <section className="w-full px-4 py-8 flex flex-col md:flex-row items-center gap-6">
      {/* Left Image Column */}
      <div className="w-full md:w-1/2">
        <img
          src={sir1} // ← Yahan apni image ka path daalo
          alt="Left Side"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Right Content Column */}
      <div className="w-full md:w-1/2 text-left">
        
        <p className="text-base sm:text-base md:text-lg lg:text-lg text-justify">
         Understanding the market challenge and enabling the technology, bring it to affordable price range for being part of everyone's life been our objective and motto. Evaluating and redesigning the product service frame work, tools and automating things with cutting edge technology was our prime focus. We are not a simple design company, we are a Design, Build, operate and transfer enabler, So enabling the succession and enabling thru right approach been in our prime focus .


        </p>
      </div>
    </section>
    <section className="w-full px-4 py-8 flex flex-col md:flex-row-reverse items-center gap-6">
  {/* Right Image Column */}
  <div className="w-full md:w-1/2">
    <img
      src={roadmap} // ← Yahan apni image ka path daalo
      alt="Right Side"
      className="w-full h-auto rounded-xl shadow-md"
    />
  </div>

  {/* Left Content Column */}
  <div className="w-full md:w-1/2 text-left">
  
  </div>
</section>

    </>
  )
}

export default Vison
