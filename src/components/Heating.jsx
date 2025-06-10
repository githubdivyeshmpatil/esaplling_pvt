import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'
import ImageGrid1 from './ImageGrid1'

function Heating() {
  return (
  <>
   <Navbar />

      {/* Background Banner */}
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/heating.jpg" />
      </div>
       <div className="px-4 sm:px-6 lg:px-16 py-10 space-y-12">
      {/* Mission */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">Mission</h2>
        <p className="text-justify text-gray-700 text-base sm:text-base md:text-lg lg:text-lg font-robo">
          Aims to create a landmark in the horizon of Consumer Electronics products including LED, air-conditioning and ventilation, by introducing the best in class practices across the industries.
        </p>
      </section>

      {/* Why Factory Ventilation */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">Why Factory Ventilation is Needed?</h2>
        <p className="text-justify text-gray-700 mb-4 text-base sm:text-base md:text-lg lg:text-lg font-robo">
          Proper ventilation in factories is essential to maintain air quality, regulate temperature, and ensure a healthy working environment. It also supports compliance with safety regulations and increases the overall efficiency of operations.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
          Talk to our experts for solution
        </button>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-justify">
          {["Design", "Consultancy", "Execution", "Validation", "O&M", "Planning"].map((service) => (
            <div key={service}>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service}</h3>
              <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
                Esaplling Team comprises of four major verticals like Consulting & Design, Research & Development, Execution, and O&M which enables the company to resolve and redefine solution approaches. The team is made up of highly experienced resources who are committed to providing cutting-edge solutions for a better and cleaner environment in working and production areas. Esaplling's core focus is to carefully evaluate business needs, targets, goals, budget, and interests while working closely with customers to develop customized solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
     <section className="py-10 px-4 sm:px-6 lg:px-16">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Recent Blogs</h2>

  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
    {/* Left Side Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="/img/why_us.png" // ✅ Replace this with your actual image path
        alt="Recent Blogs"
        className="w-full h-auto rounded-xl shadow-md object-cover"
      />
    </div>

    {/* Right Side Blog List */}
    <div className="w-full lg:w-1/2">
      <ul className="space-y-4 text-gray-700 list-disc pl-6 text-justify">
        <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo"><strong>May 30:</strong> Maintaining air quality of car park ventilation</li>
        <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo"><strong>May 16:</strong> Saving Lives! Protecting Property</li>
        <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo"><strong>Apr 12:</strong> Poorly Maintained Duct System Affects Air Quality</li>
        <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo"><strong>Apr 11:</strong> HVAC Solutions For Pharmaceutical Industry</li>
        <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo"><strong>Apr 10:</strong> Control Indoor Humidity for Maximum Comfort</li>
        <li className="text-base sm:text-base md:text-lg lg:text-lg font-robo"><strong>Feb 25:</strong> HVAC - Annual Maintenance Contract</li>
      </ul>
    </div>
  </div>
</section>
</div>
<ImageGrid1/>
  </>
  )
}

export default Heating