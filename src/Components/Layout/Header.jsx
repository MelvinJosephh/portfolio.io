import React, { useState } from "react";
import aberrange from "../../Assets/logo/aberrange-logo-themed.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "../Dropdown";
import '../../Styles/layout/Header.scss'
import { data, descriptions } from "../../Models/hireTalentModel";
import { industriesData } from "../../Models/industriesModel";
import { servicesData } from "../../Models/servicesModel";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Frontend");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const renderIndustriesContent = (items) => (
    <>
      <div className="column">
        {items.industries.map((industry) => (
          <p key={industry}>{industry}</p>
        ))}
      </div>
      <div className="column">
        {items.actions.map((action) => (
          <p key={action.name}>
            <Link to={action.link}>{action.name}</Link>
          </p>
        ))}
      </div>
      <div className="column">
        <button>
          <Link to={items.button.link}>{items.button.label}</Link>
        </button>
      </div>
    </>
  );

  const renderHireContent = () => (
    <>
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
        <button>
          Hire {selectedDeveloper || selectedArea} Developer
        </button>
      </div>
    </>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={aberrange} alt="Aberrange Logo" />
          </Link>
        </div>

        <div className={sidebar ? "nav-links-sidebar active" : "nav-links-sidebar"}>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
            <Dropdown
              title="Industries"
              items={industriesData}
              renderContent={renderIndustriesContent}
            />
            </li>
            <li>
            <Dropdown
              title="Services"
              items={servicesData}
              renderContent={(items) => (
                <>
                  <div className="column">
                    {items.engagementModels.map((service) => (
                      <p key={service.title}>
                        <Link to={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}>
                          {service.title}
                        </Link>
                      </p>
                    ))}
                  </div>
                  <div className="column">
                    {items.categories.map((category) => (
                      <p key={category.title}>
                        <Link to={`/services/${category.title.toLowerCase().replace(/ /g, "-")}`}>
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
                </>
              )}
            />
            </li>
          
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Dropdown
              title="Hire Talent"
              renderContent={renderHireContent}
            />
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
