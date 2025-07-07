import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // ✅ Step 1
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeatureS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-10">
        {"<"}
      </div>
    ),
    nextArrow: (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-10">
        {">"}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const items = [
    {
      img: 'img/serv1.png',
      name: 'HVAC',
      link: '/hvac/new_hvac',
      discription: 'The air we breathe and the climate we experience in our homes, offices, and buildings have a profound impact on our well-being and productivity. Enter the world of Heating, Ventilation, and Air Conditioning (HVAC), an essential and often underappreciated facet of modern living. HVAC systems are the unsung heroes that quietly ensure our indoor environments remain comfortable, healthy, and energy-efficient, regardless of the weather outside',
    },
    {
      img: 'img/serv2.png',
      name: 'Consumer Electronics',
      link: '/consumer-electronics/split-ac',
      discription: 'As we embark on this journey through the realm of consumer electronics, we will delve into the intricate and captivating world where cutting-edge technology meets the demands of everyday life. From the evolution of smartphones and their impact on our connectivity to the rise of wearable devices that monitor our health and the smart appliances that streamline our chores, we will explore how these gadgets shape our world. Consumer electronics are not just tools; they are extensions of our capabilities, enablers of creativity, and windows to a globalized society.',
    },
    {
      img: 'img/serv3.png',
      name: 'Biomedical',
      link: '/biomedical/ct_scan',
      discription: 'The field of biomedicine has always been at the forefront of scientific innovation, continually pushing the boundaries of what is possible in the realm of healthcare. With each passing year, remarkable strides are made in understanding the complexities of the human body, developing cutting-edge technologies, and discovering novel therapies to combat diseases that have plagued humanity for centuries. This relentless pursuit of knowledge and innovation has led to a profound transformation in the way we diagnose, treat, and prevent illnesses.',
    },
    {
      img: 'img/serv4.png',
      name: 'Auto Airconditioning',
      link: '/automotive/autoaircondition',
      discription: 'Automotive air conditioning is more than just a luxury; it is a testament to human ingenuity and adaptability. In this exploration, we will journey into the realm where thermodynamics, refrigeration, and automotive engineering converge to provide us with climate control on wheels. From the early rudimentary attempts to cool the cabin of a vehicle to the sophisticated and energy-efficient systems of today, automotive air conditioning has come a long way.',
    },
    {
      img: 'img/serv5.png',
      name: 'Oxygen Plant',
      link: '/innovation/plant_setup',
      discription: 'Oxygen plants, also known as oxygen generation units or oxygen production facilities, are the unsung heroes of modern healthcare, industry, and emergency services. These facilities are responsible for the extraction, purification, and distribution of oxygen to meet the ever-growing needs of society. From supporting critical medical procedures to enabling industrial processes and emergency response, oxygen plants are the silent pillars of our infrastructure.',
    },
    {
      img: 'img/serv6.png',
      name: 'Wiring Harness',
      link: '/automotive/automotive_page',
      discription: 'Automotive harnesses, also known as wiring harnesses or cable assemblies, are the intricate networks of wires, cables, and connectors meticulously engineered to link various electronic components within a vehicle. These unassuming bundles of wires are responsible for transmitting power, data, and signals to everything from the engine control unit to the infotainment system, lighting, sensors, and safety features. In essence, they are the lifelines that enable the modern automobile to function efficiently and safely.',
    },
    {
      img: 'img/serv7.png',
      name: 'Information Technology',
      link: '/information-technology',
      discription: 'Generate a professional and engaging business...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-box p-4 rounded-lg">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 md:h-56 lg:h-72 object-cover rounded-md mb-4"
            />

            <p className="font-semibold text-lg md:text-xl font-robo mb-2">{item.name}</p>

            {item.discription && (
              <>
                <p className="text-gray-700 text-justify text-base md:text-lg font-robo mb-2">
                  {expandedIndex === index
                    ? item.discription
                    : `${item.discription.slice(0, 100)}...`}
                </p>

                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-orange-600 text-sm hover:underline mb-2"
                >
                  {expandedIndex === index ? 'Read less' : 'Read more'}
                </button>

                {/* ✅ Explore More with Link */}
                <div className="mt-2">
                  <Link
                    to={item.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded inline-block"
                  >
                    Explore More
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureS;
