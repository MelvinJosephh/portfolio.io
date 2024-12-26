import React from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate back to the job listings or other pages
import '../../Styles/Freelancers/ConfirmationPage.scss';

const ConfirmationPage = () => {
  const navigate = useNavigate();  // useNavigate to handle navigation after form submission

  const handleGoBack = () => {
    navigate('/jobs');  // Navigate back to the Job Listings page after confirmation
  };

  return (
    <div className="confirmation-page">
      <h1>Thank you for applying!</h1>
      <p>Your application has been successfully submitted. We will get back to you soon.</p>
      <button onClick={handleGoBack} className="cta-button">
        Back to Job Listings
      </button>
    </div>
  );
};

export default ConfirmationPage;
