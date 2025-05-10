import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Employee = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("EmployeeLogged"));
        if (!user) {
            navigate('/employeelogin')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem("EmployeeLogged");
        navigate("/");
    }

    return (
        <div className="container-fluid d-flex p-0" style={{ height: '100vh' }}>
            {/* Sidebar */}
            <div
                className="bg-light"
                style={{
                    height: '100vh', width: '400px', position: 'sticky', top: 0, left: 0,
                    boxShadow: '2px 0px 10px rgba(0,0,0,0.1)', overflowY: 'auto',
                }}
            >
                <h5 className='fw-bold fs-3 p-4 mx-3'>Dashboard</h5>
                <ul className="nav flex-column fs-5 mx-4">
                    <li className="nav-item mb-3">
                        <NavLink to="/employee/profile" className="nav-link"><i className="bi bi-person-fill me-2"></i> Profile</NavLink>
                    </li>
                    <li className="nav-item mb-3">
                        <NavLink to="/employee/postedjobs" className="nav-link"><i className="bi bi-briefcase-fill me-2"></i> Posted Jobs</NavLink>
                    </li>
                    <li className="nav-item mb-3">
                        <NavLink to="/employee/createjob" className="nav-link"> <i className="bi bi-file-earmark-plus me-2"></i> Create a Job</NavLink>
                    </li>
                    <li className="nav-item mb-3">
                        <NavLink className="nav-link"><i className="bi bi-gear-fill me-2"></i> Settings</NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger mt-3 mx-3" onClick={handleLogout}> <i className="bi bi-box-arrow-right me-2"></i> Logout</button>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div
                className="p-5 w-100 bg-white d-flex flex-column"
                style={{ overflowY: 'auto', height: '100vh', }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Employee;
