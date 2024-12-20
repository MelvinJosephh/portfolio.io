import React from "react";
import "./Home.scss"; 

const Home = () => {
  const data = {
    cover: "./images/aberrange-animate.gif", 
  };

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${data.cover})`,
      }}
    >
      <div className="content">
        <h1 className="welcome-text">
          Welcome to <span>AberRange</span>
        </h1>
        <p className="intro">
          Empowering a smarter, connected world with advanced tech solutions
          that simplify and enhance life and business.
        </p>
        <button className="primary-btn">Discover Our Solutions</button>
      </div>
    </section>
  );
};

export default Home;
