import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register-page">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="register-info">
              <h1>Join JobPortal Today</h1>

              <p>
                Create your account and connect with top companies to find your
                dream job.
              </p>

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Register"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 register-card">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-primary">
                  Create Account
                </h2>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Select Role</label>

                    <select className="form-select">
                      <option>Job Seeker</option>
                      <option>Recruiter</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Create password"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Upload Resume</label>

                    <input type="file" className="form-control" />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Create Account
                  </button>

                  <div className="text-center mt-3">
                    Already have an account?
                    <Link
                      to="/login"
                      className="ms-2 text-decoration-none fw-bold"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
