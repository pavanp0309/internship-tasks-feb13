import React from 'react';

const About = () => {
    return (
        <div className="py-5 mb-5" style={{ marginTop: '120px' }}>
            <div className="container bg-white shadow-lg rounded-5 p-5 ">
                <h2 className="text-center mb-5 fw-bold display-5 text-primary">
                    About <span className="text-dark">JobsFactory</span>
                </h2>

                <div className="mb-4">
                    <p className="fs-5 text-secondary">
                        <strong>JobsFactory</strong> is an advanced job portal created to bridge the gap between aspiring professionals and employers.
                        Our mission is to empower individuals with meaningful employment while enabling businesses to access the best talent quickly and efficiently.
                    </p>
                    <p className="fs-5 text-secondary">
                        From AI-powered job matching to real-time updates and sleek UI, our platform is built for modern job hunting. Whether you're a fresh graduate or a seasoned expert, JobsFactory helps you land your next opportunity with confidence.
                    </p>
                </div>

                <div className="row text-center my-5">
                    <div className="col-md-6 mb-4">
                        <div className="p-4 border rounded bg-light h-100 shadow-sm">
                            <h3 className="text-success mb-3"><i className="bi bi-bullseye"></i> Our Mission</h3>
                            <p className="fs-5 text-muted">
                                To simplify job searching, reduce hiring friction, and boost economic growth by connecting people and businesses efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="p-4 border rounded bg-light h-100 shadow-sm">
                            <h3 className="text-success mb-3"><i className="bi bi-eye-fill"></i> Our Vision</h3>
                            <p className="fs-5 text-muted">
                                To be the most intelligent and trusted employment platform globally, empowering lives through fulfilling careers and smarter hiring.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-info"><i className="bi bi-person-circle"></i> Founder</h3>
                    <div className="d-flex flex-column flex-md-row align-items-center mt-4 p-4 rounded shadow-sm bg-light">
                        <img
                            src="/src/assets/WhatsApp Image 2025-03-13 at 9.57.42 AM.jpeg"
                            alt="Founder"
                            className="rounded-circle me-md-4 border border-3 border-primary mb-3 mb-md-0"
                            width="120"
                            height="120"
                        />
                        <div>
                            <h4 className="mb-1 text-dark">Narasimha Reddy</h4>
                            <p className="mb-2 text-muted">CEO & Founder of JobsFactory</p>
                            <p className="text-secondary">
                                Narasimha is a visionary entrepreneur with over 10 years of experience in recruitment tech.
                                Frustrated by traditional hiring inefficiencies, he built JobsFactory to innovate how talent and companies connect.
                                His leadership continues to shape the platform's growth and innovation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-outline-primary btn-lg px-5 py-3 fw-semibold shadow-sm transition">
                        🌐 Explore Job Listings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
