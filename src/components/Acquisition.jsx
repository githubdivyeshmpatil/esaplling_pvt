import React, { useEffect } from 'react';
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
        "2019, ESAPLLING did Acquisition of Hyderabad based fan manufacturing brand Windy to venture into small appliance.",
    },
    {
      logo: "/img/windy2.png",
      title: "Aerostar",
      description:
        "AeroStar, another popular ceiling fan manufacturing brand was acquired by ESAPLLING for further expansion in small appliances and OEM business in 2019.",
    },
    {
      logo: "/img/windy3.png",
      title: "Impression Appliance",
      description:
        "Every home always looks for small appliances to cater to the demand, ESAPLLING not only acquired brand Impression but also strengthened the affordable range of products in 2020.",
    },
    {
      logo: "/img/windy4.png",
      title: "Sudarshan Auto Electrical Component Pvt Ltd",
      description:
        "ESAPLLING acquired the Wiring Harness unit of Sudarshan Auto Electrical Pvt Ltd, including its factory and building, to venture into electrical harness and automotive PCB manufacturing in 2018.",
    },
    {
      logo: "/img/windy5.png",
      title: "Illusion",
      description:
        "Illusion, a Gurgaon-based LED TV brand and OEM house, was acquired by ESAPLLING to expand service support and refurbishment of LED panels.",
    },
    {
      logo: "/img/windy6.png",
      title: "Mitra Electronics",
      description:
        "To expand further in power electronics, ESAPLLING acquired a Chakan, Pune based company to enhance harness business in the auto electrical industry.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/merger.png" />
      </div>

      {/* Heading Section */}
      <div className="w-full text-center py-10 px-4 sm:px-10 lg:px-20 xl:px-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-os leading-tight">
          Acquisition
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-800 max-w-6xl mx-auto font-robo leading-relaxed text-justify">
          Mergers and acquisitions give great opportunities for firms to rethink and refresh their brands. ESAPLLING's approach to brand messaging post-merger showcases innovation, cultural integration, and big-picture thinking, building a truly enhanced organization.
        </p>
      </div>

      {/* Acquisition Grid Section */}
      <div className="w-full px-4 sm:px-10 lg:px-20 xl:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-6 border-b pb-8">
              <div>
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#000066] mb-3 font-os leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 font-robo leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Acquisition;
