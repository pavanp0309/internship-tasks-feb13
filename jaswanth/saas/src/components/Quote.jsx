import React from 'react'

const Quote = () => {
  return (
    <div>
        <div className="container-fluid bg-white mt-3 p-3">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 my-5 text-center">
                    <h2 className='my-5'>
                        "The mind will always remember exactly what happened. 
                        but the heart will always remember the feeling."
                    </h2>
                    <h3 className='my-3 fst-italic'>BRIGITTE NICOLE</h3>
                    <button className='btn btn-outline-dark rounded my-2'> Read More </button>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                    <img src="./src/assets/pic6.jpeg" alt="" width={"400px"} height={"400px"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quote