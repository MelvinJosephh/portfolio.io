import React from 'react';
import '../../Styles/ModalPages/FindandOverview.scss';

const Overview = () => {
  return (
    <div className="overview-page">
      <header className="header-section">
        <h1>Welcome to Freelancing with Aberrange</h1>
        <p>
          Discover rewarding work opportunities and grow your career with our supportive freelancing ecosystem.
        </p>
        <button className="cta-button">Join the Team</button>
      </header>

      <section className="why-aberrange">
        <h2>Why Aberrange?</h2>
        <ul>
          <li>🌍 Work with clients globally.</li>
          <li>📈 Earn competitive pay.</li>
          <li>⏰ Enjoy flexible work hours.</li>
          <li>💼 Build your professional portfolio.</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Create your profile.</li>
          <li>Browse job opportunities.</li>
          <li>Start working and get paid securely.</li>
        </ol>
      </section>

      <section className="testimonials">
        <h2>Success Stories</h2>
        <blockquote>
          "Aberrange helped me achieve my dream of working remotely while growing my skills."
        </blockquote>
        <cite>— Jane Doe, Freelancer</cite>
      </section>

      <footer className="cta-footer">
        <h2>Ready to get started?</h2>
        <button className="cta-button">Sign Up Now</button>
      </footer>
    </div>
  );
};

export default Overview;
