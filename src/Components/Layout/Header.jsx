import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import aberrange from "../../Assets/logo/aberrange-logo-themed.png";
import Dropdown from "../Dropdown";
import "../../Styles/layout/Header.scss";
import { data, descriptions } from "../../Models/hireTalentModel";
import { industriesData } from "../../Models/industriesModel";
import { servicesData } from "../../Models/servicesModel";
import companiesData from "../../Assets/data/companiesData";
import talentData from "../../Assets/data/talentData";
import { useSidebar } from "../Layout/useSidebar";

const Header = () => {
  const { sidebar, toggleSidebar } = useSidebar();
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedArea, setSelectedArea] = useState("Frontend");
  const [showDevAndButton, setShowDevAndButton] = useState(false);

  // Unified button rendering
  const unifiedButton = (label, link) => (
    <button className="primary-btn">
      <Link to={link}>{label}</Link>
    </button>
  );

  // Render Hire Content with toggle behavior for mobile/tablet
  const renderHireContent = () => (
    <div className="column">
      {/* Show the area list only if no developer is selected */}
      {!showDevAndButton ? (
        Object.keys(data).map((area) => (
          <p
            key={area}
            className={selectedArea === area ? "active" : ""}
            onClick={() => {
              setSelectedArea(area);
              setShowDevAndButton(true); // Show developer and button when an area is clicked
            }}
          >
            {area}
          </p>
        ))
      ) : (
        <>
          {/* Replace area with the selected developer and the button */}
          <div className="column">
            {data[selectedArea]?.map((dev) => (
              <p
                key={dev}
                onClick={() => {
                  setSelectedDeveloper(dev);
                  setShowDevAndButton(true); // Ensure dev and button columns are shown
                }}
                className={selectedDeveloper === dev ? "active" : ""}
              >
                {dev}
              </p>
            ))}
          </div>
          <div className="column">
            <h3>{selectedDeveloper || selectedArea} Developer</h3>
            <p>{descriptions[selectedArea]}</p>
            {unifiedButton(`Hire ${selectedDeveloper || selectedArea}`, "/hire-talent/step2")}
          </div>
          <button 
            className="reset-selection-btn"
            onClick={() => {
              setSelectedDeveloper(null); 
              setShowDevAndButton(false); // Reset to areas
            }}
          >
            Reset Selection
          </button>
        </>
      )}
    </div>
  );

  // Render content dynamically for various dropdowns
  const renderCompaniesContent = (items) => renderContent(items, "companies");
  const renderTalentContent = (items) => renderContent(items, "talent");
  const renderIndustriesContent = (items) => (
    <div className="column">
      {items.actions.map((action) => (
        <p key={action.name}>
          <Link to={action.link}>{action.name}</Link>
        </p>
      ))}
      {unifiedButton(items.button.label, items.button.link)}
    </div>
  );
  const renderServicesContent = (items) => (
    <div className="column">
      {items.engagementModels.map((service) => (
        <p key={service.title}>
          <Link to={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}>
            {service.title}
          </Link>
        </p>
      ))}
      {unifiedButton("View All Services", "/services")}
    </div>
  );

  // Common render function
  const renderContent = (items, type) => (
    <div className="column">
      {items.map((item) => (
        <p key={item.name || item.title}>
          <Link to={item.link || `/services/${item.title.toLowerCase().replace(/ /g, "-")}`}>
            {item.name || item.title}
          </Link>
        </p>
      ))}
      {type === "industries" && unifiedButton("View All Services", "/services")}
    </div>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => toggleSidebar(false)}>
            <img src={aberrange} alt="Aberrange Logo" />
          </Link>
        </div>
        <div className={sidebar ? "nav-links-sidebar active" : "nav-links-sidebar"}>
          <ul>
            <li>
              <Dropdown title="For Companies" items={companiesData} renderContent={renderCompaniesContent} onClose={() => toggleSidebar(false)} />
            </li>
            <li>
              <Dropdown title="For Talent" items={talentData} renderContent={renderTalentContent} onClose={() => toggleSidebar(false)} />
            </li>
            <li>
              <Link to="/about" onClick={() => toggleSidebar(false)}>What we do</Link>
            </li>
            <li>
              <Dropdown title="Industries" items={industriesData} renderContent={renderIndustriesContent} onClose={() => toggleSidebar(false)} />
            </li>
            <li>
              <Dropdown title="Services" items={servicesData} renderContent={renderServicesContent} onClose={() => toggleSidebar(false)} />
            </li>
            <li>
              <Dropdown title="Hire Talent" items={industriesData} renderContent={renderHireContent} onClose={() => toggleSidebar(false)} />
            </li>
          </ul>
        </div>
        <button className="navbar-items-icon" onClick={() => toggleSidebar(!sidebar)}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
