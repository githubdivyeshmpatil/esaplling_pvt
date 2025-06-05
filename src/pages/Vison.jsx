import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BackgroundSection from '../components/BackgroundSection'

function Vison() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/vision.jpg" />
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto text-justify">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000066] mb-6 text-center font-os">
              At a Glance
            </h2>
            <div className="text-gray-800 text-md sm:text-lg space-y-6 font-robo">
              <p>
                <span className="font-semibold text-[#000066]">ESAPLLING</span>, a
                leading firm that optimizes technology and solutions through
                electronics, aims to be part of everyone's life. The company’s
                primary focus lies in <strong>Consumer Electronics</strong> (LED, AC, Cooler, Washing
                Machine manufacturing) and <strong>HVAC Turnkey solution designing, build, and O&M</strong>,
                establishing a landmark of success in critical sectors.
              </p>

              <p>
                ESAPLLING started its <strong>Biomedical vertical</strong> during
                the 2020 pandemic to support global innovation and produce
                Biomedical and Personal Protective Equipment.
              </p>

              <p>
                The company provides quality <strong>consumer electronics</strong>{" "}
                at affordable prices, targeting low and middle-income groups. Despite
                its rapid growth, ESAPLLING maintains its core philosophy:{" "}
                <em>
                  delivering quality products at competitive prices, within
                  timelines and budgets.
                </em>
              </p>

              <p>
                Success is driven by their clients’ satisfaction. With established
                resources, strong industry knowledge, and solid supplier
                relationships, ESAPLLING offers cost-effective solutions for
                electronics manufacturing needs across India.
              </p>

              <p>
                By implementing <strong>electronic solutions</strong> in domestic
                engineering industries, corporate and retail businesses, ESAPLLING
                has overcome challenges through a{" "}
                <strong>customer-centric approach</strong> rather than a traditional
                product-centric model.
              </p>

              <p>
                They pioneered the highest-ever <strong>warranty periods</strong> in
                all product categories to enhance customer satisfaction. With a{" "}
                <strong>PAN India service network</strong> and toll-free support,
                they ensure swift resolution of service concerns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Vison
