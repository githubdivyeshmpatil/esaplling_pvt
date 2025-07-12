import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Background_Home from '../components/Background_Home';
import ab from "../assets/images/home_ab.png";
import Heading from '../components/Heading';
import FeatureS from '../components/FeatureS';
import YouTubeLayout from '../components/YouTubeLayout';
import MakeInIndiaBanner from '../components/MakeInIndiaBanner';
import Youtube2 from '../components/Youtube2';
import Youtube3 from '../components/Youtube3';

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden md:overflow-x-visible">
        <div className="pt-20">
          <Background_Home />
         <section className="w-full px-4 py-10 bg-white max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={ab}
      alt="Company Image"
      className="w-full max-w-[400px] h-auto object-contain rounded-xl"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
    <h2 className="text-lg md:text-2xl font-semibold text-black font-robo">
      About ESAPLLING
    </h2>

    <span className="text-black text-2xl font-bold">
      Innovation from the day of inception
    </span>

    <p className="text-black text-base md:text-lg text-justify font-robo">
Being ESAPLLING, we apply innovative techniques and ideas in an ever changing industry, one of our major strength is our capability and confidence to provide value-added service – product installation, site commissioning, to handle any project, regardless of size or complexity, from inspection, through budgeting, to design, execution, validation and hand over.
    </p>

    <div>
      <a
        href="/about"
        className="inline-block bg-[#428aff] rounded-xl text-white px-6 py-3 font-robo shadow hover:bg-amber-700 transition duration-300"
      >
Explore The Success Story      </a>
    </div>
  </div>
</section>


          <div className="px-4 pt-2 sm:pt-4">
            <Heading text='Products and Services' />
            <div className="flex items-center w-full px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-8 lg:py-10">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold font-robo">
                FEATURED SERVICES
              </p>
              <div className="flex-1 h-[2px] bg-gray-500 ml-4" />
            </div>
          </div>

          <FeatureS />

<h1 class="text-4xl font-bold text-center text-black">
ESAPLLING: Revolutionizing the HVAC Industry through Expertise and Technology
</h1>
          <YouTubeLayout />
          <Youtube2/>

          <Heading text='Client Satisfaction Overview' />
          <div className="mt-4 sm:mt-6 md:mt-10 lg:mt-16">
            
          </div>
        </div>
      </div>
      <Youtube3/>

      <MakeInIndiaBanner />
    </>
  );
}

export default Home;













// h2	text-2xl sm:text-3xl md:text-4xl lg:text-5xl
// h3 → text-lg sm:text-xl md:text-2xl lg:text-3xl
// h4 "text-base sm:text-lg md:text-xl lg:text-2xl font-medium

// p	text-base sm:text-lg md:text-xl text-justify
// p1 "text-sm sm:text-base md:text-lg text-justify
