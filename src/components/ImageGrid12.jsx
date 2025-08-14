import React, { useState } from "react";

const images = [
  "/img/Welding_Safety.jpg", "/img/Welding_cuting.jpg", "/img/Family.jpg", "/img/Emergancy.jpg",
  "/img/Welding_rules.jpg", "/img/Welding_ewuipment.jpg", "/img/Protective_equipment.jpg", "/img/safety.jpg",
  "/img/safety_first.jpg", "/img/Air_conditio.jpg", "/img/extinguser.jpg", "/img/fire_protection.jpg",
];

export default function ImageGrid12() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((src, i) => (
          <figure
            key={i}
            className="relative overflow-hidden shadow-sm bg-white cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </figure>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Full View"
              className="w-auto h-auto max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200"
              onClick={(e) => {
                e.stopPropagation(); // prevent modal close on button click
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
