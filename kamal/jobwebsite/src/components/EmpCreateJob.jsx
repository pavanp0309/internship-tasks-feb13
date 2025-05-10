import React, { useState } from 'react';

const EmpCreateJob = () => {
  const [formData, setFormData] = useState({
    Role: '',
    Name: '',
    img: '',
    ExpFrom: '',
    ExpTo: '',
    Location: '',
    Content: '',
    Skills: '',
    Salary: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employerName = localStorage.getItem('employerName');

    const newJob = {
      id: Date.now().toString(), // returns the number of milliseconds that have passed since January 1, 1970,
      Role: formData.Role,
      Name: formData.Name,
      img: formData.img,
      Exp: {
        From: Number(formData.ExpFrom),
        To: Number(formData.ExpTo)
      },
      Location: formData.Location,
      Content: formData.Content.split('\n').map(line => line.trim()).filter(Boolean),
      // .split('\n'): Split the string at each new line (\n) →
      // .map(line => line.trim()): Remove any extra spaces from each line.
      // .filter(Boolean): Remove any empty lines (e.g., if user hit Enter twice accidentally).
      Skills: formData.Skills.split(',').map(skill => skill.trim()).filter(Boolean),
      Salary: formData.Salary,
      Posted: new Date().getDate(),
      Rating: 0,
      Reviews: 0,
      Responsibilities: 'NOT APPLICABLE',
      Qualifications: 'Bachelors Degree Mandatory',
      AboutCompany: 'Refer Our Website',
      OurServicesInclude: ["NA"],
      CompanyInfo: {
        Address: 'Refer Our Website'
      },
      postedBy: employerName
    };

    try {
      // Add job to activejobs list
      const jobPostRes = await fetch('http://localhost:3000/activejobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJob)
      });

      if (jobPostRes.ok) {
        // jobPostRes.ok returns **true** if the HTTP status code of the response is in the 200–299 range (i.e., a successful request).
        // It returns **false** if the status code indicates an error (like 400, 404, 500, etc.).
        alert('Job posted successfully!');
        setFormData({
          Role: '',
          Name: '',
          img: '',
          ExpFrom: '',
          ExpTo: '',
          Location: '',
          Content: '',
          Skills: '',
          Salary: ''
        });
      } else {
        alert('Failed to post job');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Error posting job');
    }
  };
  
  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow border-primary p-4">
        <h3 className="text-primary mb-4 text-center fw-bold">Post a New Job</h3>
        <form onSubmit={handleSubmit}>
          {/* Role */}
          <div className="mb-3">
            <label htmlFor="Role" className="form-label">Job Role</label>
            <input type="text" className="form-control" id="Role" placeholder="e.g., Software Development Engineer" value={formData.Role} onChange={handleChange} />
          </div>

          {/* Company Name */}
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="Name" placeholder="e.g., Amazon" value={formData.Name} onChange={handleChange} />
          </div>

          {/* Logo URL */}
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Company Logo URL</label>
            <input type="text" className="form-control" id="img" placeholder="Paste image URL here" value={formData.img} onChange={handleChange} />
          </div>

          {/* Experience */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="ExpFrom" className="form-label">Experience From (Years)</label>
              <input type="number" className="form-control" id="ExpFrom" placeholder="e.g., 0" value={formData.ExpFrom} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="ExpTo" className="form-label">Experience To (Years)</label>
              <input type="number" className="form-control" id="ExpTo" placeholder="e.g., 7" value={formData.ExpTo} onChange={handleChange} />
            </div>
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="Location" className="form-label">Job Location</label>
            <input type="text" className="form-control" id="Location" placeholder="e.g., Hyderabad" value={formData.Location} onChange={handleChange} />
          </div>

          {/* Content */}
          <div className="mb-3">
            <label htmlFor="Content" className="form-label">Job Description (Bullet Points)</label>
            <textarea className="form-control" id="Content" rows="5" placeholder="Enter each point in a new line" value={formData.Content} onChange={handleChange}></textarea>
          </div>

          {/* Skills */}
          <div className="mb-3">
            <label htmlFor="Skills" className="form-label">Skills (Comma-separated)</label>
            <input type="text" className="form-control" id="Skills" placeholder="e.g., Procurement, Retail, Purchase, B2B" value={formData.Skills} onChange={handleChange} />
          </div>

          {/* Salary */}
          <div className="mb-3">
            <label htmlFor="Salary" className="form-label">Salary</label>
            <input type="text" className="form-control" id="Salary" placeholder="e.g., ₹18-25 LPA" value={formData.Salary} onChange={handleChange} />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100 fw-semibold">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default EmpCreateJob;
