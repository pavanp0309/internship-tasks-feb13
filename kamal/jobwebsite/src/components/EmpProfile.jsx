import React, { useEffect, useState } from 'react';

const EmpProfile = () => {
  const [employer, setEmployer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const loggedInName = localStorage.getItem("employerName");

  useEffect(() => {
    fetch("http://localhost:3000/employers") // This line sends a GET request to your local JSON server (i.e., db.json) at the endpoint /employers.
      .then(response => response.json()) // This line -> when server responds, it gives raw response and converts that response to json
      .then(data => { // This is where we get actual employer data
        const match = data.find(emp => emp.name.toLowerCase() === loggedInName?.toLowerCase());
        // loggedInName?.toLowerCase() -> ? means it is optional chaining operator
        // "If loggedInName is not null or undefined, then call .toLowerCase() on it."
        // Otherwise, just return undefined instead of throwing an error.

        setEmployer(match);
        setFormData(match); // Normally you would take empty object here as initial state, but this time the initial state should be what ever data is coming after the fetch (so that it would show earlier details to the user while editing)
      })
      .catch(error => {
        console.error("Error fetching employer data:", error);
      });
  }, [loggedInName]);
  // console.log('the employer is :',employer)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    //  Create a separate object to send
    const updatedData = {
      id: employer.id,
      name: formData.name,
      employeeId: formData.employeeId,
      company: formData.company,
      role: formData.role,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      joined: formData.joined,
      password: formData.password
    };

    const response = await fetch(`http://localhost:3000/employers/${employer.id}`, {
      method: "PUT", 
      // POST -> For creating new data
      // PUT  -> For updating existing data
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (response.ok) {
      const updated = await response.json();
      setEmployer(updated);  // update display
      setFormData(updated)   // sync with form
      setIsEditing(false);   // exit edit mode
      localStorage.setItem("employerName", updated.name); //  Update localStorage with new name
    } else {
      console.error("Failed to update employer");
    }
  };

  if (!employer || !formData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh', backgroundColor: '#f4f6f8' }}>
      <div className="card shadow border-primary rounded-4 p-5" style={{ maxWidth: '700px', width: '100%' }}>

        {/* Profile Image */}
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            style={{ width: '90px' }}
            className="mb-3"
          />
          {isEditing ? (
            <>
              <input className="form-control mb-2" name="name" value={formData.name} onChange={handleChange} />
              <input className="form-control" name="role" value={formData.role} onChange={handleChange} />
            </>
          ) : (
            <>
              <h3 className="fw-bold text-primary mb-1">{employer.name}</h3>
              <p className="text-muted fs-5">{employer.role}</p>
            </>
          )}
        </div>

        {/* Details */}
        <div className="px-2 fs-5">
          {['employeeId', 'company', 'email', 'phone', 'location', 'joined'].map((field) => (
            <p key={field}>
              <strong>{field[0].toUpperCase() + field.slice(1)}:</strong>{' '}
              {isEditing ? (
                <input
                  className="form-control"
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              ) : (
                employer[field]
              )}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-4">
          {isEditing ? (
            <>
              <button onClick={handleUpdate} className="btn btn-success px-5 py-2 fw-semibold me-2">Save</button>
              <button onClick={() => { setIsEditing(false); setFormData(employer); }} className="btn btn-secondary px-5 py-2 fw-semibold">Cancel</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} className="btn btn-outline-primary px-5 py-2 fw-semibold">Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );  
};

export default EmpProfile;
