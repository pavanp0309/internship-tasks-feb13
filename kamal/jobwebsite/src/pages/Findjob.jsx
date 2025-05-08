// src/pages/FindJob.jsx
import React, { useState } from "react";
import SearchBar from "../components/SearchBar"; // Import the SearchBar component
import SideNavbar from "../components/SideNavbar"; // Import the new SideNavbar component
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const FindJob = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term based on input
  };

  return (
    <div>
      <div className="d-flex">
        {/* Left section for the Navbar/Filters */}
        <SideNavbar />

        {/* Right section for job search and job listings */}
        <div className="main-content p-4" style={{ flex: 1 }}>
          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />

          {/* Jobs component (filtered based on search term) */}
          {/* <Jobs searchTerm={searchTerm} /> */}
          {/* Where Jobs or JobDetail will render */}
          <Outlet context={{ searchTerm }} />   {/* Basically here the Jobs component will be rendered because it is child, inside that we have JobCard->JobDetail */}
        </div>
      </div>
      <Footer style={{ marginTop: '0rem' }} />
    </div>
  );
};

export default FindJob;
