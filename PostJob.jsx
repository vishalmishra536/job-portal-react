import React, { useState } from "react";
import "./App.css";
function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.table("Job Posted:", job);

    setSubmitted(true);

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="contact-job-container">
      <h1>Post a Job</h1>

      {submitted && (
        <div className="success-message">Job posted successfully!</div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
