import React from 'react';
import '../../Styles/layout/Branding.scss';
import brandingData from '../../Assets/data/BrandingData';

const Branding = () => {
  return (
    <section className="branding">
      <div className="container grid">
        {brandingData.map((value) => (
          <div className="box flex" key={value.id}>
            <div className="text">
              <h1>{value.id}</h1>
            </div>
            <div className="para">
              <h2>{value.heading}</h2>
              <p>{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branding;
