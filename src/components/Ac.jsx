import React, { useEffect } from 'react'

function Ac(props) {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <section className="bg-white py-10 px-4 text-center">
  <h2 className="text-base sm:text-base md:text-2xl lg:text-3xl font-semibold mb-4">{props.Ac}</h2>
  <p className="max-w-4xl mx-auto text-gray-700 mb-10 text-justify font-robo text-base sm:text-base md:text-base lg:text-base">
    ESAPLLING  are designed to meet all kinds of  needs for
    the hosing segment. Whether it is an expansive living space, small urban
    room, an outdoor area, a shop, office, showroom or banquet hall. We have
    best products for all your needs.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {/* Item 1 */}
    <div className="flex flex-col items-center">
      <img
        src="/img/make1.png"
        alt="Best in Class Quality"
        className="w-20 h-20 mb-4"
      />
      <p className="font-medium font-robo text-base sm:text-base md:text-base lg:text-base">Best in Class Quality</p>
    </div>
    {/* Item 2 */}
    <div className="flex flex-col items-center">
      <img
        src="/img/make2.png"
        alt="Warranty"
        className="w-20 h-20 mb-4"
      />
      <p className="font-medium font-robo text-base sm:text-base md:text-base lg:text-base">Warranty &amp; Door Step Service</p>
    </div>
    {/* Item 3 */}
    <div className="flex flex-col items-center">
      <img
        src="/img/make3.png"
        alt="Make in India"
        className="w-22 h-20 mb-4"
      />
      <p className="font-medium font-robo text-base sm:text-base md:text-base lg:text-base">Make in India</p>
    </div>
    {/* Item 4 */}
    <div className="flex flex-col items-center">
      <img
        src="/img/make4.png"
        alt="Help Desk"
        className="w-20 h-20 mb-4"
      />
      <p className="font-medium font-robo text-base sm:text-base md:text-base lg:text-base">Help Desk &amp; Contact Center</p>
    </div>
  </div>
</section>

  )
}

export default Ac