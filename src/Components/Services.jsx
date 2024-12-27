import React from 'react';
import ServicesData from "../Assets/data/ServicesData";
import '../Styles/components/Services.scss';

const Services = () => (
  <section className="services topMargin" id="Services">
    <div className="container">
      <div className="heading">
        <h3>Our SERVICES</h3>
        <h1>Interactive Services Offered</h1>
      </div>
      <div className="services-grid topMargin">
        {ServicesData.map((val, index) => (
          <div key={index} className="service-box">
            <div className="service-img">
              <img src={val.cover} alt={val.title} />
            </div>
            <div className="service-text">
              <h2>{val.title}</h2>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
