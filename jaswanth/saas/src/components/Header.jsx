import React from 'react'

const Header = () => {
  return (
    <div>
        <img src="./src/assets/pic.png" alt="" width={"100%"}/>
        <div className='container-fluid '>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  text-center bg-light" >
                    <div style={{margin:"50px 0"}}>
                    <p className='p-5 fw-bold' >
                        If you’re an adventurer who loves being out in nature, 
                        a hiking and trekking tour should be next on your list.
                         You can expect great wildlife photography opportunities and 
                         the chance to travel with a group of like-minded 
                        individuals who love the great outdoors.
                    </p>
                    <img src="./src/assets/pic2.jpeg" alt="" width={"300px"} height={"300px"} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center ">
                    <img src="./src/assets/pic3.jpeg" alt="" width={"400px"} height={"350px"} style={{margin:"100px 0 20px"}}/>
                    <h1 className='text-center'>Welcome to Paradise</h1>
                    {/* <h1>➡</h1> */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header