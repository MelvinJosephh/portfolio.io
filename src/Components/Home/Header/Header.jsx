import React, { useState } from 'react';
import aberrange from "./assets/aberrange-logo-themed.png";
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  // Handling scroll event to toggle active class on the header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 200);
  });

  return (
    <>
      <header className="header">
        <div className="container flex">
          {/* Logo */}
          <div className="logo">
            <img src={aberrange} alt="Aberrange Logo" />
          </div>

          {/* Navigation */}
          <div className="nav">
            <ul className={sidebar ? "nav-links-sidebar active" : "nav-links"} onClick={() => setSidebar(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blogs'>Latest Blogs</Link></li>
              <li><Link to='/services'>Our Services</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>

              {/* Icon Links */}
              <li className="icon">
                <Link to="/about">
                  <WorkIcon className="HeaderIcon" />
                </Link>
                <GridViewIcon className="HeaderIcon" />
              </li>
            </ul>
          </div>

          {/* Menu Toggle Button for Mobile */}
          <button className="navbar-items-icon" onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
