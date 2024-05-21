import React from 'react';
import './Card.css';

const Cards = () => (
  <div className='card-container' >
    <div className='card-inner card-1'>
      <img className='card-image-1' alt="Card image" />
      <div className='topic-card'>Topic 1</div>
      <div className='description'>Description 1</div>
      
    </div>

    <div className='card-inner card-2'>
      <img className='card-image-2' alt="Card image" />
      <div className='topic-card'>Topic 2</div>
      <div className='description'>Description 2</div>
    </div>

    <div className='card-inner card-3'>
      <img className='card-image-3' alt="Card image" />
      <div className='topic-card'>Topic 3</div>
      <div className='description'>Description 3</div>
    </div>

  </div>
);

export default Cards;
