import React from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function ChillerDis() {
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/chillerplant.jpg" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-12">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img
            src="/img/water_chiller.jpg"
            alt="Chiller System"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 text-black space-y-4 text-justify font-robo">
          <h2 className="text-2xl md:text-3xl font-bold font-os">Chillers</h2>
          <p className='font-robo text-gray-800'>
            <strong className='font-os text-black'>Chillers</strong> are cooling systems designed to remove heat from a liquid,
            typically water or a water-glycol mixture, and circulate the cooled liquid to various
            heat exchangers or coils to cool air or other processes.
          </p>
        <p className='font-robo text-gray-800'>
            <strong className='font-os text-black'>Applications:</strong> Widely used in malls and industrial facilities to
            maintain temperature control, improve energy efficiency, and ensure comfortable working
            conditions.
          </p>
          <h3 className="text-xl font-semibold mt-4">Types of Chillers</h3>
         <p className='font-robo text-gray-800'>
            <strong className='font-os text-black'>Air-Cooled Chillers:</strong> Use ambient air to dissipate heat. Ideal for small
            buildings or places with limited water supply.
          </p>
        <p className='font-robo text-gray-800'>
            <strong className='font-os'>Water-Cooled Chillers:</strong> Use water to remove heat. Efficient for
            large-scale industrial applications, typically requiring cooling towers.
          </p>
         <p className='font-robo  text-gray-800'>
            <strong className='font-os text-black'>Heat Reclaim Chillers:</strong> Recover waste heat for reuse, increasing energy
            efficiency.
          </p>
          <h3 className="text-xl font-semibold mt-4">Benefits</h3>
          <ul className="list-disc list-inside space-y-1 text-justify text-gray-800">
            <li>
              <strong className='font-os text-black'>Temperature Control:</strong> Ensures consistent indoor climate and stable
              process conditions.
            </li>
            <li>
               <strong className='font-os text-black'>Energy Efficiency:</strong> Advanced technology for reduced energy
              consumption.
            </li>
            <li>
              <strong className='font-os text-black'>Flexibility:</strong> Adapts to different cooling loads and seasons.
            </li>
            <li>
              <strong className='font-os text-black'>Air Quality:</strong> Maintains comfortable environments and reduces humidity.
            </li>
            <li>
              <strong>Reduced Downtime:</strong> Prevents equipment overheating and failure.
            </li>
            <li>
              <strong className='font-os text-black'>Environmental Benefits:</strong> Reduces carbon footprint with efficient
              operation.
            </li>
            <li>
               <strong className='font-os text-black'>Longevity:</strong> Long-lasting with minimal maintenance.
            </li>
            <li>
              <strong className='font-os text-black'>Process Optimization:</strong> Enhances product quality and reduces waste.
            </li>
            <li>
              <strong className='font-os text-black'>Cost Savings:</strong> Lower energy and maintenance costs.
            </li>
            <li>
               <strong className='font-os text-black'>Space Efficiency:</strong> Especially with air-cooled systems.
            </li>
          </ul>
         <p className='font-robo text-gray-800'>
            The commercial chiller includes features like <strong>tube heat exchangers</strong>,{' '}
            <strong>quiet operation</strong>, <strong>compact design</strong>, and a{' '}
            <strong>non-electric oil feeding system</strong> to extend compressor life.
          </p>
         <p className='font-robo text-gray-800'>
            <strong>Continuous capacity control</strong> ensures precise temperature maintenance,
            and <strong>low vibration levels</strong> contribute to high reliability.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 px-6 md:px-12 py-10">
        {/* Left side text */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-4 text-justify">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Chiller Structure</h2>
          <ul className="list-disc list-inside space-y-1 text-justify">
            <li>
               <strong className='font-os text-black'>Simple Design:</strong> The overall structure of the commercial chillers is
              very simple and highly energy efficient.
            </li>
            <li>
              <strong className='font-os text-black'>Easy Maintenance:</strong> Designed for easy upkeep with a built-in cyclone
              oil separator.
            </li>
            <li>
                <strong className='font-os text-black'>Reduced Heat Transfer:</strong> The overall heat transfer is minimized for
              better performance.
            </li>
            <li>
               <strong className='font-os text-black'>Safe Operations:</strong> Equipped with standard safety devices to allow safe
              and simple operation.
            </li>
          </ul>
         <p className='font-robo'>
             <strong className='font-os text-black'>Working Principle:</strong> The chiller system changes the physical state of
            refrigerant to transfer heat from one area to another. According to the
            pressure-temperature relationship, increasing pressure raises the refrigerant's
            temperature, and decreasing pressure lowers it.
          </p>
         <p className='font-robo'>
            As the refrigerant circulates through the HVAC chiller, various components change its
            pressure and temperature, causing it to <strong>boil into a gas</strong> and{' '}
            <strong>condense back into a liquid</strong>, facilitating efficient heat exchange.
          </p>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2">
          <img
            src="/img/chillersmall.jpg"
            alt="Chiller Diagram"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default ChillerDis;
