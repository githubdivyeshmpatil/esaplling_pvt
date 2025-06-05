import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

const cards = [
  {
    id: 1,
    image: '/img/mag1.png',
    link: 'https://www.theceo.in/magazine/esaplling-sets-a-new-benchmark-of-innovation-through-its-unique-electronic-products',
    description: 'Esaplling sets a new benchmark of innovation through its unique electronic products.',
  },
  {
    id: 2,
    image: '/img/mag2.jpg',
    link: 'https://thesiliconreview.com/magazine/profile/20-best-ceos-of-the-year-2018',
    description: '20 Best CEOs of the Year 2018',
  },
  {
    id: 3,
    image: '/img/mag3.jpg',
    link: 'https://thesiliconreview.com/magazine/profile/20-best-ceos-of-the-year-2018',
    description: 'Meeting the Demands of the Ever-Changing Industry Landscape: Esaplling Pvt. Ltd. Continues To Soar High In the Indian Consumer Electronics Market',
  },
];

function Recognization() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/Awards-Banner.jpg" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-black font-os">Recognition:</h1>
        <h3>Awards & Recognoization</h3>

        {/* Grid container with 2 columns */}
        <div className="grid grid-cols-2 gap-4 my-6">
          {/* Row 1 - Image 1 */}
          <div>
            <img
              src="/img/a1.jpg"
              alt="Image 1"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Row 1 - Image 2 */}
          <div>
            <img
              src="/img/a2.jpg"
              alt="Image 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <p className="mt-2 text-gray-700 text-sm">{card.description}</p>
                <button
                  onClick={() => window.open(card.link, '_blank')}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recognization;
