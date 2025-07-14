import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

function Fireprotection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const systems = [
    {
      title: 'Complete Fire Hydrant System',
      image: '/img/fire1.jpg',
      content: `A fire fighter connects fire hose to the hydrant and releases a valve to get water from the water main, the different valve on a fire hydrant allows it to be attached to different water source that may be either pressurized or non pressurized.

**EFFECTIVE HYDRANT SYSTEM**
- Down comer
- Wet riser
- courtyard`
    },
    {
      title: 'Complete Fire Sprinkler System',
      image: '/img/fire2.jpg',
      content: `Fire sprinklers can be automatic or open orifice. Automatic fire sprinklers operate at a predetermined temperature, utilizing a fusible element, a portion of which melts, or a frangible glass bulb containing liquid which breaks, allowing the plug in the orifice to be pushed out of the orifice by the water pressure in the fire sprinkler piping, resulting in water flow from the orifice. The water stream impacts a deflector, which produces a specific spray pattern designed in support of the goals of the sprinkler type (i.e., control or suppression). Modern sprinkler heads are designed to direct spray downwards. Spray nozzles are available to provide spray in various directions and patterns. The majority of automatic fire sprinklers operate individually in a fire.

**EFFECTIVE ALL TYPES OF FIRE WATER SPRAY SYSTEM**
- UL /FM Approved water sprinkler
- Medium velocity water spray
- High velocity water spray
- Water Mist spray`
    },
    {
      title: 'Complete Fire Co2 Flooding & Gas Suppression System',
      image: '/img/fire3.jpg',
      content: `These systems reach extinguishing levels in 10 seconds or less, stopping ordinary combustible, electrical, and flammable liquid fires before they cause significant damage. That's the fastest fire protection available.

**EFFECTIVE ALL TYPES OF FLOODING SYSTEM**
- Co2 flooding
- FM 200 suppression`
    },
    {
      title: 'Complete Fire Alarm & Detection System',
      image: '/img/fire4.jpg',
      content: `Automatic fire detection systems, when combined with other elements of an emergency response and evacuation plan, can significantly reduce property damage, personal injuries and loss of life from fire in the workplace. Their main function is to quickly identify a developing fire and alert building occupants and emergency response personnel before extensive damage occurs. Automatic fire detection systems do this by using electronic sensors to detect the smoke, heat, or flames from a fire and provide an early warning.

**EFFECTIVE ALL TYPES OF FIRE DETECTION SYSTEM**
- Smoke detection
- Heat detection
- Flame detection
- Beam detection
- Alarm`
    }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/fire_banner.jpg" />
      </div>

      <section className="bg-white px-4 md:px-16 py-10 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-red-600">
            Fire Protection Systems
          </h2>

          {/* Intro Description */}
          <div className="max-w-3xl mx-auto text-justify text-black mb-12 text-lg font-robo">
            <strong className='text-green-800'>Fire Protection System Product Description:</strong><br />
            Complete Design and consultation of fire protection System as per IS, NBC, NFPA & other relevant standards.
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {systems.map((item, index) => (
              <div
                key={index}
                className=" rounded-2xl  overflow-hidden max-w-md mx-auto"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover "
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-green-800">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo text-black text-justify whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Fireprotection;
