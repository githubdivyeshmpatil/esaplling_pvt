import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BackgroundSection from '../components/BackgroundSection';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Background Banner */}
      <div className="max-w-9xl">
        <BackgroundSection bgImage="/img/contact_us.jpg" />
      </div>

      {/* Contact Info + Map */}
      <div className="min-h-screen p-6  flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl  p-6 ">
          
          {/* Left: Contact Address */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 font-os">Contact Information</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-700 font-os">Esaplling Pvt Ltd (Registered Address)</h3>
              <p className="text-gray-800 font-robo">
                513, Floor 5, Impetech Global Business Centre,<br />
                Rainbow Plaza, Pimple Saudagar,<br />
                Pune - 411 027, Maharashtra
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-700 font-os">Esaplling Pvt Ltd (Factory)</h3>
              <p className="text-gray-800 font-robo">
                Gat no 357/83 (New), Waghjai Nagar,<br />
                Kharabhwadi, Khed-2, Chakan,<br />
                Maharashtra 410501
              </p>
            </div>

            <div className="mb-2 text-gray-800 font-robo">
              <strong className="font-os text-blue-700">Toll-Free No:</strong> 1800 233 1116
            </div>
            <div className="mb-2 text-gray-800 font-robo">
              <strong className="font-os text-blue-700">Support Desk:</strong> +91 89 563 39 757
            </div>
            <div className="mb-2 text-gray-800 font-robo">
              <strong className="font-os text-blue-700">Email:</strong> support@esaplling.com
            </div>
            <div className="text-gray-800 font-robo">
              <strong className="font-os text-blue-700">Office Hours:</strong> Mon - Fri, 9:00AM - 6:00PM
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="w-full h-full">
            <iframe
              title="Esapling Pvt Ltd Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.539462679774!2d73.78618277514494!3d18.59608928251913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b918d98fe0e1%3A0xea50b2309b816e7c!2sEsapling%20pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717749252903!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg min-h-[300px] md:min-h-[400px]"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
