import React from 'react'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <div className="row w-100 align-items-center">
                        {/* Logo */}
                        <div className="col-6 col-md-2">
                            <a className="navbar-brand fw-bold">Timber</a>
                        </div>

                        {/* for mobile view*/}
                        <button className="navbar-toggler col-6 text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menu and Icons */}
                        <div className="col-12 col-md-10 collapse navbar-collapse" id="navbarNav">
                            <div className="row w-100">
                                {/* Menu Items */}
                                <div className="col-12 col-lg-10">
                                    <ul className="navbar-nav justify-content-end flex-wrap">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link fw-bold">Home</a>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <a className="nav-link fw-bold">Services</a>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <a className="nav-link fw-bold">About Us</a>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <a className="nav-link fw-bold">Categories</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Icons */}
                                <div className="col-12 col-lg-2 d-flex justify-content-lg-end justify-content-center mt-2 mt-lg-0">
                                    <i className="bi bi-cart fs-5 fw-bold me-3"></i>
                                    <i className="bi bi-person fs-5 fw-bold"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
