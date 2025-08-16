import React, { useState } from 'react';

const YouTubeLayout = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      url: 'https://www.youtube.com/embed/JUeW7jRgsVg',
      title: 'Biomedical',
    },
    {
      url: 'https://www.youtube.com/embed/F39c6piDRQA',
      title: 'Auto Electrical',
    },
    {
      url: 'https://www.youtube.com/embed/z3oNsf6aahE',
      title: 'LifeScience',
    },
  ];

  return (
    <div className="p-2 md:p-6 space-y-10 min-h-screen ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6">
        <div className="md:w-1/2 w-full aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/GV17B3C_ulQ"
            title="Main video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-1/2 w-full text-black text-justify font-robo">
          <h2 className="text-base sm:text-base md:text-2xl lg:text-2xl font-bold mb-4">
            Next-Gen HVAC: Sustainable Engineering, Smart Controls, and Energy Optimization
          </h2>
          <p>At Esaplling Pvt. Ltd., we’re shaping the future of HVAC with advanced technologies that combine sustainability, intelligence, and efficiency. Our systems are engineered to deliver superior climate control while minimizing environmental impact and operational costs.

Through smart controls, real-time monitoring, and precision engineering, we ensure optimal performance for every project — whether it’s a commercial facility, industrial plant, or large-scale residential development.

Our commitment to energy optimization means reduced carbon footprint, lower energy bills, and a greener tomorrow — without compromising comfort or quality.</p><br></br>
          <p className="text-base sm:text-base md:text-base lg:text-base mb-2 text-gray-700">
            <strong className="text-black">Expertise in Sustainable Solutions:</strong> ESAPLLING brings a wealth
            of expertise in sustainable HVAC solutions. With a team of engineers and experts who understand the
            principles of energy efficiency and environmental responsibility, ESAPLLING ensures that their HVAC
            systems are designed to minimize energy consumption and reduce the carbon footprint.
          </p>
          <p className="text-base sm:text-base md:text-base lg:text-base mb-2 text-gray-700">
            <strong className="text-black">Innovative Design and Engineering:</strong> They leverage state-of-the-art tools and simulation techniques...
          </p>
          <p className="text-base sm:text-base md:text-base lg:text-base mb-2 text-gray-700">
            <strong className="text-black">Smart HVAC Technology:</strong> Embracing IoT and analytics for better energy efficiency and comfort...
          </p>
          <p className="text-base sm:text-base md:text-base lg:text-base mb-2 text-gray-700">
            <strong className="text-black">Energy Management:</strong> Advanced energy management systems help reduce cost and carbon footprint.
          </p>
          <div>
            <a
              href="/hvac/new_hvac"
              className="inline-flex items-center font-robo bg-[#428aff]  text-white px-6 py-3 shadow hover:bg-amber-700 transition duration-300"
            >
              Explore The more info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom 3 Thumbnail Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => setSelectedVideo(video.url)}
          >
           <img
  src={`https://img.youtube.com/vi/${video.url.split('/embed/')[1]}/0.jpg`}
  alt={`Video ${index + 1}`}
  className="rounded-xl w-full aspect-video object-cover border border-gray-500 p-5"
/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-center text-sm font-medium mt-2 text-gray-800">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="w-full max-w-3xl aspect-video bg-white rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              title="Selected video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeLayout;
