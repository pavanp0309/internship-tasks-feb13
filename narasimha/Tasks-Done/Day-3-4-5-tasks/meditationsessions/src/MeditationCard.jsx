import React from 'react'

const MeditationCard = ({ med }) => {
    const { name, category, duration, isPremium, isLocked, isNew, description } = med
    return (
        <div className='container d-flex justify-content-center'>
            <div class="card shadow my-2" style={{ width: '500px' }}>
                <h2 className='fw-bold mx-4 ' style={{margin:'10px auto auto auto'}}>{category}</h2> <hr />
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                        <h3 class="card-title">{isLocked && '🔒'}{name}</h3>
                        <p class="card-text fw-bold rounded" style={{ backgroundColor: isPremium ? "blue" : "white", color: isPremium ? "white" : "black", padding: '4px 5px' }}>{isPremium ? "Premium" : "New 🔥"}</p>
                    </div>

                    <div className='d-flex justify-content-between my-3 mx-4'>
                    <h5 class="card-title">Duration</h5>
                    <h6 class="card-title">{duration}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeditationCard
