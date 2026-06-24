import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
function Login() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Job Portal"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg p-4 rounded-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Welcome Back</h2>

                <p className="text-muted">Login to access your account</p>
              </div>

              <form>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Remember */}
                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />

                    <label className="form-check-label">Remember Me</label>
                  </div>

                  <a href="/forgot-password" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Login
                </button>

                {/* Divider */}
                <div className="text-center my-3">
                  <span className="text-muted">OR</span>
                </div>

                {/* Social Login */}
                <button
                  type="button"
                  className="btn btn-outline-dark w-100 mb-2"
                >
                  Continue with Google
                </button>

                <button type="button" className="btn btn-outline-primary w-100">
                  Continue with LinkedIn
                </button>

                {/* Register */}
                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-primary fw-bold text-decoration-none"
                  >
                    Register Now
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
