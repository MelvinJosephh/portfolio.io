import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/layout/Home.scss";
import companiesData from "../../Assets/data/companiesData";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const data = {
    cover: "./images/aberrange-animate.gif",
  };

  const handleProceed = () => {
    if (selectedOption) {
      navigate(selectedOption);
    } else {
      alert("Please select an option before proceeding!");
    }
  };

  const [currentWord, setCurrentWord] = useState("Smart");

  useEffect(() => {
    const words = ["Smart", "Simple", "Seamless"];
    let wordIndex = 0;

    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[wordIndex]);

      // Trigger AOS to refresh on word change
      AOS.refresh(); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${data.cover})` }}
    >
      <div className="content-wrapper">
        <div className="content" data-aos="zoom-out-down">
          <h1 className="brand-promise" data-aos="fade-down">
            <span
              data-aos="fade-down-right"
              data-aos-duration="3000"

              key={currentWord} 
            >
              {currentWord}
            </span>
            <span className="solutions"> Solutions</span>
          </h1>
          <p className="intro" data-aos="fade-up">
            At AberRange, we redefine innovation with cutting-edge solutions in
            technology, branding, and more. Let’s shape your future together.
          </p>

          <div className="cta-container" data-aos="zoom-in">
            <Link className="primary-btn" to="/our-solutions">
              Explore Our Solutions
            </Link>
          </div>
        </div>

        <div className="dropdown-container" data-aos="zoom-in-right">
          <label htmlFor="serviceDropdown" className="prompt">
            What would you like to do today?
          </label>
          <div className="dropdown-and-proceed">
            <select
              id="serviceDropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="dropdown"
            >
              <option value="" disabled>
                Hire Academic Writer
              </option>
              {companiesData.map((company) => (
                <option key={company.id} value={company.link}>
                  {company.name}
                </option>
              ))}
            </select>
            <button className="cta-btn" onClick={handleProceed}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
