import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Dropdown.scss";

const Dropdown = ({ title, items = [], renderContent, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const renderSections = () =>
    items.map(({ title, type, items }, idx) => (
      <div key={idx} className="dropdown-section">
        {title && <div className="section-title">{title}</div>}
        <ul className={type === "simple" ? "simple-list" : "subcategory-list"}>
          {items.map(({ label, link }, itemIdx) => (
            <li key={itemIdx} className="subcategory-item">
              <Link to={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    ));

  return (
    <li className="dropdown-wrapper" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {renderContent ? renderContent(items) : <div className="dropdown-sections">{renderSections()}</div>}
        </div>
      )}
    </li>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  renderContent: PropTypes.func,
  onClose: PropTypes.func,
};

export default Dropdown;
