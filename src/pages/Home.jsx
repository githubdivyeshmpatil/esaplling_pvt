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
import bg3 from "../assets/images/new_banner.png";

import KeyFeaturesSection from '../components/KeyFeaturesSection';
import ExploreCarousel from '../components/ExploreCarousel';
import ExploreSection from '../components/ExploreSection';

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
Since our inception, we have been driven by a single vision — innovation at the core of everything we do. Over the years, we have evolved into a trusted name in the electronics industry, backed by unmatched expertise, advanced technology, and a relentless commitment to quality.
<br></br><br></br>
Our diverse manufacturing capabilities span across LED displays, air conditioners, washing machines, interactive panels, and sound systems, catering to both residential and commercial needs. <br></br>Every product we create reflects our dedication to cutting-edge design, energy efficiency, and user-friendly technology.

With a team of seasoned professionals and a state-of-the-art production facility, we continuously invest in research, development, and innovation, ensuring our offerings remain ahead of industry trends. From the very first day, our mission has been to deliver excellence that enhances everyday life, combining durability, performance, and style.
<br></br><br></br>
Today, we proudly stand as a brand synonymous with trust, technology, and transformation — shaping the future of electronics, one innovation at a time.    </p>

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
            <KeyFeaturesSection/>
            <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Background Image */}
          <img
            src={bg3}
            alt="Display Background"
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay for darkening image (optional) */}
          <div className="absolute " />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 text-left">
            <div className="w-full md:w-2/3 flex items-center justify-center sm:p-6">
              <div className="text-left w-full px-2 sm:px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="block">Space that transforms </span>
                  <span className="block"> your brand value</span>
                </h1>

                <button
                  className="px-5 py-2 sm:px-6 sm:py-3 mt-4 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-aos="fade-right"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div><br></br>
     <h1
  className="
   text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center
  "
>
  Products that transforms your approach for future of Conferencing Solutions
</h1>

<ExploreCarousel />

 <h1
  className="
  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center
  "
>
Display Solutions
</h1>
<ExploreSection/>
            <div className="flex items-center w-full px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-8 lg:py-10">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold font-robo">
                FEATURED SERVICES
              </p>
              <div className="flex-1 h-[2px] bg-gray-500 ml-4" />
            </div>
          </div>

          <FeatureS />

<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black px-4 leading-snug">
  ESAPLLING: Revolutionizing the HVAC Industry through Expertise and Technology
</h1>

          <YouTubeLayout />
         <h1
  className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    font-bold
    text-center
    px-4 sm:px-8
    mx-auto
    max-w-4xl
  "
>
  Future of Air-Conditioning Solution
</h1>

          <Youtube2/>

          <div className="mt-4 sm:mt-6 md:mt-10 lg:mt-16">
            
          </div>
        </div>
      </div>
       <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    font-bold
    text-center
    px-4 sm:px-8
    mx-auto
    max-w-4xl">
Future of Transport Air-Conditoning Solution
</h1>
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
