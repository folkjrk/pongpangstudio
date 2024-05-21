import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = () => {
  return (
    <div className='container-flip-card'>
       <div className='flip-card-inner'>
        <div className='flip-card-front'></div>               
        <div className='flip-card-back'></div>
      </div>
    </div>
  );
};

export default FlipCard;
