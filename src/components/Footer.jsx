import React from 'react'

function Footer() {
  return (
   <>
   <footer
  className="bg-[#000066] text-white py-10 px-4 sm:px-6 lg:px-8"
  style={{
    backgroundImage: 'url("/img/footer_newbg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <div className="max-w-7xl mx-auto">
    {/* Logo */}
    <div className="mb-8 flex items-center space-x-3">
      <img
        src="/assets/images/logo.png"
        alt="Logo"
        className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
      />
    </div>
    {/* Grid Footer Links */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10 text-sm font-medium">
      {/* About Us */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">About Us</h3>
        <ul className="space-y-2">
          <li>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/vison" className="hover:text-gray-300">
              Vision Mission
            </a>
          </li>
          <li>
            <a href="/acquisition" className="hover:text-gray-300">
              Acquisition
            </a>
          </li>
          <li>
            <a href="/certification" className="hover:text-gray-300">
              Certification
            </a>
          </li>
          <li>
            <a href="/quality" className="hover:text-gray-300">
              Quality Assurance
            </a>
          </li>
          <li>
            <a href="/managment" className="hover:text-gray-300">
              Management
            </a>
          </li>
          <li>
            <a href="/recognition" className="hover:text-gray-300">
              Recognition
            </a>
          </li>
          <li>
            <a href="/corporate" className="hover:text-gray-300">
              Corporate
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Facility
            </a>
          </li>
        </ul>
      </div>
      {/* Consumer Electronics */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">
          Consumer Electronics
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="/consumer-electronics/led" className="hover:text-gray-300">
              LED TV
            </a>
          </li>
          <li>
            <a
              href="/consumer-electronics/split-ac"
              className="hover:text-gray-300"
            >
              Air Conditioner
            </a>
          </li>
          <li>
            <a
              href="/consumer-electronics/washing"
              className="hover:text-gray-300"
            >
              Washing Machine
            </a>
          </li>
          <li>
            <a
              href="/consumer-electronics/new-desert"
              className="hover:text-gray-300"
            >
              Cooler
            </a>
          </li>
          <li>
            <a
              href="/consumer-electronics/refrigerators"
              className="hover:text-gray-300"
            >
              Refrigerator
            </a>
          </li>
          <li>
            <a
              href="/consumer-electronics/geysers"
              className="hover:text-gray-300"
            >
              Geysers
            </a>
          </li>
        </ul>
      </div>
      {/* Auto Air Conditioning */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">
          Auto Air Conditioning
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              Coach Airconditioning
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Bus
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Truck Chiller
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Frost on the Wheels
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Cabin AirConditioning
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              DC Airconditioning
            </a>
          </li>
        </ul>
      </div>
      {/* HVAC */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">HVAC</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              Server Airconditioning
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Elevator Airconditioning
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Chiller
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Dehumidifier
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Air Handling Unit
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Ventilation System
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Evaporative Cooler
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Industrial Water Chiller
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Air Contamination Protection
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              HVAC O &amp; M
            </a>
          </li>
        </ul>
      </div>
      {/* HVAC O&M */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">HVAC O &amp; M</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              Energy Management
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Electrical and LV
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Plumbing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Fire Protection
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              O &amp; M
            </a>
          </li>
        </ul>
      </div>
      {/* Harness */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">Harness</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              Automotive
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Multi purpose AC DC
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Generator &amp; Transmission
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Consumer Electronics &amp; Telecom
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Power System
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400">
      <div className="mb-4 sm:mb-0">esaplling© 2025 All Rights Reserved</div>
      <div className="flex space-x-4 text-xl">
        <a href="#" className="hover:text-white">
          <i className="fab fa-facebook" />
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-linkedin" />
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-youtube" />
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-google" />
        </a>
      </div>
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer