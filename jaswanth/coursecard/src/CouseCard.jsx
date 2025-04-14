import React from 'react'

const CouseCard = (props) => {
    const {Atitle,Aid,Ainstructor,Aduration,Alevel,Aisenrolled,Arating,Atags,Atags1,Atags2,AthumbnailUrl,AdiscountPrice,AorginalPrice}=props
  return (
    <div>
        {/* <h2>{Aid}</h2>
        <h2>{Atitle}</h2>
        <h2>{Ainstructor}</h2>
        <h2>{Aduration}</h2>
        <h2>{Alevel}</h2>
        <h2>{AthumbnailUrl}</h2>
        <img src={AthumbnailUrl} alt="" />
        <h2>{Aisenrolled}</h2>
        <h2>{Atags}</h2>
        <h2>{AdiscountPrice}</h2>
        <h2>{Arating}</h2>
        <h2>{AorginalPrice}</h2> */}
      <div className="card">
        <img src={AthumbnailUrl} alt="" className='border border-bottom' height={"200px"}/>
        <div className="card-body">
          <h1 className='text-center'>{Atitle}</h1>
          <p className='me-5'><strong>Instructor:</strong> {Ainstructor} <span className='ms-4'><strong>Duration:</strong>{Aduration}</span></p>
          <p><strong>Level:</strong>{Alevel} <span className='mx-5'><strong>Enroll:</strong> {Aisenrolled}</span></p>
          <h3>Ratting: {Arating}</h3>
          <h4 >OrginalPrice: $ <span className='text-decoration-line-through'>{AorginalPrice}</span> </h4>
          <h3 className='text-decoration-none'>DiscountPrice: $ {AdiscountPrice}</h3>

          <p className=''>
            <a href="" className='text-decoration-none text-white bg-warning rounded px-3'>{Atags}</a>
            <a href="" className='text-decoration-none text-white mx-3 bg-info rounded px-3'>{Atags1}</a>
            <a href="" className='text-decoration-none text-white bg-danger rounded px-3'>{Atags2}</a>
          </p>
        </div>
      </div>
        


    </div>
  )
}

export default CouseCard