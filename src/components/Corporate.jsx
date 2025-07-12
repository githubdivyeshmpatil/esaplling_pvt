import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Corporate() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/aboutus_banner.png" />
      </div>

      <div className="px-4 sm:px-6 lg:px-16 py-12 bg-gray-50">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-black font-os">
Our Inception	        </h2>

        {/* Justified Paragraph (start from left) */}
        <div className="max-w-7xl w-full text-justify text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-10 font-robo">
          <p>
            Being ESAPLLING, we apply innovative techniques and ideas in an ever-changing industry. One of our major strengths is our capability and confidence to provide value-added service—product installation, site commissioning, to handle any project, regardless of size or complexity, from inspection, through budgeting, to design, execution, validation, and transfer. Understanding the market challenge and enabling the technology, bringing it to an affordable price range for being part of everyone's life has been our objective and motto. Evaluating and redesigning the product service framework, tools, and automating things with cutting-edge technology was our prime focus. We are not a simple design company; we are a Design, Build, Operate, and Transfer enabler, so enabling the succession and enabling through the right approach has been our prime focus.
          </p>
        </div>
         <div className="max-w-7xl w-full text-justify text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-10 font-robo">
          <p>
Esaplling Pvt Ltd aims to create a landmark in the horizon of air-conditioning and ventilation, by introducing the best-in-class practices across the industries. Esaplling Team comprises of four major verticals like Consulting & Design, Research & Development, Execution, O & M which enables the company to resolve and redefine solutions approaches. Team comprises of highly experienced resources, who have daring to provide cutting edge solutions for better and clean Environment in working and production area. Esaplling?s core focus is to carefully evaluate business needs, targets, goals, budget, interest and work closely with customer to develop a customized solution that incorporates the most appropriate and cost-effective project and fulfill all needs with quality, excellent resource team of Architects, Solution designers, Quality Analysis, Industry experts and design consultants to understand the business needs and functionalities, these resources have been engaged in several engagements and have delivered world class solutions as well.
In-house design knowledge for Cleanrooms, HVAC, MEP and Automation also In house drafting capabilities with 3D automatic MEP software
Precise Designing as per ASHARE & Carrier Standards also Ducting & Drawing as per SMACNA, along with 3D Capabilities
Focused on Effective execution compliance as per Design
Effective Commissioning Testing and validation of system as per approved SOP
O & M team having track record of success, supporting 24 X 7 operations 365 days a Year

          </p>
          
        </div>

        {/* Responsive Image Grid (2x2) */}
      <div className="max-w-6xl mx-auto px-4 py-8">
 <div className="w-full">
  <img
    src="/img/china.png"
    alt="Achievement 1"
    className="w-full h-auto"
  />
</div>

</div>
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <img src="/img/china2.jpg" alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
    <img src="/img/china1.jpg" alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
    <img src="/img/china3.jpg" alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
    <img src="/img/china4.jpg" alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
    <img src="/img/china5.jpg" alt="Image 5" className="w-full h-auto rounded-lg shadow-md" />
  </div>
</div>


      </div>
    </>
  )
}

export default Corporate;
