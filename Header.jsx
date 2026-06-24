import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="/">
            JobPortal
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Jobs" className="nav-link">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company" className="nav-link">
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link
                  to="/login"
                  className="btn btn-outline-primary text-decoration-none"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  to="/register"
                  className="btn btn-primary text-decoration-none"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
