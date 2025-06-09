import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundSection from "../components/BackgroundSection";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/aboutus_banner.png" />
      </div>
      <div className="bg-white text-black p-4 sm:p-8 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 font-os">
          {t('about.title')}
        </h1>

        {/* Founding Story */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700  font-os">
            🔹Innovation from the day of inception{" "}
          </h2>
          <p className="text-base font-md text-black text-justify">
            Our journey began with a vision to innovate and impact the industry.
            Founded by passionate individuals, we aimed to bring cutting-edge
            solutions that solve real-world problems.Being ESAPLLING, we apply
            innovative techniques and ideas in an ever changing industry, one of
            our major strength is our capability and confidence to provide
            value-added service product installation, site commissioning, to
            handle any project, regardless of size or complexity, from
            inspection, through budgeting, to design, execution, validation and
            transfer. Understanding the market challenge and enabling the
            technology, bring it to affordable price range for being part of
            everyone's life been our objective and motto. Evaluating and
            redesigning the product service frame work, tools and automating
            things with cutting edge technology was our prime focus. We are not
            a simple design company, we are a Design, Build, operate and
            transfer enabler, So enabling the succession and enabling thru right
            approach been in our prime focus .
          </p>
        </section>
        <div className="flex flex-col md:flex-row items-center p-4 max-w-7xl mx-auto  md:space-x-8 space-y-6 md:space-y-0">
          {/* Left Column - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700  font-os">🔹 Founding Story</h2>

            <p className="text-base text-black text-justify">
              Our journey began with a vision to innovate and impact the
              industry. Founded by passionate individuals, we aimed to bring
              cutting-edge solutions that solve real-world problems.Being
              ESAPLLING, we apply innovative techniques and ideas in an ever
              changing industry, one of our major strength is our capability and
              confidence to provide value-added service product installation,
              site commissioning, to handle any project, regardless of size or
              complexity, from inspection, through budgeting, to design,
              execution, validation and transfer. Understanding the market
              challenge and enabling the technology, bring it to affordable
              price range for being part of everyone's life been our objective
              and motto. Evaluating and redesigning the product service frame
              work, tools and automating things with cutting edge technology was
              our prime focus. We are not a simple design company, we are a
              Design, Build, operate and transfer enabler, So enabling the
              succession and enabling thru right approach been in our prime
              focus .
            </p>
          </div>
          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/about1.jpg"
              alt="Letter E Graphic"
              className="max-w-[350px] w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Leadership Team */}
        <section className="mb-10">
  {/* Left Column - Image */}
 <div className="flex flex-col  md:flex-row items-start p-4 max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
  {/* Left Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/img/sir.jpg" // your image path here
      alt="Manager"
              className="max-w-[450px] w-full h-auto object-contain"
    />
  </div>

  {/* Right Side - Text aligned to top */}
  <div className="w-full md:w-1/2 md:text-left">
    <h2 className="text-2xl font-bold text-[#000066] mb-2 font-os">ESAPLLING Pvt Ltd</h2>
    <h3 className="text-xl font-semibold text-black mb-1 font-robo">The CEO. Satya Patri | Director | </h3>
    <p className="text-sm text-gray-500 mb-4">Head of Operations</p>
    <p className="text-base text-gray-800 text-justify font-robo">
At ESAPLLING Pvt. Ltd., we are driven by a singular vision — to understand real-world market challenges and transform them through innovative and accessible technology. Our mission is to bring cutting-edge solutions into the lives of everyday people by making them affordable, scalable, and efficient.

We go beyond conventional design services. ESAPLLING is a Design, Build, Operate, and Transfer (DBOT) enabler. Our end-to-end approach empowers businesses by engineering sustainable, high-performing systems, products, and infrastructure.    </p>
      <h3 className="text-xl font-semibold text-black mt-3 font-os">Our focus lies in: </h3>

 <ul className="list-disc text-[#000066] mt-3 font-medium pl-5 space-y-2">
 
  <li>Reimagining and optimizing product-service frameworks</li>
  <li>Automating operations through AI, IoT, and modern tools

</li>
  <li>Enabling scalable transformation through design innovation

</li>
  <li>Ensuring knowledge and process transfer for long-term success

</li>
</ul>


  </div>
  
</div>



        </section>
  
        {/* Core Values */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔹 Core Values</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Customer-Centric</li>
            <li>Collaboration</li>
          </ul>
        </section>

        {/* Company Culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔹 Company Culture</h2>
          <p className="text-base text-gray-600">
            We nurture a collaborative and inclusive culture where creativity
            and teamwork thrive. Our team is empowered to learn, lead, and grow
            every day.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
