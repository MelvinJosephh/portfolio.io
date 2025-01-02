import React, { useEffect } from 'react';
import '../../Styles/layout/Branding.scss';
import brandingData from '../../Assets/data/BrandingData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom'; // To track page changes

const Branding = () => {
  const location = useLocation(); // Get the current location (route)

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,
      once: true, // Ensure animation triggers once per element
    });

    // Refresh AOS animations whenever the route changes
    AOS.refresh();

    return () => {
      // Refresh AOS every time the component unmounts (if needed)
      AOS.refresh();
    };
  }, [location]); // Dependency on location to trigger refresh on route change

  return (
    <section className="branding">
      <div className="branding-container">
        {brandingData.map((value, index) => (
          <div
            className="box"
            key={value.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Adding delay to animate boxes in sequence
          >
            <div className="text" data-aos="zoom-in">
              <h1>{value.id}</h1>
            </div>
            <div className="para" data-aos="fade-up">
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
