import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../Styles/ModalPages/HireProjectManagers.scss';
import categories from '../../Assets/data/skills/projectManagersData';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing

const HireProjectManagers = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);  // State to store the selected project manager
  const navigate = useNavigate();  // Hook for navigation

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);  // Open the modal with the selected project manager item
  };

  const closeItemDetail = () => {
    setActiveItem(null);  // Close the modal
  };

  const handleActionClick = () => {
    closeItemDetail();  // Close the item detail modal
    navigate('/hire-project-manager/step2');  // Navigate to the next step in the hiring process
  };

  if (!showPage) return null;

  return (
    <div className="hire-project-managers-page">
      <div className="header-section">
        <h1>Hire Project Managers</h1>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div
              className="category-header"
              onClick={() => toggleCategory(index)}
            >
              <h2>{category.title}</h2>
              <span>{activeCategory === index ? '-' : '+'}</span>
            </div>
            {activeCategory === index && (
              <ul className="category-items">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleItemClick(item)}  // Open the modal when an item is clicked
                  >
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Show the modal when an item is selected */}
      {activeItem && (
        <div className="item-detail-modal">
          <div className="modal-content">
            <CloseIcon className="close-icon" onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected Project Manager role will be shown here.</p>
            <button className="primary-btn" onClick={handleActionClick}>
              Hire Project Manager
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireProjectManagers;
