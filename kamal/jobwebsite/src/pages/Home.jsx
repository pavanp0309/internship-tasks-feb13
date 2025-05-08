import React from 'react'
import CompanySlider from '../components/CompanySlider';
import CategorySlider from '../components/CategorySlider';
import FeaturedCompanyCard from '../components/FeaturedCompanyCard';
import featuredCompanies from '../api/featuredCompanies';
import PremiumServicesCard from '../components/PremiumServicesCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';  // Import Link
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const navigate = useNavigate();
  
  return (
    <div>
      {/* <div className="container-fluid p-0 mb-5">
        <img 
          src="src/assets/homepagehero.png" 
          alt="Hero Banner" 
          className="w-100 img-fluid"
        />
      </div> */}
      
      <HeroSection/>

      <CompanySlider/>
      <CategorySlider/>

    {/* Featured Companies Section */}
<div className="container-fluid px-5 py-5 my-5" style={{ backgroundColor: "#f8f9fa", borderRadius: "1rem" }}>
  <div className="text-center mb-4">
    <h4 className="fw-bold text-primary text-uppercase fs-2">
      Featured Companies Actively Hiring
    </h4>
    <div 
      className="bg-primary mx-auto mt-2" 
      style={{ width: '100px', height: '4px', borderRadius: '2px' }}
    ></div>
  </div>

  <div className="row g-4 justify-content-center">
    {featuredCompanies.map((company) => (
      <div key={company.id} className="col-md-6 col-lg-4 col-xl-2 d-flex">
        <FeaturedCompanyCard company={company} />
      </div>
    ))}
  </div>

  {/* View More Button */}
  <div className="text-center mt-4">
          <Link 
            to="/findjob"  // Specify the target page URL here
            className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold"
          >
            View More Companies
          </Link>
  </div>
</div>

{/* Premium Services Section */}
<PremiumServicesCard />

{/* Footer Section */}
<Footer />
    </div>
  );
  
}

export default Home
