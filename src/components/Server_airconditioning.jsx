import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Server_airconditioning() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
     <Navbar />
      <div className="max-w-9xl ">
        <BackgroundSection bgImage="/img/severpanelbanner.jpg" />
      </div>
        <section className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 text-justify font-robo">
      <h1 className="text-3xl font-semibold mb-6 text-center sm:text-left font-os">
        Server Panel
      </h1>

      <div className="space-y-8 font-robo">
        {/* Section 1 */}
        <div>
          <p className="mb-3 text-base sm:text-base md:text-lg lg:text-lg">
            A couple of managed Gigabit Ethernet rackmount switches, connected to the Ethernet ports on a few Panduit patch panels using Category b patch cables (all equipment are installed in a standard 19-inch rack).
          </p>
          <p className="text-base sm:text-base md:text-lg lg:text-lg">
            A patch panel, patch bay, patch field or jack field is a device or unit featuring a number of jacks, usually of the same or similar type, for the use of connecting and routing circuits for monitoring, interconnecting, and testing circuits in a convenient, flexible manner. Patch panels are commonly used in computer networking, recording studios, radio and television.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 font-os">Servers:</h2>
          <p className="mb-3 text-base sm:text-base md:text-lg lg:text-lg">
            Esappling server panel
          </p>
          <p className="mb-3 font-robo text-base sm:text-base md:text-lg lg:text-lg">
            Server is a computer or a device on a network that manages network resources. Depending upon the workload & environment.
          </p>
          <p className="text-base sm:text-base md:text-lg lg:text-lg">
            In recording studios, television and radio broadcast studios, and concert sound reinforcement systems, patchbays are widely used to facilitate the connection of different devices, such as microphones, electric or electronic instruments, effects (e.g. compression, reverb, etc.), recording gear, amplifiers, or broadcasting equipment. Patchbays make it easier to connect different devices in different orders for different projects, because all of the changes can be made at the patchbay.
          </p>
          <p className="mt-3 text-base sm:text-base md:text-lg lg:text-lg">
            Additionally, patchbays make it easier to troubleshoot problems such as ground loops; even small home studios and amateur project studios often use patchbays, because it groups all of the input jacks into one location. This means that devices mounted in racks or keyboard instruments can be connected without having to hunt around behind the rack or instrument with a flashlight for the right jack.
          </p>
          <p className="mt-3 text-base sm:text-base md:text-lg lg:text-lg">
            Using a patchbay also saves wear and tear on the input jacks of studio gear and instruments, because all of the connections are made with the patchbay.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <p className="text-base sm:text-base md:text-lg lg:text-lg">
            We have a complete range of servers with sizes ranging 1U, 2U, 4U, 5U and 42U that suits all needs from web servers, departmental storage and database servers right through enterprise wide processing servers.
          </p>
          <p className="mt-3 text-base sm:text-base md:text-lg lg:text-lg">
            Rackmount servers are dedicated CPUs for the safe storage of information. These servers are able to hold large amounts of information, making the products perfect for large businesses looking to integrate multiple computers onto the system.
          </p>
          <p className="mt-3 text-base sm:text-base md:text-lg lg:text-lg">
            Rackmount servers are most dependable on the market and provide quick and easy access to information from multiple sources.
          </p>
        </div>
      </div>
    </section>
    <div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl w-full px-4 mb-10">
    <img src="/img/serverpanel1.jpg" alt="Image 1" className="w-full h-auto object-cover rounded" />
    <img src="/img/serverpanel2.jpg" alt="Image 2" className="w-full h-auto object-cover rounded" />
    <img src="/img/serverpanel3.jpg" alt="Image 3" className="w-full h-auto object-cover rounded" />
    <img src="/img/serverpanel4.jpg" alt="Image 4" className="w-full h-auto object-cover rounded" />
  </div>
</div>
   </>
  )
}

export default Server_airconditioning