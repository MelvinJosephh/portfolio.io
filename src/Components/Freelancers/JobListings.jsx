import React from 'react';
import { useNavigate } from 'react-router-dom';  
import '../../Styles/ModalPages/JobListings.scss';

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

const JobListings = () => {
  const navigate = useNavigate();  // useNavigate hook to navigate to the job details page

  const handleApplyNow = (jobId) => {
    navigate(`/job-details/${jobId}`);  // Navigate to the JobDetails component
  };

  return (
    <div className="job-listings-page">
      <header>
        <h1>Remote Job Opportunities</h1>
      </header>
      <section>
        {mockJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button
              className="apply-button"
              onClick={() => handleApplyNow(job.id)}  
            >
              Apply Now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobListings;
