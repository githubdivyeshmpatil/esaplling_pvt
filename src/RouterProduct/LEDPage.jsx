import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';
import ExperienceGrid from '../components/ExperienceGrid';

function LEDPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "ESAP65S4KLED (165cm)",
      features: [
        "Ultra HD 3840p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "SuperLuma",
        "Built-in Apps",
        "Dolby Enabled",
        "Airfly Remote (optional)"
      ],
      img: "/img/tv1.jpg",
      price: 34999,
      cutPrice: 69999,
      offer: "50% OFF",
    },
    {
      id: 2,
      name: "ESAP32SLED (80cm)",
      features: [
        "Ultra HD 768p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "4K Dolby Vision",
        "Airfly Remote (optional)"
      ],
      img: "/img/LED1.png",
      price: 54999,
      cutPrice: 79999,
      offer: "31% OFF",
    },
    {
      id: 3,
      name: "ESAP40LED (102cm)",
      features: [
        "Ultra HD 768p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "HDMI x 2, USB x 2",
        "Earphone Jack",
        "SuperLuma",
        "AV IN x 2",
        "Turbo Sound"
      ],
      img: "/img/LED2.png",
      price: 48999,
      cutPrice: 72999,
      offer: "33% OFF",
    },
    {
      id: 4,
      name: "ESAP40SLED (102cm)",
      features: [
        "Ultra HD 3840p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "4K Dolby Vision",
        "Airfly Remote (optional)"
      ],
      img: "/img/LED3.png",
      price: 28999,
      cutPrice: 39999,
      offer: "28% OFF",
    },
    {
      id: 5,
      name: "ESAP42LED (106cm)",
      features: [
        "Ultra HD 1080p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "4K Dolby Vision",
        "Airfly Remote (optional)"
      ],
      img: "/img/LED4.png",
      price: 54999,
      cutPrice: 79999,
      offer: "31% OFF",
    },
    {
      id: 6,
      name: "ESAP42SLED (106cm)",
      features: [
        "Ultra HD 1080p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "4K Dolby Vision",
        "Airfly Remote (optional)"
      ],
      img: "/img/LED5.png",
      price: 48999,
      cutPrice: 72999,
      offer: "33% OFF",
    },
    {
      id: 7,
      name: "ESAP48LED (122cm)",
      features: [
        "Ultra HD 3840p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "4K Dolby Vision",
        "Airfly Remote (optional)"
      ],
      img: "/img/LED6.png",
      price: 28999,
      cutPrice: 39999,
      offer: "28% OFF",
    },
    {
      id: 8,
      name: "ESAP55SLED (140cm)",
      features: [
        "Ultra HD 3840p Internet Enabled",
        "WiFi + LAN Connectivity",
        "HDMI x 2, USB x 3, SD Card Slot",
        "Color Booster",
        "4K Dolby Vision",
        "Airfly Remote (optional)"
      ],
      img: "/img/LED7.png",
      price: 28999,
      cutPrice: 39999,
      offer: "28% OFF",
    },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleReadMore = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/tvbanner.png" />
      </div>

      <section className="w-full px-4 py-10 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">LED 4K TV</h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed font-robo">
              High-definition television (HDTV) is a television system providing an image resolution that is of substantially higher
              resolution than that of standard-definition television. HDTV is the current standard video format used in most broadcasts:
              terrestrial broadcast television, cable television, satellite television, DVDs, and streaming video.
              <br /><br />
              HDTV provides about five times as many pixels as SD. The increased resolution provides for a clearer, more detailed picture.
              In addition, progressive scan and higher frame rates result in a picture with less flicker and better rendering of fast motion.
            </p>
          </div>

 <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg shadow-inner flex items-center justify-center">
 <iframe
  className="w-full h-full rounded-lg"
  src="https://www.youtube.com/embed/H7aOCLPhuZo?autoplay=1&mute=1&loop=1&playlist=H7aOCLPhuZo"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div>
</div>
      </section>
  <ExperienceGrid/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#000066]">LED Products</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="w-full mb-3 overflow-hidden rounded-md">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[150px] sm:h-[180px] object-contain"
                />
              </div>

              <h2 className="text-sm sm:text-base font-semibold font-os">{product.name}</h2>

              <ul className="text-xs sm:text-sm text-gray-700 mt-2 space-y-1 list-disc list-inside">
                {product.features
                  .slice(0, expandedDescriptions[product.id] ? product.features.length : 5)
                  .map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>

              {product.features.length > 5 && (
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-blue-600 underline text-xs mt-2"
                >
                  {expandedDescriptions[product.id] ? 'Read less' : 'Read more'}
                </button>
              )}

              <div className="mt-3 flex flex-wrap items-center justify-between text-xs sm:text-sm font-os">
                <span className="text-green-600 font-bold">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-400 line-through ml-2">₹{product.cutPrice.toLocaleString()}</span>
                <span className="text-red-500 ml-2 font-medium">{product.offer}</span>
              </div>

              <div className="mt-3">
               <a
  href="/dataled"
  className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium transition"
>
  Know More
</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Ac />
        </div>
      </div>
    </>
  );
}

export default LEDPage;
