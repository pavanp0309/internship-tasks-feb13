import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Index.module.css';

const ActiveHiring = ({ isLogin }) => {
    const [hiring, setHiring] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();

    const handleViewMore = () => {
        isLogin ? navigate('/findjobs') : navigate('/login');
    };

    useEffect(() => {
        const activeHiringdata = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await fetch('http://localhost:3000/jobs');
                const result = await response.json();
                setHiring(result);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        activeHiringdata();
    }, []);

    return (
        <div className={`container ${styles.hiring}`} style={{ marginTop: '120px' }}>
            <h2 className="text-center fw-bold p-4">Active Hiring</h2>

            {isLoading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {isError && (
                <div className="text-center text-danger fs-4 mb-4">Something went wrong. Please try again later.</div>
            )}

            <div className="row g-4 justify-content-center">
                {hiring?.map((ele, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                        <div className="card shadow rounded-4 w-100">
                            <img src={ele.image} className="card-img-top img-fluid rounded-top" alt={ele.title} style={{ height: '180px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{ele.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.company}</h6>
                                <p className="card-text mb-1">{ele.rating}⭐</p>
                                <p className="card-text flex-grow-1">{ele.description}</p>
                                <div className="text-center mt-3">
                                    <button className="btn btn-outline-primary">View Jobs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-primary px-4 py-2" onClick={handleViewMore}>
                    View More <i className="bi bi-arrow-up-right-square"></i>
                </button>
            </div>
        </div>
    );
};

export default ActiveHiring;
