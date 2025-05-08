import React from 'react';
import styles from '../Index.module.css';

const Category = () => {
  const cardStyle = { height: '60px' };

  return (
    <div className="container mb-5" style={{ marginTop: '100px' }}>
      <h2 className="text-center fw-bold mb-5">Choose Your Desired Company</h2>

      <div className="row g-3 justify-content-center">
        {/* Remote */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={cardStyle}>
            <p className="m-0"><i className="bi bi-house-door fs-5"></i> Remote <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* StartUp */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={cardStyle}>
            <p className="m-0"><i className="bi bi-rocket-takeoff fs-5"></i> StartUp <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Software & ... */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={{ width: '100%', height: '60px' }}>
            <p className="m-0"><i className="bi bi-laptop fs-5"></i> Software & ... <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* MNC */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={cardStyle}>
            <p className="m-0"><i className="bi bi-buildings fs-5"></i> MNC <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Sales */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={cardStyle}>
            <p className="m-0"><i className="bi bi-suitcase-lg fs-5"></i> Sales <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Analytics */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={cardStyle}>
            <p className="m-0"><i className="bi bi-search fs-5"></i> Analytics <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row g-3 justify-content-center mt-4">
        {/* Engineering */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={{ width: '100%', height: '60px' }}>
            <p className="m-0"><i className="bi bi-gear fs-5"></i> Engineering <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Data Science */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={{ width: '100%', height: '60px' }}>
            <p className="m-0"><i className="bi bi-bar-chart fs-5"></i> Data Scien... <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Project Management */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={{ width: '100%', height: '60px' }}>
            <p className="m-0"><i className="bi bi-kanban fs-5"></i> Project Mg... <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Banking */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={{ width: '100%', height: '60px' }}>
            <p className="m-0"><i className="bi bi-currency-rupee fs-5"></i> Banking & ... <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>

        {/* Fresher */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className={`card d-flex flex-row p-3 justify-content-center align-items-center ${styles.cardHover}`} style={cardStyle}>
            <p className="m-0"><i className="bi bi-mortarboard fs-5"></i> Fresher <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
