import React from "react";
import product1 from "../assets/images/livecon.jpg";
import product2 from "../assets/images/three.jpg";
import product3 from "../assets/images/studio.jpg";
import product4 from "../assets/images/studio.jpg"; // <-- Add your 4th image

const products = [
  {
    name: "Live - Conference",
    desc: "Touch-enabled collaboration",
    image: product1,
  },
  {
    name: "Live - 360",
    desc: "Streamlined entertainment",
    image: product2,
  },
  {
    name: "Live - Studio",
    desc: "Large format visual displays",
    image: product3,
  },
  {
    name: "Live - Event",
    desc: "Immersive live event experience",
    image: product4, // <-- 4th card image
  },
];

export default function ExploreSection() {
  return (
    <div className="bg-white py-12 px-6 sm:px-8 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Text Content */}
            <div className="p-6 text-center">
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-gray-800 mb-3">
                {item.name}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 text-justify">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
