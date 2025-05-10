import React, { useEffect, useState } from "react";
import JobCard from "./components/JobCard";
import { useOutletContext } from "react-router-dom";


const Jobs = ({}) => {
  const { searchTerm } = useOutletContext(); // ✅ Get searchTerm from Outlet context
  const [jobs, setJobs] = useState([]);            // All jobs fetched from API
  const [loading, setLoading] = useState(true);    // Loading indicator
  const [error, setError] = useState(null);        // Error message
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const jobsPerPage = 5;                           // Jobs to show per page

  // Fetch jobs from API on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/activejobs");
        const data = await res.json();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on the searchTerm
  const filteredJobs = jobs.filter((job) =>
    [job.Role, job.Name, job.Location, ...job.Skills]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      // .includes("") → always returns true, so all jobs are included when the search is empty.
  ).sort((a,b)=>Number(b.id) - Number(a.id)); // // Sort by ID in descending order

  // Paginate filtered jobs
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage); // This line is giving those 1,2,3, etc buttons in the bottom
  // Math.ceil() rounds UP to the nearest whole number.
  // Example :
  // You have 23 filtered jobs
  // You want to display 5 jobs per page
  // const totalPages = Math.ceil(23 / 5); // totalPages = 5


  const paginatedJobs = filteredJobs.slice(  // This is what determines how many cards per page, slicing from the filteredJobs
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
    // Let’s say you're on Page 3:
    // currentPage = 3
    // Start index: (3 - 1) * 5 = 10
    // End index: 3 * 5 = 15
    // paginatedJobs = filteredJobs.slice(10, 15);
    // This gets jobs from index 10 to 14 — which are the 11th to 15th jobs.

  // Handle page change
  const handlePageChange = (page) => setCurrentPage(page);

  // Show loading or error
  if (loading) return <div className="text-center my-5">Loading jobs...</div>;
  if (error) return <div className="text-center my-5 text-danger">{error}</div>;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Available Jobs</h2>

      {/* Job Cards */}
      <div className="d-flex flex-column align-items-center">
        {paginatedJobs.length > 0 ? (
          paginatedJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              Role={job.Role}
              Name={job.Name}
              Rating={job.Rating}
              Reviews={job.Reviews}
              img={job.img}
              From={job.Exp.From}
              To={job.Exp.To}
              Location={job.Location}
              Content={job.Content}
              Skills={job.Skills}
              Posted={job.Posted}
              Salary={job.Salary}
              PostedBy={job.postedBy}
            />
          ))
        ) : (
          <div>No jobs found matching your search criteria.</div>
        )}
      </div>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
  <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center mt-4">
      
      {/* Previous Button */}
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button 
          className="page-link" 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
         // Let’s say totalPages = 5, then:
         // Array.from({ length: 5 }, (_, i) => i) // [0, 1, 2, 3, 4]
         // So 5 <li> buttons are rendered:
         // [1] [2] [3] [4] [5]

        <li 
          key={i} 
          className={`page-item ${currentPage === i + 1 ? "active" : ""}`} // // If you're on Page 3, then currentPage === i + 1 will be true when i === 2, so button 3 gets class active.
        >
          <button 
            className="page-link" 
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
        <button 
          className="page-link" 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>

    </ul>
  </nav>
)}

    </div>
  );
};

export default Jobs;
