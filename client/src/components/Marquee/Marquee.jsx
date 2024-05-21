import React from "react";
import './Marquee.css';
import FastMarquee from "react-fast-marquee";

const MyMarquee = () => (
  
  <FastMarquee speed={70} gradientWidth={0}>
    <div className="rfm-marquee">
    <div className="marquee-text">Interested in working together? ----- pimchanokptyn@gmail.com </div>
    </div>
  </FastMarquee>
);

export default MyMarquee;
