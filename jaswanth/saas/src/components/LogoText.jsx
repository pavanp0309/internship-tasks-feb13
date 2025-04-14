import React from 'react'

const LogoText = () => {
  return (
    <div>
        <div className=' text-center backgc py-2'>
            <img src="./src/assets/pic5.jpg" alt="" width={"200px"} height={"200px"}/>
            <h1 className='fw-bold fs-1'>Over to find</h1>
            <h3>THE BEAUTIFUL</h3>
        </div>
        <div className="container my-4">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 bg-white">
              <h1 style={{margin:"60px 20px 50px"}}>01</h1>
              <h2 className='ms-4'>Awesome Interiors</h2>
              <p className='ms-4' style={{margin:"50px 10px 100px 0px"}}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. 
                Phasellus sed efficitur dolor, et ultricies sapien. 
                Quisque fringilla sit amet dolor commodo efficitur. 
                Aliquam et sem odio. In ullamcorper nisi nunc,
                 et molestie ipsum iaculis sit amet.</p>
            </div>
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 bg-white">
            <h1 className='' style={{margin:"60px 20px 50px"}}>02</h1>
              <h2 className='ms-4'>Fresh and Creative</h2>
              <p className='ms-4' style={{margin:"50px 10px 100px 0px"}}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. 
                Phasellus sed efficitur dolor, et ultricies sapien. 
                Quisque fringilla sit amet dolor commodo efficitur. 
                Aliquam et sem odio. In ullamcorper nisi nunc,
                 et molestie ipsum iaculis sit amet.</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default LogoText