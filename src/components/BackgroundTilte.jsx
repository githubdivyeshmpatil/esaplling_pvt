import React from 'react';
import { Link } from 'react-router-dom';

function BackgroundTitle({ title, children, sttitle, page, bgImage }) {
  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{ backgroundImage: `url(${bgImage})`, zIndex: -1 }}
        aria-hidden="true"
      ></div>

      <div className="text-center px-6 sm:px-12 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-white font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md">
          {title}
        </h1>
        <h2 className="mt-2 text-gray-100 uppercase font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow">
          {children}
        </h2>

        <nav className="mt-5 inline-flex items-center space-x-2 text-sm sm:text-base text-blue-400">
          <Link
            to="/"
            className="font-medium hover:text-blue-600 transition-colors duration-200"
            aria-label={`Go to ${sttitle} homepage`}
          >
            {sttitle}
          </Link>
          <span className="text-gray-300 select-none">&gt;</span>
          <span className="text-white font-semibold">{page}</span>
        </nav>
      </div>
    </div>
  );
}

export default BackgroundTitle;
