import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";

const ExperienceGrid = () => {
  const items = [
    {
      title: "Cinema Experience",
      subtitle: "Enjoy the Experience of Cinema at Home",
      image: pic1,
    },
    {
      title: "Browsing Experience",
      subtitle: "Very Efficient and Easy-To-Use Browsing Experience",
      image: pic2,
    },
    {
      title: "Sports Experience",
      subtitle: "Enjoy Sports in High Definition",
      image: pic3,
    },
    {
      title: "Fun Time",
      subtitle: "Enjoy with Friends and Family",
      image: pic4,
    },
  ];

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {items.map((item, index) => (
          <div key={index} className="text-center w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 md:h-64 lg:h-72 object-contain  "
            />
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default ExperienceGrid;
