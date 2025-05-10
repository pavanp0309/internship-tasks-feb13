import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const PostedJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/cardDetails");
        const data = await res.json();
        const userPostedJobs = data.filter(job => job.created_by)
          .sort((a, b) => new Date(b.posted) - new Date(a.posted));

        setPostedJobs(userPostedJobs);

      } catch (error) {
        console.error(error.name);
      }
    };

    fetchPostedJobs();
  }, []);

  // Handling Delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/cardDetails/${id}`, {
        method: 'DELETE',
      });

      console.log('Delete response:', res);

      if (res.ok) {
        setPostedJobs(postedJobs.filter(job => job.id !== id));
      } else {
        alert("Failed to delete the job");
      }
    } catch (error) {
      console.error(error.name);
    }
  }


  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Posted Jobs</h2>
      {postedJobs.length > 0 ? (
        postedJobs.map(job => (
          <div key={job.id} className="job-card-container position-relative mb-4">
            <JobCard job={job} showDetails={false} />
            <button
              className="btn btn-danger position-absolute top-0 end-0 "
              style={{ margin: '60px 80px' }}
              onClick={() => handleDelete(job.id)}
              title="Delete Job"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-muted fs-5">No jobs posted yet.</p>
      )}
    </div>
  );
};

export default PostedJobs;
