import React from "react";
import "../../Styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="box">
          <p>Connect with me and get the best for your firm</p>
          <div className="socialIcons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-dribbble"></i>
          </div>
        </div>

        <div className="box">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>News</li>
            <li>Contact</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className="box">
          <h2>Recent Posts</h2>
          <div className="post">
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
          <div className="post">
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
          <div className="post">
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
        </div>

        <div className="box">
          <h2>Get in Touch</h2>
          <div className="icon">
            <i className="fa fa-map-marker"></i>
            <label>Location: 87 Division, Kikuyu Sub, Kiambu County, Nairobi, Kenya</label>
          </div>
          <div className="icon">
            <i className="fa fa-phone"></i>
            <label>+254702035351</label>
          </div>
          <div className="icon">
            <i className="fa fa-envelope"></i>
            <label>Email: Essayacademy@gmail.com</label>
          </div>
        </div>
      </section>

      <section className="legal">
        <p>Copyright @2023. All rights reserved.</p>
        <label>
          Designed and Developed by <span>MelvinDev</span>
        </label>
      </section>
    </footer>
  );
};

export default Footer;
