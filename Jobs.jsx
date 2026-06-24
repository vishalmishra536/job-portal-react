import React, { useState } from "react";

function Jobs() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="register-info">
            <h1>Unlock Your Next Career Opportunity</h1>

            <p>
              Create your account, showcase your skills, and connect with
              employers who are searching for exceptional talent like you. 🚀
            </p>
            {/* Image Section */}

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Job Portal"
              className="img-fluid rounded-4 shadow w-100"
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Filter Section */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm p-4">
            {/* Search */}
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Search Jobs"
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>

            {/* Category */}
            <select className="form-select mb-4">
              <option>All Categories</option>
              <option>Software Development</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>

            {/* Job Type */}
            <h5 className="fw-bold">Job Type</h5>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="fulltime"
              />
              <label className="form-check-label" htmlFor="fulltime">
                Full Time
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="parttime"
              />
              <label className="form-check-label" htmlFor="parttime">
                Part Time
              </label>
            </div>

            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="remote" />
              <label className="form-check-label" htmlFor="remote">
                Remote
              </label>
            </div>

            {/* Experience */}
            <h5 className="fw-bold">Experience</h5>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="fresher"
              />
              <label className="form-check-label" htmlFor="fresher">
                Fresher
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="exp1" />
              <label className="form-check-label" htmlFor="exp1">
                1-3 Years
              </label>
            </div>

            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="exp3" />
              <label className="form-check-label" htmlFor="exp3">
                5+ Years
              </label>
            </div>

            {/* Salary */}
            <h5 className="fw-bold">Salary</h5>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="salary1"
              />
              <label className="form-check-label" htmlFor="salary1">
                ₹3-5 LPA
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="salary2"
              />
              <label className="form-check-label" htmlFor="salary2">
                ₹5-10 LPA
              </label>
            </div>

            <button className="btn btn-primary w-100 mt-4">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
