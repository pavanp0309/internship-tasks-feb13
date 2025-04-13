import React from 'react'
import styles from './index.module.css'

const Hero2 = () => {
    return (
        <div className={`container my-5 ${styles.second_hero} py-4`}>

            <div className='d-flex justify-content-center'>
                <h1 className='fw-bold my-5'>Best Selling Product</h1>
            </div>

            <div className="parent d-flex justify-content-center">
                <div className={`${styles.lists} rounded-pill bg-white d-flex justify-content-around p-2 my-1`}>
                    <div className='text-white bg-dark rounded-pill' style={{ width: '100px' }}>LAMP</div>
                    <div className='mx-4'>BED</div>
                    <div>CHAIR</div>
                    <div className='mx-4'>SOFA</div>
                </div>
            </div>

            {/* All Cards */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-5 justify-content-center">
                {/* Card 1 */}
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzXWT94cl_ySNg6nDpHZ9S_gipv07kpcmAw&s" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Stone Lamp</h5>
                            <p className="card-text">
                                <i className="bi bi-star-fill text-warning me-1"></i> 5.0
                            </p>
                            <div className='d-flex'>
                                <p className="card-text fw-5 fs-4 my-2">$ 300</p>
                                <p><i className="bi bi-arrow-right-square-fill fs-1" style={{ marginLeft: '120px' }}></i></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col mb-4">
                    <div className="card">
                        <img src="/src/assets/download.jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Eclipse Glow Lamp</h5>
                            <p className="card-text">
                                <i className="bi bi-star-fill text-warning me-1"></i> 5.0
                            </p>
                            <div className='d-flex'>
                                <p className="card-text fw-5 fs-4 my-2">$ 400</p>
                                <p><i className="bi bi-arrow-right-square-fill fs-1" style={{ marginLeft: '120px' }}></i></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col mb-4">
                    <div className="card">
                        <img src="/src/assets/download.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Urban Lamp</h5>
                            <p className="card-text">
                                <i className="bi bi-star-fill text-warning me-1"></i> 5.0
                            </p>
                            <div className='d-flex'>
                                <p className="card-text fw-5 fs-4 my-2">$ 250</p>
                                <p><i className="bi bi-arrow-right-square-fill fs-1" style={{ marginLeft: '120px' }}></i></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col mb-4">
                    <div className="card">
                        <img src="/src/assets/download (1).jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Bedside Lamp</h5>
                            <p className="card-text">
                                <i className="bi bi-star-fill text-warning me-1"></i> 5.0
                            </p>
                            <div className='d-flex'>
                                <p className="card-text fw-5 fs-4 my-2">$ 200</p>
                                <p><i className="bi bi-arrow-right-square-fill fs-1" style={{ marginLeft: '120px' }}></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className='d-flex justify-content-center '>View All<i className="bi bi-arrow-right"></i></h4>

        </div>
    )
}

export default Hero2
