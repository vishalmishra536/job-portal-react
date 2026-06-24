import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const handleSearch = () => {
    const theSearch = `${search} ${location}`;
    console.log("Your Job & Location Details :", theSearch);
  };
  return (
    <>
      {/* Hero */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Find Your Dream Job Today</h1>

              <p className="lead">
                Explore thousands of opportunities from top companies.
              </p>

              <div className="card p-3 shadow border-0">
                <div className="row g-2">
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="col-md-3">
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="img-fluid rounded shadow"
                alt="job"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Jobs</h2>

          <div className="row">
            {[
              "Frontend Developer",
              "Backend Developer",
              "UI Designer",
              "DevOps Engineer",
              "Business Analyst",
              "Content Writer",
              "SEO Specialist",
              "Android Developer",
              "AI/ML Engineer",
            ].map((job, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h5>{job}</h5>
                    <p className="text-muted">Full Time • Remote</p>

                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Popular Categories</h2>

          <div className="row">
            {[
              "Software",
              "Marketing",
              "Finance",
              "Healthcare",
              "HR",
              "Engineering",
              "Graphic Design",
              "Customer Support",
              "Remote Jobs",
              "Internship Opportunities",
              "Freelance Projects",
              "Education & Training",
            ].map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card text-center border-0 shadow-sm p-4">
                  <h5>{item}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Dashboard Preview */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Candidate Dashboard Features</h2>

          <div className="row">
            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Profile</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Resume</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Applied Jobs</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Saved Jobs</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Dashboard Preview */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Recruiter Dashboard Features</h2>

          <div className="row">
            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Post Job</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Manage Jobs</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Applicants</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4 text-center shadow-sm">
                <h5>Company Profile</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h1>10K+</h1>
              <p>Jobs Posted</p>
            </div>

            <div className="col-md-3">
              <h1>5K+</h1>
              <p>Companies</p>
            </div>

            <div className="col-md-3">
              <h1>50K+</h1>
              <p>Job Seekers</p>
            </div>

            <div className="col-md-3">
              <h1>3K+</h1>
              <p>Placements</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
