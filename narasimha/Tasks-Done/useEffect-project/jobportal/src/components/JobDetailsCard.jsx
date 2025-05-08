import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


const JobDetailsCard = () => {

    const [details, setDetails] = useState([])

    const { jobid } = useParams();
    console.log(jobid);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:3000/cardDetails");
                const data = await response.json();
                setDetails(data);
                // console.log(data)
            } catch (error) {
                console.error(error.name);
            }
        };

        fetchJobs();
    }, []);

    // Find the job details by the jobid
    const job = details.find((j) => j.id === jobid);
    console.log(job);

    // Check if the job exists
    if (!job) {
        return <div className='text-center text-muted fw-bold fs-1' style={{ marginTop: '200px', marginBottom: '300px' }}>Job not found...</div>;
    }

    return (
        <div className="container mb-5" style={{ marginTop: '100px' }}>
            <button className='btn btn-primary mb-4 ' onClick={() => navigate('/findjobs')}>Back</button>
            <div className="card p-4 shadow-sm  bg-body-tertiary mb-2">
                <div className="row g-0">
                    <div className="card-body">
                        <div className="row align-items-center mt-3 mx-3">

                            <div className="col-12 col-sm-12 col-md-10 col-lg-10 ">
                                <h3>{job.title}</h3>
                                <div className="row">
                                    <p className="col-12 col-sm-12 col-md-4 col-lg-4 fw-normal">
                                        {job.company} ⭐ {job.rating}
                                    </p>
                                    <p className="col-12 col-sm-12 col-md-4 col-lg-4 fw-normal">
                                        {job.reviews} Reviews
                                    </p>
                                </div>
                            </div>
                            <img src={`/${job.img}`} className="col-12 col-sm-12 col-md-2 col-lg-2" />

                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-4">
                                <i className="bi bi-suitcase-lg"></i> {job.experience} Yrs
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                &#8377; {job.salary}
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <i className="bi bi-geo-alt"></i> {job.location}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-10 mx-4 mt-2">
                                <i className="bi bi-journal-richtext"></i> {job.work_title}
                            </div>
                        </div>

                        <div className="row mx-4 my-2">
                            <div>
                                <li>{job.first_skill}</li>
                                <li>{job.second_skill}</li>
                                <li>{job.third_skill}</li>
                                <li>{job.fourth_skill}</li>
                                <li>{job.fifth_skill}</li>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mx-4 mt-2">
                                <h5>Job Description</h5>
                                <p>{job.job_description}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mx-4 mt-2">
                                <h5>Eligibility</h5>
                                <p>{job.eligibility}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mx-4 mt-2">
                                <h5>Qualifications</h5>
                                <p>{job.qualifications}</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-between">
                            <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-4">
                                {job.posted}
                            </div>
                            <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-4">
                                Openings: {job.openings}
                            </div>
                            <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-4">
                                Applications: {job.applications}
                            </div>
                            <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-3">
                                <i className="bi bi-bookmark"></i> Save
                            </div>
                        </div>
                    </div>
                    <div className="col text-center my-4">
                        <button className="btn btn-primary">Apply Now  <i class="bi bi-arrow-up-right-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsCard;
