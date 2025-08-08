import React, { useState } from "react";
import './contact.css';
import email from '../../assets/gmail.png';
import call from '../../assets/phone-call.png';
import location from '../../assets/location.png';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f0c7fb0e-6800-4041-b7dc-36ce79934f37");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="a" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I’m currently available for new projects and collaborations. Whether you have a question, an idea, or a project in mind — feel free to reach out. I’d love to hear from you!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="Email" />
              <p>bejeesh02@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call" />
              <p>+91 6385221452</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" />
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label>Write your message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button className="contact-submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
