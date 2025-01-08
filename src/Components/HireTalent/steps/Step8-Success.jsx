import React, { useState } from "react";
import { useStepContext } from "../../../Context/StepContext.js";
import StepTemplate from "../shared/StepTemplate";
import { StyledTextField } from "../../Shared/StyledComponents.jsx";
import "../../../Styles/HireTalent/Step8Success.scss";
import axios from "axios"; // Import axios

const Step8Success = ({ onBack, onSubmit }) => {
  const { formData } = useStepContext();
  const { startDate } = formData;

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

  const handleSubmit = async () => {
    // Validate that all fields are filled
    if (
      contactInfo.email &&
      contactInfo.companyName &&
      contactInfo.contactName &&
      contactInfo.phoneNumber
    ) {
      // Combine contactInfo with the form data from the context
      const hiringData = { ...formData, contactInfo };

      try {
        // Make the POST request using axios
        const response = await axios.post("http://localhost:5000/api/submit-hiring-form", hiringData, {
          headers: {
            "Content-Type": "application/json", // Ensure the backend knows we're sending JSON
          },
        });

        if (response.status === 200 || response.status === 201) {
          // Handle success (e.g., show success message or go to the next step)
          alert("Form submitted successfully!");
          onSubmit(contactInfo); // Optionally call onSubmit to handle the contact info in the parent
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the form.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <StepTemplate
      title="Success! Let's connect you with talent."
      options={[]}
      onBack={onBack}
      onNext={handleSubmit}  // Pass the handleSubmit function here
      isFinalStep={true}
    >
      <div className="form-container">
        <p className="form-description">
          Please provide your contact details below to connect with the best talent.
          {startDate && <p>Start date: {startDate}</p>}
        </p>
        <form>
          <div className="form-field">
            <StyledTextField
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Company Name"
              type="text"
              id="companyName"
              name="companyName"
              value={contactInfo.companyName}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Your Name"
              type="text"
              id="contactName"
              name="contactName"
              value={contactInfo.contactName}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
        </form>
      </div>
    </StepTemplate>
  );
};

export default Step8Success;
