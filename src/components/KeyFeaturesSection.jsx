import React from "react";
import { Link } from "react-router-dom";

// Sample image imports — replace with actual paths or URLs
import tvImage from "../assets/images/key1.jpg";
import audioImage from "../assets/images/audio.jpg";
import callImage from "../assets/images/edu.jpg";
import controlImage from "../assets/images/control.jpg";

const features = [
  {
    image: tvImage,
    image2: audioImage,
    title: "Interactive Panel",
    desc: "Engage participants like never before with high-resolution touch-enabled interactive displays. Annotate, present, and collaborate in real time—whether in-person or remote.",
    link: "https://esaplling-panel.vercel.app/",
  },
  {
    image: audioImage,
    image2: callImage,
    title: "Surround Sound Audio System",
    desc: "Experience crystal-clear audio with our professionally tuned surround sound systems. Every voice is heard, every word matters—making meetings more productive and engaging.",
    link: "https://esaplling-panel.vercel.app/",
  },
  {
    image: callImage,
    image2: controlImage,
    title: "Conferencing Solution",
    desc: "Supports VoIP, SIP, and PSTN calling with high-fidelity microphones and echo-cancelling speakers. Connect globally with confidence.",
    link: "https://esaplling-panel.vercel.app/",
  },
  {
    image: controlImage,
    image2: tvImage,
    title: "Active Led",
    desc: "Control lighting, display, sound, and calling from a single smart panel or mobile device—ensuring a seamless, tech-forward meeting experience.",
    link: "https://esaplling-panel.vercel.app/",
  },
];

export default function KeyFeaturesSection() {
  return (
    <div className="bg-white py-10 px-3 sm:px-6 md:px-8 lg:px-12">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
          Let’s transform your meetings into powerful, interactive experiences
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
          Elevate your meetings with our all-in-one Conference Room Solution
          designed for modern businesses. Combining Interactive Display
          Technology, Immersive Audio, and Advanced Communication Systems.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col h-full group"
          >
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <img
                src={feature.image2}
                alt={feature.title + ' hover'}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Text Content */}
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
              {feature.title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-justify mb-4 flex-grow text-gray-600">
              {feature.desc}
            </p>

            {/* Explore Button */}
            <div className="mt-auto">
              <Link
                to={feature.link}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300 w-fit inline-block rounded"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
