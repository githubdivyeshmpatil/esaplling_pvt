import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Managment() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/management.png" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Left Column */}
          <div className="md:w-1/2 text-justify font-robo">
            <p className="mb-4">
              <strong className="text-blue-600">ESAPLLING</strong>,
              is an innovation and product focused initiative, having vision to be part of everyone's life to serve in a best possible way.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Board of Director(s)</h3>
            <ul className="mb-4 list-disc list-inside font-robo text-justify text-gray-800">
              <li>Satya Narayan Patri</li>
              <li>Rupali Pawar</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Director & Consultant(s)</h3>
            <ul className="mb-4 list-disc list-inside font-robo text-justify text-gray-800">
              <li>V K Seth</li>
              <li>A Kumar</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Experts and Advisory Members</h3>
            <ul className="mb-4 list-disc list-inside font-robo text-justify">
              <li>Sakshi Saxena - Digital and PR</li>
              <li>Rajeev Kumar - Electromotive</li>
              <li>Venessa William - HVAC and Medical Devices</li>
              <li>Viram Saha - Director International Business</li>
              <li>Vivek Saxena - Swipe station and Charge station</li>
              <li>Paresh Mistry - Masks and Filters</li>
              <li>Ambarsh G - Automotive Designs and Localization</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Legal and Compliance</h3>
            <ul className="mb-4 list-disc list-inside font-robo text-justify">
              <li>Amol Shitole</li>
              <li>Nitesh Mahajan</li>
              <li>Vishnu Rathi</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <img
              src="/img/sir2.jpg"
              alt="About ESAPLLING"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Below content if needed */}
        <div className="mt-12  text-gray-800 font-robo text-sm sm:text-base text-justify">
          <p>
            Esaplling is a performer place, passion for creating things for next generation and to create a foot print in Consumer Electronics and Automotive industry would be our focus for 2025. In the fight to improve the market stability, sales, product quality and sustainability your contribution is essential. Our vision is to be part of every family be it a consumer appliance or automotive . Your support would be much appreciated in the due course of our mutual growth. I urge all of you to do what you can to contribute to the growth to write a glorified history and to be part of a larger organization. As you are aware of the fact name symbolizes the growth and our dream is to be the fastest growing Consumer Appliance, Automotive, and biomedical company, will soon focus on Automotive air conditioning product-building activities. During the next few weeks, you will hear a lot of movement and noise in the market. You will learn how we continues to serve as the hub of an efficient and effective organization providing a wide range of product and services. Do note: management is always been supportive to the people who wants to see the revolution and has a approach to do something which is out of the box, you are free to write suggestions to CMD office, any smallest contribution can make a big difference, So let us speak up and keep sending suggestions for the benefit of the organization. I hope will have a great journey together ! I wish all of you to have a wonderful journey with ESAPLLING.
          </p>
        </div>
      </div>
    </>
  )
}

export default Managment
