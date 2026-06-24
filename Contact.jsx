import React from "react";
import "./App.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>
            Have questions, suggestions, or need support? We'd love to hear from
            you. Fill out the form and our team will get back to you as soon as
            possible.
          </p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>New Delhi, India</p>
          </div>

          <div className="info-box">
            <h4>📧 Email</h4>
            <p>support@jobportal.com</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="contact-form-box">
          <form>
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="text" placeholder="Subject" required />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
