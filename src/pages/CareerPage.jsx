import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundSection from "../components/BackgroundSection";
import ImageGrid from "../components/ImageGrid";

const CarrierPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/carrierbg.png" />
      </div>
      <ImageGrid />

      <div className="px-4 md:px-16 py-10 text-black">
        <h1 className="text-4xl font-bold mb-6 text-center font-os">
          Career Opportunities & Skill Development
        </h1>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 font-os">
              Need of Skill Development
            </h2>
            <p className="mb-4 font-robo text-black text-base sm:text-base md:text-lg lg:text-lg">
              Soft & Tech skills training cover an extensive area of development. It completely brings transformation and confidence in the person, It is a vital area of growth for all scales of organizations across different sectors. From areas of basic communication at both internal and external levels to strategic management and planning, Dimension is the training program that covers all. Through our structured training schedule, we attempt to address all areas of concern of Institution and organization. In a highly competitive environment, it is necessary to offer customized solutions that also contribute to business, any ideation without transformation and adaptation is meaningless. It needs to remember that credibility and acceptability of every company is largely dependent on customer relationships, and honing soft skills is one way of enhancing these relationships. These skills are not only important to maintain an amiable relationship with clients but also among team members and departments within your organization.
              <br /><br />
              Even in such technical lines as engineering, about 15% of one's financial success is due to one's technical knowledge and about 85% is due to skill in human engineering, personality and the ability to lead people.
            </p>
            <ul className="list-disc list-inside space-y-2 font-robo text-base sm:text-base md:text-lg lg:text-lg">
              <li>Communication skills</li>
              <li>Leadership training</li>
              <li>Personality development</li>
              <li>Creative thinking</li>
              <li>Accent training</li>
              <li>Motivation</li>
              <li>Interviewing skills</li>
              <li>Coaching and mentoring</li>
              <li>Confidence building</li>
              <li>Time management</li>
              <li>Emotional intelligence</li>
              <li>Problem solving</li>
              <li>Stress management</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 font-os">
              Transformation via ATS (Advanced Technical Skill)
            </h2>

            <h3 className="text-lg font-semibold mt-2 font-os">
              ELECTRONICS ENGINEERING (E&TC/EC/CE) CORE
            </h3>
            <ul className="list-disc list-inside ml-4 font-robo text-base sm:text-base md:text-lg lg:text-lg">
              <li>PCB & Circuit Design</li>
              <li>Design, Installation and Operation of systems (ibMS, BMS, Scada, PID, Industrial Automation)</li>
              <li>Electronics Product Development</li>
              <li>Smart appliance Initiatives</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 font-os">EMBEDDED DESIGNS</h3>
            <ul className="list-disc list-inside ml-4 font-robo text-base sm:text-base md:text-lg lg:text-lg">
              <li>Complex Industrial and infrastructural systems are increasingly managed on the basis of Systems Engineering (SE)</li>
              <li>Computing and Programming Technology (Processors & Controllers)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 font-os">MECHANICAL ENGINEERING CONCEPT</h3>
            <ul className="list-disc list-inside ml-4 font-robo text-base sm:text-base md:text-lg lg:text-lg">
              <li>Mechatronics and robotics</li>
              <li>Structural analysis</li>
              <li>Thermodynamics and thermo-science</li>
              <li>CAD Design and drafting</li>
              <li>Micro electro-mechanical systems (MEMS)</li>
              <li>Friction stir welding (FSW)</li>
              <li>Composites</li>
              <li>Nanotechnology</li>
              <li>Finite element analysis</li>
              <li>Computational fluid dynamics</li>
              <li>Acoustical engineering</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 font-os">MECHANICAL CAD/CAE</h3>
            <p className="text-sm font-robo">
              AutoCAD, Cero, SOLID WORKS, HYPERMESH, ANSYS, CATIA V5, UNI-GRAPHICS (UG.NX), SOLID EDGE, MSC NASTRAN
            </p>

            <h3 className="text-lg font-semibold mt-4 font-os">Design For The Engineering World - DOMAIN KNOWLEDGE</h3>
            <p className="text-sm font-robo">
              Engines, Vehicle Integration, Transmission, Suspension, Casting, Forging, Sheet Metal, Structure Design, Plastics, BIW Fixture, Jigs & Fixtures, Press Tool, Die Designing, Mold Designing, Patterns, Reverse Engg.
            </p>

            <h3 className="text-lg font-semibold mt-4 font-os">PRODUCT DESIGN</h3>
            <p className="text-sm font-robo">Chassis Design, Engine Design, BIW Design</p>

            <h3 className="text-lg font-semibold mt-4 font-os">TOOL DESIGN</h3>
            <p className="text-sm font-robo">Fixture Design, Mould Design, Press Tool Design</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 font-os">
              Global - Campus Connect
            </h2>
            <ul className="list-disc list-inside space-y-2 font-robo text-base sm:text-base md:text-lg lg:text-lg">
              <li>Dimension : en-lights the student mind and gives a new spark to the career, enabling him / her with placement assistance and project guidance.</li>
              <li>Student awareness : We are coming up with a corporate student expectation management program soon to ensure the awareness and technology readiness for student seeking for placement. On & Off campus placement assistance.</li>
              <li>Recognition : Inter college programs on technology and innovations to enable students for competition and knowledge sharing.</li>
              <li>Awards : Best Project recognition.</li>
              <li>Program for Training & Placement officers : we would be conducting cross culture training program of TPO’s along with emerging engineering verticals to understand the market goals and demands.</li>
              <li>Magazine : Campus connect magazine would be circulated to all educational institute across country.</li>
            </ul>
          </div>

          <div className="flex items-center justify-center bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/img/campus.jpg"
              alt="Career Growth"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </section>
      </div>
       <div className="container mx-auto px-4 py-8">
        <img
          src="/img/certification2.png"
          alt="Sample"
          className="w-1/2 h-auto rounded-lg  mx-auto"
        />
      </div>
    </>
  );
};

export default CarrierPage;
