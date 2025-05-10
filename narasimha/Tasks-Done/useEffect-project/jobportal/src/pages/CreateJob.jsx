import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CreateJob = () => {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: '',
    company: '',
    rating: '',
    reviews: '',
    img: '',
    experience: '',
    salary: '',
    location: '',
    work_title: '',
    first_skill: '',
    second_skill: '',
    third_skill: '',
    fourth_skill: '',
    fifth_skill: '',
    days: '',
    openings: '',
    applications: '',
    job_description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generating UUID
    const generateUuid = () => {
      return uuidv4().split('-')[0];
    };

    // current date
    const currentDate = new Date().toISOString();

    const newJob = {
      ...job,
      id: generateUuid(), // unique ID
      posted: currentDate,
      created_by: true
    };

    try {
      const res = await fetch("http://localhost:3000/cardDetails", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      });

      if (res.ok) {
        alert('Job created successfully');
        navigate('/employee/postedjobs');
      } else {
        alert('Failed to post job');
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="container">
      <h3 className="mb-4 text-center">Create a New Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {
            Object.keys(job).map((field, index) => (
              <div className='col-md-6 ' key={index}>
                <label className='form-label text-capitalize'>{field.replace(/_/g, ' ')}  </label>
                {field === 'job_description' ? (
                  <textarea
                    name={field}
                    value={job[field]}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={job[field]}
                    onChange={handleChange}
                    className="form-control"
                    required={field !== 'img' && field !== 'id'}
                  />
                )}

              </div>
            ))
          }
        </div>

        <div className="col-12">
          <button type='submit' className='btn btn-primary mt-3'>Submit Job</button>
        </div>

      </form>
    </div>
  )
}

export default CreateJob
