import React from 'react';
import '../Styles/pages/Industries.scss';
import industriesData from '../Assets/data/IndustriesData';


const Industries = () => (
  <div className="industries">
    <h2>Industries We Serve</h2>
    <div className="industries-grid">
      {industriesData.map((industry) => (
        <div key={industry.name} className="industry-card">
          <div className="icon">
            <img src={industry.icon} alt={`${industry.name} icon`} />
          </div>
          <div className="content">
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="get-quote">
      <button onClick={() => window.location.href='/contact'} className="quote-button">Get a Quote</button>
    </div>
  </div>
);

Industries.propTypes = {};

Industries.defaultProps = {};

export default Industries;
