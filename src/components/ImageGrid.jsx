import React, { useEffect } from "react";

const items = [
  { id: 1, name: "Training", image: "/img/carrier1.png" },
  { id: 2, name: "Learn", image: "/img/carrier2.png" },
  { id: 3, name: "Knowledge", image: "/img/carrier3.png" },
  { id: 4, name: "Skills", image: "/img/carrier4.png" },
  { id: 5, name: "Coaching", image: "/img/carrier5.png" },
  { id: 6, name: "Support", image: "/img/carrier6.png" },
  { id: 7, name: "Development", image: "/img/carrier7.png" },
];

const ImageGrid = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-blue-100 rounded-lg shadow-md flex flex-col items-center justify-center p-4"
          >
            <img src={item.image} alt={item.name} className="" />
            <p className="text-center text-lg font-os">{item.name}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default ImageGrid;
