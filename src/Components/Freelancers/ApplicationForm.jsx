import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // to get jobId from the URL
import { StyledButton, StyledTextField } from "../Shared/StyledComponents.jsx";
import '../../Styles/Freelancers/ApplicationForm.scss';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Build and maintain user interfaces for web applications.',
  },
  {
    id: 2,
    title: 'Content Writer',
    company: 'WordFlow',
    location: 'Remote',
    description: 'Create engaging blog posts and marketing copy.',
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'DesignStudio',
    location: 'Remote',
    description: 'Design creative visuals for digital campaigns.',
  },
];

const ApplicationForm = () => {
  const { jobId } = useParams();  // Get jobId from the URL
  const navigate = useNavigate();  // useNavigate for redirecting after submission
  const [job, setJob] = useState(null);

  // Fetch job details based on jobId
  useEffect(() => {
    const selectedJob = mockJobs.find((job) => job.id === parseInt(jobId));
    setJob(selectedJob);
  }, [jobId]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Application submitted for job:', job.title);
    navigate('/confirmation');  // Redirect to confirmation page after successful submission
  };

  if (!job) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="application-form">
      <h1>Apply for {job.title} at {job.company}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <StyledTextField
            label="Name"
            type="text"
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <StyledTextField
            label="Email"
            type="email"
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label>Cover Letter</label>
          <textarea
            required
            placeholder="Write a brief cover letter..."
            className="styled-textarea" 
          />
        </div>
        <div className="form-group">
          <label>Upload Resume</label>
          <input type="file" required />
        </div>
        <StyledButton type="submit">Submit Application</StyledButton>
      </form>
    </div>
  );
};

export default ApplicationForm;
