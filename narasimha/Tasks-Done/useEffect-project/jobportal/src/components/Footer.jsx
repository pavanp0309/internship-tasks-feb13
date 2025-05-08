import React from 'react';

const Footer = () => {
    return (
        <div className="card bg-body-tertiary mt-5">
            <div className="container py-5">
                <div className="row g-4 justify-content-between">

                    {/* Logo and Social details */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <h3 className="mb-4">
                            <i className="bi bi-gear-fill text-primary"></i>{' '}
                            <strong>JobsFactory</strong>
                        </h3>
                        <h6 className="fw-bold">Connect with Us</h6>
                        <div className="fs-4 mt-2">
                            <i className="bi bi-facebook me-2"></i>
                            <i className="bi bi-instagram me-2"></i>
                            <i className="bi bi-twitter-x me-2"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <ul className="fw-bold list-unstyled">
                            <li>About us</li>
                            <li className="my-2">Careers</li>
                            <li>Employer home</li>
                            <li className="my-2">Sitemap</li>
                            <li>Credits</li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <ul className="fw-bold list-unstyled">
                            <li>Help center</li>
                            <li className="my-2">Summons/Notices</li>
                            <li>Grievances</li>
                            <li className="my-2">Report issue</li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <ul className="fw-bold list-unstyled">
                            <li>Privacy policy</li>
                            <li className="my-2">Terms & conditions</li>
                            <li>Fraud alert</li>
                            <li className="my-2">Trust & safety</li>
                        </ul>
                    </div>

                    {/* App Download */}
                    <div className="col-12 col-md-8 col-lg-4">
                        <div className="card bg-white shadow-sm p-4 h-100">
                            <h4 className="fw-bold">Apply on the go</h4>
                            <p>Get real-time job updates on our App</p>
                            <div className="d-flex flex-column flex-sm-row gap-3">
                                <img
                                    src="/src/assets/download.png"
                                    alt="Google Play"
                                    style={{ maxWidth: '180px' }}
                                />
                                <img
                                    src="/src/assets/download (1).png"
                                    alt="App Store"
                                    style={{ maxWidth: '180px' }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
