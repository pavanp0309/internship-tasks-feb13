import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const EmployeeRegister = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        empId: '',
        empCompany: '',
        empRole: ''
    });

    // Handling the input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

    }

    // Handling submit

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { firstName, lastName, email, password, rePassword, empId, empCompany, empRole } = formData;

        // checking for password match
        if (password !== rePassword) {
            alert("Passwords doesn't match");
            return;
        }

        // creating new employee object
        const newEmployee = {
            id: empId,
            name: `${firstName} ${lastName}`,
            email,
            password,
            company: empCompany,
            role: empRole

        };

        // Send POST request to server to create new employee
        try {
            const res = await fetch("http://localhost:3000/employers", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmployee)
            });

            // Check server response
            if (res.ok) {
                alert("Registration successful");
                navigate('/employeelogin')
            }
            else {
                alert('Failed to Register')
            }


        } catch (error) {
            console.error(error.name)
        }

    }

    return (
        <div className='container  d-flex justify-content-center ' style={{ marginTop: '150px' }}>
            <div className="card rounded-4 shadow-lg rounded p-5 " style={{ width: '60vw' }}>
                <form onSubmit={handleSubmit} >
                    <h2 className='text-center mb-5 ' style={{ fontFamily: 'revert' }}>Employee Registration Form</h2>

                    {/** Name */}
                    <div className='d-flex justify-content-between fw-bold mb-3 '>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label" style={{ width: '400px' }}>First Name</label>
                            <input type="text" placeholder='Enter your First Name' class="form-control p-2" id="exampleInputName" aria-describedby="nameHelp" onChange={handleChange} name="firstName" value={formData.firstName} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label" style={{ width: '400px' }}>Last Name</label>
                            <input type="text" placeholder='Enter your Last Name' class="form-control p-2" id="exampleInputName" aria-describedby="nameHelp" onChange={handleChange} name="lastName" value={formData.lastName} />
                        </div>
                    </div>

                    {/** Email */}
                    <div class="mb-3  fw-bold mb-4">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" placeholder='Enter your Email ' class="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} value={formData.email} />
                    </div>

                    {/** Password */}
                    <div className='d-flex justify-content-between mb-4  fw-bold'>
                        <div >
                            <label for="exampleInputPassword1" class="form-label" style={{ width: '400px' }}>Password</label>
                            <input type="password" placeholder='Enter your Password' class="form-control p-2" id="exampleInputPassword1" name="password" onChange={handleChange} value={formData.password} />
                        </div>
                        <div >
                            <label for="exampleInputPassword1" class="form-label" style={{ width: '400px' }}>Confirm Password</label>
                            <input type="password" placeholder='Confirm your Password' class="form-control p-2" id="exampleInputPassword1" name="rePassword" onChange={handleChange} value={formData.rePassword} />
                        </div>
                    </div>


                    {/** Employee Id */}
                    <div class=" fw-bold mb-4">
                        <label for="exampleInputPassword1" class="form-label" >Employee Id</label>
                        <input type="text" placeholder='Enter Employee Id' class="form-control p-2" id="exampleInputPassword1" name="empId" onChange={handleChange} value={formData.empId} />
                    </div>

                    {/** Employee company */}
                    <div class=" fw-bold mb-4">
                        <label for="exampleInputPassword1" class="form-label" >Employee Company</label>
                        <input type="text" placeholder='Enter Company Name' class="form-control p-2" id="exampleInputPassword1" name="empCompany" onChange={handleChange} value={formData.empCompany} />
                    </div>

                    {/** Employee role */}
                    <div class="mb-4 fw-bold ">
                        <label for="exampleInputPassword1" class="form-label" >Employee Role</label>
                        <input type="text" placeholder='Enter Company Role' class="form-control p-2" id="exampleInputPassword1" name="empRole" onChange={handleChange} value={formData.empRole} />
                    </div>


                    {/** check box */}
                    <div class="mb-5 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label " for="exampleCheck1">Check me out</label>
                    </div>
                    <div >
                        <button type="submit" class="btn btn-lg btn-primary ">Register</button>
                    </div>
                    <p className='text-muted text-center fs-5'>If you are already registered? Please <NavLink to="/employeelogin">Login here</NavLink> </p>
                </form>
            </div>


        </div>
    )
}

export default EmployeeRegister
