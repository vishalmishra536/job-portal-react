import React from "react";
import "./App.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to JobConnect, a modern job portal designed to bridge the gap
          between talented professionals and leading employers. Our platform
          simplifies the hiring process by providing an efficient and secure
          environment for job seekers and recruiters.
        </p>

        <div className="about-grid">
          <div className="card">
            <h2>Our Mission</h2>
            <p>
              To empower job seekers with career opportunities and help
              organizations discover the best talent through innovative
              recruitment solutions.
            </p>
          </div>

          <div className="card">
            <h2>Our Vision</h2>
            <p>
              To become the most trusted and accessible employment platform,
              connecting talent with opportunities across industries.
            </p>
          </div>

          <div className="card">
            <h2>For Job Seekers</h2>
            <p>
              Search jobs, upload resumes, track applications, and discover
              opportunities that match your skills and career goals.
            </p>
          </div>

          <div className="card">
            <h2>For Employers</h2>
            <p>
              Post jobs, manage applications, and find qualified candidates
              quickly through our streamlined recruitment process.
            </p>
          </div>
        </div>

        <div className="features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Easy Job Search & Application</li>
            <li>✔ Secure Resume Management</li>
            <li>✔ Real-Time Job Updates</li>
            <li>✔ User-Friendly Dashboard</li>
            <li>✔ Fast and Reliable Recruitment Process</li>
            <li>✔ Mobile-Friendly Responsive Design</li>
          </ul>
        </div>

        <div className="footer-text">
          <h3>Connecting Talent with Opportunity</h3>
          <p>
            We believe every individual deserves the right opportunity, and
            every organization deserves the right talent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
