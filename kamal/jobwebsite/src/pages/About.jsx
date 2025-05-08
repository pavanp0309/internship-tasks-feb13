import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
<div>

    <div className="container py-5">

  {/* Section: Founder */}
<div className="p-5 mb-5 rounded" style={{ backgroundColor: '#e6f7ff', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
  <div className="row align-items-center">
    {/* Left Column: Text Content */}
    <div className="col-md-6 mb-3 mb-md-0">
      <h2 className="text-primary mb-4" style={{ fontSize: '2.2rem', fontWeight: '700' }}>Founder</h2>
      <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        Hi, I'm <strong>Sri Swarna Kamal</strong>, a passionate full-stack developer and the mind behind this platform. With a deep interest in building impactful digital solutions, I created this job portal to help fellow tech enthusiasts connect with the right opportunities — quickly and effectively.
      </p>
      <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        During my own job search journey, I realized how scattered and overwhelming the process can be, especially for those just starting out. That experience inspired me to design a space where job seekers can access real-time listings, clear filters, and employer details without all the noise.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        Whether you're a fresher or an experienced developer, this platform is built to empower you with the tools and transparency needed to navigate your career path confidently. I'm thrilled to share this vision with you and welcome you to our growing community.
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="col-md-6 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Founder"
        className="img-fluid rounded"
        style={{ maxHeight: '350px', width: 'auto', borderRadius: '15px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}
      />
    </div>
  </div>
</div>

{/* Section: Intention */}
<div className="p-5 mb-5 rounded" style={{ backgroundColor: '#f3f1ec', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-6 mb-3 mb-md-0">
      <h2 className="text-primary mb-4" style={{ fontSize: '2.2rem', fontWeight: '700' }}>Why I Created This Website</h2>
      <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        I’ve always believed that job hunting shouldn’t feel like a job itself. Yet, most portals today are bloated with irrelevant listings, confusing filters, and poor user experience.
      </p>
      <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        That’s when I decided to build something different — a job portal that’s clean, intuitive, and tailored specifically for tech roles. I envisioned a platform where developers could focus on opportunities that truly matter, without getting lost in the clutter.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        This website is my attempt to streamline the job discovery experience, keeping things simple, focused, and genuinely helpful for the growing tech community across India.
      </p>
    </div>
    <div className="col-md-6 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
        alt="Purpose"
        className="img-fluid rounded"
        style={{ maxHeight: '300px', width: 'auto', borderRadius: '15px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}
      />
    </div>
  </div>
</div>

{/* Section: Mission */}
<div className="p-5 mb-5 rounded" style={{ backgroundColor: '#e8fff0', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
  <div className="row align-items-center">
    <div className="col-md-6 mb-3 mb-md-0">
      <h2 className="text-primary mb-4" style={{ fontSize: '2.2rem', fontWeight: '700' }}>Our Mission</h2>
      <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        Our mission is simple: to empower tech talent by connecting them with transparent, high-quality job opportunities that align with their goals and skills.
      </p>
      <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        We aim to eliminate the noise and present curated openings that are current, credible, and clearly described. Whether you're looking for remote flexibility, a fresh start, or your next big break, we’ve got you covered.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        This isn’t just a job portal — it's a career companion for every developer out there, built with empathy, purpose, and a deep understanding of the tech landscape.
      </p>
    </div>
    <div className="col-md-6 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
        alt="Mission"
        className="img-fluid rounded"
        style={{ maxHeight: '300px', width: 'auto', borderRadius: '15px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}
      />
    </div>
  </div>
</div>

{/* Section: Vision */}
<div className="p-5 mb-5 rounded" style={{ backgroundColor: '#f8f9f5', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-6 mb-3 mb-md-0">
      <h2 className="text-primary mb-4" style={{ fontSize: '2.2rem', fontWeight: '700' }}>Our Vision</h2>
      <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        We envision a streamlined job ecosystem that’s not only fast and efficient but also human-centered. A place where developers don’t just find jobs but the perfect opportunities to grow, learn, and succeed.
      </p>
      <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        Our goal is to create a platform that empowers users with the tools, resources, and support they need to make smarter career decisions. A place where discovering your dream role is as simple and intuitive as possible.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        We want this platform to become the go-to destination for tech talent, providing a transparent, curated space for finding roles that align with personal aspirations and values.
      </p>
    </div>
    <div className="col-md-6 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/189/189665.png"
        alt="Vision"
        className="img-fluid rounded"
        style={{ maxHeight: '300px', width: 'auto', borderRadius: '15px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}
      />
    </div>
  </div>
</div>




      {/* Section: What Makes Us Different */}
      <div className="p-4 mb-5 rounded" style={{ backgroundColor: '#f3f8ff' }}>
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h2 className="text-primary mb-3">What Makes Us Different</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item bg-transparent">✅ Curated job listings with rich company info</li>
              <li className="list-group-item bg-transparent">✅ Simple and distraction-free UI</li>
              <li className="list-group-item bg-transparent">✅ Fast filters and real-time updates</li>
              <li className="list-group-item bg-transparent">✅ We focus on quality over quantity</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/4812/4812302.png" alt="Unique" className="img-fluid rounded" style={{ maxHeight: '250px' }} />
          </div>
        </div>
      </div>

      {/* Section: Community */}
<div className="p-4 py-5 rounded" style={{ backgroundColor: '#e0f7fa' }}>
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-6 mb-3 mb-md-0">
      <h2 className="text-primary mb-3">Join Our Community</h2>
      <p className="lead">
        Whether you’re just starting or pivoting careers, this platform is designed to support your goals.
        Join our growing tech community and explore curated opportunities today.
      </p>

      {/* Buttons */}
      <div className="d-flex flex-wrap gap-3 mt-4">
        <button className="btn btn-primary px-4">Join Now</button>
        <button className="btn btn-outline-primary px-4">Explore Community</button>
      </div>
    </div>

    <div className="col-md-6 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3208/3208758.png"
        alt="Community"
        className="img-fluid rounded"
        style={{ maxHeight: '250px' }}
      />
    </div>
  </div>
</div>
    </div>
    <Footer/>

</div>
  );
};

export default About;
