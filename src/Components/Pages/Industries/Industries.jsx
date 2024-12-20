import React from 'react';
import './Industries.scss';

const industriesData = [
  {
    name: 'BFSI',
    icon: '/assets/icons/bfsi.svg',
    description: 'Innovative solutions for banking, financial services, and insurance sectors, enhancing security and efficiency.',
  },
  {
    name: 'Oil & Gas',
    icon: '/assets/icons/oil-gas.svg',
    description: 'Streamlining operations and safety in the oil and gas sector with cutting-edge IoT and AI technology.',
  },
  {
    name: 'Healthcare',
    icon: '/assets/icons/healthcare.svg',
    description: 'Enhancing patient care with IoT solutions and real-time data monitoring.',
  },
  {
    name: 'Real Estate & Construction',
    icon: '/assets/icons/real-estate.svg',
    description: 'Empowering smart buildings with integrated automation and IoT-based resource management.',
  },
  {
    name: 'Logistics',
    icon: '/assets/icons/logistics.svg',
    description: 'Optimizing supply chains and fleet management with real-time tracking and predictive analytics.',
  },
  {
    name: 'Fintech',
    icon: '/assets/icons/fintech.svg',
    description: 'Bringing innovation to financial technology with solutions for faster, safer, and more flexible transactions.',
  },
  {
    name: 'Manufacturing',
    icon: '/assets/icons/manufacturing.svg',
    description: 'Optimizing production with automated systems and IoT integration.',
  },
  {
    name: 'Retail',
    icon: '/assets/icons/retail.svg',
    description: 'Delivering personalized customer experiences with advanced analytics.',
  },
];

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
