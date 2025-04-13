import React from 'react'
import jobDetails from './jobDetails'
import JobCard from './JobCard'

const JobList = () => {
    return (
        <div>
            <div className="row">
                {

                    jobDetails.map((ele, index) => (
                        <div key={index} className="col col-sm-12 col-md-6 col-lg-6  col-xl-4">
                            <JobCard jobPost={ele} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobList
