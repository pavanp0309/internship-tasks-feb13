import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container bg-dark text-white py-3">
                <div className="row text-center">
                    {/* Products Section */}
                    <div className="col-12 col-sm-6 col-md-3 my-2 d-flex justify-content-center ">
                        <h2 className="my-4">Products</h2>
                    </div>
                    {/* About Us Section */}
                    <div className="col-12 col-sm-6 col-md-3 my-2 d-flex justify-content-center">
                        <h2 className="my-4">About Us</h2>
                    </div>
                    {/* Resources Section */}
                    <div className="col-12 col-sm-6 col-md-3 my-2 d-flex justify-content-center">
                        <h2 className="my-4">Resources</h2>
                    </div>
                    {/* Get In Touch Section */}
                    <div className="col-12 col-sm-6 col-md-3 my-2 d-flex justify-content-center">
                        <h2 className="my-4">Get In Touch <br />
                            <i className="bi bi-instagram fs-4"></i>
                            <i className="bi bi-twitter-x mx-3 fs-4"></i>
                            <i className="bi bi-facebook fs-4"></i>
                        </h2>
                    </div>
                </div>

                {/* Know More Button */}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger">Know More...</button>
                </div>
            </div>
        </>
    );
};

export default Footer;
