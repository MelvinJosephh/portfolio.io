import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // To get jobId and navigate
import '../../Styles/Freelancers/JobDetails.scss';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Build and maintain user interfaces for web applications.',
    responsibilities: ['Develop UI components', 'Collaborate with designers', 'Write clean code'],
    qualifications: ['Bachelor\'s in Computer Science', '3+ years of experience in Frontend Development'],
  },
  {
    id: 2,
    title: 'Content Writer',
    company: 'WordFlow',
    location: 'Remote',
    description: 'Create engaging blog posts and marketing copy.',
    responsibilities: ['Write blog posts', 'Create social media content', 'Collaborate with marketing'],
    qualifications: ['Excellent writing skills', 'Experience with SEO'],
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'DesignStudio',
    location: 'Remote',
    description: 'Design creative visuals for digital campaigns.',
    responsibilities: ['Design graphics for campaigns', 'Collaborate with creative teams', 'Prepare assets for digital platforms'],
    qualifications: ['Proficiency in Adobe Creative Suite', 'Portfolio required'],
  },
];

const JobDetails = () => {
  const { jobId } = useParams();  // Get jobId from the URL
  const navigate = useNavigate();  // Navigate to the application form

  const [job, setJob] = useState(null);

  useEffect(() => {
    const selectedJob = mockJobs.find((job) => job.id === parseInt(jobId));
    setJob(selectedJob);
  }, [jobId]);

  const handleProceedToApply = () => {
    navigate(`/apply/${jobId}`);  // Navigate to the application form page
  };

  if (!job) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="job-details-page">
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        {job.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>

      <h3>Qualifications:</h3>
      <ul>
        {job.qualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>

      <button onClick={handleProceedToApply} className="cta-button">
        Proceed to Apply
      </button>
    </div>
  );
};

export default JobDetails;
