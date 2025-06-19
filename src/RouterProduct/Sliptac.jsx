import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';
import WindowACRow from '../components/WindowACRow';
import FixedSpeedACRow from '../components/FixedSpeedACRow';
import FixedSpeedFloralACRow from '../components/FixedSpeedFloralACRow';
import FixedSpeedStandardACRow from '../components/FixedSpeedStandardACRow';
import FixedSpeedRoyalACRow from '../components/FixedSpeedRoyalACRow';
import ACResponsiveBanner from '../components/ACResponsiveBanner';

function Sliptac() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


 
  return (
    <>
      <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/newac.jpg" />
      </div>
      <WindowACRow/>
      <FixedSpeedACRow/>
      <ACResponsiveBanner/>
      <FixedSpeedFloralACRow/>
      <FixedSpeedStandardACRow/>
      <FixedSpeedRoyalACRow/>

        <div className="mt-16">
          <Ac />
        </div>
     
    </>
  );
}

export default Sliptac;
