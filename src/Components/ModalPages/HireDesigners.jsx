// src/Pages/HireDesigners.jsx

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import hireDesignersData from '../../Assets/data/skills/designersData';
import '../../Styles/ModalPages/HireDesigners.scss';

const HireDesigners = () => {
  const [showPage, setShowPage] = useState(true);

  const closePage = () => {
    setShowPage(false);
  };

  if (!showPage) return null;

  return (
    <div className="hire-designers-page">
      <div className="header">
        <h1>Hire Designers</h1>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>
      
      <div className="categories">
        {hireDesignersData.map((category) => (
          <div key={category.id} className="category">
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireDesigners;
