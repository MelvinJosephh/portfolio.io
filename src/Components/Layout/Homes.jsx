import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/layout/Home.scss";
import companiesData from "../../Assets/data/companiesData";

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
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${data.cover})`,
      }}
    >
      <div className="content-wrapper">
        <div className="content" data-aos="fade-up">
          <h1 className="brand-promise" data-aos="fade-down">
            {currentWord}
            <span className="solutions"> Solutions</span>
          </h1>
          <p className="intro" data-aos="fade-up">
            At AberRange, we redefine innovation with cutting-edge solutions in technology, branding, and more. Let’s shape your future together.
          </p>

          <div className="cta-container" data-aos="zoom-in">
            <Link className="cta-btn" to="/our-solutions">
              Explore Our Solutions
            </Link>
          </div>
        </div>

        {/* Dropdown & Proceed Section */}
        <div className="dropdown-container" data-aos="fade-up">
          <label htmlFor="serviceDropdown" className="prompt">
            I would like to...
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
            <button className="proceed-btn" onClick={handleProceed}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
