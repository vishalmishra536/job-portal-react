import React, { useState } from "react";
import "./App.css";
function ContactSales() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend API here
    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-sales-container">
        <h1>Contact Sales</h1>
        <p>
          Tell us about your business needs and our sales team will get back to
          you shortly.
        </p>

        {submitted && (
          <div className="success-message">
            Thank you! Our sales team will contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactSales;
