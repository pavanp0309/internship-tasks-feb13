// import React from "react";
// import { Link } from "react-router-dom";
// const EmployerSignin = () => {

//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
//       style={{ backgroundColor: "#f5f5f5" }}
//     >
//       <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
//         <div className="card-body p-4">
//           <h3 className="text-center mb-4" style={{ color: "#0056b3", fontFamily: "Montserrat, sans-serif" }}>
//             Employer EmployerSignin
//           </h3>
//           <form>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control border-0 rounded-pill shadow-sm py-3"
//                 placeholder="Username"
//                 required
//                 style={{ backgroundColor: "#e9f2ff" }}
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 className="form-control border-0 rounded-pill shadow-sm py-3"
//                 placeholder="Password"
//                 required
//                 style={{ backgroundColor: "#e9f2ff" }}
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary w-100 rounded-pill py-3 shadow-sm"
//               style={{ fontSize: "1.1rem", fontWeight: "500", backgroundColor: "#0056b3" }}
//             >
//               EmployerSignin
//             </button>
//           </form>
//           <div className="text-center mt-3">
//             <p className="text-muted">
//               Don't have an account? <Link to="/employersignup" style={{ textDecoration: "none", color: "#0056b3" }}>Sign Up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerSignin;


import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const EmployerSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect immediately if already the employer is logged in
  const empIsLoggedIn = localStorage.getItem("isEmployerLoggedIn") === "true";
  if (empIsLoggedIn) {
    return <Navigate to="/employerdashboard/profile" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/employers"); // JSON server endpoint
      const data = await res.json();

      const matchedUser = data.find(
        (emp) => emp.name === username && emp.password === password // Comparing the .name(from db.json) with username from the useState; Similarly Password
      );

      if (matchedUser) {
        localStorage.setItem("isEmployerLoggedIn", "true");
        // localStorage.setItem("empId", matchedUser.empId); // Store empId so that Unique Employers can see only what they have posted
        localStorage.setItem("employerName", matchedUser.name); // This is to assign postedBy key in the db.json file; so that Unique Employers can see only what they have posted
        navigate("/employerdashboard"); // Redirect to dashboard
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching employers:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-4">
          <h3
            className="text-center mb-4"
            style={{ color: "#0056b3", fontFamily: "Montserrat, sans-serif" }}
          >
            Employer Login
          </h3>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0 rounded-pill shadow-sm py-3"
                placeholder="Full Name"
                required
                style={{ backgroundColor: "#e9f2ff" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control border-0 rounded-pill shadow-sm py-3"
                placeholder="Password"
                required
                style={{ backgroundColor: "#e9f2ff" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 rounded-pill py-3 shadow-sm"
              style={{ fontSize: "1.1rem", fontWeight: "500", backgroundColor: "#0056b3" }}
            >
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="text-muted">
              Don't have an account?{" "}
              <Link
                to="/employersignup"
                style={{ textDecoration: "none", color: "#0056b3" }}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignin;
