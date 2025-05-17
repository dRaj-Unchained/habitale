import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageSliderModal = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-lg font-bold">✕</button>
        <Swiper spaceBetween={10} slidesPerView={1}>
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`Slide ${idx}`} className="w-full h-80 object-cover rounded" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSliderModal;
