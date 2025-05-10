import React from 'react'

const ContactSection = () => {
  return (
    <div className="container my-3">
            <div className="text-center mb-4">
            <h1>Contact <span style={{color: 'red'}}>Us</span></h1>
            </div>

            <div className="row">
            {/* Left Side - Form Section */}
            <div className="col-lg-7 p-0">
                <div className=" p-4 rounded-start-2" style={{background:"rgb(219, 219, 219)"}}>
                <h2 className="text-center mb-4">Contact</h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">FULL NAME</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="subject" className="form-label">SUBJECT</label>
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">MESSAGE</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
                </div>
            </div>

            {/* Right Side - Map Section */}
            <div className="col-lg-5 p-0">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52189864.485701494!2d46.839854549999785!3d37.02371362652819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919ef6c7c09d%3A0xe03175b81113bc71!2sNexus%20Hyderabad%20Mall!5e0!3m2!1sen!2sin!4v1728636805608!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className='rounded-end-2'>
                </iframe>
            </div>
            </div>

            {/* Footer Info Section */}
        <div className="row mt-5">
        <div className="col-md-3 text-center">
            <div className="mb-3">
            <i className="bi bi-geo-alt" style={{
                fontSize: '20px',
                backgroundColor: 'blue',
                color: 'white',
                padding: '15px',
                borderRadius: '50%'
            }}></i>
            </div>
            <p><b>Address:</b> 198 West 21st Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="mb-3">
            <i className="bi bi-telephone" style={{
                fontSize: '20px',
                backgroundColor: 'blue',
                color: 'white',
                padding: '15px',
                borderRadius: '50%'
            }}></i>
            </div>
            <p><b>Phone:</b> <a href="tel:+1235235598">+ 1235 2355 98</a></p>
        </div>
        <div className="col-md-3 text-center">
            <div className="mb-3">
            <i className="bi bi-envelope" style={{
                fontSize: '20px',
                backgroundColor: 'blue',
                color: 'white',
                padding: '15px',
                borderRadius: '50%'
            }}></i>
            </div>
            <p><b>Email:</b> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
        </div>
        <div className="col-md-3 text-center">
            <div className="mb-3">
            <i className="bi bi-globe" style={{
                fontSize: '20px',
                backgroundColor: 'blue',
                color: 'white',
                padding: '15px',
                borderRadius: '50%'
            }}></i>
            </div>
            <p><b>Website:</b> <a href="https://www.yoursite.com" target="_blank" rel="noopener noreferrer">www.yoursite.com</a></p>
        </div>
        </div>

  </div>
  )
}

export default ContactSection
