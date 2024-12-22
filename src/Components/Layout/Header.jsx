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

  const unifiedButton = (label, link) => (
    <button className="primary-btn">
      <Link to={link}>{label}</Link>
    </button>
  );

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
        {unifiedButton(items.button.label, items.button.link)}
      </div>
    </>
  );

  const renderContent = (items) => (
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
        {unifiedButton("View All Services", "/services")}
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
        {unifiedButton(`Hire ${selectedDeveloper || selectedArea}`, "/hire")}
      </div>
    </>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => setSidebar(false)}>
            <img src={aberrange} alt="Aberrange Logo" />
          </Link>
        </div>

        <div className={sidebar ? "nav-links-sidebar active" : "nav-links-sidebar"}>
          <ul>
            <li>
              <Dropdown
                title="Industries" onClick={() => setSidebar(false)}
                items={industriesData}
                renderContent={renderIndustriesContent}
              />
            </li>
            <li>
              <Dropdown
                title="Services" onClick={() => setSidebar(false)}
                items={servicesData}
                renderContent={renderContent}
              />
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setSidebar(false)} >Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setSidebar(false)} >Contact Us</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setSidebar(false)} >About Us</Link>
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
