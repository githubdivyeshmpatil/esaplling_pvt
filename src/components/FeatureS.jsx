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
      discription: 'The air we breathe and the climate we experience...',
    },
    {
      img: 'img/serv2.png',
      name: 'Consumer Electronics',
      link: '/consumer-electronics/split-ac',
      discription: 'As we embark on this journey through the realm...',
    },
    {
      img: 'img/serv3.png',
      name: 'Biomedical',
      link: '/biomedical/ct_scan',
      discription: 'The field of biomedicine has always been at the...',
    },
    {
      img: 'img/serv4.png',
      name: 'Auto Airconditioning',
      link: '/automotive/autoaircondition',
      discription: 'Automotive air conditioning is more than just...',
    },
    {
      img: 'img/serv5.png',
      name: 'Oxygen Plant',
      link: '/innovation/plant_setup',
      discription: 'Oxygen plants, also known as oxygen generation...',
    },
    {
      img: 'img/serv6.png',
      name: 'Wiring Harness',
      link: '/automotive/automotive_page',
      discription: 'Automotive harnesses, also known as wiring...',
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
