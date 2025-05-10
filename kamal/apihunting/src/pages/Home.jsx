import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        {/* carousel */}
        <div className="container-fluid mt-3 mb-5 px-0">
  <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">

    {/* Indicators */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>

    {/* Carousel Slides */}
    <div className="carousel-inner">

      {/* 4th Slide Moved First & Marked Active */}
      <div className="carousel-item active">
        <img src="https://t4.ftcdn.net/jpg/07/63/99/89/360_F_763998921_9mlyQgXgBJl5GjsQd4twydyUKZjK62LX.jpg" className="d-block w-100 rounded" alt="Performance" style={{ height: '600px', }} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
          <h5>📊 Monitor API Performance</h5>
          <p>Track speed, uptime, and error logs in real-time for reliable applications.</p>
        </div>
      </div>

      {/* Original 1st Slide */}
      <div className="carousel-item">
        <img src="https://www.cleo.com/sites/default/files/api-integration.png" className="d-block w-100 rounded" alt="API Explorer" style={{ height: '600px', }} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
          <h5>🔍 Explore Powerful APIs</h5>
          <p>Get structured data for anime, weather, and more to build modern web apps easily.</p>
        </div>
      </div>

      {/* 2nd Slide */}
      <div className="carousel-item">
        <img src="https://www.planeks.net/wp-content/uploads/2022/05/api-integration-cost.jpg" className="d-block w-100 rounded" alt="Integration" style={{ height: '600px', }} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
          <h5>⚙️ Easy Integration</h5>
          <p>Clear endpoints and examples make it easy to plug into React, Vue, or any backend.</p>
        </div>
      </div>

      {/* 3rd Slide */}
      <div className="carousel-item">
        <img src="https://yxmjbsvmqmfjhqkgaanh.supabase.co/storage/v1/object/public/public_images/GIM6s0xtmT.webp" className="d-block w-100 rounded" alt="Documentation" style={{ height: '600px', }} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
          <h5>📚 Helpful Documentation</h5>
          <p>Quick-start guides and example responses to help developers at every level.</p>
        </div>
      </div>

    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>


        {/* Enhance your app with powerful API Features */}
        <div className="container my-4">
  {/* Section Heading */}
  <h3 className="fw-bold text-primary mb-4" style={{ textAlign: 'center' }}>
    🚀 Enhance Your App with Powerful API Features
  </h3>

  {/* Row 1 - Two Cards Side by Side */}
  <div className="row g-4 mb-4">
    {/* Left Card */}
    <div className="col-md-6">
      <div
        style={{
          backgroundColor: '#cce5ff',
          borderRadius: '15px',
          padding: '24px',
          fontSize: '1rem',
          minHeight: '370px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h4 className="fw-bold mb-2">🔐 Secure API Authentication</h4>
          <p>Ensure your data is safe with tokens, keys, and scopes.</p>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*qbmrvgxP2AHe2CQ-YjvwaA.png"
          alt="Secure API"
          className="img-fluid rounded mt-3"
          style={{ maxHeight: '210px', }}
        />
      </div>
    </div>

    {/* Right Card */}
    <div className="col-md-6">
      <div
        style={{
          backgroundColor: '#cce5ff',
          borderRadius: '15px',
          padding: '24px',
          fontSize: '1rem',
          minHeight: '370px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h4 className="fw-bold mb-2">📈 API Usage Analytics</h4>
          <p>Monitor usage with built-in metrics and insights.</p>
        </div>
        <img
          src="https://tyk-community-assets.s3.dualstack.us-east-1.amazonaws.com/original/2X/3/33ee9cc3250c665f6e8c963d08d59b4b009f7dab.png"
          alt="Analytics"
          className="img-fluid rounded mt-3"
          style={{ maxHeight: '210px', }}
        />
      </div>
    </div>
  </div>

  {/* Row 2 - Real-Time Anime Data */}
  <div className="row mb-4 px-md-2">
    <div
      className="col-12"
      style={{
        backgroundColor: '#cce5ff',
        borderRadius: '15px',
        padding: '18px',
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <h4 className="fw-bold mb-3">⚡ Get Real-Time Anime Data</h4>
          <p style={{ fontSize: '0.92rem' }}>
            Instantly fetch detailed anime info including genres, episodes, ratings, and more using high-speed API calls. Build dynamic and responsive anime apps with ease.
          </p>
          <button type="button" className="btn btn-primary btn-sm px-3">
            Explore API
          </button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://ik.imagekit.io/ably/ghost/prod/2024/01/realtime-api-data-sources.png?tr=w-1728,q-50"
            alt="Real-Time Data"
            className="img-fluid rounded mt-3 mt-md-0"
            style={{ maxHeight: '260px', }}
          />
        </div>
      </div>
    </div>
  </div>

  {/* Row 3 - Two Cards Side by Side */}
  <div className="row g-4">
    {/* Left Card */}
    <div className="col-md-6">
      <div
        style={{
          backgroundColor: '#cce5ff',
          borderRadius: '15px',
          padding: '24px',
          fontSize: '1rem',
          minHeight: '370px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h4 className="fw-bold mb-2">📡 Seamless API Integration</h4>
          <p>Easily connect APIs with real-time data access and cross-platform support.</p>
        </div>
        <img
          src="https://alvisoftware.com/assets/services/xml-api.png"
          alt="Seamless Integration"
          className="img-fluid rounded mt-3"
          style={{ maxHeight: '210px', }}
        />
      </div>
    </div>

    {/* Right Card */}
    <div className="col-md-6">
      <div
        style={{
          backgroundColor: '#cce5ff',
          borderRadius: '15px',
          padding: '24px',
          fontSize: '1rem',
          minHeight: '370px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h4 className="fw-bold mb-2">🚀 Fast & Reliable API Responses</h4>
          <p>Enjoy blazing-fast response times with highly available APIs.</p>
        </div>
        <img
          src="https://media.istockphoto.com/id/1486359843/photo/api-application-programming-interface-software-development-tool.jpg?s=612x612&w=is&k=20&c=2nmm-8Dds2IGjkR2wcoDMPY_sQMT0jbQrBaAUS5VrVI="
          alt="Fast API"
          className="img-fluid rounded mt-3"
          style={{ maxHeight: '210px', }}
        />
      </div>
    </div>
  </div>
        </div>

        {/* Billing perfected with AnimeApi */}
        <div className="container my-5">
  {/* Main Heading */}
  <h2 className="fw-bold text-primary mb-5 text-center">
    🚀 Billing Perfected with AnimeApi
  </h2>

  {/* Row 1 - 3 Feature Cards */}
  <div className="row g-4 mb-4">
    {/* Compliance */}
    <div className="col-md-4">
      <div className="p-4 rounded bg-light border h-100">
        <h5 className="fw-bold mb-2">🧾 Compliance</h5>
        <p className="mb-0">
          Stay fully compliant with regional tax laws. Zoho Billing validates e-invoices through IRP and ensures GST readiness.
        </p>
      </div>
    </div>

    {/* Flexibility */}
    <div className="col-md-4">
      <div className="p-4 rounded bg-light border h-100">
        <h5 className="fw-bold mb-2">🔄 Flexibility</h5>
        <p className="mb-0">
          Adapt effortlessly with support for multiple pricing models. Change your strategy as your business evolves.
        </p>
      </div>
    </div>

    {/* Globalization */}
    <div className="col-md-4">
      <div className="p-4 rounded bg-light border h-100">
        <h5 className="fw-bold mb-2">🌍 Globalization</h5>
        <p className="mb-0">
          Expand globally with built-in multi-currency and multilingual support, making cross-border billing seamless.
        </p>
      </div>
    </div>
  </div>

  {/* Row 2 - 3 Feature Cards */}
  <div className="row g-4">
    {/* Customization */}
    <div className="col-md-4">
      <div className="p-4 rounded bg-light border h-100">
        <h5 className="fw-bold mb-2">🎨 Customization</h5>
        <p className="mb-0">
          Tailor every module to your brand with custom fields, views, links, buttons, and more.
        </p>
      </div>
    </div>

    {/* Automation */}
    <div className="col-md-4">
      <div className="p-4 rounded bg-light border h-100">
        <h5 className="fw-bold mb-2">⚙️ Automation</h5>
        <p className="mb-0">
          Automate billing reminders, invoice generation, and payment follow-ups to save time and boost productivity.
        </p>
      </div>
    </div>

    {/* Low Code */}
    <div className="col-md-4">
      <div className="p-4 rounded bg-light border h-100">
        <h5 className="fw-bold mb-2">💻 Low Code</h5>
        <p className="mb-0">
          Simplify workflows and reduce development effort with Zoho Billing’s intuitive low-code platform.
        </p>
      </div>
    </div>
  </div>
        </div>

        {/* Testimonials Sections */}
        <div className="container my-5 p-4 rounded" style={{ backgroundColor: '#e6f2ff' }}>
  {/* Testimonials Heading */}
  <h2 className="fw-bold text-primary mb-5 text-center">
    💬 What Our Customers Say
  </h2>

  <div className="row g-4">
    {/* Testimonial 1 */}
    <div className="col-md-4">
      <div className="p-4 bg-white rounded border h-100 text-center shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User 1"
          className="rounded-circle mb-3"
          width="70"
          height="70"
        />
        <h6 className="fw-bold">Alicia Gomez</h6>
        <p className="text-muted small">Product Manager, NexaSoft</p>
        <p>"Zoho Billing made it effortless to stay GST-compliant while scaling our product. Highly recommended!"</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="col-md-4">
      <div className="p-4 bg-white rounded border h-100 text-center shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User 2"
          className="rounded-circle mb-3"
          width="70"
          height="70"
        />
        <h6 className="fw-bold">Rahul Verma</h6>
        <p className="text-muted small">CTO, CloudLeap</p>
        <p>"Flexibility in pricing models helped us pivot our offerings quickly. Zoho Billing is a game changer!"</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="col-md-4">
      <div className="p-4 bg-white rounded border h-100 text-center shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="User 3"
          className="rounded-circle mb-3"
          width="70"
          height="70"
        />
        <h6 className="fw-bold">Claire Hudson</h6>
        <p className="text-muted small">Founder, Nova Creatives</p>
        <p>"The multilingual support made our European launch seamless. Truly global-ready billing!"</p>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="col-md-4">
      <div className="p-4 bg-white rounded border h-100 text-center shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User 4"
          className="rounded-circle mb-3"
          width="70"
          height="70"
        />
        <h6 className="fw-bold">James Miller</h6>
        <p className="text-muted small">COO, FinLaunch</p>
        <p>"Customization options are endless. We tailored every invoice to match our brand perfectly."</p>
      </div>
    </div>

    {/* Testimonial 5 */}
    <div className="col-md-4">
      <div className="p-4 bg-white rounded border h-100 text-center shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/men/20.jpg"
          alt="User 5"
          className="rounded-circle mb-3"
          width="70"
          height="70"
        />
        <h6 className="fw-bold">Takeshi Mori</h6>
        <p className="text-muted small">Billing Head, KuroTech</p>
        <p>"The automation features saved us hours every week. It’s like having another team member!"</p>
      </div>
    </div>

    {/* Testimonial 6 */}
    <div className="col-md-4">
      <div className="p-4 bg-white rounded border h-100 text-center shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt="User 6"
          className="rounded-circle mb-3"
          width="70"
          height="70"
        />
        <h6 className="fw-bold">Sophia Lee</h6>
        <p className="text-muted small">Growth Lead, AlphaApps</p>
        <p>"Using the low-code platform, we built our custom workflow in days instead of weeks. Impressive!"</p>
      </div>
    </div>
  </div>
        </div>

        {/* Pricing Section */}
        <div className="container my-5">
  <h2 className="fw-bold text-primary mb-4 text-center">API Pricing Plans</h2>
  <div className="row">
    {/* Standard Plan */}
    <div className="col-md-4">
      <div className="card">
        <div className="card-header bg-primary text-white text-center">
          <h5>Standard</h5>
        </div>
        <div className="card-body">
          <h3 className="fw-bold text-center">
            <span style={{ textDecoration: 'line-through', color: '#888' }}>₹1499</span> ₹1249
          </h3>
          <p className="text-center">per Organization per Month (Billed annually)</p>
          <p>Best suited for businesses with one-time billing requirements.</p>
          <div className="text-center">
            <a href="#" className="btn btn-primary btn-lg">Start your 14-day free trial</a>
          </div>
        </div>
      </div>
    </div>

    {/* Premium Plan */}
    <div className="col-md-4">
      <div className="card">
        <div className="card-header bg-warning text-white text-center">
          <h5>Premium</h5>
        </div>
        <div className="card-body">
          <h3 className="fw-bold text-center">
            <span style={{ textDecoration: 'line-through', color: '#888' }}>₹3499</span> ₹2999
          </h3>
          <p className="text-center">per Organization per Month (Billed annually)</p>
          <p>Best suited for businesses with one-time and subscription billing requirements.</p>
          <div className="text-center">
            <a href="#" className="btn btn-warning btn-lg">Start your 14-day free trial</a>
          </div>
        </div>
      </div>
    </div>

    {/* Platinum Plan */}
    <div className="col-md-4">
      <div className="card">
        <div className="card-header bg-success text-white text-center">
          <h5>Platinum</h5>
        </div>
        <div className="card-body">
          <h3 className="fw-bold text-center">
            <span style={{ textDecoration: 'line-through', color: '#888' }}>₹4999</span> ₹4499
          </h3>
          <p className="text-center">per Organization per Month (Billed annually)</p>
          <p>Best suited for enterprises with advanced billing requirements.</p>
          <div className="text-center">
            <a href="#" className="btn btn-success btn-lg">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>

    
         {/* CTA Section */}
        <section className="py-5 text-center text-white mt-5 shadow" style={{ background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}>
        <div className="container">
        <h2 className="display-5 fw-bold">🚀 Ready to explore APIs the smart way?</h2>
        <p className="lead mt-3 mb-4">Start building with our free tier today and unlock a new world of data.</p>
        <Link to="/api" className="btn btn-light btn-lg px-4 rounded-pill fw-bold shadow">Start Exploring</Link>
        </div>
        </section>


        {/* Footer */}
        <footer className="py-5 px-5" style={{ backgroundColor: '#343a40', color: 'white' }}>
            <div className="row">
            <div className="col-6 col-md-2 mb-3">
                <h5>API Documentation</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Overview</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Endpoints</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Authentication</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Rate Limiting</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">API Versioning</a></li>
                </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
                <h5>Support</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Help Center</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Support</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Community</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Status</a></li>
                </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
                <h5>Company</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Our Team</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Careers</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Privacy Policy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms of Service</a></li>
                </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
                <form>
                <h5>Subscribe to API Updates</h5>
                <p>Stay updated with the latest API features, updates, and best practices.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
            </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" style={{ borderColor: '#495057' }}>
            <p>© 2025 AnimeAPI, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-white" href="#" aria-label="Instagram"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                <li className="ms-3"><a className="link-white" href="#" aria-label="Facebook"><svg className="bi" width="24" height="24" aria-hidden="true"><use xlinkHref="#facebook"></use></svg></a></li>
            </ul>
            </div>
        </footer>
  </div>
  );
};

export default Home;
