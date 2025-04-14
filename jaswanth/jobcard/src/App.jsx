import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { data } from './data'
import JobCard from './JobCard'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <h1 className='text-center'>Job Card</h1>
        {
          data.map((ele)=>{
            const {title,company,location,type,salaryrange,skills,posteddate}=ele
            return <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <JobCard
            Atitle={title}
            Acompany={company}
            Alocation={location}
            Atype={type}
            Asalaryrange={salaryrange}
           
            Aposteddate={posteddate}
            skills={skills}
            />
            </div>
          })
        }
        </div>
      </div>

    </div>
  )
}

export default App