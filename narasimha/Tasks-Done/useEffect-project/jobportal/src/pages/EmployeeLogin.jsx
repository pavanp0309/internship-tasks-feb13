import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const EmployeeLogin = ({ onEmpLogin }) => {

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  }

  // handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    try {
      const res = await fetch("http://localhost:3000/employers");
      const data = await res.json();

      let matchUser = data.find(user => user.email === email && user.password === password);

      if (matchUser) {
        localStorage.setItem("EmployeeLogged", JSON.stringify(matchUser));
        localStorage.setItem("empLogin", "true");
        onEmpLogin();
        alert("Login Successful");
        navigate('/employee');
      }
      else {
        alert("Invalid email or password")
      }

    } catch (error) {
      console.error(error.name)
      alert("something went wrong , try after sometime")
    }
  }

  return (
    <div className='container' style={{ marginTop: '40px' }}>
      <div className="main w-100 h-100">
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }}
        >
          <div className="card p-5 shadow-lg my-5 rounded-4" style={{ width: '600px', height: '500px' }}>
            <h2 className="text-center fw-bold">Log in</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label mx-2 fs-6">Email address</label>
                <input type="email" name='email' value={loginData.email} onChange={handleChange} className="form-control p-3" placeholder="Enter Email" />
              </div>
              <div className="mb-3">
                <label className="form-label mx-2 fs-6">Password</label>
                <input type="password" name='password' value={loginData.password} onChange={handleChange} className="form-control p-3" placeholder="Enter password" />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary p-3 fw-semibold" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <p className="my-4 text-muted text-center">
              Don't have an account? <NavLink to="/register">Register</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeLogin
