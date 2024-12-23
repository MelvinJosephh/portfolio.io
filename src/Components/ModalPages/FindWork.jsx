import React from 'react';
import '../../Styles/ModalPages/FindandOverview.scss';
import categories from '../../Assets/data/skills/developersData'; 

const FindWork = () => {
  return (
    <div className="find-work-page">
      <header className="header-section">
        <h1>Find Freelance Jobs You Love</h1>
        <p>
          Browse jobs posted at Aberrange, or create your free profile and get started immediately.
        </p>
        <button className="cta-button">Find Work</button>
      </header>

      <section className="job-categories">
        <h2>Explore Jobs by Category</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={`#${category.title.replace(/ /g, '-').toLowerCase()}`}>{category.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="remote-jobs">
        <h2>Explore Remote Jobs</h2>
        <p>
          Work from anywhere with Aberrange. Explore top-tier remote job opportunities tailored to your expertise.
        </p>
        <button className="cta-button">Browse Remote Jobs</button>
      </section>
    </div>
  );
};

export default FindWork;
