import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Fireprotection() {
  const systems = [
    {
      title: 'Fire Hydrant System',
      image: '/img/fire1.jpg',
      content: `A firefighter connects a fire hose to the hydrant and opens the valve to access water from the mainline. Hydrants can be connected to either pressurized or non-pressurized sources.

**EFFECTIVE HYDRANT SYSTEM**
- Down Comer
- Wet Riser
- Courtyard`
    },
    {
      title: 'Fire Sprinkler System',
      image: '/img/fire2.jpg',
      content: `Sprinklers activate at set temperatures. A melted element or broken glass bulb triggers water release, spraying water in a controlled pattern to suppress the fire.

**EFFECTIVE FIRE WATER SPRAY SYSTEM**
- UL / FM Approved Sprinkler
- Medium Velocity Water Spray
- High Velocity Water Spray
- Water Mist Spray`
    },
    {
      title: 'CO2 Flooding & Gas Suppression',
      image: '/img/fire3.jpg',
      content: `CO2 and clean agent systems extinguish fires in 10 seconds or less, preventing major damage from electrical or flammable liquid fires.

**EFFECTIVE FLOODING SYSTEM**
- CO2 Flooding
- FM200 Suppression`
    },
    {
      title: 'Fire Alarm & Detection System',
      image: '/img/fire4.jpg',
      content: `Fire detection systems use sensors to detect smoke, heat, or flame. They provide early warning and help save lives and reduce damage.

**EFFECTIVE FIRE DETECTION SYSTEM**
- Smoke Detection
- Heat Detection
- Flame Detection
- Beam Detection
- Alarm`
    }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/fire_banner.jpg" />
      </div>

      <section className="bg-white px-4 md:px-16 py-10 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-red-600">Fire Protection Systems</h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {systems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl shadow-md overflow-hidden max-w-md mx-auto">
                <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-os font-semibold text-blue-600">{item.title}</h3>
                  <p className="text-gray-700 font-robo text-justify whitespace-pre-line">{item.content}</p>
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
