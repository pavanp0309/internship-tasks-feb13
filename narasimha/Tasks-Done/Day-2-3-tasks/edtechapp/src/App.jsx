import React from 'react'
import EdTechCard from './EdTechCard'
import edTechDetails from './EdTech'

const App = () => {
  return (
    <div className='container'>
      <div className="row">
        {
          edTechDetails.map((ele, id) => (
            <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 my-4">
              <EdTechCard ele={ele} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
