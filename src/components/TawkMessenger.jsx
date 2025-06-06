// src/components/TawkMessenger.js
import { useEffect } from 'react';

const TawkMessenger = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6842c963e189f319181653aa/1it2e5btc";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null; // Nothing visible, only script loads
};

export default TawkMessenger;
