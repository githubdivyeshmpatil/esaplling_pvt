import React from 'react';

function Youtube3() {
  return (
    <>
      <section className="w-full px-4 py-10 bg-[#c2dce6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-8 items-center">
          {/* Left Side Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Air Conditioning Solutions
            </h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed font-robo">
             Transport air conditioning solutions are designed to provide efficient and comfortable climate control within various types of vehicles, such as buses, trucks, trains, and other modes of transportation. These systems are essential for maintaining a comfortable environment for passengers and operators, as well as ensuring the safe transportation of temperature-sensitive cargo.
            </p>
             <div className="mt-8 ">
          <a
  href="/automotive/autoaircondition"
  className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-xl cursor-pointer transition duration-300 inline-block"
>
  Read More
</a>

        </div>
          </div>

          {/* Right Side YouTube Video with background */}
          <div className="w-full h-64 md:h-96 bg-gray-100 p-2 rounded-lg shadow-md">
            <iframe
              className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/oO7y0juA5ac"

              title="Split AC System Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Read More Button */}
       
      </section>
    </>
  );
}

export default Youtube3;
