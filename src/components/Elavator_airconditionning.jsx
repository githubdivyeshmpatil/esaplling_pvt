import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function ElevatorAirConditioning() {
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/elevator_banner.jpg" />
      </div>

      <section className="max-w-5xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center font-os">
          Elevator AC
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed text-justify font-robo">
          Air Conditioning for lifts is an essential requirement to keep an ambient temperature and to circulate fresh air in the confined space of the cab. Air conditioning for lifts and air conditioning for elevators ensures the cab will be cool in summer months and warm in the winter time, keeping fresh air circulating. The air conditioning for lifts should not be a marked difference to the building temperature. Air conditioning for elevators can be remote controlled in many instances by the building facilities management team, keeping the air stable. The air conditioning of elevators causes heat from the cooling process to dissipate into the lift shaft. The lift cab is not air tight so some heat can return into the cab reducing the cooling effect.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-os">Elevator Air Conditioner Main Features</h2>

        <ul className="list-disc list-inside space-y-4 text-gray-700 text-justify font-robo">
          <li>
            <strong className='font-os text-black'>No Water Drop:</strong> No electricity heating in vaporizing the condensation water, safe and electricity saving; Multiple protection from water spilling over; Efficient heat-insulation soft duct, ensuring no frost on the surface; High quality anti-rust bottom water pan.
          </li>
          <li>
            <strong className='font-os text-black'>Low Noise:</strong> International brand compressor; Dual muffler design, Damping material, absorb vibration. Efficient and Energy Saving Highly efficient compressor, advanced heat exchanger technology; Increased air flow design, dual cooling to refrigerant; Overall system optimization to national energy conservation standards.
          </li>
          <li>
            <strong className='font-os text-black'>Healthy and Environment Harmony:</strong> Efficient mildew proof screen, clearing dust; High-quality cold medium, removing harmful gas; Negative oxygen ion, elevator car air purification and sterilization (optional).
          </li>
          <li>
            <strong className='font-os text-black'>Convenient Use:</strong> The on/off time program controlled; Start the air condition only once for the whole summer or winter; Remote control in the elevator car; Auto resume after electricity black out.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4 font-os">Features:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify font-robo">
          <li>Lightweight, I03-1b. Unit mounts easily in any position on top of the elevator.</li>
          <li>Self-contained, packaged design for easy installation.</li>
          <li>Compact rotary compressor saves space and weight.</li>
          <li>Fan runs continuously for improved air circulation and filtration.</li>
          <li>Hermetically sealed at factory for leakproof refrigerant flow.</li>
          <li>Compressor and outer cabinet are mounted on shock-absorbing rubber for added durability.</li>
        </ul>
      </section>
    </>
  )
}

export default ElevatorAirConditioning
