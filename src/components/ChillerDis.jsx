import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function ChillerDis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section with Background Image */}
      <div
        className="w-full min-h-screen bg-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/chillerplant.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Image and Description Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/img/water_chiller.jpg"
            alt="Chiller System"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-black space-y-4 text-justify font-robo">
          <h2 className="text-2xl md:text-3xl font-bold font-os">Chillers</h2>
          <p>
  <strong>Chillers</strong> are cooling systems designed to remove heat from a liquid, typically
  water or a water-glycol mixture, and circulate the cooled liquid to various heat
  exchangers or coils to cool air or other processes. Chillers are widely used in
  various industries, including malls and industrial facilities, to maintain
  temperature control, improve energy efficiency, and ensure comfortable working
  conditions. There are different types of chillers, each suited for specific
  applications.
</p>

{/* Types of Chillers */}
<h3 className="text-xl font-semibold mt-4">Types of Chillers</h3>
<p>
  <strong>Air-Cooled Chillers:</strong> Use ambient air to dissipate heat and cool the refrigerant
  within the chiller. They do not require a cooling tower or a separate water source.
  These chillers are commonly used in smaller commercial buildings, such as malls, as
  well as industrial facilities with space constraints or limited access to water.
</p>
<p>
  <strong>Water-Cooled Chillers:</strong> Use water or a water-glycol mixture to absorb and
  dissipate heat. They typically require cooling towers to reject heat into the
  atmosphere. These are commonly used in larger industrial applications where higher
  cooling capacities are needed.
</p>
<p>
  <strong>Heat Reclaim Chillers:</strong> Recover waste heat for reuse, increasing overall energy
  efficiency. They contribute to sustainability and energy conservation efforts in
  industries.
</p>

{/* Benefits */}
<h3 className="text-xl font-semibold mt-4">Benefits of Chillers for Malls and Industries</h3>
<ul className="list-disc list-inside space-y-1">
  <li>
    <strong>Temperature Control:</strong> Provides precise control, ensuring indoor environments in
    malls and industrial process conditions stay within the desired range. This
    improves comfort, product quality, and equipment reliability.
  </li>
  <li>
    <strong>Energy Efficiency:</strong> Designed with modern, efficient components and controls
    that reduce power consumption and lower energy bills.
  </li>
  <li>
    <strong>Flexibility:</strong> Adapts to varying cooling loads, ideal for seasonal changes and
    fluctuating industrial requirements.
  </li>
  <li>
    <strong>Improved Air Quality:</strong> Controls humidity and temperature in malls; helps cool
    industrial equipment to improve workplace conditions.
  </li>
  <li>
    <strong>Reduced Downtime:</strong> Prevents overheating in industrial machinery, ensuring
    continuous and reliable operation.
  </li>
  <li>
    <strong>Environmental Benefits:</strong> Helps reduce greenhouse gas emissions by improving
    operational efficiency and reducing the need for auxiliary systems.
  </li>
  <li>
    <strong>Longevity:</strong> With proper maintenance, chillers last many years, providing
    cost-effective performance over time.
  </li>
  <li>
    <strong>Process Optimization:</strong> Enables precise temperature control in industrial
    processes, leading to better product quality and reduced waste.
  </li>
  <li>
    <strong>Cost Savings:</strong> Energy savings, minimal maintenance, and efficient operation lead
    to lower total operational costs.
  </li>
  <li>
    <strong>Space Efficiency:</strong> Especially with air-cooled chillers, which don’t require
    additional infrastructure like cooling towers.
  </li>
</ul>

{/* Additional Features */}
<p>
  A <strong>chiller</strong> is a machine that removes heat from a liquid via a vapor-compression
  or absorption refrigeration cycle. This cooled liquid is then used in heat exchangers
  to cool air or equipment in various applications.
</p>
<p>
  The commercial chiller is available in three types: <strong>Water-Cooled</strong>,{' '}
  <strong>Air-Cooled</strong>, and <strong>Heat Reclaim</strong> variants. These chillers offer
  efficient performance using sophisticated technology at an affordable price.
</p>
<p>
  It features a <strong>tube heat exchanger</strong> for quick cooling with{' '}
  <strong>quiet operation</strong> and a <strong>compact design</strong> that fits easily into most
  spaces. Its <strong>non-electric oil feeding system</strong> increases compressor life by reducing
  mechanical wear.
</p>
<p>
  <strong>Continuous capacity control</strong> maintains stable temperature levels, and{' '}
  <strong>low vibration levels</strong> ensure high reliability and user satisfaction in industrial
  environments.
  There is a continuous capacity control which maintains the temperature level in the Industrial Chillers. The vibration produced from the chillers is not very loud and offers high reliability and satisfies the needs of its users.
</p>

        </div>
      </div>

      {/* Chiller Structure and Working */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 px-6 md:px-12 py-10">
        {/* Left Text */}
        <div className="w-full flex flex-col md:flex-row items-start gap-8 px-4 py-8">
  {/* Left Text Column */}
  <div className="w-full md:w-1/2 text-gray-800 space-y-4 text-justify">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Chiller Structure</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>Simple Design:</strong> The overall structure of the commercial chillers is very
        simple and highly energy efficient.
      </li>
      <li>
        <strong>Easy Maintenance:</strong> Designed for easy upkeep with a built-in cyclone oil
        separator.
      </li>
      <li>
        <strong>Reduced Heat Transfer:</strong> The overall heat transfer is minimized for better
        performance.
      </li>
      <li>
        <strong>Safe Operations:</strong> Equipped with standard safety devices to allow safe and
        simple operation.
      </li>
    </ul>

    {/* Working Principle */}
    <h3 className="text-xl font-semibold mt-4 text-blue-600">Working Principle</h3>
    <p>
      The chiller system changes the physical state of refrigerant to transfer heat from one
      area to another. According to the pressure-temperature relationship, increasing pressure
      raises the refrigerant's temperature, and decreasing pressure lowers it.
    </p>
    <p>
      As the refrigerant circulates through the HVAC chiller, various components change its
      pressure and temperature, causing it to <strong>boil into a gas</strong> and{' '}
      <strong>condense back into a liquid</strong>, facilitating efficient heat exchange.
    </p>
  </div>

  {/* Right Image Column */}
  <div className="w-full md:w-1/2">
    <img
      src="/img/chillersmall.jpg"
      alt="Chiller Diagram"
      className="w-full h-auto rounded-xl "
    />
  </div>
</div>
</div>
    </>
  );
}

export default ChillerDis;
