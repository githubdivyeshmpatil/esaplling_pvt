import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Evaporative() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
   <>
   <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/evaporative1.png" />
      </div>
      <section className="w-full max-w-6xl mx-auto p-6 text-gray-900 text-justify font-robo">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left font-os">
        Industrial Evaporative Cooler
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2 font-os">Cooling Capacity:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Industrial settings often require a significant amount of cooling
            capacity. It's essential to choose an evaporative cooler with the
            appropriate cooling capacity to meet the needs of your facility.
            Larger units or multiple units may be necessary for larger spaces.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Ducted Systems:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            In industrial environments, ducted evaporative cooling systems are
            often used. These systems distribute cooled air through a network
            of ducts, allowing for even cooling across large areas. Ducted
            systems can be customized to fit the specific layout and needs of
            your facility.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Water Source:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Evaporative coolers require a reliable source of water. Depending
            on the size of your industrial facility, you may need access to a
            significant amount of water. Make sure you have the necessary
            infrastructure in place to provide water to your coolers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Maintenance:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Regular maintenance is crucial to keep industrial evaporative
            coolers operating efficiently. This includes cleaning and
            replacing pads, checking the water distribution system, and
            ensuring proper ventilation and airflow.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Air Quality:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Evaporative coolers work by drawing in outdoor air and passing it
            through water-saturated pads. This process can introduce outdoor
            pollutants and allergens into the indoor environment. Consider air
            filtration and ventilation systems to maintain good indoor air
            quality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Climate Considerations:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Evaporative coolers are most effective in dry, arid climates with
            low humidity. They may be less efficient in areas with high
            humidity because the cooling effect depends on the evaporation of
            water into dry air. Before investing in evaporative coolers,
            assess your region's climate to determine if they are a suitable
            option.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Energy Efficiency:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Evaporative coolers are known for their energy efficiency compared
            to traditional air conditioning systems. They consume less
            electricity, which can lead to cost savings in industrial settings
            where energy costs are significant.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Control Systems:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Some industrial evaporative coolers come with advanced control
            systems that allow you to adjust settings remotely, set timers, and
            monitor performance. These features can help you optimize cooling
            while reducing energy consumption.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Compliance and Regulations:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            Check local regulations and environmental standards to ensure
            compliance when using evaporative coolers in industrial settings.
            There may be water usage restrictions or environmental guidelines
            to follow.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2  font-os">Backup Cooling:</h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg font-robo">
            In extremely hot or humid conditions, evaporative coolers may not
            provide sufficient cooling. Consider having backup cooling
            solutions in place, such as air conditioning or additional cooling
            equipment, for such situations.
          </p>
        </div>
      </div>
      <div className="w-full mt-6">
  <img
    src="/img/evaporative12.png"
    alt="Achievement 1"
    className="w-full h-auto"
  />
</div>
    </section>
   



   </>
  )
}

export default Evaporative