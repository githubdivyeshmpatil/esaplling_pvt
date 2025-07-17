import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundSection from "../components/BackgroundSection";
import { useTranslation } from 'react-i18next';
import TechArticles from "../components/TechArticles";
import TireCarousell from "../components/TireCarousell";

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
        

        {/* Founding Story */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 font-os">
            🔹Innovation from the day of inception{" "}
          </h2>
          <p className="text-base font-md text-black text-justify font-robo">
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
            <h2 className="text-2xl font-semibold mb-2 text-blue-700 font-os">🔹 Founding Story</h2>

            <p className="text-base text-black text-justify font-robo">
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
    <p className="text-sm text-gray-500 mb-4 font-robo">Head of Operations</p>
    <p className="text-base text-gray-800 text-justify font-robo">
At ESAPLLING Pvt. Ltd., we are driven by a singular vision — to understand real-world market challenges and transform them through innovative and accessible technology. Our mission is to bring cutting-edge solutions into the lives of everyday people by making them affordable, scalable, and efficient.

We go beyond conventional design services. ESAPLLING is a Design, Build, Operate, and Transfer (DBOT) enabler. Our end-to-end approach empowers businesses by engineering sustainable, high-performing systems, products, and infrastructure.    </p>
      <h3 className="text-xl font-semibold text-black mt-3 font-os">Our focus lies in: </h3>

 <ul className="list-disc text-[#000066] mt-3 font-medium pl-5 space-y-2 font-robo">
 
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
          <h2 className="text-2xl font-semibold mb-2 font-robo">🔹 Core Values</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1 font-robo">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Customer-Centric</li>
            <li>Collaboration</li>
          </ul>
        </section>

        {/* Company Culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 font-robo">🔹 Company Culture</h2>
          <p className="text-base text-gray-600 font-robo">
            We nurture a collaborative and inclusive culture where creativity
            and teamwork thrive. Our team is empowered to learn, lead, and grow
            every day.
          </p>
        </section>
      </div>
       <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-10 bg-white">
      
      {/* Left: Embedded Video */}
     <div className="w-full md:w-1/2">
  <div className="w-full h-96 md:h-[500px]">
    <iframe
      className="w-full h-full rounded-xl shadow-lg"
      src="https://www.youtube.com/embed/JUeW7jRgsVg"
      title="Biomedical Science"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
          Exploring the Future of Biomedical Science
        </h2>
        <p className="text-base md:text-lg mb-4">
          The field of biomedicine has always been at the forefront of scientific innovation, continually pushing the boundaries of what is possible in the realm of healthcare. With each passing year, remarkable strides are made in understanding the complexities of the human body, developing cutting-edge technologies, and discovering novel therapies to combat diseases that have plagued humanity for centuries. This relentless pursuit of knowledge and innovation has led to a profound transformation in the way we diagnose, treat, and prevent illnesses.

As we embark on this journey of exploring biomedical advancements, we will delve into the fascinating world where biology, technology, and medicine intersect. From decoding the intricacies of our genetic makeup to harnessing the power of artificial intelligence in medical diagnostics, the landscape of biomedical science is evolving at an unprecedented pace. These advancements not only promise to extend human life and enhance its quality but also have the potential to revolutionize the very foundations of healthcare as we know it.

In this exploration, we will journey through the key domains of biomedical research, shedding light on breakthroughs in genomics, regenerative medicine, neurobiology, and more. We will also investigate the ethical and societal implications of these advancements, as well as the challenges that lie ahead. The road to the future of healthcare is paved with excitement, uncertainty, and endless possibilities.

Join us on this enlightening expedition into the realm of biomedical science, where we will uncover the mysteries of life, witness the marvels of modern medicine, and envision a world where healthcare knows no bounds. Together, we will navigate the intricate web of discoveries and innovations that promise to shape the future of human health and well-being.</p>
      </div>
    </section>
    <TechArticles/>
   <div className="container mx-auto px-4 py-8">
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <img src="/img/china2.jpg" alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/img/china1.jpg" alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/img/china3.jpg" alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/img/china4.jpg" alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/img/china5.jpg" alt="Image 5" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {/* Title Below */}
      <div className="mt-8 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Project Planning, Design, Build, Operation & Maintenance
        </h2>
      </div>
    </div>
<section className="bg-white px-4 py-10 md:px-12">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-6 text-justify">
        <p>
          We possess in-house design knowledge for Cleanrooms, HVAC, MEP, and Automation systems, supported by advanced 3D automatic MEP software. This enables us to produce highly accurate and coordinated designs.
        </p>

        <p>
          Our designs strictly adhere to ASHRAE and Carrier standards. Ducting and drawing work is executed in compliance with SMACNA guidelines, enhanced by 3D capabilities for better planning and visualization.
        </p>

        <p>
          Our team is focused on executing projects with complete compliance to approved design standards, ensuring every element is built exactly as envisioned.
        </p>

        <p>
          We carry out effective commissioning, testing, and validation of systems according to approved Standard Operating Procedures (SOPs), ensuring full operational readiness.
        </p>

        <p>
          Our Operations & Maintenance (O&M) team has a proven track record of success, providing dedicated support 24×7, 365 days a year, to ensure uninterrupted operations.
        </p>
      </div>
    </section>
    <TireCarousell/>
    </>
  );
};

export default AboutUs;
