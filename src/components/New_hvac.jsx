





import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection'; // Optional, depending on use
import ParallaxSingle from "./ParallaxSingle";

const boxes = [
  {
    title: "PLANNING",
    image: "/img/Cycle.png",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 text-yellow-700">Planning</h2>

        <p className="mb-2 text-gray-700 text-justify">
          HVAC Esaplling Team comprises of four major verticals like <b>Consulting & Design</b>, <b>Research & Development</b>, <b>Execution</b>, and <b>O & M</b> which enables the company to resolve and redefine solution approaches. The team comprises highly experienced resources, who are committed to providing cutting-edge solutions for a better and cleaner environment in both working and production areas. Esaplling's core focus is to carefully evaluate business needs, targets, goals, budget, and interests, and work closely with customers to develop customized solutions.
        </p>

        <p className="mb-2 text-gray-700 text-justify">
          HVAC (Heating, Ventilation, and Air Conditioning) project planning is a critical phase in the installation or upgrade of HVAC systems in residential, commercial, or industrial settings. Proper planning ensures that the HVAC system meets the specific needs of the building, is cost-effective, and complies with relevant codes and regulations. Below are the key steps and considerations:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-gray-800 text-justify">
          <li><b>Define Project Objectives:</b> Determine the purpose of the HVAC project, such as new installation, replacement, or upgrade. Identify specific goals like improving energy efficiency, enhancing indoor air quality, or meeting comfort requirements.</li>
          <li><b>Conduct Needs Assessment:</b> Evaluate heating and cooling requirements including load calculations. Consider occupancy, building orientation, insulation, and local climate. Determine ventilation needs for indoor air quality.</li>
          <li><b>Establish Budget and Funding:</b> Set the project budget covering equipment, labor, materials, and contingency. Explore financing, grants, or incentives for energy-efficient systems.</li>
          <li><b>Design Phase:</b> Engage HVAC engineers or consultants to design the system. Create detailed system plans covering equipment selection, ductwork, and controls. Ensure code and environmental compliance.</li>
          <li><b>Select HVAC Equipment:</b> Choose suitable equipment like furnaces, boilers, ACs, heat pumps, and ventilation systems. Prioritize efficiency, capacity, reliability, and compatibility.</li>
          <li><b>Plan for Energy Efficiency:</b> Consider modern energy-saving technologies like variable speed systems, zoning, and smart controls. Calculate ROI on efficiency measures.</li>
          <li><b>Create a Project Schedule:</b> Develop a timeline with milestones, deadlines, and dependencies. Factor in seasonal conditions and building occupancy for installation.</li>
          <li><b>Obtain Necessary Permits:</b> Identify and acquire permits from local authorities. Comply with environmental and refrigerant handling regulations.</li>
          <li><b>Procurement:</b> Source and purchase equipment and materials. Work with reputable suppliers. Confirm warranties and service agreements.</li>
          <li><b>Contractor Selection:</b> Hire experienced HVAC contractors. Evaluate bids based on quality, cost, experience, and timeline. Define project scope and responsibilities clearly.</li>
          <li><b>Safety and Quality Assurance:</b> Implement safety protocols for workers and occupants. Ensure quality checks to verify that the system functions as designed.</li>
          <li><b>Communication and Documentation:</b> Maintain consistent communication with stakeholders. Keep detailed records including plans, permits, and inspection reports.</li>
          <li><b>Testing and Commissioning:</b> Conduct system testing to confirm correct installation. Perform control adjustments, air/water balancing, and efficiency validation.</li>
          <li><b>Training and Handover:</b> Train building operators and maintenance staff on system use and upkeep. Provide manuals and documentation during handover.</li>
        </ul>
      </>
    ),
  },
 {
  title: "CONSULTANCY",
  image: "/img/counsultanc.jpg",
  content: (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-700">Consultancy</h2>
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-justify">
        <p>
          An HVAC (Heating, Ventilation, and Air Conditioning) consultant plays a crucial role in ensuring that HVAC systems are designed and implemented effectively for various projects. Their responsibilities encompass a wide range of tasks related to HVAC system design, energy efficiency, compliance with codes and regulations, and more.
        </p>

        <h3 className="text-xl font-semibold text-cyan-600">Needs Assessment</h3>
        <ul className="list-disc pl-5">
          <li>Conduct a thorough assessment of the client's HVAC needs, considering factors such as building size, occupancy, usage, and environmental conditions.</li>
          <li>Analyze existing HVAC systems if applicable and identify areas for improvement or replacement.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">System Design</h3>
        <ul className="list-disc pl-5">
          <li>Develop comprehensive HVAC system designs that meet the client’s specific requirements.</li>
          <li>Select appropriate HVAC equipment, including heating and cooling units, ventilation systems, and control systems.</li>
          <li>Determine the optimal layout for equipment placement and ductwork.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Energy Efficiency Analysis</h3>
        <ul className="list-disc pl-5">
          <li>Evaluate energy-efficient HVAC technologies and strategies to reduce energy consumption and operational costs.</li>
          <li>Perform energy modeling and calculations to determine the system’s energy performance.</li>
          <li>Recommend energy-saving measures, such as variable speed systems, high-efficiency equipment, and smart controls.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Code and Regulatory Compliance</h3>
        <ul className="list-disc pl-5">
          <li>Ensure compliance with local building codes, industry standards, and environmental regulations.</li>
          <li>Prepare and submit documentation for permits and approvals.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Budgeting and Cost Estimation</h3>
        <ul className="list-disc pl-5">
          <li>Prepare detailed cost estimates including equipment, materials, and labor.</li>
          <li>Assist clients in developing a realistic budget.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Technical Specifications</h3>
        <ul className="list-disc pl-5">
          <li>Develop technical specifications for HVAC equipment and materials.</li>
          <li>Create bid documents and guide the procurement process.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Bid Evaluation and Contractor Selection</h3>
        <ul className="list-disc pl-5">
          <li>Help evaluate bids from HVAC contractors.</li>
          <li>Assist in selecting qualified contractors based on experience and pricing.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Project Management</h3>
        <ul className="list-disc pl-5">
          <li>Oversee HVAC installations to ensure adherence to design and timelines.</li>
          <li>Coordinate with contractors, engineers, and stakeholders.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Quality Control and Testing</h3>
        <ul className="list-disc pl-5">
          <li>Implement quality control checks during and after installation.</li>
          <li>Supervise testing and commissioning for system performance.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Documentation and Reporting</h3>
        <ul className="list-disc pl-5">
          <li>Maintain accurate records including drawings, contracts, and change orders.</li>
          <li>Prepare progress reports for clients and stakeholders.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Client Education</h3>
        <ul className="list-disc pl-5">
          <li>Train clients on system operations and maintenance.</li>
          <li>Provide support for facility managers and building operators.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Post-Installation Evaluation</h3>
        <ul className="list-disc pl-5">
          <li>Monitor HVAC performance and resolve post-installation issues.</li>
          <li>Assist in warranty claims and troubleshooting.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Stay Informed and Innovate</h3>
        <ul className="list-disc pl-5">
          <li>Keep up with HVAC industry trends and emerging technologies.</li>
          <li>Seek innovative methods to improve performance and efficiency.</li>
        </ul>

        <p>
          An HVAC consultant serves as a valuable resource for clients, helping them make informed decisions about system design and implementation. They play a vital role in optimizing HVAC performance and ensuring energy efficiency and regulatory compliance across a variety of projects.
        </p>
      </div>
    </>
  )
}

,
 {
  title: "DESIGN",
  image: "/img/desing.jpg",
  content: (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-700">Design</h2>
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-justify">
        <p>
          Designing an HVAC (Heating, Ventilation, and Air Conditioning) system with best practices in mind is essential to ensure efficient operation, occupant comfort, and compliance with industry standards and regulations. Here are some HVAC design best practices to consider:
        </p>

        <h3 className="text-xl font-semibold text-cyan-600">Proper Load Calculation</h3>
        <ul className="list-disc pl-5">
          <li>Conduct thorough heating and cooling load calculations to determine the precise HVAC system capacity required for the space.</li>
          <li>Account for factors such as building orientation, insulation levels, occupancy, and climate conditions.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Energy Efficiency</h3>
        <ul className="list-disc pl-5">
          <li>Prioritize energy-efficient HVAC equipment and practices to reduce energy consumption and operating costs.</li>
          <li>Consider high-efficiency heating and cooling units, variable speed technology, and energy recovery ventilation systems.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Zoning and Controls</h3>
        <ul className="list-disc pl-5">
          <li>Implement zoning strategies to match HVAC output with specific areas or zones within a building.</li>
          <li>Use advanced control systems with programmable thermostats and sensors to optimize comfort and reduce energy waste.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Proper Sizing</h3>
        <ul className="list-disc pl-5">
          <li>Avoid oversizing or undersizing HVAC equipment, as this can lead to inefficiencies, discomfort, and increased maintenance costs.</li>
          <li>Follow manufacturer recommendations and load calculations when selecting equipment.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Ductwork Design</h3>
        <ul className="list-disc pl-5">
          <li>Design a well-balanced ductwork system that minimizes pressure losses and maintains even airflow throughout the building.</li>
          <li>Seal and insulate ducts to prevent air leakage and improve energy efficiency.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Ventilation and Indoor Air Quality (IAQ)</h3>
        <ul className="list-disc pl-5">
          <li>Ensure proper ventilation rates to maintain good indoor air quality.</li>
          <li>Consider using air filtration systems and UV lights to remove contaminants and improve IAQ.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Maintenance Access</h3>
        <ul className="list-disc pl-5">
          <li>Design HVAC systems with easy access points for maintenance and repairs.</li>
          <li>Ensure that filters, coils, and other components are readily accessible.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Noise Control</h3>
        <ul className="list-disc pl-5">
          <li>Plan for noise control measures, especially in commercial or residential buildings where quiet operation is essential.</li>
          <li>Use acoustic insulation, vibration isolation, and sound attenuators as needed.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Humidity Control</h3>
        <ul className="list-disc pl-5">
          <li>Maintain appropriate humidity levels within the building to enhance comfort and prevent moisture-related issues.</li>
          <li>Incorporate humidification and dehumidification systems as necessary.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Green Building Practices</h3>
        <ul className="list-disc pl-5">
          <li>Consider environmentally friendly HVAC options, such as geothermal heat pumps, solar-assisted systems, and eco-friendly refrigerants.</li>
          <li>Design systems that align with green building certifications like LEED (Leadership in Energy and Environmental Design).</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Emergency Planning</h3>
        <ul className="list-disc pl-5">
          <li>Include backup systems or generators to ensure HVAC functionality during power outages or emergencies.</li>
          <li>Develop contingency plans for system failures.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Commissioning and Testing</h3>
        <ul className="list-disc pl-5">
          <li>Implement a thorough commissioning process to verify that the HVAC system operates as designed and meets performance criteria.</li>
          <li>Conduct testing and balancing (TAB) to ensure proper airflow and temperature distribution.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Compliance with Codes and Standards</h3>
        <ul className="list-disc pl-5">
          <li>Stay informed about local building codes, energy efficiency standards, and environmental regulations.</li>
          <li>Ensure that the HVAC design meets or exceeds these requirements.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Documentation and As-Built Plans</h3>
        <ul className="list-disc pl-5">
          <li>Maintain detailed records of the HVAC design, equipment specifications, and installation procedures.</li>
          <li>Create accurate as-built drawings to reflect any modifications made during construction.</li>
        </ul>

        <h3 className="text-xl font-semibold text-cyan-600">Life Cycle Cost Analysis</h3>
        <ul className="list-disc pl-5">
          <li>Consider the long-term costs of the HVAC system, including maintenance, repairs, and energy consumption, when making design decisions.</li>
          <li>Choose equipment with a favorable life cycle cost.</li>
        </ul>

        <p>
          Collaboration among architects, engineers, HVAC consultants, and contractors is crucial to achieving a successful HVAC design that meets the specific needs of a building while optimizing energy efficiency and occupant comfort. Regular review and adherence to best practices help ensure the longevity and performance of the HVAC system.
        </p>
      </div>
    </>
  )
}
,
{
  title: "EXECUTION",
  image: "/img/exuca.jpg",
  content: (
    <div className="text-justify space-y-4 text-sm sm:text-base leading-relaxed">
      <p>
        The execution phase of an HVAC (Heating, Ventilation, and Air Conditioning) project is where the design and planning come to life. It involves the physical installation, construction, and implementation of the HVAC system. Proper execution is crucial to ensure the system operates efficiently, safely, and in compliance with all relevant codes and standards.
      </p>

      <p><strong>Project Management:</strong> Appoint a project manager to oversee the execution phase, manage resources, and ensure that the project stays on schedule and within budget. Establish a clear communication plan to keep all stakeholders informed of progress and changes.</p>

      <p><strong>Safety Precautions:</strong> Prioritize safety for all personnel involved in the installation. Enforce safety protocols and provide appropriate training. Conduct regular safety inspections and address any concerns promptly.</p>

      <p><strong>Quality Control and Assurance:</strong> Implement quality control measures to verify that work meets design specifications and industry standards. Conduct regular inspections and testing to identify and address issues promptly. Keep detailed records of inspections and test results.</p>

      <p><strong>Equipment Installation:</strong> Ensure that HVAC equipment is installed correctly and according to manufacturer specifications. Properly secure equipment to prevent vibration or movement. Verify that electrical and plumbing connections are made safely and accurately.</p>

      <p><strong>Ductwork and Piping:</strong> Install ductwork and piping systems with care to minimize air leakage, condensation, and pressure losses. Conduct air balancing to achieve the designed airflow rates and temperature differentials. Insulate ducts and pipes to prevent energy loss and condensation issues.</p>

      <p><strong>Control System Integration:</strong> Install control systems, sensors, and thermostats as per the design plan. Verify that the control system interfaces with the HVAC equipment and meets the building's requirements. Program and calibrate control systems for optimal performance.</p>

      <p><strong>Commissioning:</strong> Conduct a comprehensive commissioning process to ensure the HVAC system functions as intended. Test equipment and controls, balance airflow, and calibrate sensors. Address any deficiencies identified during commissioning.</p>

      <p><strong>Documentation:</strong> Maintain accurate and up-to-date documentation throughout the execution phase. Keep records of equipment specifications, installation details, and any modifications made during construction. Create as-built drawings to reflect the final state of the HVAC system.</p>

      <p><strong>Training and Handover:</strong> Provide training to building operators and maintenance staff on the operation and maintenance of the HVAC system. Prepare operation and maintenance manuals with detailed instructions.</p>

      <p><strong>Testing and Verification:</strong> Verify the system's performance by conducting tests to ensure it meets design criteria. Measure temperature differentials, airflow rates, and humidity levels. Address any issues that arise during testing and verification.</p>

      <p><strong>Warranty and Ongoing Support:</strong> Ensure that the HVAC equipment is covered by warranties, and maintain records of warranty information. Establish a plan for ongoing maintenance and support to keep the system operating efficiently over time.</p>

      <p><strong>Client Acceptance:</strong> Obtain formal acceptance from the client once the HVAC system has been successfully installed, tested, and verified. Address any outstanding punch list items to the client's satisfaction.</p>

      <p><strong>Environmental Considerations:</strong> Follow environmentally responsible practices during execution, including proper disposal of materials and refrigerants. Comply with all environmental regulations and requirements.</p>

      <p><strong>Record Keeping:</strong> Maintain detailed records of all activities, inspections, and changes made during the execution phase. These records are valuable for future maintenance, renovations, and system upgrades.</p>

      <p>
        Effective execution of an HVAC project is critical to ensure that the system operates reliably, efficiently, and safely throughout its lifecycle. Close attention to quality, safety, and compliance with design specifications is essential for a successful HVAC project execution.
      </p>
    </div>
  )
}
,  {
  title: "VALIDATION",
  image: "/img/validation.jpg",
  content: (
    <div className="text-justify space-y-4 text-sm sm:text-base leading-relaxed">
      <p>
        HVAC validation is a critical step in ensuring the quality, reliability, and compliance of HVAC systems in industries where environmental control is essential. Adhering to best practices and regulatory requirements throughout the validation process is crucial to the success of the HVAC system and the overall facility.
      </p>

      <p><strong>Risk Assessment:</strong> Conduct a risk assessment to identify potential hazards or risks associated with the HVAC system. Prioritize risks and determine mitigation strategies to address them.</p>

      <p><strong>Documentation and Records:</strong> Maintain detailed documentation of all validation activities, including design documents, installation records, and test protocols. Ensure that records are accurate, organized, and readily accessible.</p>

      <p><strong>Design Qualification (DQ):</strong> Verify that the HVAC system design meets the intended purpose and requirements. Review design documents, specifications, and drawings for accuracy and completeness.</p>

      <p><strong>Installation Qualification (IQ):</strong> Confirm that the HVAC system has been installed correctly and in accordance with the approved design. Check the placement of equipment, ductwork, piping, controls, and electrical connections. Document deviations or non-conformances and address them appropriately.</p>

      <p><strong>Operational Qualification (OQ):</strong> Test and verify that the HVAC system operates as designed under various operating conditions. Perform functional tests, including temperature and humidity control, airflow rates, and alarm systems. Ensure that the system can maintain setpoints and respond to alarms and deviations appropriately.</p>

      <p><strong>Performance Qualification (PQ):</strong> Evaluate the HVAC system's performance under actual working conditions. Monitor the system over an extended period to demonstrate its consistent performance. Test the system's ability to maintain environmental conditions within specified tolerances.</p>

      <p><strong>Monitoring and Data Collection:</strong> Implement continuous monitoring of critical parameters, such as temperature, humidity, and pressure. Use data loggers and sensors to record and archive data for trend analysis. Set alarm limits and response protocols for out-of-specification conditions.</p>

      <p><strong>Change Control and Deviations:</strong> Implement a robust change control process to manage any changes to the HVAC system or related procedures. Document and investigate deviations from established procedures and protocols, and implement corrective and preventive actions (CAPA).</p>

      <p><strong>Requalification:</strong> Periodically requalify the HVAC system to ensure ongoing compliance with validation requirements. Revalidation may be triggered by significant system modifications, changes in environmental conditions, or regulatory updates.</p>

      <p><strong>Documentation of Personnel Training:</strong> Ensure that personnel involved in HVAC validation activities are adequately trained and competent in their roles. Maintain records of training and qualifications for validation team members.</p>

      <p><strong>Regulatory Compliance:</strong> Stay informed about industry-specific regulations and guidelines (e.g., GMP, FDA, EU Annex 1) that apply to HVAC validation in your particular industry. Ensure that the validation process aligns with these regulations and standards.</p>

      <p><strong>Audit and Review:</strong> Conduct regular internal audits and reviews of the HVAC validation process to identify areas for improvement and compliance gaps.</p>

      <p><strong>Final Report and Release:</strong> Compile a final validation report summarizing all activities, results, and conclusions. Obtain the necessary approvals and authorizations before the HVAC system can be released for routine use.</p>
    </div>
  )
}
,
{
  title: "O&M",
  image: "/img/oandm.jpg",
  content: (
    <div className="text-justify space-y-4 text-sm sm:text-base leading-relaxed">
      <p>
        Roles and responsibilities in HVAC (Heating, Ventilation, and Air Conditioning) operation and maintenance can vary depending on the specific organization and facility. However, here is a general overview of the key roles and their responsibilities in HVAC operation and maintenance:
      </p>

      <p><strong>HVAC Technician:</strong> Conduct routine inspections of HVAC systems to ensure they are operating efficiently. Perform preventive maintenance tasks such as cleaning filters, coils, and ducts. Diagnose and troubleshoot HVAC system issues. Repair or replace faulty components, such as compressors, fans, and motors. Calibrate controls and thermostats for optimal performance. Keep records of maintenance and repair activities. Monitor and maintain indoor air quality. Respond to emergency HVAC repair calls. Comply with safety regulations and protocols.</p>

      <p><strong>HVAC Engineer:</strong> Design HVAC systems for new construction or renovations. Select appropriate HVAC equipment and components. Create system schematics and specifications. Calculate heating and cooling loads. Ensure HVAC systems meet energy efficiency and environmental standards. Collaborate with architects and builders to integrate HVAC systems into building designs. Provide technical support to HVAC technicians and contractors. Evaluate and recommend system upgrades or improvements. Stay current with industry trends and emerging technologies.</p>

      <p><strong>HVAC Maintenance Manager/Supervisor:</strong> Develop and implement maintenance schedules and plans. Allocate resources and personnel for maintenance tasks. Oversee the work of HVAC technicians and contractors. Ensure compliance with maintenance standards and safety regulations. Track and manage the maintenance budget. Coordinate with other departments for facility-related projects. Maintain inventory of spare parts and equipment. Evaluate the performance of HVAC systems and technicians. Identify opportunities for cost savings and efficiency improvements.</p>

      <p><strong>Energy Management Specialist:</strong> Monitor energy consumption of HVAC systems. Analyze data to identify energy-saving opportunities. Implement energy conservation measures. Optimize HVAC system settings for energy efficiency. Conduct energy audits and performance assessments. Stay informed about energy codes and regulations. Collaborate with other departments to reduce energy costs. Report on energy consumption and savings to management.</p>

      <p><strong>Facility Manager:</strong> Ensure the overall functionality and safety of the facility. Manage HVAC maintenance as part of the broader facility management responsibilities. Coordinate HVAC maintenance with other building services. Budget for HVAC system upgrades and replacements. Communicate with occupants about HVAC system maintenance schedules. Address tenant complaints or concerns related to HVAC. Implement sustainability initiatives related to HVAC systems.</p>

      <p>
        These roles and responsibilities are crucial for the efficient operation and maintenance of HVAC systems in various types of facilities, including commercial buildings, industrial plants, hospitals, and residential complexes. Effective coordination and communication among these roles help ensure that HVAC systems perform optimally and contribute to a comfortable and healthy indoor environment while minimizing energy consumption and costs.
      </p>

      <p>
        <em>"Applying innovative techniques and ideas in an ever-changing industry, one of our major strengths is our capability and confidence to provide value-added service – product installation, site commissioning, to handle any project, regardless of size or complexity, from inspection, through budgeting, to design, execution, validation and hand over."</em>
      </p>
    </div>
  )
}
];

export default function TabContentSwitcher() {
   useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

  const [active, setActive] = useState(0);

  return (
    <>
     <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/hvacnew.jpg" />
      </div>

      

      {/* Scrollable Content Over Background */}
      <section className="relative z-10  bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Esaplling Pvt Ltd aims to create a landmark in the horizon of air-conditioning and ventilation,
            by introducing the best-in-class practices across the industries.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto p-4">
    
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {boxes.map((box, idx) => (
              <button
                key={idx}
                className={`h-16 flex items-center justify-center font-bold text-white text-base rounded transition-all duration-200
                  ${active === idx
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-700 shadow-lg"
                    : "bg-cyan-400 hover:bg-cyan-500"}
                `}
                onClick={() => setActive(idx)}
              >
                {box.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-4 shadow rounded-lg">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <img
                src={boxes[active].image}
                alt={boxes[active].title}
                className="w-96 h-96 object-contain"
              />
            </div>
            {/* Content */}
            <div className="flex-1">{boxes[active].content}</div>
          </div>
        </div>
      </section>
      <ParallaxSingle/>
    </>
  );
}
