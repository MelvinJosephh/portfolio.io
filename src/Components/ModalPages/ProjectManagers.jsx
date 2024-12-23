import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../Styles/ModalPages/HireProjectManagers.scss';
import categories from '../../Assets/data/skills/projectManagersData';

const HireProjectManagers = () => {
  const [showPage, setShowPage] = useState(true);

  const closePage = () => {
    setShowPage(false);
  };

  if (!showPage) return null;

  return (
    <div className="hire-project-managers-page">
      <div className="header">
        <h1>Hire Project Managers</h1>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
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

export default HireProjectManagers;
