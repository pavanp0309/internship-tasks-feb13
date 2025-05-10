import React from 'react'

const MeditationSession = (props) => {
    const {Aid,Aname,Aimage,Acategory,AisLocked,AisPremium,Adescription,Aduration}=props
    const getBackgroundColor = () => {
        if (AisPremium && AisLocked) {
            return "green"; // Premium and locked
        } else {
            return "red"; // Not premium or unlocked
        }
    };
    const bg = getBackgroundColor(); 
  return (
    <div>
      <div className="card shadow-sm border-0 rounded-4 text-center h-100">
        <div className="card-body d-flex flex-column justify-content-between">
        <img
          src={Aimage}
          alt={Aname}
          className="card-img-top rounded-top"
          style={{ objectFit: "cover", height: "200px" }}
        />
          <h4 className="card-title mb-3 text-primary">{Aname}</h4>
          <div className="d-flex justify-content-center gap-3 mb-2">
            {AisPremium ? (
              <span className="badge bg-primary">Premium</span>
            ) : (
              <span className="badge bg-success">Normal</span>
            )}
            {AisLocked && <span className="badge bg-warning text-dark">Locked</span>}
          </div>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Category: <strong>{Acategory}</strong></li>
            <li className="list-group-item">Duration: <strong>{Aduration}</strong></li>
          </ul>
          <p className="card-text mb-3 text-muted">{Adescription}</p>
          <button
            className={`btn ${
              AisPremium && AisLocked ? 'btn-danger' : 'btn-primary'
            } w-75 mx-auto`}
          >
            {AisLocked && AisPremium ? 'Unlock Session' : 'Start Session'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MeditationSession