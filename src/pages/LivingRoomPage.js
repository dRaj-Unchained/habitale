import React from 'react';
import '../styles/RoomPage.css'; // optional for styling
import living1 from '../images/livingroom.png';
import living2 from '../images/livingroom.png';

const LivingRoomPage = () => {
  return (
    <div className="room-page">
      <h2>Living Room Designs</h2>
      <div className="grid">
        <div className="grid-item">
          <img src={living1} alt="Living 1" />
        </div>
        <div className="grid-item">
          <img src={living2} alt="Living 2" />
        </div>
        {/* add more designs here */}
      </div>
    </div>
  );
};

export default LivingRoomPage;
