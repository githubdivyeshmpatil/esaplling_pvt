import React from "react";

export default function VideoSection() {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-8 md:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side - YouTube Playlist Embed */}
        <div className="w-full h-[350px] ">
          <iframe
            className="w-full h-full rounded-lg shadow-lg ml-52"
            src="https://www.youtube.com/embed/videoseries?list=PLkcz0bP31BHEOAvfKGHCIn_hPwN_S-VAZ"
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - (Optional) Additional Video Links */}
       
        
      </div>
    </div>
  );
}
