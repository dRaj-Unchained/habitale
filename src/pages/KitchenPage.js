// src/pages/KitchenPage.js
import React from 'react';
import '../styles/RoomPage.css';
import kitchen1 from '../images/kitchen1.png';
import kitchen2 from '../images/kitchen1.png';

const KitchenPage = () => {
  return (
    <div className="room-page">
      <h2>Kitchen Designs</h2>
      <div className="grid">
        <div className="grid-item">
          <img src={kitchen1} alt="Kitchen 1" />
        </div>
        <div className="grid-item">
          <img src={kitchen2} alt="Kitchen 2" />
        </div>
        {/* Add more images here if available */}
      </div>
    </div>
  );
};

export default KitchenPage;
