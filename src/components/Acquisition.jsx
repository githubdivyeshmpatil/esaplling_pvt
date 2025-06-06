import React, { useEffect } from 'react'
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function Acquisition() {
     useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
 
  const items = [
    {
      logo: "/img/windy1.png",
      title: "Windy",
      description:
        "2019, ESAPLLING did uisition of Hydrabad based fan manufacturing brand Windy to venture into small appliance.",
    },
    {
      logo: "/img/windy2.png",
      title: "rostar",
      description:
        "roStar, another popular ceiling fan manufacturing brand was uisition by ESAPLLING for further expansion in small appliances and OEM business in 2019",
    },
    {
      logo: "/img/windy3.png",
      title: "Impression Appliance",
      description:
        "Every home always looks for small appliances to cater to the demand, ESAPLLING not only did uisition of brand impression rather strengthen the affordable range of products in 2020.",
    },
    {
      logo: "/img/windy4.png",
      title: "Sudarshan Auto Electrical Component Private Limited",
      description:
        "ESAPLLING, did uisition of Wiring Harness unit of Sudarshan Auto Electrical Pvt Ltd, plant factory and building to venture into electrical harness and automotive PCB manufacturing, in 2018",
    },
    {
      logo: "/img/windy5.png",
      title: "Illusion",
      description:
        "Illusion, a Gurgaon-based LED TV brand and OEM house uisition merger done by ESAPLLING to expand the Service Support and refurbishment of LED Panels",
    },
    {
      logo: "/img/windy6.png",
      title: "Mitra Electronics",
      description:
        "To expand further in power electronics, ESAPLLING did uisition of Chakan, Pune-based company to expand harness business in Auto Electrical industry.",
    },
  ];
  return (
     <>
      <Navbar />
      <div className="max-w-9xl">
           <BackgroundSection bgImage="/img/merger.png" />
      
      </div>

      {/* Heading and Subtext Section */}
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black font-os ">
Acquisition
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-800 max-w-5xl mx-auto font-robo">
Mergers and uisitions gives great opportunities for firms to rethink and refresh their brands. The manner in which ESAPLLING creates its new brand message after a merger provides insight into the new entity and with unique innovations, rebuilding pyraimd and cultures and thinking big come together to create an “enhanced” organization.        </p>
      </div>

      {/* uisition List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border-b pb-4"
          >
            <div className="w-16 shrink-0">
              <img
                src={item.logo}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#000066] mb-2 font-os">
                {item.title}
              </h3>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <p className="text-gray-800 font-robo">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
  )
}

export default Acquisition








