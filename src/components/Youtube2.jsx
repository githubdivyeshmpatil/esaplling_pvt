import React from 'react';

function Youtube2() {
  return (
    <>
      <section className="w-full px-4 py-10 bg-[#FFE5B4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Air Conditioning Solutions
            </h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
              Split AC systems are often more cost-effective for cooling smaller spaces, such as a single room or small apartment. 
              They are typically less expensive to purchase and install than VRF systems. Installing a split AC system is relatively 
              straightforward, and it doesn't require complex ductwork. This makes it a good option for retrofitting existing buildings 
              or for situations where you need a quick cooling solution.
              <br /><br />
              Many modern split AC units are designed with energy-efficient features, such as inverter technology, which can help 
              reduce energy consumption and lower your utility bills. You can install multiple split AC units in different rooms, 
              allowing for individual temperature control in each space. This can lead to energy savings because you can cool only 
              the rooms that are in use.
            </p>
            <div className="mt-8 ">
         <a
  href="/consumer-electronics/split-ac"
  className=" bg-[#428aff]  text-white font-medium rounded-xl cursor-pointer px-6 py-2 transition duration-300 inline-block"
>
  Read More
</a>

        </div> 
          </div>

          {/* Right Side YouTube Video with background */}
          <div className="w-[700px] h-64 md:h-96 bg-gray-100 p-2 rounded-lg shadow-md mx-auto">
  <iframe
    className="w-full h-full rounded-md"
    src="https://www.youtube.com/embed/wcCv4JKIPYM"
    title="Split AC System Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Youtube2;
