import React from 'react';

function ImageGrid1() {
  const images = [
    '/img/se1.jpg', '/img/se2.jpg', '/img/s3.jpg', '/img/se4.jpg',
    '/img/se5.jpg', '/img/se6.jpg', '/img/se9.jpg', '/img/se8.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid1;
