import React, { useState, useEffect } from "react";
import aberrange from "./assets/aberrange-logo-themed.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import { data, descriptions } from "../../../Models/hireTalentModel";
import { industriesData } from "../../../Models/industriesModel";
import { servicesData } from "../../../Models/servicesModel"; // Import your services model

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    hire: false,
    industries: false,
    services: false, // New state for services dropdown
  });
  const [selectedArea, setSelectedArea] = useState("Frontend");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setDropdownState((prevState) => ({
      hire: dropdownName === "hire" ? !prevState.hire : false,
      industries: dropdownName === "industries" ? !prevState.industries : false,
      services: dropdownName === "services" ? !prevState.services : false,
    }));
  };

  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <img src={aberrange} alt="Aberrange Logo" />
        </div>

        <div className={sidebar ? "nav-links-sidebar active" : "nav-links-sidebar"}>
          <ul onClick={() => setSidebar(false)}>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("industries")}
              >
                Industries
              </button>
              {dropdownState.industries && (
                <div className="dropdown">
                  <div className="column">
                    {industriesData.industries.map((industry) => (
                      <p key={industry}>{industry}</p>
                    ))}
                  </div>
                  <div className="column">
                    {industriesData.actions.map((action) => (
                      <p key={action.name}>
                        <Link to={action.link}>{action.name}</Link>
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    <button>
                      <Link to={industriesData.button.link}>
                        {industriesData.button.label}
                      </Link>
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li>
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("hire")}
              >
                Hire Talent
              </button>
              {dropdownState.hire && (
                <div className="dropdown">
                  <div className="column">
                    {Object.keys(data).map((area) => (
                      <p
                        key={area}
                        className={selectedArea === area ? "active" : ""}
                        onClick={() => setSelectedArea(area)}
                      >
                        {area}
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    {data[selectedArea]?.map((dev) => (
                      <p
                        key={dev}
                        onClick={() => setSelectedDeveloper(dev)}
                        className={selectedDeveloper === dev ? "active" : ""}
                      >
                        {dev}
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    <h3>{selectedDeveloper || selectedArea} Developer</h3>
                    <p>{descriptions[selectedArea]}</p>
                    <button>Hire {selectedDeveloper || selectedArea} Developer</button>
                  </div>
                </div>
              )}
            </li>
            <li>
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("services")}
              >
                Services
              </button>
              {dropdownState.services && (
                <div className="dropdown">
                  <div className="column">
                    {servicesData.engagementModels.map((service) => (
                      <p key={service.title}>
                        <Link to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
                          {service.title}
                        </Link>
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    {servicesData.categories.map((category) => (
                      <p key={category.title}>
                        <Link to={`/services/${category.title.toLowerCase().replace(/ /g, '-')}`}>
                          {category.title}
                        </Link>
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    <button>
                      <Link to="/services">View All Services</Link>
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/hire-developers">Hire Developers</Link>
            </li>
          </ul>
        </div>

        <button className="navbar-items-icon" onClick={() => setSidebar(!sidebar)}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
