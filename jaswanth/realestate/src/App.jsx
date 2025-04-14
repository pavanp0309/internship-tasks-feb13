import React from 'react'
import { properties } from './data'
import Card from './Card'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {
            properties.map((ele)=>{
              const {id,title,location,price,area,lotSize,bathrooms,bedrooms,type,parking,imageUrl,yearBuilt}=ele
              console.log(ele)
              
              return <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <Card
                Aid={id}
                Atitle={title}
                Alocation={location}
                Aprice={price}
                Aarea={area}
                AlotSize={lotSize}
                Abathrooms={bathrooms}
                Abedrooms={bedrooms}
                Atype={type}
                Aparking={parking}
                AimageUrl={imageUrl}
                AyearBuilt={yearBuilt}
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