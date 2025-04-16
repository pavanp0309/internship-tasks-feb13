import React from 'react'
import PropertyListingCard from './components/PropertyListingCard'
import propertyData from './data/data'
import './App.css';


const App = () => {
  return (
    <div className="container py-5">
    {/* Heading */}
    <h2
  className="mb-5 text-center fw-bold text-primary display-6 pb-3"
  style={{ borderBottom: "3px solid #7ab6e5" }}
>
  🏡 Featured Property Listings
</h2>


    {/* Cards Grid */}
    <div className="row g-4 justify-content-center">
      {propertyData.map((property) => (
        <div key={property.id} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <PropertyListingCard {...property} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default App
