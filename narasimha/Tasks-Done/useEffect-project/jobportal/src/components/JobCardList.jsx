import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const JobCardList = () => {
    const [jobList, setJobList] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:3000/cardDetails");
                const data = await response.json();
                const sortedData = data.sort((a, b) => new Date(b.posted) - new Date(a.posted));
                setJobList(sortedData);
            } catch (error) {
                console.error(error.name);
            }
        };

        fetchJobs();
    }, []);


    const filteredJobs = jobList.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const jobsPerPage = 6;
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const paginatedJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    return (
        <div>
            {/* Search Input */}
            <div className="input-group  " style={{ maxWidth: '600px', margin: '60px 0px 50px 70px' }} >
                <input
                    type="text"
                    className="form-control shadow-sm fw-semibold text-muted fs-5"
                    placeholder="Job title or Company"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="btn btn-primary shadow-sm fw-bold" type="button" style={{ width: '100px' }}>
                    Search
                </button>
            </div>

            {/* Job Cards */}
            <div>
                {paginatedJobs.length > 0 ? (
                    paginatedJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                ) : (
                    <p className="text-center text-muted fs-4">No matching jobs found, Please enter a valid keyword</p>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <nav aria-label="Page navigation" style={{ margin: '100px 180px' }}>
                    <ul className="pagination">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page - 1); }}>Previous</a>
                        </li>
                        {[...Array(totalPages)].map((_, i) => (
                            <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                                <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}>{i + 1}</a>
                            </li>
                        ))}
                        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page + 1); }}>Next</a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default JobCardList;
