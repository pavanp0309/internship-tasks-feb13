import React, { useState } from 'react'

const JobCard = (props) => {
    const [dark,setDark]=useState(false)
    const handledark=()=>{
      setDark(!dark)
    }
    const {Atitle,Acompany,Alocation,Atype,Asalaryrange,Aposteddate,skills}=props
    console.log(skills)
  return (
    <div>
        {/* <h1>{Acompany}</h1> */}
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:"400px"}}>
            {/* <h3 >{Atitle} <span classNameName='' style={{margin:"0 0 0 98%"}} ><i className="bi bi-bookmark"></i></span></h3> */}
            <div className='ms-3'>
    <div className='d-flex justify-content-between'>
    <h3 className='text-center'>{Atitle}  </h3>

      <i style={{fontSize:'25px'}} className={`${ dark ? "bi bi-bookmark-fill":"bi bi-bookmark"}`} onClick={handledark}>{dark}</i>


    {/* <button classNameName={`${dark?"btn btn-white":"btn btn-dark"}`} onClick={()=>handledark()}><i className='bi bi-bookmark'></i></button> */}
            {/* <p><strong><i className="bi bi-building-add"></i></strong>{Acompany}</p> */}
    </div>
    <p>Company : {Acompany}</p>
            <p><strong>{Atype}</strong> </p>
            {/* <p><strong>Skils:</strong> {Askillsrequired}</p> */}
            <p><strong><i className="bi bi-currency-rupee"></i></strong> {Asalaryrange}</p>
            <p><strong><i className="bi bi-geo-alt"></i></strong> {Alocation}</p>
            <p className=''>

               <span>{
               skills.map((skill,index)=>{
                return <span className='fw-bold  rounded'  style={{margin:'0px 10px',backgroundColor:'lightblue',padding:'2px 9px'}}>{skill}</span>
               })
               }</span>

                {/* <a href="" classNameName='text-decoration-none bg-info p-1 px-2 rounded text-white'>{Askillsrequired}</a>
                <a href="" classNameName='mx-3 text-decoration-none bg-info p-1 text-white px-2 rounded'>{Askils2}</a>
                <a href="" classNameName='text-decoration-none bg-info p-1 px-2 text-white rounded'>{Askils3}</a> */}
            </p>
            <p><strong><i className="bi bi-calendar-check"></i></strong> {Aposteddate}</p>
            </div>
            <button className='btn btn-outline-primary m-3'>Apply Now</button>
        </div>
    </div>
  )
}

export default JobCard