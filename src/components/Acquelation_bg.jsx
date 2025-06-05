import React, { useState, useEffect } from "react";
import rightImage from "/img/hero-img.png"; // right side image

function Acquelation_bg() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
  
    const firstTimer = setTimeout(() => {
      setShowFirst(true);
    }, 500); // Show first after 0.5s

    const secondTimer = setTimeout(() => {
      setShowSecond(true);
    }, 1500); // Show second after 1.5s

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "400px",
        backgroundImage: `url('/img/hero-bg5.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {/* Right side image */}
      <img
        src={rightImage}
        alt="Right side"
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          height: "270px",
          width: "270px",
          objectFit: "contain",
          transform: "translateY(-50%)",
        }}
      />

      {/* Center text animation */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <div
          style={{
            opacity: showFirst ? 1 : 0,
            transition: "opacity 0.5s ease-in",
          }}
        >
          ACQUISITION
        </div>
        <div
          style={{
            opacity: showSecond ? 1 : 0,
            transition: "opacity 0.5s ease-in",
            marginTop: "0.5rem",
          }}
        >
          ESAPLLING
        </div>
      </div>
    </div>
  );
}

export default Acquelation_bg;
