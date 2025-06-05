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
      <ImageGrid/>
    <div className="px-4 md:px-16 py-10 bg-blue-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center font-os">Career Opportunities & Skill Development</h1>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 font-os">Need of Skill Development</h2>
          <p className="mb-4 font-robo text-black">
            Soft & Tech skills training brings transformation and confidence in a person. It is crucial for all organizations across sectors. From communication to strategic planning, our training program — Dimension — covers all, addressing institutional and organizational needs through structured schedules.
          </p>
          <ul className="list-disc list-inside space-y-2 font-robo">
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

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 font-os">Transformation via ATS (Advanced Technical Skills)</h2>

          <h3 className="text-lg font-semibold mt-2 font-os">ELECTRONICS ENGINEERING</h3>
          <ul className="list-disc list-inside ml-4 font-robo">
            <li>PCB & Circuit Design</li>
            <li>ibMS, BMS, Scada, PID Systems</li>
            <li>Product Development & Smart Appliances</li>
            <li>Embedded Systems & Controllers</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 font-os">MECHANICAL ENGINEERING</h3>
          <ul className="list-disc list-inside ml-4 font-robo">
            <li>Mechatronics, Thermodynamics</li>
            <li>CAD Design, MEMS, FSW, Composites</li>
            <li>Finite Element & Fluid Dynamics</li>
            <li>Nanotech & Acoustics</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 font-os">CAD/CAE Tools</h3>
          <p className="text-sm font-robo">AutoCAD, SOLIDWORKS, CATIA V5, ANSYS, UG.NX, etc.</p>

          <h3 className="text-lg font-semibold mt-4 font-os">Domain Knowledge</h3>
          <p className="text-sm font-robo">Vehicle Design, Casting, BIW Fixture, Tool Design, Mould, Reverse Engg., etc.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4 font-os">Global - Campus Connect</h2>
          <ul className="list-disc list-inside space-y-2 font-robo">
            <li>Dimension: Student career spark with placement & project guidance</li>
            <li>Corporate student expectation program for placement readiness</li>
            <li>On & Off campus placement assistance</li>
            <li>Technology competitions & knowledge sharing events</li>
            <li>Best Project Awards</li>
            <li>Cross-cultural TPO training programs</li>
            <li>Campus connect magazine circulation nationwide</li>
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
    </>
  );
};

export default CarrierPage;
