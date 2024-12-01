import React, { useState, useEffect, useRef } from "react";
import aberrange from "./assets/aberrange-logo-themed.png";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import { data, descriptions } from "../../../Models/hireTalentModel";
import { industriesData } from "../../../Models/industriesModel";
import { servicesData } from "../../../Models/servicesModel";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks the currently open dropdown
  const [selectedArea, setSelectedArea] = useState("Frontend");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const location = useLocation();
  const dropdownRef = useRef(null);

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName); // Opens the specified dropdown
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpenDropdown(null); // Closes all dropdowns
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null); // Close dropdowns when route changes
    setSidebar(false);
  }, [location]);

  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src={aberrange} alt="Aberrange Logo" />
          </Link>
        </div>

        <div
          className={
            sidebar ? "nav-links-sidebar active" : "nav-links-sidebar"
          }
        >
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("industries")}
              ref={dropdownRef}
            >
              <button className="dropdown-button">Industries</button>
              {openDropdown === "industries" && (
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
            <li
              onMouseEnter={() => handleMouseEnter("services")}
              ref={dropdownRef}
            >
              <button className="dropdown-button">Services</button>
              {openDropdown === "services" && (
                <div className="dropdown">
                  <div className="column">
                    {servicesData.engagementModels.map((service) => (
                      <p key={service.title}>
                        <Link
                          to={`/services/${service.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                        >
                          {service.title}
                        </Link>
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    {servicesData.categories.map((category) => (
                      <p key={category.title}>
                        <Link
                          to={`/services/${category.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                        >
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
            <li
              onMouseEnter={() => handleMouseEnter("hire")}
              ref={dropdownRef}
            >
              <button className="dropdown-button">Hire Talent</button>
              {openDropdown === "hire" && (
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
                        className={
                          selectedDeveloper === dev ? "active" : ""
                        }
                      >
                        {dev}
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    <h3>{selectedDeveloper || selectedArea} Developer</h3>
                    <p>{descriptions[selectedArea]}</p>
                    <button>
                      Hire {selectedDeveloper || selectedArea} Developer
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        <button
          className="navbar-items-icon"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};



export default Header;
