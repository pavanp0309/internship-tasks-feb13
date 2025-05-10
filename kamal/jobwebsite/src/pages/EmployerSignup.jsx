// import React from 'react';
// import { Link } from 'react-router-dom'; // assuming you're using React Router

// const EmployerSignup = () => {
//   return (
//     <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
//       <div className="row shadow rounded-4 w-100">
        
//         {/* Left Image */}
//         <div className="col-md-5 col-sm-12 p-0 d-flex align-items-center">
//           <img
//             src="https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg?semt=ais_hybrid&w=740"
//             alt="Employer"
//             className="img-fluid w-100 h-100"
//             style={{ borderRight: '1px solid #dee2e6' }}
//           />
//         </div>

//         {/* Right Form */}
//         <div className="col-md-7 col-sm-12 bg-white p-5">
//           <h2 className="mb-4 text-center text-primary fw-bold" style={{ fontFamily: 'Segoe UI' }}>
//             Employer Signup
//           </h2>

//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Full Name</label>
//               <input type="text" className="form-control" id="name" placeholder="Enter full name" />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="employeeId" className="form-label">Employee ID</label>
//               <input type="text" className="form-control" id="employeeId" placeholder="Enter your employee ID" />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="company" className="form-label">Company Name</label>
//               <input type="text" className="form-control" id="company" placeholder="Enter company name" />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="role" className="form-label">Role/Position</label>
//               <input type="text" className="form-control" id="role" placeholder="Enter your role" />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input type="password" className="form-control" id="password" placeholder="Enter password" />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">Re-type Password</label>
//               <input type="password" className="form-control" id="confirmPassword" placeholder="Re-type your password" />
//             </div>

//             <div className="form-check mb-4">
//               <input className="form-check-input" type="checkbox" id="remember" />
//               <label className="form-check-label" htmlFor="remember">
//                 Remember me
//               </label>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 fw-semibold mb-3">
//               Sign Up
//             </button>

//             <div className="text-center">
//               Already have an account? <Link to="/employersignin">Login here</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerSignup;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const EmployerSignup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     employeeId: '',
//     company: '',
//     role: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSignup = async () => {
//     const { name, employeeId, company, role, password, confirmPassword } = formData;

//     // Simple validations
//     if (!name || !employeeId || !company || !role || !password || !confirmPassword) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     const newEmployer = {
//       name,
//       employeeId,
//       company,
//       role,
//       password
//     };

//     const response = await fetch('http://localhost:3000/employers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newEmployer)
//     });

//     const data = await response.json();
//     console.log('Signed up:', data);

//     // Redirect to employer login
//     navigate('/employersignin');
//   };

//   return (
//     <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
//       <div className="row shadow rounded-4 w-100">
        
//         {/* Left Image */}
//         <div className="col-md-5 col-sm-12 p-0 d-flex align-items-center">
//           <img
//             src="https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg?semt=ais_hybrid&w=740"
//             alt="Employer"
//             className="img-fluid w-100 h-100"
//             style={{ borderRight: '1px solid #dee2e6' }}
//           />
//         </div>

//         {/* Right Form */}
//         <div className="col-md-7 col-sm-12 bg-white p-5">
//           <h2 className="mb-4 text-center text-primary fw-bold" style={{ fontFamily: 'Segoe UI' }}>
//             Employer Signup
//           </h2>

//           {error && <div className="alert alert-danger">{error}</div>}

//           <div className="mb-3">
//             <label className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter full name"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Employee ID</label>
//             <input
//               type="text"
//               className="form-control"
//               name="employeeId"
//               value={formData.employeeId}
//               onChange={handleChange}
//               placeholder="Enter your employee ID"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Company Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               placeholder="Enter company name"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Role/Position</label>
//             <input
//               type="text"
//               className="form-control"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               placeholder="Enter your role"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Re-type Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Re-type your password"
//             />
//           </div>

//           <button onClick={handleSignup} className="btn btn-primary w-100 fw-semibold mb-3">
//             Sign Up
//           </button>

//           <div className="text-center">
//             Already have an account? <a href="/employersignin">Login here</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerSignup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    joined: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,  // this is spread operator 
      [name]: value
    }));
  };

  const handleSignup = async () => {
    const {
      name,
      employeeId,
      company,
      role,
      email,
      phone,
      location,
      joined,
      password,
      confirmPassword
    } = formData;

    if (
      !name ||
      !employeeId ||
      !company ||
      !role ||
      !email ||
      !phone ||
      !location ||
      !joined ||
      !password ||
      !confirmPassword
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const newEmployer = {
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

    const response = await fetch('http://localhost:3000/employers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployer)
    });

    const data = await response.json();
    console.log('Signed up:', data);

    // Reset form fields before navigation
    setFormData({
      name: '',
      employeeId: '',
      company: '',
      role: '',
      email: '',
      phone: '',
      location: '',
      joined: '',
      password: '',
      confirmPassword: ''
    });

    navigate('/employersignin');
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row shadow rounded-4 w-100" style={{ maxHeight: '95vh' }}>
        
        {/* Left Image */}
        <div className="col-md-5 col-sm-12 p-0 d-flex align-items-center">
          <img
            src="https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg?semt=ais_hybrid&w=740"
            alt="Employer"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', borderRight: '1px solid #dee2e6' }}
          />
        </div>
  
        {/* Right Form */}
        <div className="col-md-7 col-sm-12 bg-white p-3 overflow-auto" style={{ maxHeight: '95vh' }}>
          <h4 className="mb-3 text-center text-primary fw-bold" style={{ fontFamily: 'Segoe UI' }}>
            Employer Signup
          </h4>
  
          {error && <div className="alert alert-danger">{error}</div>}
  
          <div className="mb-2">
            <label className="form-label small">Full Name</label>
            <input type="text" className="form-control form-control-sm" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Employee ID</label>
            <input type="text" className="form-control form-control-sm" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Enter your employee ID" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Company Name</label>
            <input type="text" className="form-control form-control-sm" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Role/Position</label>
            <input type="text" className="form-control form-control-sm" name="role" value={formData.role} onChange={handleChange} placeholder="Enter your role" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Email</label>
            <input type="email" className="form-control form-control-sm" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Phone Number</label>
            <input type="text" className="form-control form-control-sm" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Location</label>
            <input type="text" className="form-control form-control-sm" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Joining Date</label>
            <input type="date" className="form-control form-control-sm" name="joined" value={formData.joined} onChange={handleChange} />
          </div>
  
          <div className="mb-2">
            <label className="form-label small">Password</label>
            <input type="password" className="form-control form-control-sm" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
          </div>
  
          <div className="mb-3">
            <label className="form-label small">Re-type Password</label>
            <input type="password" className="form-control form-control-sm" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-type your password" />
          </div>
  
          <button onClick={handleSignup} className="btn btn-primary w-100 fw-semibold mb-2">
            Sign Up
          </button>
  
          <div className="text-center small">
            Already have an account? <a href="/employersignin">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default EmployerSignup;
