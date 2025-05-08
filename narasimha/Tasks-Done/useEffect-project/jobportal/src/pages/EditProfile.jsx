import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        company: '',
        role: ''
    });

    // getting employee data from local storage
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("EmployeeLogged"));
        if (user) {
            setFormData(user);
        }
    }, []);

    // Data from input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

    }

    // Editing the data
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await fetch(`http://localhost:3000/employers/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            localStorage.setItem("EmployeeLogged", JSON.stringify(formData));
            alert("Profile updated Successfully")
            navigate("/employee/profile")

        } catch (error) {
            console.error(error.name);
        }
    }

    return (
        <div className='container ' >
            <h3 className='text-center  mb-4'>Edit Profile</h3>
            <form onSubmit={handleSubmit} className="p-4 shadow rounded-4 bg-light">
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Employee ID</label>
                    <input type="text" className="form-control" name="id" value={formData.id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Company</label>
                    <input type="text" className="form-control" name="company" value={formData.company} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Role</label>
                    <input type="text" className="form-control" name="role" value={formData.role} onChange={handleChange} />
                </div>
                <button className="btn btn-success" type="submit">Save Changes</button>
            </form>

        </div>
    )
}

export default EditProfile
