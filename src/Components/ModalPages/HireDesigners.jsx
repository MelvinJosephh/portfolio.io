import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import hireDesignersData from '../../Assets/data/skills/designersData';
import '../../Styles/ModalPages/HireDesigners.scss';

const HireDesigners = () => {
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
    <div className="hire-designers-page">
      <div className="categories">
        <div className="header">
          <h1>Hire Designers</h1>
          <CloseIcon className="close-icon" onClick={closePage} />
        </div>

        {hireDesignersData.map((category, index) => (
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

export default HireDesigners;
