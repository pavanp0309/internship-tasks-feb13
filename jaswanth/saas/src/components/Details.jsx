import React from 'react'

const Details = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center my-5">
                    <img src="./src/assets/pic8.jpeg" alt="" width={"400px"} height={"400px"}/>
                    <h1>Welcome to paradise</h1>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 bg-light">
                 <div className='my-5 text-center'>
                    <p className='p-4 fw-bold'>If you’re an adventurer who loves being out in nature, a hiking and trekking 
                            tour should be next on your list. You can expect great wildlife photography 
                            opportunities and the chance to travel with a group of
                            like-minded individuals who love the great outdoors.
                    </p>
                    <img src="./src/assets/pic7.jpeg" alt="" width={"350px"} height={"350px"} />

                 </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Details