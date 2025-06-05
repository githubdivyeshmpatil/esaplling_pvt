import React, { useEffect } from "react";

const images = [
  "/img/pd1.png",
  "/img/pd2.png",
  "/img/pd3.png",
  "/img/pd4.png",
  "/img/pd6.png",
  "/img/pd7.png",
  "/img/pd8.png",
  "/img/pd9.png",
  "/img/pd10.png",
  "/img/pd11.png",
  "/img/pd12.png",
  "/img/pd13.png",
  "/img/pd14.png",
  "/img/pd15.png",
  "/img/pd16.png",
];

export default function VerticalImagePages() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full min-h-screen flex justify-center items-center p-4 border-b border-gray-300"
        >
          <img
            src={src}
            alt={`Page ${index + 1}`}
            className="w-1/2 max-h-full object-contain shadow-lg rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
