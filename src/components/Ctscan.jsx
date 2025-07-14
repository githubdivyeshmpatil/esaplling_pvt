import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Ctscan() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/ct.png" />
      </div>
      <div className="bg-white px-4 md:px-16 py-10 text-gray-800 font-robo">
        <section className="max-w-5xl mx-auto space-y-6 text-justify font-robo">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 font-os">
            CT Scanner Types & Buying Guide
          </h1>
          <p className="text-base sm:text-lg">
            CT scanners are a popular modality and they come in many sizes, number of slices, accessories, and price ranges.
          </p>
          <p className="text-base sm:text-lg">
            So, how to choose from the different CT scanner types?
          </p>
          <p className="text-base sm:text-lg">
            Each chapter of this guide covers an important factor that will bring you closer to a great fit.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8 font-os">Main Differences between MRI and CT Scan Machines</h2>
          <p className='font-robo'>Before we dive into the types of CT scan machines, we need to make this clear.</p>
          <p className='font-robo'>CT scanners are often compared to MRI scanners. Therefore, before you start choosing a CT scanner, consider checking that you actually need a CT rather than an MRI.</p>
          <p className='font-robo'>Generally, CTs are more suitable for imaging bones and blood vessels. On the other hand, MRIs are great at detecting very small changes in soft tissue, joints, ligaments, tendons, the spine, and brain.</p>

          <div className="grid md:grid-cols-2 gap-6 bg-blue-100 p-6 rounded-xl shadow-md">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-os">You would use a CT to:</h3>
              <ul className="list-disc pl-5 space-y-1 font-robo">
                <li>Find and diagnose injuries from trauma</li>
                <li>Determine the location and size of a tumor</li>
                <li>Determine cancer stages</li>
                <li>Diagnose infections</li>
                <li>Detect the location of blood clots</li>
                <li>Diagnose conditions of the lungs and heart</li>
                <li>Identify vague abdominal problems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-os">You would use an MRI to:</h3>
              <ul className="list-disc pl-5 space-y-1 font-robo">
                <li>Diagnose tendon and ligament injury</li>
                <li>Detect and evaluate spinal cord issues</li>
                <li>Evaluate soft tissue in more detail</li>
                <li>Monitor brain tumours</li>
                <li>Examine complicated abdominal abnormalities</li>
              </ul>
            </div>
          </div>

          <p className='font-robo'>Frequently, CT and MRI are used to image the same body area, however, each can provide different types of information about the region of interest.</p>
          <p className='font-robo'>Bone imaging is a good example – To examine bones, you typically use a regular X-ray for 2D images or a CT scanner for 3D bone imaging. However, when examining bone marrow, MRI scanners will be the best at detecting abnormalities. This is due to their fat and water separation ability.</p>
          <p className='font-robo'>And in some cases, doctors may recommend an MRI scan if the CT scan is unable to provide all the necessary information. For example, in some cancers, an MRI may better show how deep the tumor has grown into body tissues.</p>
          <p className='font-robo'>Another difference between a CT and an MRI scanner is the examination speed. A CT exam is faster, about 5 to 20 minutes, compared to 15 minutes to 2 hours for MRI examinations. On top of this, MRI machines are noisy and their tube can be claustrophobic, which is why patients generally find them uncomfortable.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-10 font-os">CT Scanner Slices – What Slice Count Do you Need</h2>
          <p className='font-robo'>This is a specification that comes up early in discussions of CT scanner purchases. In the second-hand market, the commonly available CT slice counts include 16, 32, 40, 64, and 128 slices. And more and more we also see 256 and 320-slice CT scanners. Systems with 4 and 8 slices are still found in the market but are in the process of being withdrawn.</p>
          <p className='font-robo'>The main effect of the slice count is on the time it takes to perform a CT scan.</p>
          <p className='font-robo'>The pros of a CT scanner with a higher number of slices are:</p>
          <ul className="list-disc pl-5 space-y-1 font-robo">
            <li>Reduced scan times</li>
            <li>Higher patient throughput</li>
            <li>Lower radiation doses</li>
            <li>More detailed images with fewer artefacts</li>
            <li>Options for advanced imaging, such as cardiac exams</li>
          </ul>
          <p className='font-robo'>Nevertheless, a higher number of slices also means a higher price. And if you only perform routine studies, the extra cost is likely not worth it – For many clinical facilities, a lower slice count with lower cost will be the soundest investment.</p>
          <p className='font-robo'>Therefore, when deciding on a CT slice count make sure to balance your clinical needs, your patient flow targets, and your budget.</p>

          <div className="space-y-6">
            {[{
              title: "4- and 8-slice CT Scanners",
              desc: "4- or 8-slice CT scanners are a good fit for veterinarian clinics or departments with limited patient throughput and no need for fast diagnosis. These scanners are among the cheapest on the market, but also perform scans slower. Furthermore, they are less powerful."
            }, {
              title: "16-slice CT Scanners",
              desc: "The 16- slice is the first choice of many clinics and radiology departments with fairly steady patient flows, as they are faster than the 4- or 8-slice scanners. The 16 slice units are workhorses great for standard general studies. This also makes them suitable for urgent care centers and ERs."
            }, {
              title: "32- and 40-slice CT Scanners",
              desc: "CT scanners with 32 and 40 slices are typically found in similar situations and facilities as the 16 slice. The difference is that the extra slices provides more coverage per gantry rotation, and thus further reduce the scan time compared to the 16-slice. Therefore, the obtained image is not influenced by motion artifacts to the same extent. Naturally, the price of 32 or 40 slice units are naturally a bit higher than the price for the lower slice units."
            }, {
              title: "64-slice CT Scanners",
              desc: "The 64-slice CT is standard for hospitals and imaging centers. Thanks to the reduced scan times, more advanced studies, such as cardiac, can be performed. Its speed and accuracy makes it suitable for practices with moderate to high patient throughput. In terms of cardiology, a 64-slice CT scanner can perform cardiac examinations but still require slowing of the heart rate."
            }, {
              title: "+128-slice CT Scanners",
              desc: "In this category, there are different types of CT scan machine. These are the top-notch CT scanners, ranging from 128 to 320 slices. These systems can provide whole-body scans in seconds while providing incredibly sharp 3D images of any organ. The capabilities of these scanners are often excessive in a standard clinical setting. Therefore, they are usually found supporting specialty practices, such as cardiac departments, research facilities, or where the volume of patients is very high."
            }].map(({ title, desc }, index) => (
              <div key={index} className="bg-blue-100 p-5 rounded-xl shadow text-justify font-robo">
                <h3 className="text-xl font-semibold text-blue-700 mb-2 font-os">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mt-10 font-os">CT Scanner Price Factors</h2>
          <ul className="list-disc pl-5 space-y-1 font-robo">
            <li>Brand</li>
            <li>Age</li>
            <li>CT X-ray tube and its tube count</li>
            <li>Injector</li>
            <li>Workstation</li>
            <li>Warranty and installation</li>
          </ul>
        </section>
      </div>
      <div className="bg-[#f3b801] py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-white space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-sm md:text-base">Stay updated with our latest offers and updates.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
  type="email"
  placeholder="biomedical@esaplling.com"
  className="w-full px-4 py-2 rounded-lg text-black focus:outline-none"
/>

            </form>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/loan.png"
              alt="Newsletter"
              className="w-full max-w-sm rounded-lg "
            />
          </div>
        </div>
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
}

export default Ctscan;
