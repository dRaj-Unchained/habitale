// src/pages/WardrobePage.js
import React from 'react';
import '../styles/RoomPage.css';
import wardrobe1 from '../images/wardrobe.png';
import wardrobe2 from '../images/wardrobe.png';

const WardrobePage = () => {
  return (
    <div className="room-page">
      <h2>Wardrobe Designs</h2>
      <div className="grid">
        <div className="grid-item">
          <img src={wardrobe1} alt="Wardrobe 1" />
        </div>
        <div className="grid-item">
          <img src={wardrobe2} alt="Wardrobe 2" />
        </div>
        {/* Add more images here if available */}
      </div>
    </div>
  );
};

export default WardrobePage;
