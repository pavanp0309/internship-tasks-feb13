import React from 'react';
import { premiumServices } from '../api/premiumServices';

const PremiumServices = () => {
    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <h2 className="text-center fw-bold mb-5">Our Premium Services</h2>
            
            <div className="row g-4 justify-content-center">
                {premiumServices?.map((ele, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card shadow-lg rounded-4 h-100">
                            <img 
                                src={ele.image} 
                                className="card-img-top img-fluid rounded-top" 
                                alt={ele.title} 
                                style={{ height: '180px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{ele.title}</h5>
                                <div className="text-center">
                                    <button className="btn btn-primary my-4">
                                        Know More <i className="bi bi-arrow-up-right-square"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumServices;
