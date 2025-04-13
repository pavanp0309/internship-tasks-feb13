import React from 'react'
import styles from './index.module.css'

const Hero = () => {
    return (
        <div>
            <div className={`container my-4 ${styles.mainCard}`}>
                <div className="row">
                    {/* content box */}
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className={`mx-5 my-5 ${styles.mainContent} text-center text-lg-start`}>
                            <h1 style={{ color: 'orange' }}>Modern Solutions <br /> for Stylish Spaces</h1>
                            <p className='text-white my-4'>
                                Our lives happen around our furniture. Every day, our bed frames, <br />
                                dining tables, dressers, and coffee tables support us, often without thanks and appreciation.
                            </p>

                            <div className='text-white d-flex flex-column flex-md-row justify-content-center justify-content-lg-start' style={{ margin: ' 70px 10px' }}>
                                <div className="mb-3 mb-md-0 me-md-5">
                                    <h1>600+</h1>
                                    <p>Unique Styles</p>
                                </div>
                                <div className="mb-3 mb-md-0 me-md-5">
                                    <h1>5000+</h1>
                                    <p>Happy Customers</p>
                                </div>
                                <div>
                                    <h1>10+</h1>
                                    <p>Opened in the Country</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* image box */}
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                        <img src='/src/assets/furniture-model-image.jpg' className={`${styles.img}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
