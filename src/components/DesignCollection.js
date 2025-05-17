import React, { useState, useEffect } from 'react';
import kitchenImg from '../images/kitchen1.png'; // Thumbnail
import livingRoomImg from '../images/livingroom.png';
import wardrobeImg from '../images/wardrobe.png';
import bedroomImg from '../images/bedroom.png';

// Sample image arrays (replace with your actual images)
const kitchenGallery = [
  require('../images/kitchen/kitchen1.png'),
  require('../images/kitchen/icon01.png'),
  require('../images/kitchen/icon04.png'),
];

const livingRoomGallery = [
  require('../images/livingroom/kitchen1.png'),
  require('../images/livingroom/icon01.png'),
  require('../images/livingroom/icon04.png'),
];

const wardrobeGallery = [
  require('../images/wardrobe/kitchen1.png'),
  require('../images/wardrobe/icon01.png'),
  require('../images/wardrobe/icon04.png'),
];

const bedroomGallery = [
  require('../images/bedroom/kitchen1.png'),
  require('../images/bedroom/icon01.png'),
  require('../images/bedroom/icon04.png'),
];

const collections = [
  { name: 'Kitchen', image: kitchenImg, gallery: kitchenGallery },
  { name: 'Living Room', image: livingRoomImg, gallery: livingRoomGallery },
  { name: 'Wardrobe', image: wardrobeImg, gallery: wardrobeGallery },
  { name: 'Bedroom', image: bedroomImg, gallery: bedroomGallery },
];

const DesignCollection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery) => {
    setCurrentGallery(gallery);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const closeGallery = () => setShowModal(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentGallery.length - 1 : prevIndex - 1
    );
  };

  // 🔑 Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeGallery();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#f9fafb' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '2.5rem', color: '#374151' }}>
        Explore Our Designs
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 280px)',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {collections.map(({ name, image, gallery }) => (
          <div
            key={name}
            onClick={() => gallery.length > 0 && openGallery(gallery)}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              backgroundColor: 'white',
              width: '280px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            />
            <h3 style={{ textAlign: 'center', padding: '1rem 0', fontSize: '1.25rem', fontWeight: '600', color: '#4B5563' }}>
              {name}
            </h3>
          </div>
        ))}
      </div>

      {/* ✅ Modal Popup */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '1rem',
              maxWidth: '90%',
              maxHeight: '90%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <button onClick={closeGallery} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '1.5rem' }}>
              &times;
            </button>
            <img
              src={currentGallery[currentIndex]}
              alt="Gallery"
              style={{
                maxWidth: '80vw',
                maxHeight: '70vh',
                borderRadius: '0.75rem',
                objectFit: 'contain',
              }}
            />
            <div style={{ marginTop: '1rem' }}>
              <button onClick={prevImage} style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
                ⬅️
              </button>
              <button onClick={nextImage} style={{ fontSize: '1.2rem' }}>
                ➡️
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignCollection;
