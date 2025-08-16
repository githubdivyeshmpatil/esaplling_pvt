import React from 'react';

function Youtube3() {
  return (
    <section className="w-full bg-[#c2dce6] py-10 mt-7">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Left Side Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center md:text-left">
            Air Conditioning Solutions
          </h2>
          <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
            Transport air conditioning solutions are designed to provide efficient and comfortable 
            climate control within various types of vehicles, such as buses, trucks, trains, and 
            other modes of transportation. These systems are essential for maintaining a comfortable 
            environment for passengers and operators, as well as ensuring the safe transportation of 
            temperature-sensitive cargo.
          </p>
          <div className="mt-8 text-center md:text-left">
            <a
              href="/automotive/autoaircondition"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-xl cursor-pointer px-6 py-2 transition duration-300 inline-block"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right Side YouTube Video */}
        <div className="w-full h-56 sm:h-72 md:h-96 bg-gray-100 p-2 rounded-lg shadow-md">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/oO7y0juA5ac"
            title="Transport AC System Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Youtube3;
