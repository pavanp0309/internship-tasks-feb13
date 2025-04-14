import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <div className="container-fluid">
            <h1>Trav</h1>
        </div> */}
            <footer className="bg-dark text-white text-center text-lg-start" >
            <div className="container p-4">
                {/* Social Media Icons */}
                <div className="mb-4">
                    <a href="https://www.facebook.com"  className="mx-2">
                        <i className="bi bi-facebook text-white" style={{ fontSize: '24px' }}></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="bi bi-twitter text-white" style={{ fontSize: '24px' }}></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="bi bi-instagram text-white" style={{ fontSize: '24px' }}></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="bi bi-linkedin text-white" style={{ fontSize: '24px' }}></i>
                    </a>
                </div>

                {/* Links */}
                <div className="mb-4 ">
                    <a href="/about" style={{textDecoration:"none"}} className="mx-3 text-white">About Us</a>
                    <a href="/contact" style={{textDecoration:"none"}} className="mx-3 text-white">Contact</a>
                    <a href="/privacy" style={{textDecoration:"none"}} className="mx-3 text-white">Privacy Policy</a>
                    <a href="/terms" style={{textDecoration:"none"}} className="mx-3 text-white">Terms of Service</a>
                </div>
            </div>

            {/* Copyright */}
            {/* <div className="text-center p-3" style={{ backgroundColor: '#e9ecef' }}>
                <p className="mb-0">© 2023 Travel Company. All rights reserved.</p>
            </div> */}
        </footer>
    </div>
  )
}

export default Footer