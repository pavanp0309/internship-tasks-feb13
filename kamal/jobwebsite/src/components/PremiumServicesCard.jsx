import React from "react";

const PremiumServicesCard = () => {
  const services = [
    {
      title: "Resume Building",
      description: "Create a job-winning resume with expert templates and AI assistance.",
      icon: "📝",
    },
    {
      title: "AI Mock Interviews",
      description: "Practice with AI-driven mock interviews tailored to your role.",
      icon: "🤖",
    },
    {
      title: "Courses",
      description: "Boost your skills with curated industry-relevant courses.",
      icon: "🎓",
    },
    {
      title: "Career Counselling",
      description: "One-on-one guidance to align your career with your goals.",
      icon: "🧠",
    },
  ];

  return (
    <div className="container-fluid px-5 py-5 my-5 bg-light rounded-4">
      <div className="text-center mb-4">
        <h4 className="fw-bold text-primary text-uppercase fs-2">Your Premium Services</h4>
        <div
          className="bg-primary mx-auto mt-2"
          style={{ width: "100px", height: "4px", borderRadius: "2px" }}
        ></div>
      </div>

      <div className="row g-4 justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 col-xl-3 d-flex">
            <div className="card shadow-sm border-0 rounded-4 p-4 h-100 w-100 bg-white text-center">
              <div className="fs-1 mb-3">{service.icon}</div>
              <h5 className="fw-bold mb-2">{service.title}</h5>
              <p className="text-muted small">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumServicesCard;
