import React from 'react'
import Navbar from '../components/Navbar'
import Background_Home from '../components/Background_Home'
import ab from "../assets/images/home_ab.png";
import Heading from '../components/Heading';
import FeatureS from '../components/FeatureS';
import StatsCounter from '../components/StatsCounter';


function Home() {
  return (
    <>
    <Navbar/>
      <div className="pt-16">
        <Background_Home/>
        <section className="w-full px-4 py-10 bg-white md:flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src={ab}
              alt="Company Image"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-center space-y-4">
            <h2 className="text-md md:text-xl font-semibold text-blue-900">
              Welcome to Our Company
            </h2>
            <p className="text-black text-base md:text-lg text-justify">
              <span className="text-orange-600 font-bold">ESAPLLING</span> is a
              forward-thinking manufacturing and engineering company delivering
              cutting-edge solutions across Electronics, Consumer Products,
              Biomedical devices, OEM components, and Wiring Harness systems.
              With a commitment to innovation, quality, and customized
              manufacturing services, we empower businesses by transforming
              ideas into high-performance, real-world products. Whether it’s
              complex electronic assemblies, biomedical integrations, or
              precision wiring harnesses, ESAPLLING is your trusted partner in
              progress
            </p>
            <h2 className="text-md md:text-xl font-semibold text-blue-900">
              Mission Statement
            </h2>
            <p className="text-gray-700 text-base md:text-lg text-justify">
              "To drive innovation and quality in manufacturing, delivering
              future-ready solutions that enhance lives and empower industries
              worldwide.
            </p>
            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09L5.64 12.545.764 8.91l6.026-.873L10 2l3.21 6.037 6.026.873-4.877 3.635 1.518 5.545z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09L5.64 12.545.764 8.91l6.026-.873L10 2l3.21 6.037 6.026.873-4.877 3.635 1.518 5.545z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09L5.64 12.545.764 8.91l6.026-.873L10 2l3.21 6.037 6.026.873-4.877 3.635 1.518 5.545z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09L5.64 12.545.764 8.91l6.026-.873L10 2l3.21 6.037 6.026.873-4.877 3.635 1.518 5.545z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09L5.64 12.545.764 8.91l6.026-.873L10 2l3.21 6.037 6.026.873-4.877 3.635 1.518 5.545z" />
              </svg>
            </div>
            {/* CTA Button */}
            <div>
              <a
                href="#about"
                className="inline-block bg-blue-600 text-white px-6 py-3  shadow hover:bg-amber-700 transition duration-300"
              >
                Explore The Sucess Story
              </a>
            </div>
          </div>
        </section>
        <div className="p-4">
        <Heading text="Industries We Serve" />
        <div className="flex items-center w-full  p-14">
          <p className="text-xl md:text-3xl font-semibold whitespace-nowrap rajdhani-font">
            FEATURED SERVICES
          </p>
          <div className="flex-1 h-[2px] bg-gray-500 ml-4"></div>
        </div>
         <FeatureS />
        </div>
        <StatsCounter/>
          <Heading text="Behind the Scenes: Manufacturing at Esaplling" />
          </div>
    
    </>
  )
}

export default Home