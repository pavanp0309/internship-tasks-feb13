import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("EmployeeLogged"));
    if (stored) {
      setProfile(stored);
    }
  }, []);

  if (!profile) {
    return <p>Loading Profile...</p>
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card p-4 shadow-lg rounded-4" style={{ maxWidth: '700px', width: '100%' }}>
        <div className="text-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYw_kgIe1RYk4WRf-myp7-sieYs82YdvHLA&s"
            alt="profile"
            className="rounded-circle shadow"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h3 className="mt-3 fw-bold">{profile.name}</h3>
        </div>

        <hr />

        <div className="row text-start">
          <div className="col-sm-6 mb-3">
            <strong>Employee ID:</strong>
            <p className="text-muted mb-0">{profile.id}</p>
          </div>
          <div className="col-sm-6 mb-3">
            <strong>Email:</strong>
            <p className="text-muted mb-0">{profile.email}</p>
          </div>
          <div className="col-sm-6 mb-3">
            <strong>Company:</strong>
            <p className="text-muted mb-0">{profile.company}</p>
          </div>
          <div className="col-sm-6 mb-3">
            <strong>Role:</strong>
            <p className="text-muted mb-0">{profile.role}</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-primary" onClick={()=>navigate('/employee/editprofile')}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
