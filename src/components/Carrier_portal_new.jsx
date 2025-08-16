import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Carrier_portal_new() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar />
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/aboutus_banner.png" />
      </div>
       <div className="w-full px-4 sm:px-6 lg:px-20 py-10 bg-gray-50 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
        Careers at Esaplling
      </h1>

      {/* Intro Section */}
      <p className="text-base sm:text-lg lg:text-xl mb-6">
        The benefit of a mature business organisation with years of operational excellence is that there are several good systems in place. From a prospective employee point of view, <span className="font-semibold">Esaplling</span> offers the following advantages:
      </p>

      <p className="mb-6">
        There are well-designed induction and technical orientation programmes. There is a Corporate Technical Training Organisation which delivers a variety of technical training programmes for the AC&R business. Engineers who join the Electronics Division get a chance to go abroad for training with the Principals. The Corporate HR runs a menu of non-technical soft skills training programmes such as Business Communication Skills and Business Etiquette.
      </p>

      <p className="mb-6">
        The Company has many well-designed, time-tested HR practices such as setting the performance objectives at the beginning of the year, reviewing employee performance every year through an annual appraisal system, and an annual compensation review based on market surveys. In addition to a market-aligned salary structure, <span className="font-semibold">Esaplling</span> also has a fairly attractive incentive scheme wherein the employee gets an incentive based on his department’s performance coupled with his own performance rating.
      </p>

      {/* Career Levels */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">Career Levels</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Freshers</li>
        <li>Mid-Management</li>
        <li>Senior Management</li>
      </ul>

      {/* Trainee Roles */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">Trainee Roles</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Graduate Engineer Trainees (GETs)</li>
        <li>Post-Graduate Engineer Trainees (PGETs)</li>
        <li>Diploma Engineer Trainees (DETs)</li>
        <li>Management Trainees (MTs)</li>
        <li>B Com Trainees</li>
        <li>ITI Trainees</li>
      </ul>

      {/* Divisions */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">Divisions & Career Opportunities</h2>
      
      <div className="space-y-6">
        {/* Projects */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Projects</h3>
          <p>Mechanical engineers are deployed in Sales, Design & Engineering, and Construction. Electrical engineers (graduate and diploma) can also find careers in the Electrical Projects division.</p>
        </div>

        {/* Manufacturing */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Manufacturing</h3>
          <p>Esaplling manufactures a wide range of air conditioning and refrigeration equipment at its five factories. Careers are available in R&D, Production, Production Planning, Manufacturing Engineering, Quality and Reliability, and Procurement. Graduates and postgraduates in mechanical, electrical, and electronics engineering can find rewarding careers here.</p>
        </div>

        {/* Service Group */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Air Conditioning & Refrigeration Service Group</h3>
          <p>Careers are broadly in Service Marketing, Service Delivery, and Service Specialists’ Group. Engineers constitute the bulk of recruitment.</p>
        </div>

        {/* Sales Group */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Air Conditioning & Refrigeration Products Sales Group</h3>
          <p>Engineers and MBAs with marketing aptitude can pursue careers in channel businesses for packaged air conditioners, room air conditioners, refrigeration products, and cold storages.</p>
        </div>

        {/* Management Services */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Management Services</h3>
          <p>Departments include Procurement & Logistics, Finance & Accounts, and Human Resources. Talented professionals with appropriate qualifications are constantly sought.</p>
        </div>

        {/* Engineering & Electronics */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Esaplling Engineering & Electronics</h3>
          <p>Esaplling is a distributor for high-tech electronic equipment and industrial products. Careers are available in specialized markets such as Industrial Products and Systems, Non-Destructive Testing, Testing Machines, Data Communication Products & Services, Testing and Measuring Instruments, and Healthcare Systems.</p>
        </div>

        {/* International Business Group */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">International Business Group (IBG)</h3>
          <p>Opportunities are available in Global Product Sales (Middle East, Africa, SAARC, ASEAN, OEM equipment) and International Projects (joint ventures in Qatar and Malaysia, and international project enquiries).</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Carrier_portal_new