import React from 'react';


const About = () => {
  return (
    <div className="container py-1 my-4" style={{ backgroundColor: '#f4f8fb' }}>
      
    {/* Section: Founder */}
<div
  className="p-5 mb-5 rounded shadow-sm border"
  style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}
>
  <div className="row align-items-center">
    {/* Left Column: Text Content */}
    <div className="col-md-6 mb-3 mb-md-0">
      <h2 className="mb-4 fw-bold" style={{ color: '#0056b3', fontSize: '2.2rem' }}>
        Meet the Creator
      </h2>
      <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        Hi, I'm <strong>Sri Swarna Kamal</strong>, a full-stack developer and anime enthusiast. I built this platform to help fellow developers and anime fans access high-quality anime data through a simple, well-documented API.
      </p>
      <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        While working on personal projects, I often found it hard to find reliable anime APIs with rich, structured data. That inspired me to create this platform — combining my passion for anime with my skills in modern web development.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        This API is designed to support developers in building fun, responsive anime apps using tools like React. Whether you're fetching anime lists, detailed views, or powering a search feature, you're covered. I'm excited to see what you’ll build with it!
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="col-md-6 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Founder"
        className="img-fluid rounded"
        style={{
          maxHeight: '350px',
          width: 'auto',
          borderRadius: '15px',
          boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
          marginTop: '20px',
        }}
      />
    </div>
  </div>
</div>


      {/* Mission Section */}
      <div className="row mb-5 align-items-stretch">
        <div className="col-lg-6 mb-4">
          <div className="h-100 border p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}>
            <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>Our Mission</h2>
            <p className="lead">
              Our mission is to provide developers with powerful, easy-to-integrate APIs for building modern web applications.
              Whether you're building a weather app, movie database, or something entirely unique, our APIs make it simple.
            </p>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="h-100 border p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}>
            <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>Why Choose Us?</h2>
            <ul className="lead">
              <li>Reliable and high-performance APIs</li>
              <li>Comprehensive, developer-friendly documentation</li>
              <li>Wide variety of APIs across different domains (anime, movies, weather, etc.)</li>
              <li>Seamless integration with popular frameworks like React, Vue, and more</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="row mb-5 align-items-stretch">
        <div className="col-lg-6 mb-4">
          <div className="h-100 border p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}>
            <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>What We Offer</h2>
            <p className="lead mb-2">
              We offer a diverse collection of APIs across multiple categories such as:
            </p>
            <ul className="lead">
              <li>Anime API</li>
              <li>Movie API</li>
              <li>Weather API</li>
              <li>Real-time data monitoring</li>
              <li>Custom API integrations</li>
            </ul>
            <p className="lead">
              Whether you're building for fun or for business, our APIs have you covered.
            </p>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="h-100 border p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}>
            <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>Our Values</h2>
            <p className="lead">
              We believe in providing the best possible experience for developers by maintaining high standards of performance, 
              ease of use, and top-notch customer support. We continuously work on improving our services to keep up with industry 
              standards and trends.
            </p>
          </div>
        </div>
      </div>


{/* Anime API Integration Showcase Section */}
<div className="row mb-5 align-items-stretch">
  <div className="col-lg-12">
    <div
      className="h-100 border p-4 rounded shadow-sm"
      style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}
    >
      <div className="row align-items-center">
        {/* Left: Image or Screenshot */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="src/assets/codesnippet.png"
            alt="Anime API Screenshot"
            className="img-fluid rounded shadow border border-primary"
          />
        </div>

        {/* Right: Description of the implementation */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>
            How We Use Anime API
          </h2>
          <p className="lead">
            We integrated the <strong>AnimeDB API</strong> from RapidAPI to fetch real-time anime data. The API is called via a reusable function that uses <code>fetch</code> with appropriate headers and query parameters such as page, size, search term, and sorting options.
          </p>
          <p className="lead">
            The main page (<code>API.jsx</code>) displays a searchable list of anime cards using a dedicated <code>AnimeCard</code> component. Clicking on a card navigates to a detailed view (<code>AnimeDetailsCard.jsx</code>) where detailed information is fetched again using the anime’s unique ID.
          </p>
          <p className="lead">
            This demonstrates our ability to integrate third-party APIs, handle async operations, manage state with React hooks, and create modular reusable components for scalable front-end applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


     

{/* Call to Action Section */}
<div className="text-center mt-5">
        <div className="border p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: '#0056b3' }}>
          <h2 className="fw-bold" style={{ color: '#0056b3' }}>Join Us Today!</h2>
          <p className="lead">
            Start exploring our APIs today and take your applications to the next level. If you have any questions, feel free to 
            <a href="#" className="link-primary"> contact us</a>.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
