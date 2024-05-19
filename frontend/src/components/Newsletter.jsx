import React, { useState } from "react";
import "../styles/News.css";
const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("You have subscribed successfully!");
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="container_newsletter" id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER.</h1>
      <div className="formwrapper">
        <form onSubmit={handleSubmit}>
          <div className="upperinput">
            <input
              className="Input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
            <input
              className="Input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>
          <input
            className="Input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
          <button type="submit" className="btn subscribeButton">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
