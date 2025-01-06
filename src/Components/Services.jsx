import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // To track page changes
import ServicesData from "../Assets/data/ServicesData";
import "../Styles/components/Services.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
    <section className="services topMargin" id="Services">
      <div className="container">
        <div className="heading" data-aos="fade-down">
          {/* <h3>Our SERVICES</h3> */}
          <h1>Interactive Services Offered</h1>
        </div>
        <div className="services-grid topMargin">
          {ServicesData.map((val, index) => (
            <div
              key={index}
              className="service-box"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Adding delay to animate services in sequence
            >
              <div className="service-img" data-aos="zoom-in">
                <img src={val.cover} alt={val.title} />
              </div>
              <div className="service-text" data-aos="fade-up">
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
              <Link to="/get-quote" className="primary-btn">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
