import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
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
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    {
      img: 'img/serv1.png',
      name: 'HVAC',
      discription:
        'The air we breathe and the climate we experience in our homes, offices, and buildings have a profound impact on our well-being and productivity. Enter the world of Heating, Ventilation, and Air Conditioning (HVAC), an essential and often underappreciated facet of modern living...',
    },
    {
      img: 'img/serv2.png',
      name: 'Consumer Electronics',
      discription:
        'As we embark on this journey through the realm of consumer electronics, we will delve into the intricate and captivating world where cutting-edge technology meets the demands of everyday life...',
    },
    {
      img: 'img/serv3.png',
      name: 'Biomedical',
      discription:
        'The field of biomedicine has always been at the forefront of scientific innovation, continually pushing the boundaries of what is possible in the realm of healthcare...',
    },
    {
      img: 'img/serv4.png',
      name: 'Auto Airconditioning',
      discription:
        'Automotive air conditioning is more than just a luxury; it is a testament to human ingenuity and adaptability...',
    },
    {
      img: 'img/serv5.png',
      name: 'Oxygen Plant',
      discription:
        'Oxygen plants, also known as oxygen generation units or oxygen production facilities, are the unsung heroes of modern healthcare, industry, and emergency services...',
    },
    {
      img: 'img/serv6.png',
      name: 'Wiring Harness',
      discription:
        'Automotive harnesses, also known as wiring harnesses or cable assemblies, are the intricate networks of wires, cables, and connectors...',
    },
    {
      img: 'img/serv7.png',
      name: 'Information Technology',
      discription:
        'Generate a professional and engaging business description for a company that provides comprehensive Information Technology (IT) services...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-box p-4 rounded-lg">
            <img
              src={item.img}
              alt={`Box ${index + 1}`}
              className="w-full h-48 md:h-56 lg:h-72 object-cover rounded-md mb-4"
            />
            {/* Title with blue color and responsive font */}
            <p className="text-blue-600 font-semibold text-lg md:text-xl font-robo mb-2">
              {item.name}
            </p>

            {/* Description paragraph with responsive font and gray text */}
            {item.discription && (
              <p className="text-gray-700 text-justify text-base md:text-lg font-robo">
                {expandedIndex === index
                  ? item.discription
                  : `${item.discription.slice(0, 100)}...`}
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-orange-600 ml-2 hover:underline"
                >
                  {expandedIndex === index ? 'Read less' : 'Read more'}
                </button>
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureS;
