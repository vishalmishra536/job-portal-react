import { Link } from "react-router-dom";

function Company() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-12 col-lg-6">
              <span className="badge bg-primary mb-3">Employer Solutions</span>

              <h2 className="fw-bold mb-3">
                Find the Right Talent for Your Business
              </h2>

              <p className="text-muted mb-4">
                Simplify your hiring process with our powerful recruitment
                platform. Post jobs, manage applications, and connect with
                qualified candidates from various industries. Whether you're
                hiring for a startup or an enterprise, we help you find the
                perfect fit faster.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary">
                  <Link to="/postjob" className="nav-link">
                    Post a Job{" "}
                  </Link>
                </button>

                <button className="btn btn-outline-primary">
                  <Link to="/contactsales" className="nav-link">
                    {" "}
                    Contact Sales
                  </Link>
                </button>
              </div>
            </div>

            {/* Right Benefits Cards */}
            <div className="col-12 col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="card border-0 shadow-sm text-center p-4 h-100">
                    <h3 className="fw-bold text-primary">10K+</h3>
                    <p className="mb-0">Qualified Candidates</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card border-0 shadow-sm text-center p-4 h-100">
                    <h3 className="fw-bold text-primary">500+</h3>
                    <p className="mb-0">Trusted Employers</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card border-0 shadow-sm text-center p-4 h-100">
                    <h3 className="fw-bold text-primary">24 hrs</h3>
                    <p className="mb-0">Average Response Time</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card border-0 shadow-sm text-center p-4 h-100">
                    <h3 className="fw-bold text-primary">95%</h3>
                    <p className="mb-0">Hiring Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="row mt-5 g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h5>Post Jobs Instantly</h5>
                <p className="text-muted mb-0">
                  Create and publish job listings in minutes and reach thousands
                  of active job seekers.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h5>Manage Applicants</h5>
                <p className="text-muted mb-0">
                  Track applications, shortlist candidates, and organize your
                  hiring workflow from one dashboard.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h5>Hire Smarter</h5>
                <p className="text-muted mb-0">
                  Access candidate profiles, resumes, and skills to make
                  informed hiring decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
