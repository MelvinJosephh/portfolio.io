import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step8Success = ({ onBack, onSubmit, startDate }) => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    companyName: "",
    contactName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contactInfo.email &&
      contactInfo.companyName &&
      contactInfo.contactName &&
      contactInfo.phoneNumber
    ) {
      onSubmit(contactInfo);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <StepTemplate
      title="Success! Let's connect you with talent."
      options={[]} 
      onBack={onBack}
      isFinalStep={true}
    >
      <div className="form-container">
        <p className="form-description">
          Please provide your contact details below to connect with the best talent.
          {startDate && <p>Start date: {startDate}</p>} {/* Display the start date if available */}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={contactInfo.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contactName">Your Name:</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={contactInfo.contactName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </StepTemplate>
  );
};

export default Step8Success;
