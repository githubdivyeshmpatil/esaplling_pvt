import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function Management() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/management.png" />
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Management Info */}
          <div className="md:w-1/2 text-justify font-robo px-2 md:px-4">
            <p className="mb-4 text-base sm:text-base md:text-lg lg:text-lg">
              <strong className="text-blue-600">ESAPLLING</strong>, is an innovation and product focused initiative,
              having vision to be part of everyone's life to serve in a best possible way.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Board of Director(s)</h3>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Satya Narayan Patri</li>
              <li>Rupali Pawar</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Director & Consultant(s)</h3>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>V K Seth</li>
              <li>A Kumar</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Experts and Advisory Members</h3>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Sakshi Saxena - Digital and PR</li>
              <li>Rajeev Kumar - Electromotive</li>
              <li>Venessa William - HVAC and Medical Devices</li>
              <li>Viram Saha - Director International Business</li>
              <li>Vivek Saxena - Swipe station and Charge station</li>
              <li>Paresh Mistry - Masks and Filters</li>
              <li>Ambarsh G - Automotive Designs and Localization</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2 font-os text-blue-600">Legal and Compliance</h3>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Amol Shitole</li>
              <li>Nitesh Mahajan</li>
              <li>Vishnu Rathi</li>
            </ul>
          </div>

          {/* Right Column - Image & Message */}
          <div className="md:w-1/2 px-2 md:px-4">
            <div className="flex justify-center mb-6">
              <img
                src="/img/sir2.jpg"
                alt="CMD"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
            </div>
            <div className="text-gray-800 text-sm sm:text-base text-justify font-robo">
              <p className="text-base sm:text-base md:text-lg lg:text-lg">
                Esaplling is a performer place, passion for creating things for next generation and to create a
                footprint in Consumer Electronics and Automotive industry would be our focus for 2025. In the fight to
                improve the market stability, sales, product quality and sustainability your contribution is essential.
                Our vision is to be part of every family be it a consumer appliance or automotive. Your support would
                be much appreciated in the due course of our mutual growth.
              </p>
              <br />
              <p className="text-base sm:text-base md:text-lg lg:text-lg">
                I urge all of you to do what you can to contribute to the growth to write a glorified history and to be
                part of a larger organization. Our dream is to be the fastest growing Consumer Appliance, Automotive,
                and biomedical company. Soon we will focus on Automotive air conditioning product-building activities.
              </p>
              <br />
              <p className="text-base sm:text-base md:text-lg lg:text-lg">
                Management is always supportive to those who want to see the revolution and think out of the box. You
                are free to write suggestions to CMD office—any smallest contribution can make a big difference. Let's
                speak up and keep sending ideas for the benefit of the organization. Have a wonderful journey with
                <strong> ESAPLLING</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Management;
