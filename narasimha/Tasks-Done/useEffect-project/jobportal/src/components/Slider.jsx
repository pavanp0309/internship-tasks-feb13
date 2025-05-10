import React from 'react';
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="container mt-5">
      <h2 className='fw-bold text-center mb-4' style={{ fontFamily: 'sans-serif' }}>
        Top companies hiring now
      </h2>
      <Marquee>
        <div className="d-flex justify-content-center align-items-center w-100">
          <img
            src="/src/assets/Screenshot 2025-04-30 142551.png"
            alt="Company Logo"
            className="img-fluid mx-3"
            style={{ maxHeight: '80px', objectFit: 'contain' }}
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
