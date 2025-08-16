import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Corporate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const cards = [
    {
      img: "/img/room_ac.jpg",
      title: "ROOM AIR CONDITIONERS",
      desc: "The most technologically advanced and energy efficient air conditioning solutions for small spaces.",
      btn: "View Products →"
    },
    {
      img: "/img/water_purifier.jpg",
      title: "WATER PURIFIERS",
      desc: "Presenting a range of water purifiers, obsessed with purity.",
      btn: "View Products →"
    },
    {
      img: "/img/air_purifier.jpg",
      title: "AIR PURIFIERS",
      desc: "An array of purifiers built with superior technology for clean and healthy air in your home.",
      btn: "View Products →"
    },
    {
      img: "/img/air_cooler.jpg",
      title: "AIR COOLERS",
      desc: "Sleek and elegant air coolers packed with smart features to provide efficient cooling.",
      btn: "View Products →"
    },
    {
      img: "/img/electro_mechanical.jpg",
      title: "ELECTRO-MECHANICAL PROJECTS",
      desc: "Blue Star is India’s leading integrated MEP service provider with over seven decades of experience.",
      btn: "Know More →"
    },
    {
      img: "/img/central_ac.jpg",
      title: "CENTRAL AIR CONDITIONING PRODUCTS",
      desc: "End-to-end solutions with a comprehensive range of VRF systems, ducted and packaged ACs, and Chillers, among others.",
      btn: "View Products →"
    },
    {
      img: "/img/commercial_ref.jpg",
      title: "COMMERCIAL REFRIGERATION",
      desc: "Leaders in commercial refrigeration providing freezers, coolers, water dispensers, and more.",
      btn: "View Products →"
    },
    {
      img: "/img/water_cooler.jpg",
      title: "WATER COOLERS",
      desc: "Get surprisingly fast cool water with this range of durable, value-for-money and eco-friendly coolers for commercial spaces.",
      btn: "Know More →"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/aboutus_banner.png" />
      </div>

      {/* Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-12 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-black font-os">
         
        </h2>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{card.desc}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:underline text-sm self-start">
                  {card.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Corporate;
