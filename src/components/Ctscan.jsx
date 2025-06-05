import React from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Ctscan() {
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
          <p>
            CT scanners are a popular imaging modality that come in many sizes,
            slice counts, accessories, and price ranges. Choosing the right CT scanner depends
            on your clinical requirements, throughput, and budget.
          </p>

          {/* MRI vs CT */}
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 font-os">Main Differences between MRI and CT Scan Machines</h2>
          <p className='font-robo'>CT and MRI are often compared, but each serves unique purposes.</p>

          <div className="grid md:grid-cols-2 gap-6 bg-blue-100 p-6 rounded-xl shadow-md">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-os">CT Scan Uses</h3>
              <ul className="list-disc pl-5 space-y-1 font-robo">
                <li>Trauma injuries</li>
                <li>Tumor detection & staging</li>
                <li>Infections & blood clots</li>
                <li>Lung & heart conditions</li>
                <li>Abdominal issues</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-os">MRI Uses</h3>
              <ul className="list-disc pl-5 space-y-1 font-robo">
                <li>Tendon & ligament injuries</li>
                <li>Spinal cord abnormalities</li>
                <li>Soft tissue evaluation</li>
                <li>Brain tumor monitoring</li>
                <li>Detailed abdominal checks</li>
              </ul>
            </div>
          </div>

          <p className='font-robo'>
            While CT is faster (5–20 mins), MRI scans take longer (15 mins – 2 hrs), are noisier,
            and may cause discomfort due to claustrophobia.
          </p>

          {/* CT Slice Counts */}
          <h2 className="text-2xl font-semibold text-blue-600 mt-10 font-os">CT Scanner Slice Counts</h2>
          <p className='font-robo'>
            Slice count affects scan speed, detail, and price. Below is a breakdown by slice range:
          </p>

          {/* Slice Boxes */}
          <div className="space-y-6">
            {[
              {
                title: "4- and 8-slice CT Scanners",
                desc: "Ideal for veterinary clinics or low-patient settings. Cost-effective but slower and less powerful."
              },
              {
                title: "16-slice CT Scanners",
                desc: "Popular among general clinics and ERs. Good speed and suitable for standard diagnostics."
              },
              {
                title: "32- and 40-slice CT Scanners",
                desc: "Faster scans and reduced motion artifacts. Used in similar settings as 16-slice but with better coverage."
              },
              {
                title: "64-slice CT Scanners",
                desc: "Common in hospitals and imaging centers. Allows advanced studies like cardiac imaging with moderate-high throughput."
              },
              {
                title: "128 to 320-slice CT Scanners",
                desc: "High-end scanners for specialty centers and research. Provide full-body 3D imaging in seconds but are costlier."
              },
            ].map(({ title, desc }, index) => (
              <div key={index} className="bg-blue-100 p-5 rounded-xl shadow text-justify font-robo">
                <h3 className="text-xl font-semibold text-blue-700 mb-2 font-os">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          {/* Price Factors */}
          <h2 className="text-2xl font-semibold text-blue-600 mt-10 font-os">CT Scanner Price Factors</h2>
          <ul className="list-disc pl-5 space-y-1 font-robo">
            <li>Brand & model</li>
            <li>System age</li>
            <li>X-ray tube count & condition</li>
            <li>Included injector & workstation</li>
            <li>Warranty & installation services</li>
          </ul>
        </section>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    
    {/* Left: Email Form */}
    <div className="text-white space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h2>
      <p className="text-sm md:text-base">Stay updated with our latest offers and updates.</p>
      <form className="flex flex-col sm:flex-row gap-3">
        <input
          type="biomedical@esaplling.com"
          placeholder="biomedical@esaplling.com"
          className="w-full px-4 py-2 rounded-lg text-white focus:outline-none"
        />
       
      </form>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src="/img/loan.png"
        alt="Newsletter"
        className="w-full max-w-sm rounded-lg shadow-lg"
      />
    </div>

  </div>
</div>
 <div className="container mx-auto px-4 py-8">
       <img
         src="/img/certification2.png"
         alt="Sample"
         className="w-1/2 h-auto rounded-lg shadow-md mx-auto"
       />
     </div>
    </>
  );
}

export default Ctscan;
