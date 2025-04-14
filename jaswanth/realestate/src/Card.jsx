import React from 'react'

const Card = (props) => {
    const{Aid,Atitle,Alocation,Aprice,Aarea,AlotSize,Abathrooms,Abedrooms,Atype,Aparking,AimageUrl,AyearBuilt}=props
    console.log(props)
  return (
    <div>
        <div className='card shadow p-3 mb-5 mx-3 bg-body-tertiary rounded' style={{width:"400px"}}>
            <img src={AimageUrl} alt="" />

            <div className="card-body">
                <h3>{Atitle}</h3>
                <h4>Price : {Aprice}</h4>
                <h3></h3>
                <p> <i class="bi bi-geo-alt"></i>{Alocation} </p>
                <p>Area : {Aarea}</p>
                <p>lotsize : {AlotSize}</p>
                <p>BathRooms : {Abathrooms}</p>
                <p>YearBulid : {AyearBuilt}</p>

                <p>BedRoom : {Abedrooms}</p>
                <p>Type : {Atype}</p>
                <p>Parking : {Aparking}</p>
                <button className='btn btn-primary'>Know More</button>
            </div>

        </div>





    </div>
  )
}

export default Card