import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';
import visi from '../assets/images/visies.jpg';
import visi2 from '../assets/images/visi2.jpg';
import main from '../assets/images/visi1.png';
import main3 from '../assets/images/main3.png';
import main4 from '../assets/images/chestfreezer.png'; // 🔁 new image for third section
import Ac from './Ac';

function VisiCooler() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <BackgroundSection bgImage="/img/bannervisicooler.png" />
 <Ac />
      {/* -------- FIRST SECTION -------- */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-8 text-blue-800">
          THE NEW RANGE OF VISI COOLERS:
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left */}
          <div className="flex flex-col items-center text-sm text-gray-700 w-full lg:w-1/3">
            <img src={visi} alt="Left Icon" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mb-4" />
          </div>

          {/* Center */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={main} alt="Visi Cooler" className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-full max-w-[250px]" />
          </div>

          {/* Right */}
          <div className="flex flex-col items-center text-sm text-gray-700 w-full lg:w-1/3">
            <img src={visi2} alt="Right Icon" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mb-4" />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="mt-10 text-center text-sm text-gray-800 space-y-2">
          <div><strong>Dimensions:</strong> 600x615x1950</div>
          <div><strong>Capacity:</strong> 340 Litre</div>
          <div className="text-blue-800 font-medium">SINGLE-DOOR VISI COOLER</div>
        </div>
      </div>

      {/* -------- SECOND SECTION -------- */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-8 text-blue-800">
          THE ADVANCED VISI COOLERS:
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left */}
          <div className="flex flex-col items-center text-sm text-gray-700 w-full lg:w-1/3">
            <img src={visi} alt="Left Icon" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mb-4" />
          </div>

          {/* Center */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={main3} alt="Visi Cooler 2" className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-full max-w-[250px]" />
          </div>

          {/* Right */}
          <div className="flex flex-col items-center text-sm text-gray-700 w-full lg:w-1/3">
            <img src={visi2} alt="Right Icon" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mb-4" />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="mt-10 text-center text-sm text-gray-800 space-y-2">
          <div><strong>Dimensions:</strong> 600x1100x2000</div>
          <div><strong>Capacity:</strong> 650 Litre</div>
          <div className="text-blue-800 font-medium">DOUBLE-DOOR VISI COOLER</div>
        </div>
      </div>

      {/* -------- THIRD SECTION -------- */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-8 text-blue-800">
          THE PREMIUM VISI COOLERS:
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left */}
          <div className="flex flex-col items-center text-sm text-gray-700 w-full lg:w-1/3">
            <img src={visi} alt="Left Icon" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mb-4" />
          </div>

          {/* Center */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={main4} alt="Visi Cooler 3" className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-full max-w-[250px]" />
          </div>

          {/* Right */}
          <div className="flex flex-col items-center text-sm text-gray-700 w-full lg:w-1/3">
            <img src={visi2} alt="Right Icon" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mb-4" />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="mt-10 text-center text-sm text-gray-800 space-y-2">
          <div><strong>Dimensions:</strong> 880x1240x740</div>
          <div><strong>Capacity:</strong> 320 Litre</div>
          <div className="text-blue-800 font-medium">CHEST FREEZER</div>
        </div>
      </div>
    </>
  );
}

export default VisiCooler;
