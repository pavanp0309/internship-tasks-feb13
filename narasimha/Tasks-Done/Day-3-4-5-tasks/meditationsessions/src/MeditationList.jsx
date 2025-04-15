import React from 'react'
import MeditationCard from './MeditationCard'
import meditationDetails from './meditationDetails'

const MeditationList = () => {
    return (
        <div className='container'>
            <div className="row">
                {
                    meditationDetails.map((ele) => (
                        <div className="col col-sm-12 col-md-12 col-lg-12">
                            <MeditationCard med={ele} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MeditationList
