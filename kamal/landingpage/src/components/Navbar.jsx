import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm sticky-top">
  <div className="container">
    <a className="navbar-brand fw-bold text-primary" href="#">SaaSify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-primary fw-semibold" aria-current="page" href="#hero">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#testimonials">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#signup" className="btn btn-primary ms-lg-3">Get Started</a>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
