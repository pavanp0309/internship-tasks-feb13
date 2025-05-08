import React from 'react';

const Contact = () => {
    return (
        <div
            className="py-5 mb-5"
            style={{
                marginTop: '120px'
            }}
        >
            <div className="container bg-white shadow-lg rounded-5 p-5">
                <h2 className="text-center text-primary mb-5 fw-bold">
                    Contact <span className="text-dark">JobsFactory</span>
                </h2>

                <div className="row g-5 align-items-start">
                    {/* Contact Info */}
                    <div className="col-md-5">
                        <div className="bg-light rounded-4 p-4 shadow-sm">
                            <h4 className="fw-bold mb-4 ">
                                Get In Touch
                            </h4>
                            <p className="text-muted fs-5 mb-4">
                                Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
                            </p>

                            <div className="mb-4 d-flex align-items-center">
                                <div className="bg-primary text-white rounded-circle p-2 me-3">
                                    <i className="bi bi-telephone-fill fs-5"></i>
                                </div>
                                <span className="fs-5 text-dark">+91 9009005002</span>
                            </div>

                            <div className="mb-4 d-flex align-items-center">
                                <div className="bg-primary text-white rounded-circle p-2 me-3">
                                    <i className="bi bi-envelope-fill fs-5"></i>
                                </div>
                                <span className="fs-5 text-dark">hello@gmail.com</span>
                            </div>

                            <div className="mb-4 d-flex align-items-center">
                                <div className="bg-primary text-white rounded-circle p-2 me-3">
                                    <i className="bi bi-geo-alt-fill fs-5"></i>
                                </div>
                                <span className="fs-5 text-dark">Kukatpally, Hyderabad, Telangana</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-7">
                        <form className="bg-light p-4 rounded-4 shadow-sm">
                            <div className="mb-3">
                                <label className="form-label fw-bold">Full Name</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Email</label>
                                <input type="email" className="form-control form-control-lg" placeholder="example@gmail.com" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Phone</label>
                                <input type="tel" className="form-control form-control-lg" placeholder="Enter your phone number" />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold">Message</label>
                                <textarea className="form-control form-control-lg" rows="4" placeholder="Type your message here..." ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg px-4 py-2 shadow-sm" >  Submit  </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
