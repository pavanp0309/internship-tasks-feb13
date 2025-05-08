import React from 'react';
import styles from '../Index.module.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const JobCard = ({ job, showDetails = true }) => {
    const {
        title, company, rating, reviews, img,
        experience, salary, location, work_title,
        first_skill, second_skill, third_skill, fourth_skill, fifth_skill,
        days, id
    } = job;

    const CardBody = () => (
        <div className={`${styles.card} mb-3`}>
            <div className="row g-0">
                <div className="card-body">
                    <div className='row align-items-center mt-3 mx-3'>
                        <div className={`${styles.card_title} col-12 col-sm-12 col-md-10 col-lg-10`}>
                            {title}
                            <div className="row">
                                <p className={`${styles.company} col-12 col-sm-12 col-md-4 col-lg-4 fw-normal`}>
                                    {company} <i className={`${styles.star} `}>⭐</i> {rating}
                                </p>
                                <p className={`${styles.reviews} col-12 col-sm-12 col-md-4 col-lg-4 fw-normal`}>
                                    {reviews} Reviews
                                </p>
                            </div>
                        </div>
                        <img src={img} alt="logo" className={`${styles.picture} col-12 col-sm-12 col-md-2 col-lg-2`} />
                    </div>

                    <div className="row">
                        <div className={`${styles.experience} col-12 col-sm-12 col-md-2 col-lg-2 mx-4`}>
                            <i className="bi bi-suitcase-lg"></i> {experience} Yrs
                        </div>
                        <div className={`${styles.salary} col-12 col-sm-12 col-md-3 col-lg-3`}>&#8377; {salary}</div>
                        <div className={`${styles.location} col-12 col-sm-12 col-md-4 col-lg-4`}>
                            <i className="bi bi-geo-alt"></i> {location}
                        </div>
                    </div>

                    <div className="row">
                        <div className={`${styles.workTitle} col-12 col-sm-12 col-md-10 col-lg-10 mx-4 mt-2`}>
                            <i className="bi bi-journal-richtext"></i> {work_title}
                        </div>
                    </div>

                    <div className={`${styles.skills} row mx-4 my-2`}>
                        <div>
                            <li>{first_skill}</li>
                            <li>{second_skill}</li>
                            <li>{third_skill}</li>
                            <li>{fourth_skill}</li>
                            <li>{fifth_skill}</li>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between">
                        <div className={`${styles.days} col-12 col-sm-12 col-md-2 col-lg-2 mx-4`}>
                            {days} Days ago
                        </div>
                        <div className={`${styles.save} col-12 col-sm-12 col-md-2 col-lg-2 mx-3`}>
                            <i className="bi bi-bookmark"></i> Save
                        </div>
                    </div>

                    {showDetails && (
                        <div className="text-end mt-3">
                            <Link className="btn btn-primary" to={`/findjobs/${id}`}>
                                View Details
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            {showDetails ? (
                <Link className="nav-link" to={`/findjobs/${id}`}>
                    {CardBody()}
                </Link>
            ) : (
                CardBody()
            )}
        </div>
    );
};

export default JobCard;
