import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../Styles/ModalPages/HireDevelopers.scss';
import categories from '../../Assets/data/skills/developersData';

const HireDevelopers = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  if (!showPage) return null;

  return (
    <div className="hire-developers-page">
   
      <div className="categories">
      <div className="header-section">
        <h3>Hire Developers</h3>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>

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
                  <li key={idx}>
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireDevelopers;
