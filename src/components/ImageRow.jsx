import React from "react";
import mixy1 from "../assets/images/mixy1.png";
import mixy2 from "../assets/images/mixy2.jpg";
import mixy3 from "../assets/images/mixy3.png";

const ImageRow = () => {
  const imageData = [
    {
      src: mixy1,
      title: "Neutrafit",
      description: "For those who need to mix sauces, juices or soups.",
    },
    {
      src: mixy2,
      title: "Fun Time",
      description: "Enjoy with Friends and Family",
    },
    {
      src: mixy3,
      title: "Toaster",
      description: "Very Efficient and Easy-To-Use",
    },
  ];

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-center text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="mt-1 text-center text-sm text-gray-600 px-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
