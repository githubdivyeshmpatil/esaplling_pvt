import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackgroundSection from './BackgroundSection'

function Blog() {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  const blogs = [
    {
      image: "/img/blog1.jpg",
      title: "Understanding Renewable Energy",
      description: "Continues To Soar High In the Indian Consumer Electronics Market.",
      pdf: "/img/Esaplling_sir.pdf", // ✅ Add PDF path for the first blog
    },
    {
      image: "/img/blog2.jpg",
      title: "Maintaining air quality of car",
    },
    {
      image: "/img/blog3.jpg",
      title: "Fire Fighting System !!",
    },
    {
      image: "/img/blog4.jpg",
      title: "Best Methods of Air Duct Clean",
    },
    {
      image: "/img/blog5.jpg",
      title: "Water-Cooled HVAC System!!",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-full">
        <BackgroundSection bgImage="/img/blogbanner.jpg" />
      </div>

      <div className="px-4 py-10 md:px-16 bg-gray-50 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 font-robo">Our Latest Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 font-robo">{blog.title}</h2>
                {index === 0 ? (
                  <a
                    href={blog.pdf}
                    download
                    className="text-blue-600 hover:underline font-robo"
                  >
                    {blog.description}
                  </a>
                ) : (
                  <p className="text-gray-600 font-robo">{blog.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
