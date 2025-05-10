import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="container d-flex " style={{ marginTop: '150px' }}>
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <img style={{ height: '500px', width: '600px' }} src="/src/assets/Screenshot 2025-04-30 124759.png" alt="" />
                    </div>

                    <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div style={{ margin: '90px 80px' }}>
                            <h1 className='fw-bold  ' style={{ fontSize: '50px', fontFamily: 'monospace' }}><strong style={{ color: 'orange' }}>Find the Job </strong>You've <br /> Been Dreaming Of!</h1>
                            <h3 className='my-4' style={{ fontFamily: 'sans-serif' }} >Search thousands of Job listings, <br />Find the right one for you.</h3>

                            <div className='my-5'>
                                <button type="button" class="btn rounded-pill px-4 btn-primary btn-lg mx-3">Find Jobs</button>
                                <button type="button" class="btn rounded-pill px-4 btn-outline-primary btn-lg">+ Post Jobs</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
