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
        
        {/* Company Culture */}
        
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
        Esaplling Pvt Ltd aims to create a land mark in the horizon of air-conditioning and ventilation, by introducing the best in class practices across the industries. Esaplling Team comprises of four major verticals like Consulting & Design, Research & Development, Execution, O & M which enables the company to resolve and redefine solutions approaches. Team comprises of highly experienced resources, who have daring to provide cutting edge solutions for better and clean Environment in working and production area. Esaplling?s core focus is to carefully evaluate business needs, targets, goals, budget, interest and work closely with customer to develop a customized solution that incorporates the most appropriate and cost-effective project and fulfill all needs with quality, excellent resource team of Architects, Solution designers, Quality Analysis, Industry experts and design consultants to understand the business needs and functionalities, these resources have been engaged in several engagements and have delivered world class solutions as well.</p>
      </div>
    </section>
    <TireCarousell/>
    <p className="text-center">Project Planning, Design,Build,Operation & Maintenance
</p>
<p class="text-base sm:text-lg md:text-xl lg:text-xl text-gray-800 leading-relaxed md:leading-loose max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
  In-house design knowledge for Cleanrooms, HVAC, MEP, and Automation, along with in-house drafting capabilities using 3D automatic MEP software.
  Precise designing as per ASHRAE & Carrier Standards, and ducting & drawings as per SMACNA, with 3D capabilities.
  Focused on effective execution compliance as per design.
  Effective commissioning, testing, and validation of systems as per approved SOP.
  O & M team with a track record of success, supporting 24x7 operations, 365 days a year.
</p>

    </>
  );
};

export default AboutUs;
